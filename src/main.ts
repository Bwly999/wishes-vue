import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createWebHistory } from 'vue-router'
import { routerBeforeEach } from './router'
import App from './App.vue'
import './api/mock/index'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)
// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    history: createWebHistory(),
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior: () => ({ top: 0 }),
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
    ctx.router.beforeEach(routerBeforeEach(ctx.routes))
  },
)
