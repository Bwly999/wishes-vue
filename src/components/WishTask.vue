<script lang="ts" setup>
const props = defineProps<{
  taskList: Array<any>
}>()
</script>
<template>
  <div flex w-full h-full justify-start flex-wrap w-100vh h-20vh border-gray-500 border>
    <TaskCard v-for="task in props.taskList" :key="task" :task="task" w-25vh m-4>
      {{ task.title }}
    </TaskCard>
    <TaskCard v-for="task in props.taskList" :key="task" :task="task" w-25vh m-4>
      {{ task.title }}
    </TaskCard>
  </div>
</template>
