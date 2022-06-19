<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { reactive } from '@vue/reactivity'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const router = useRouter()
const userData = reactive({
  username: '1',
  password: '',
  gi: 'd',
  loginFunc: 'UserLogin',
})

const login = () => {
  userStore.login(userData.username, userData.password).then(() => {
    router.push('/wishes')
  }).catch((e) => {
    alert('登录失败')
  })
}
</script>

<template>
  <form action="#" name="f" method="post">
    <div class="input_outer">
      <span class="u_user" /><input v-model="userData.username" class="text" name="logname" style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
    </div><div class="input_outer">
      <span class="us_uer" /><input v-model="userData.password" class="text" name="logpass" style="color: #FFFFFF !important;" type="password" placeholder="请输入密码">
    </div><div class="mb2" @click="login">
      <a class="act-but submit" style="color: #FFFFFF">登录</a>
    </div>
  </form>
</template>

<style scoped src="~/styles/login/demo.css"></style>
<style scoped src="~/styles/login/component.css"></style>
