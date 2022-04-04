import nProgress from 'nprogress'
// import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { getToken } from '~/utils/auth'

// export const constantRoutes = [
//   {
//     path: '/',
//     redirect: '/login',
//   },
//   {
//     path: '/login',
//     component: () => import('@/components/login/index.vue'),
//     hidden: true,
//   },
//   {
//     path: '/wish',
//     component: () => import('@/components/wish/index.vue'),
//     hidden: true,
//   },
//   {
//     path: '/user',
//     component: () => import('@/components/user/index.vue'),
//     name: 'userMsg',
//     meta: { title: '个人中心', noCache: true },
//   },
// ]

// export const router = createRouter({
//   history: createWebHashHistory(),
//   routes: constantRoutes,
// })
// export default router

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
