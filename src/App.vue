<template>
  <div>
    <!-- 顶部粘性吸顶效果，黑色背景 -->
    <div class="sticky-header">
      <!-- 中间的真伪检测系统，白色字体，带有动画效果 -->
      <div class="logo">
        <h1 class="animated-text">黑龙江大学真伪检测系统</h1>
      </div>
    </div>

    <!-- 用于显示当前路由的组件 -->
    <router-view />
    <!-- 导航栏 -->
    <nav>
      <router-link
        to="/HomePage"
        :class="{ underline: $route.path === '/HomePage' }"
      >
        <h3><i class="el-icon-s-home"></i>&nbsp; 首页</h3>
      </router-link>
      <router-link
        to="/ImageUploader"
        :class="{ underline: $route.path === '/ImageUploader' }"
      >
        <h3><i class="el-icon-picture"></i>&nbsp; 图片鉴定</h3>
      </router-link>
      <router-link
        to="/VideoUploader"
        :class="{ underline: $route.path === '/VideoUploader' }"
      >
        <h3><i class="el-icon-video-camera-solid"></i>&nbsp;视频鉴定</h3>
      </router-link>
      <router-link
        to="/TextUploader"
        :class="{ underline: $route.path === '/TextUploader' }"
      >
        <h3><i class="el-icon-s-order"></i>&nbsp;文本鉴定</h3>
      </router-link>
      <!-- <router-link to="/FileUpload" :class="{ underline: $route.path === '/FileUpload' }">
        <h3><i class="el-icon-s-order"></i>&nbsp;图片鉴定测试</h3>
      </router-link> -->
    </nav>

    <!-- footer -->
    <footer>
      <div class="footer-content">
        <p>
          &copy; 2023 Heilongjiang University. All rights reserved. Designed and
          produced by Yangliuan.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  created() {
    // 在页面刷新时，检查当前路由是否是默认路由
    if (this.$route.path !== "/HomePage") {
      // 如果当前路由不是目标路由，使用编程式导航跳转到目标路由
      this.$router.replace("/HomePage");
    }
  },
  data() {
    return {
      activeName: "HomePage",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
/* 导航栏样式 */
nav {
  display: flex;
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  height: 3vw;
  width: 80%; /* 修改宽度为80% */
  justify-content: space-evenly;
  z-index: 1;
  background-color: rgb(70, 67, 68);
  border-radius: 3vw; /* 相对单位 */
  overflow: hidden;
  min-width: 40vw; /* 相对单位 */
  padding: 0.5vw; /* 相对单位 */
}

nav a {
  color: white;
  /*margin: 1vw 2vw 1vw 0;*/
  text-decoration: none;
  font-size: 0.8vw; /* 相对单位 */
  position: relative;
}

nav a.underline {
  position: relative;
  font-size: 0.8vw; /* 相对单位 */
  background-image: linear-gradient(to right, white, #00aaff);
  background-size: 100% 0.2vw; /* 相对单位 */
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-out;
}

nav a.underline:hover {
  background-size: 0% 0.2vw; /* 相对单位 */
}

/* 顶部粘性吸顶效果，黑色背景 */
.sticky-header {
  height: 8vh;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vw 2vw; /* 相对单位 */
  min-width: 40vw; /* 相对单位 */
}
/* 中间的真伪检测系统，白色字体，带有动画效果，字体周围稍微亮一些 */
.logo {
  color: white;
  text-align: center;
}

.animated-text {
  font-size: 2vw; /* 使用vw单位使字体随屏幕宽度调整 */
  font-weight: 700;
  animation: fadeIn 1s ease-in-out;
}

/* 大圆的样式 */
.huge-text::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(32, 87, 151, 0.8) 10%,
    rgba(255, 255, 255, 0) 80%
  );
  z-index: -1;
}

/* footer 样式 */
footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  text-align: center;
  padding: -0.5vw;
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 40vw; /* 相对单位 */
  overflow: hidden;
}

.footer-content {
  max-width: 60vw; /* 相对单位 */
  margin: 0 auto;
}

.footer-content p {
  font-size: 0.8vw; /* 固定字体大小，不会随屏幕放大而变化 */
}

/* 淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
