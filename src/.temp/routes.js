const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/vivi./Dev/geekyBrackets/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/vivi./Dev/geekyBrackets/src/templates/Category.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/vivi./Dev/geekyBrackets/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/vivi./Dev/geekyBrackets/src/templates/Documentation.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/vivi./Dev/geekyBrackets/src/templates/Post.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vivi./Dev/geekyBrackets/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vivi./Dev/geekyBrackets/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/category/:id/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/terms-and-conditions/",
    component: c4,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--terms-and-conditions-md" */ "/Users/vivi./Dev/geekyBrackets/docs/terms-and-conditions.md")
    }
  },
  {
    path: "/setup/",
    component: c5
  },
  {
    path: "/privacy-policy/",
    component: c4,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--privacy-policy-md" */ "/Users/vivi./Dev/geekyBrackets/docs/privacy-policy.md")
    }
  },
  {
    path: "/pinia/",
    component: c5
  },
  {
    path: "/nextTick/",
    component: c5
  },
  {
    path: "/contact-us/",
    component: c4,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--contact-us-md" */ "/Users/vivi./Dev/geekyBrackets/docs/contact-us.md")
    }
  },
  {
    path: "/about/",
    component: c4,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--about-md" */ "/Users/vivi./Dev/geekyBrackets/docs/about.md")
    }
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
