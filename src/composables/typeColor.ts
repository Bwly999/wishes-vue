import Trade from '~/components/taskType/Trade.vue'
import Solution from '~/components/taskType/Solution.vue'

const colorMap: Map<string, string> = new Map([
  ['解答', 'bg-blue-400'],
  ['交易', 'bg-blue-300'],
  ['default', '#1890ff'],
])
export function getCololByTaskType(typeName: string) {
  return colorMap.get(typeName) || colorMap.get('default')
}

export const componentMap: Map<string, any> = new Map([
  ['解答', Solution],
  ['交易', Trade],
  ['default', Trade],
])
export function getComponentByTaskType(typeName: string) {
  return componentMap.get(typeName) || componentMap.get('default')
}
