import Vue from 'vue'
import VueRouter from 'vue-router'
import studentAdd from "../views/studentAdd"
import studentList from "../views/studentList"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/studentList',
    name: 'studentList',
    component: studentList
  },  {
    path: '/studentAdd',
    name: 'studentAdd',
    component: studentAdd
  }, {
    path : "*",
    component: () => import('../views/studentList')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
