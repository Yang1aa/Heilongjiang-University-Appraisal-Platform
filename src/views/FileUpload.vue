<template>
    <div>
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
                :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitFile">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-row :gutter="20">
            <el-col v-for="url in imageurls" :span="6">
                <el-image
                        style="width: 100px; height: 100px"
                        :src="url"
                        fit="fill"></el-image>
            </el-col>
        </el-row>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                images: [],
                imageurls: []
            };
        },
        methods: {
            submitFile() {
                if (this.images.length === 0) {
                    this.$message.warning("请选择文件")
                    return
                }
                let formData = new FormData() //创建一个表单
                this.images.forEach(file => {
                    formData.append("files", file.raw) //将文件传到表单中，files属性是后端接受的参数名
                })
                this.$axios.post(
                    '/file',
                    formData,
                    {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
                    this.$message.success("文件上传成功")
                    this.images = []
                    this.getImages()
                }).catch(error => {
                    this.$message.error("文件上传失败", error.msg)
                })
            },
            //移除文件列表时的钩子
            handleRemove(file, fileList) {
                this.images = fileList
                console.log("移除文件列表时的钩子", file);
            },
            //点击某个文件时的钩子
            handlePreview(file) {
                console.log("点击某个文件时的钩子", file);
            },
            //添加到上传列表时的钩子
            handleChange(file, fileList) {
                this.images = fileList
                console.log("添加到上传列表时的钩子", file)
            },
            //文件超出个数限制时的钩子
            handleExceed() {
                this.$message.warning("文件超出3个")
                console.log("文件超出个数限制时的钩子")
            },
            getImages() {
                this.$axios.get("/filelist")
                    .then(response => {
                        this.imageurls = response.data
                        console.log("获取图片列表成功")
                    })
                    .catch(error => {
                        this.$message.error("获取图片列表失败")
                    })
            }
        },
        created() {
            this.getImages()
        }
    }
</script>
<style scoped>
 
    .file-box {
        border: 1px solid #DCDFE6;
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
 
    &
    :last-child {
        margin-bottom: 0;
    }
 
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
</style>