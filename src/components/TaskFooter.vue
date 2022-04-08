<script lang="ts" setup>
import { getComponentByTaskType } from '~/composables/typeColor'
export interface TaskInfo {
  type: string
  userId: string
  userName: string
  userAvatar: string
}
const props = defineProps<{
  taskInfo: TaskInfo
}>()
const { type } = props.taskInfo
console.log(type)
console.log(getComponentByTaskType(type))
</script>
<template>
  <div flex content-center pb-2 items-center>
    <el-image rounded-full :src="taskInfo.userAvatar" w-10 h-10 mr-2 />
    <div flex>
      <p mr-1>
        BY
      </p>
      <p font-bold text-black-100>
        {{ taskInfo.userName }}
      </p>
    </div>
    <component :is="getComponentByTaskType(taskInfo.type)" :type-name="taskInfo.type" ml-auto w-10 h-10 />
  </div>
</template>
