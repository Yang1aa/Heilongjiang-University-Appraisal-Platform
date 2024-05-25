/*
 * @Author: 杨柳岸 88012771+Yang1aa@users.noreply.github.com
 * @Date: 2023-12-21 14:47:27
 * @LastEditors: 杨柳岸 88012771+Yang1aa@users.noreply.github.com
 * @LastEditTime: 2024-01-11 00:13:12
 * @FilePath: \imageupload-vue\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    port: 8080, // 指定您希望使用的端口号
  },
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        sassOptions: {
          indentedSyntax: true, // 如果你使用的是Sass缩进语法而不是SCSS
        },
      },
    },
  },
});
