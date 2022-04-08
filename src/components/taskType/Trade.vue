<script lang="ts" setup>
// import { getCololByTaskType } from '~/composables/typeColor'
defineProps<{ typeName: string }>()
// const color = getCololByTaskType(props.typeName)!
</script>
<template>
  <p rounded-full font-bold text-white-0 bg-blue-400 text-center pt-2 pb-2>
    {{ typeName }}
  </p>
</template>
