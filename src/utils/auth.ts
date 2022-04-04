import { useStorage } from '@vueuse/core'
export const TokenKey = 'Authorization'
export const Base64Key = 'Basic YXBwOmJrZHdsbjIzMS0yMw=='
const tokenStorageKey = 'wish-authorization'

const tokenStorage = useStorage(tokenStorageKey, '')
export function getToken() {
  return tokenStorage.value
}

export function setToken(token: string) {
  return tokenStorage.value = token
}

export function removeToken() {
  return tokenStorage.value = null
}
