/*
 * @Author: 杨柳岸 88012771+Yang1aa@users.noreply.github.com
 * @Date: 2023-12-21 14:48:01
 * @LastEditors: 杨柳岸 88012771+Yang1aa@users.noreply.github.com
 * @LastEditTime: 2024-01-11 20:53:03
 * @FilePath: \imageupload-vue\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage"
import ImageUploader from "@/views/ImageUploader"
import VideoUploader from "@/views/VideoUploader"
import TextUploader from "@/views/TextUploader"
Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/HomePage" }, // 将默认路由重定向到 /HomePage
  { path: "/HomePage", component: HomePage }, // 将默认路由重定向到 /HomePage
  { path: "/ImageUploader", component: ImageUploader },
  { path: "/TextUploader", component: TextUploader },
  { path: "/VideoUploader", component: VideoUploader },
]

const router = new VueRouter({
  routes
})

export default router
