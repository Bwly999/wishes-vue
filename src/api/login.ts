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

export function register(data: any) {
  return request({
    url: '/user/users',
    method: 'post',
    data,
  })
}

export function verifyCaptcha(data: any) {
  return request({
    url: '/user/users/captcha',
    method: 'post',
    data,
  })
}
