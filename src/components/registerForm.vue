<script lang="ts">
import { useRouter } from 'vue-router'
import { reactive, toRefs } from '@vue/reactivity'
import { useUserStore } from '~/stores/user'
import { register } from '~/api/login'
export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const captchaTip = ref<string>('获取验证码')
    const canSendCaptcha = ref<boolean>(false)
    const userData = reactive({
      username: '1',
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
          alert('登录失败')
        })
      },
      getCaptcha: () => {
        const data = {
          userName: userData.username,
          password: userData.password,
          email: userData.email,
        }
        register(data).then(() => {
          ElMessage({
            message: '获取成功',
            type: 'success',
          })
        }).catch(() => {
          ElMessage.error('获取验证码失败')
        })
      },
    })

    return {
      ...toRefs(userData),
      captchaTip,
      canSendCaptcha,
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
      <el-button class="!bg-blue-500 !text-white-100 !rounded-xl !border-none" type="primary" text="" :disabled="!canSendCaptcha" @click="getCaptcha">
        {{ captchaTip }}
      </el-button>
    </div>
    <div class="mb2" @click="register1">
      <a class="act-but submit" style="color: #FFFFFF">注册</a>
    </div>
  </el-form>
  <!-- <el-form>
    <el-input class="u_user">
      用户名
    </el-input>
    <el-input>用户名 </el-input>
  </el-form> -->
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
