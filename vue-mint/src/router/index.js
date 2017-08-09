import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/flyer'
    },
    {
      path: '/data',
      component: resolve => require(['../page/Data.vue'], resolve),
    },
    {
      path: '/index',
      component: resolve => require(['../page/Index.vue'], resolve),
      children: [{
          path: '/flyer',
          component: resolve => require(['../page/Flyer.vue'], resolve),
        },
        {
          path: '/poster',
          component: resolve => require(['../page/Poster.vue'], resolve),
        },
        {
          path: '/enroll',
          component: resolve => require(['../page/Enroll.vue'], resolve),
        }
      ]
    },

  ]
})
