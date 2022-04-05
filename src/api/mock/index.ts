import Mock from 'mockjs'
const loginData = {
  errno: 0,
  errmsg: '成功',
  data: {
    access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxIiwic2NvcGUiOlsiYWxsIl0sImV4cCI6MTY0ODMwMTY1MiwidXNlck5hbWUiOiIxIiwidXNlcklkIjoxOSwiYXV0aG9yaXRpZXMiOlsibWF3Il0sImp0aSI6ImFlY2Q5MDk3LTEyMGEtNDY2Mi05MzI1LTM4MjVlOWM2Y2Y3NCIsImNsaWVudF9pZCI6ImFwcCJ9.OYZvkHKntCVyL40wMByLKVbqELKZ3NS4dC1cuF5ba-ziRg4iYOTSKajhDQw6oiyTcdZs_esjkkqptwKwEx_4tAQeg94aFLjsdc0Zl970fPRjdYbdIe4B1Mqt24uSUVpPRQN5ffauguY-3zKkqFx4gdmPdeG-rvWtnEBM3XYDmjKQIyrXuZlb5va_y5arhg0dg2yFJTJvRWKLn3CHqfBUW7y27FZKuw2ckA2zWtW_ql6kcxiIUMiHg8Apx5Zf9m38eG1OYn-eD3JX1yMdha-rKDjwqpdgaq-0hi3aU28XVFBp70r1nDC5qzHczA7LPwrYJcy0AeI0D1Wi9ChDm6ZjYg',

  },
}

Mock.mock(/\/user\/oauth\/token[\s\S]*?/, 'post', () => loginData)

const registerData = {
  errno: 0,
  errmsg: '成功',
  data: null,
}
Mock.mock(/\/user\/users/, 'post', () => registerData)

const verifyCaptchaData = {
  errno: 0,
  errmsg: '成功',
  data: null,
}
Mock.mock(/\/user\/users\/captcha/, 'post', () => verifyCaptchaData)
