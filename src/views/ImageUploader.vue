<!--
 * @Author: 杨柳岸 88012771+Yang1aa@users.noreply.github.com
 * @Date: 2023-12-02 13:48:44
 * @LastEditors: 杨柳岸 88012771+Yang1aa@users.noreply.github.com
 * @LastEditTime: 2023-12-12 13:28:45
 * @FilePath: \webcode\src\components\TextUploader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="imageuploader-container">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always"> 总是显示 </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover"> 鼠标悬浮时显示 </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover"> 鼠标悬浮时显示 </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover"> 鼠标悬浮时显示 </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never"> 从不显示 </el-card>
      </el-col>
    </el-row>

    <el-row class="upload-container">
      <el-upload
        class="upload-demo"
        drag
        action="https://i.postimg.cc/Znq33R1B/picture.jpg"
        multiple
        :show-file-list="false"
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </el-row>
    <!-- <div v-if="imageUrl" class="image-container">
      <el-button
        @click="performIdentification"
        type="primary"
        class="identify-button"
      >
        点击鉴定
      </el-button>
    </div> -->

    <div class="image-container">
      <div class="image-show">
        <div class="image">
          <img :src="imageUrl" @mousedown.prevent />
        </div>
        <div
          v-if="identificationResult"
          :class="{ 'true-color': isTrue(), 'false-color': !isTrue() }"
          class="identification-result"
        >
          {{ identificationResult }}
        </div>
      </div>
      <div class="data-show">
        <div class="data-select">
          <span>模型选择</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div> </el-card
          ><el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: null,
      identificationResult: null,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  methods: {
    beforeUpload(file) {
      // 校验文件类型，这里仅允许上传图片
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        this.$message.error("只能上传图片文件！");
        return false;
      }
      // 校验文件大小，这里假设不超过 2MB
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("文件大小不能超过 2MB！");
        return false;
      }
      return isImage && isLt2M;
    },
    handleSuccess(response, file, fileList) {
      // 上传成功的回调
      this.imageUrl = URL.createObjectURL(file.raw);
      // 清空鉴定结果
      this.identificationResult = null;
    },
    handleError(error, file, fileList) {
      // 上传失败的回调
      this.$message.error("上传失败，请稍后重试！");
    },
    performIdentification() {
      // 模拟后端鉴定结果，随机生成真或假
      const isTrue = Math.random() < 0.5;
      this.identificationResult = isTrue ? "真" : "假";
    },
    isTrue() {
      return this.identificationResult === "真";
    },
  },
};
</script>
<style>
.imageuploader-container {
  background-color: red;
  color: #00aaff;
  text-align: center;
  z-index: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 90vh;
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100%;
  flex-direction: column;
}
.upload-container {
  margin-top: 10px;
  width: 100%;
}
.el-row {
  position: relative;
}

.image-display {
  margin-top: 10px;
  height: 70%;
  overflow: hidden;
}

.upload-container /deep/ .el-upload-dragger {
  width: 100% !important;
  height: 100px !important;
}

.upload-container /deep/ .el-upload {
  width: 100% !important;
}
.el-icon-upload {
  line-height: 30% !important;
  margin: 25px 0 !important;
}

.image-display .image {
  width: 100%;
  height: 100%;
}

.image-display div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #999;
}

/*上传后图片样式设置*/
.image-container {
  width: 100%;
  height: 70%;
  background-color: rgb(16, 247, 93);
  display: flex;
}

.image-show {
  flex: 6;
  height: 100%;
  border-radius: 3%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-show img {
  width: 85%;
  height: 90%;
  border-radius: 3%;
  background-color: white;
}
.data-show {
  background: red;
  flex: 2;
  height: 100%;
  border-radius: 3%;
  margin-left: 3%;
  /*display: flex;
  justify-content: center;
  align-items: center;*/
}

/* 下拉框*/

.data-select {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
}
.el-select {
  width: 70%;
  text-align: center;
  display: block;
  margin: 0 2%;
}
</style>
