<script lang="ts">
import { useRouter } from 'vue-router'
import { reactive, toRefs } from '@vue/reactivity'
import { useUserStore } from '~/stores/user'
export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const userData = reactive({
      username: '1',
      password: '',
      gi: 'd',
      loginFunc: 'UserLogin',
      login: () => {
        userStore.login(userData.username, userData.password).then(() => {
          router.push('/wish')
        }).catch(() => {
          alert('登录失败')
        })
      },
    })

    return {
      ...toRefs(userData),
    }
  },
}
</script>

<template>
  <div class=" demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas" />
        <div class="logo_box">
          <h2 align="center">
            Achieve Your Wishes
          </h2>
          <form action="#" name="f" method="post">
            <div class="input_outer">
              <span class="u_user" />
              <input
                v-model="username" name="logname" class="text" style="color: #FFFFFF !important" type="text"
                placeholder="请输入账户"
              >
            </div>
            <div class="input_outer">
              <span class="us_uer" />
              <input
                v-model="password" name="logpass" class="text" style="color: #FFFFFF !important;"
                type="password" placeholder="请输入密码"
              >
            </div>
            <div class="mb2" @click="login">
              <a class="act-but submit" style="color: #FFFFFF">
                登录
              </a>
            </div>
            <div align="center">
              <a align="center" style="color:#ffffcc">
                还没有帐号？点击注册</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="~/styles/login/demo.css"></style>
<style scoped src="~/styles/login/component.css"></style>
