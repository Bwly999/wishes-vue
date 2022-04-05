import nProgress from 'nprogress'
import type { RouteRecordRaw } from 'vue-router'
import { getToken } from '~/utils/auth'

const whiteList = ['/login'] // no redirect whitelist
export function routerBeforeEach(routers: RouteRecordRaw[]) {
  return (to: any, from: any, next: any) => {
    nProgress.start()
    if (whiteList.includes(to.path))
      next()

    else if (getToken())
      next()

    else if (routers.find(i => i.path === to.path))
      next(`/login?redirect=${to.path}`)
    else
      next()

    nProgress.done()
  }
}
