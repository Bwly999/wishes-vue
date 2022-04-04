import request from '~/utils/request'

export function login(username: string, password: string) {
  const data = {
    username,
    password,
    scope: 'all',
    grant_type: 'password',
    client_id: 'app',
  }
  return request({
    url: '/user/oauth/token',
    method: 'post',
    params: data,
  })
}

export function loginUp(data: any) {
  return request({
    url: '/user/add',
    method: 'post',
    data,
  })
}
