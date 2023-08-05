# 项目架构：

Vue SPA（单页面应用）架构：

- 前端框架：Vue.js
- 路由管理：Vue Router
- 状态管理：Vuex
- 网络请求：axios 或 Vue Resource
- UI 组件库：Element UI、Vuetify、Ant Design Vue 等
- 代码风格检查：ESLint
- 单元测试：Jest、Mocha、Cypress 等
- 构建工具：Webpack
- 编程语言：TS, JS
- 代码打包和优化：Babel、UglifyJS、Webpack 的优化插件

# 项目启动

npm run dev

### 打包

npm run build:dev

### 启动打包后的项目在浏览器查看

serve -s dist

### src/index.vue 打印

npm run dev:test

# webpack 环境配置

### 初始化项目

npm init -y

## 开发

### webpack 依赖

npm i webpack@5.85.1 webpack-cli@5.1.3 -D

### vue3 依赖

npm i vue@^3.3.4 -S

### babel 核心模块和 babel 预设以及 vue-loader 识别 vue 和 ts 文件

npm i babel-loader@^9.1.2 @babel/core@^7.22.5 @babel/preset-env@^7.22.5 @babel/preset-typescript@^7.22.5 vue-loader@^17.2.2 -D

### 构建好的静态资源都引入到一个 html 文件

npm i html-webpack-plugin -D

### 开发环境启动服务器来辅助开发

npm i webpack-dev-server webpack-merge -D

## 打包

### 浏览器查看打包结果

npm i serve -g

# 功能配置

### 兼容各系统的设置环境变量的包

npm i cross-env -D

### webpack 使用 loader 来解析 css

npm i style-loader css-loader -D

### 支持 less 或 scss

npm i less-loader less -D

### babel 预设处理 js 兼容

npm i babel-loader @babel/core @babel/preset-env core-js -D

### 复制 public 文件夹

npm i copy-webpack-plugin -D

