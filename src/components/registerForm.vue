<script lang="ts">
import { useRouter } from 'vue-router'
import { reactive, toRefs } from '@vue/reactivity'
import { useUserStore } from '~/stores/user'
import { register as registerApi, verifyCaptcha } from '~/api/login'
export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const canSendCaptcha = ref<boolean>(true)
    const captchaTime = ref(0)
    const userData = reactive({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      captcha: '',
      gi: 'd',
      loginFunc: 'UserLogin',
      login: () => {
        userStore.login(userData.username, userData.password).then(() => {
          router.push('/wish')
        }).catch(() => {
          ElMessage.error('登录失败')
        })
      },
      getCaptcha: () => {
        const data = {
          userName: userData.username,
          password: userData.password,
          email: userData.email,
        }
        registerApi(data).then(() => {
          ElMessage({
            message: '获取成功',
            type: 'success',
          })
          canSendCaptcha.value = false
          captchaTime.value = 60
          const captchaWait = setInterval(() => {
            captchaTime.value--
            if (captchaTime.value <= 0) {
              clearInterval(captchaWait)
              canSendCaptcha.value = true
            }
          }, 1000)
        }).catch(() => {
          ElMessage.error('获取验证码失败')
        })
      },
      register: () => {
        const data = {
          userName: userData.username,
          password: userData.password,
          email: userData.email,
          captcha: userData.captcha,
        }
        verifyCaptcha(data).then(() => {
          ElMessage({
            message: '注册成功',
            type: 'success',
          })
          router.push('/login')
        }).catch(() => {
          ElMessage.error('注册失败')
        })
      },
    })

    return {
      ...toRefs(userData),
      canSendCaptcha,
      captchaTime,
    }
  },
}
</script>

<template>
  <el-form>
    <div class="input_outer">
      <span i-carbon-user class="us_uer" />
      <el-input v-model="username" class="text" type="text" placeholder="请输入账户" />
    </div>
    <div class="input_outer">
      <span i-carbon:password class="us_uer" />
      <el-input v-model="password" class="text" type="password" placeholder="请输入密码" show-password />
    </div>
    <div class="input_outer">
      <span i-carbon:password class="us_uer" />
      <el-input v-model="confirmPassword" class="text" type="password" placeholder="确认密码" show-password />
    </div>
    <div class="input_outer">
      <span i-carbon:email class="us_uer" />
      <el-input v-model="email" class="text" placeholder="邮箱" />
    </div>
    <div flex justify-between class="mt-4">
      <el-input v-model="captcha" class="!border-gray-500 !w-20vh" placeholder="请输入验证码" />
      <el-button v-show="canSendCaptcha" class="!rounded-xl" type="primary" text="" @click="getCaptcha">
        获取验证码
      </el-button>
      <el-button v-show="!canSendCaptcha" class="!rounded-xl" type="primary">
        {{ captchaTime }}秒后重新获取
      </el-button>
    </div>
    <div class="mb2" @click="register">
      <a class="act-but submit" style="color: #FFFFFF">注册</a>
    </div>
  </el-form>
</template>

<style scoped src="~/styles/login/demo.css"></style>
<style scoped src="~/styles/login/component.css"></style>
<style scoped>
.input_outer:deep() .el-input__inner {
    background-color: unset !important;
    box-shadow: unset !important;
    /* color: rgba(254, 226, 226, var(--un-text-opacity)); */
    --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}
</style>
