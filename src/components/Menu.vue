<script lang="ts" setup>

const router = useRoute()
const routerMap = reactive({
  '/': false,
  '/wishes': false,
})
const curPath = watch(() => router.path, (cur, prev) => {
  routerMap[cur] = true
//   console.log(routerMap)
}, { immediate: true })
</script>
<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#ffffff"
    text-color="#000"
    active-text-color="#ffd04b"
    router
  >
    <div ml-20vw />
    <el-menu-item
      flex-col index="/wishes"
      class="items-center cursor-pointer border-opacity-1 dark:border-opacity-1"
    >
      Wish大厅
      <a v-show="routerMap['/wishes']" class="w-110% rounded-[1px] border bg-gray-8 dark:bg-white" />
    </el-menu-item>
    <el-menu-item index="3" disabled>
      Info
    </el-menu-item>
    <el-menu-item flex flex-col index="5">
      Orders
      <!-- <a v-show="routerMap['/wishes']" class="w-110% rounded-[1px] border bg-gray-8 dark:bg-white" /> -->
    </el-menu-item>
    <el-menu-item index="4">
      <!-- <div></div> -->
    </el-menu-item>
    <el-avatar justify-self-end mt-auto mb-auto ml-auto mr-20vw src="https://images.unsplash.com/photo-1649146127710-18501f16e561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80" />
  </el-menu>
</template>
