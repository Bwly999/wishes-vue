<script lang="ts" setup>
import type { TaskInfo } from './TaskFooter.vue'
import TaskFooter from './TaskFooter.vue'
const props = defineProps<{
  task: any
}>()
const taskInfo: TaskInfo = {
  type: props.task.type,
  userId: '123',
  userName: props.task.initiatorName,
  userAvatar: 'https://images.unsplash.com/photo-1649019612117-bc9b0cebdaa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
}
</script>
<template>
  <el-card class="!rounded-xl !p-0">
    <el-image src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=&quot;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=&quot;rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80&quot;&quot;" />
    <div flex justify-evenly content-center mt-5 p-0>
      <div i-carbon:logo-twitter bg-green-900 scale-120 />
      <p font-bold text-xl>
        {{ task.title }}
      </p>
    </div>
    <el-divider m-2="!" />
    <div>
      <p font-bold>
        {{ task.description }}
      </p>
    </div>
    <!-- <div class="bg-gradient-to-r from-red-400 to-blue-500 flex flex-col justify-center">
      <div class="inset-0 bg-gradient-to-r from-red-400 to-blue-500 shadow-lg sm:rounded-3xl">
        <el-card class="bg-white shadow-lg sm:rounded-3xl m-10">
          <el-image :src="task.imageUrl" />
          <div class="max-w-md mx-auto">
            <p class="font-extrabold text-green-500">
              欢迎
            </p>
            <el-divider />
            <div class="text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <div class="text-base leading-6 font-bold sm:text-lg sm:leading-7 flex">
                <el-button class="w-1/2 mt-2 flex items-center justify-center !bg-green-200 text-black border border-black">
                  借阅
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div> -->
    <el-divider />
    <TaskFooter :task-info="taskInfo" />
  </el-card>
</template>

<style scoped>
.el-card:deep() .el-card__body {
    padding: 0px;
}
</style>
