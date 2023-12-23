<!--
 * @Author: 杨柳岸 88012771+Yang1aa@users.noreply.github.com
 * @Date: 2023-12-02 13:48:44
 * @LastEditors: 杨柳岸 88012771+Yang1aa@users.noreply.github.com
 * @LastEditTime: 2023-12-23 18:04:29
 * @FilePath: \webcode\src\components\TextUploader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="imageuploader-container">
    <!-- 
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
 -->

    <!-- 图片上传 -->
    <el-upload
      multiple
      :limit="3"
      class="file-box"
      ref="upload"
      action="http://localhost:8088/file"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :file-list="images"
      list-type="picture"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitFile"
        >上传图片</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>

    <div class="image-container">
      <!-- 回显图片 -->
      <div class="image-show"></div>
      <div class="data-show">
        <div class="slecet">
          <!-- 模型选择 -->
          <div class="data-select">
            <h3>模型选择</h3>
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
          <!-- 鉴定按钮 -->
          <el-button size="small" type="primary">鉴定检测</el-button>
        </div>
        <!-- 鉴定结果 -->
        <div>
          <el-card class="box-card">
            <img src="../../src/assets/logo.png" alt="" />
          </el-card>
          <el-card class="box-card">
            <h3>性能1：1%</h3>
            <h3>性能1：1%</h3>
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
      images: [],
      imageurls: [],
      options: [
        {
          value: "选项1",
          label: "mode1",
        },
        {
          value: "选项2",
          label: "mode2",
        },
        {
          value: "选项3",
          label: "mode3",
        },
        {
          value: "选项4",
          label: "mode4",
        },
        {
          value: "选项5",
          label: "mode5",
        },
      ],
      value: "选项1",
    };
  },
  methods: {
    submitFile() {
      if (this.images.length === 0) {
        this.$message.warning("请选择文件");
        return;
      }
      let formData = new FormData(); //创建一个表单
      this.images.forEach((file) => {
        formData.append("files", file.raw); //将文件传到表单中，files属性是后端接受的参数名
      });
      this.$axios
        .post("/file", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          this.$message.success("文件上传成功");
          this.images = [];
          this.getImages();
        })
        .catch((error) => {
          this.$message.error("文件上传失败", error.msg);
        });
    },
    //移除文件列表时的钩子
    handleRemove(file, fileList) {
      this.images = fileList;
      console.log("移除文件列表时的钩子", file);
    },
    //点击某个文件时的钩子
    handlePreview(file) {
      console.log("点击某个文件时的钩子", file);
    },
    //添加到上传列表时的钩子
    handleChange(file, fileList) {
      this.images = fileList;
      console.log("添加到上传列表时的钩子", file);
    },
    //文件超出个数限制时的钩子
    handleExceed() {
      this.$message.warning("文件超出3个");
      console.log("文件超出个数限制时的钩子");
    },
    getImages() {
      this.$axios
        .get("/filelist")
        .then((response) => {
          this.imageurls = response.data;
          console.log("获取图片列表成功");
        })
        .catch((error) => {
          this.$message.error("获取图片列表失败");
        });
    },
  },
};
</script>
<style lang="scss">
.imageuploader-container {
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
.file-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 50px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  margin-top: 10px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.image-display {
  margin-top: 10px;
  height: 70%;
  overflow: hidden;
}

.upload-container {
  .el-upload-dragger {
  }
  width: 100% !important;
  height: 100px !important;
}

.upload-container {
  .el-upload {
  }
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
  height: 80vh;
  display: flex;
  margin-bottom: 10vh;
}

.image-show {
  flex: 6;
  height: 80vh;
  border-radius: 3%;
  background-color: rgb(93, 181, 150);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
}

.image-show img {
  width: 85%;
  height: 90%;
  border-radius: 3%;
  background-color: white;
}
.data-show {
  background: rgb(225, 209, 209);
  flex: 2;
  height: 80vh;
  border-radius: 3%;
  margin-left: 3%;
  padding: 1% 3%;
  /*display: flex;
  justify-content: center;
  align-items: center;*/
}

/* 下拉框*/

.slecet {
  display: flex;
  align-items: center;
  margin-bottom: 15%;
  .el-button {
    height: 40px;
  }
}
.data-select {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
  h3 {
    color: black;
    margin-right: 5px;
    min-width: 80px;
  }
  el-button {
    color: #00aaff !important;
  }
}
.el-select {
  width: 70%;
  text-align: center;
  display: block;
  margin: 0 2%;
}

/* 鉴定结果card*/
.box-card {
  img {
    background-color: #fff;
  }
  h3 {
    text-align: center;
  }
}
</style>
