import Vue from 'vue'
import VueRouter from 'vue-router'
import FileUpload from "@/views/FileUpload";
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
  { path: "/FileUpload", component: FileUpload },
]

const router = new VueRouter({
  routes
})

export default router
