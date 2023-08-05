//公共配置
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')






module.exports = {
  entry: path.join(__dirname, '../src/index.ts'), // 入口文件

  output: {
    filename: 'static/js/[name].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },

  module: {
    rules: [
      // 匹配.vue文件
      {
      	test: /\.vue$/, 
      	use: 'vue-loader', // 用vue-loader去解析vue文件
      },
      // 匹配.ts文件
      {
        test: /\.ts$/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-typescript",
                {
                  allExtensions: true, //支持所有文件扩展名(重要)
                },
              ],
            ]
          }
        }
      },
      //匹配 css和less 文件
      {
        test: /.(css|less)$/, 
        use: ['style-loader','css-loader', 'less-loader']
      },
      // babel预设处理js兼容
      {
        test: /\.(t|j)s$/,
        use: {
          loader: 'babel-loader',
          options: {
            // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
            presets: [
              [
                "@babel/preset-env",
                {
                  // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
                  // "targets": {
                  //  "chrome": 35,
                  //  "ie": 9
                  // },
                   "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
                   "corejs": 3, // 配置使用core-js低版本
                  }
                ],
              [
                '@babel/preset-typescript',
                {
                  allExtensions: true, //支持所有文件扩展名，很关键
                },
              ]
            ]
          }

        }
      },
      // 处理图片文件
      {
        test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset/resource", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/images/[name][ext]', // 文件输出目录和命名
        },
      },
      // 处理字体
      {
        test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/fonts/[name][ext]', // 文件输出目录和命名
        },
      },
      {
        test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/media/[name][ext]', // 文件输出目录和命名
        },
      },


    ]
  },

  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
    // modules: ['node_modules'], // 将 moduleResolution 修改为 modules，并设置为数组形式
    // alias: {
    //   '@': path.resolve(__dirname, '../src') // 设置别名来引用 src 目录
    // },
  },

  plugins: [
    new VueLoaderPlugin(), // vue-loader插件
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
        inject: true, // 自动注入静态资源
      }),    new webpack.DefinePlugin({
        'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      

    



  ]
}
