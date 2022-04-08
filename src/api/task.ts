import request from '~/utils/request'

export function listTask(query: any) {
  return request({
    url: '/task/tasks',
    method: 'get',
    params: query,
  })
}
