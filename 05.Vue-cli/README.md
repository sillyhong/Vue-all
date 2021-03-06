###第1节：Vue-cli，开始吧骚年

一、安装vue-cli

安装vue-cli的前提是你已经安装了npm，安装npm你可以直接下载node的安装包进行安装。你可以在命令行工具里输入npm -v  检测你是否安装了npm和版本情况。出现版本号说明你已经安装了npm和node，我这里的npm版本为3.10.10。如果该命令不可以使用，需要安装node软件包，根据你的系统版本选择下载安装就可以了。

下载地址：http://nodejs.cn/download/



npm没有问题，接下来我们可以用npm 命令安装vue-cli了，在命令行输入下面的命令：


```
npm install vue-cli -g
```
-g :代表全局安装。如果你安装时报错，一般是网络问题，你可以尝试用cnpm来进行安装。安装完成后，可以用vue -V来进行查看 vue-cli的版本号。注意这里的V是大写的。我这里版本号是2.8.1.



如果vue -V的命令管用了，说明已经顺利的把vue-cli安装到我们的计算机里了。



二、初始化项目

我们用vue init命令来初始化项目，具体看一下这条命令的使用方法。


```
$ vue init <template-name> <project-name>
```
init：表示我要用vue-cli来初始化项目

template-name>：表示模板名称，vue-cli官方为我们提供了5种模板，

####webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。

####webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。

####browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。

####browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。

####simple-一个最简单的单页应用模板。

<project-name>：标识项目名称，这个你可以根据自己的项目来起名字。

在实际开发中，一般我们都会使用webpack这个模板，那我们这里也安装这个模板，在命令行输入以下命令：


```
vue init webpack vuecliTest
```
输入命令后，会询问我们几个简单的选项，我们根据自己的需要进行填写就可以了。

Project name :项目名称 ，如果不需要更改直接回车就可以了。注意：这里不能使用大写，所以我把名称改成了vueclitest
Project description:项目描述，默认为A Vue.js project,直接回车，不用编写。
Author：作者，如果你有配置git的作者，他会读取。
Install  vue-router? 是否安装vue的路由插件，我们这里需要安装，所以选择Y
Use ESLint to lint your code? 是否用ESLint来限制你的代码错误和风格。我们这里不需要输入n，如果你是大型团队开发，最好是进行配置。
setup unit tests with  Karma + Mocha? 是否需要安装单元测试工具Karma+Mocha，我们这里不需要，所以输入n。
Setup e2e tests with Nightwatch?是否安装e2e来进行用户行为模拟测试，我们这里不需要，所以输入n。


命令行出现上面的文字，说明我们已经初始化好了第一步。命令行提示我们现在可以作的三件事情。

1、cd vuecliTest  进入我们的vue项目目录。

2、npm install  安装我们的项目依赖包，也就是安装package.json里的包，如果你网速不好，你也可以使用cnpm来安装。

3、npm run dev 开发模式下运行我们的程序。给我们自动构建了开发用的服务器环境和在浏览器中打开，并实时监视我们的代码更改，即时呈现给我们。



出现这个页面，说明我们的初始化已经成功，现在可以快乐的玩耍了。

第2节：Vue-cli项目结构讲解

vue-cli脚手架工具就是为我们搭建了开发所需要的环境，为我们省去了很多精力。有必要对这个环境进行熟悉，我们就从项目的结构讲起。

Ps：由于版本实时更新和你选择安装的不同（这里列出的是模板为webpack的目录结构），所以你看到的有可能和下边的有所差别。


```
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- store                          // vuex的状态管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                           // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
```
重要文件讲解：

package.json
package.json文件是项目根目录下的一个文件，定义该项目开发所需要的各种模块以及一些项目配置信息（如项目名称、版本、描述、作者等）。

package.json 里的scripts字段，这个字段定义了你可以用npm运行的命令。在开发环境下，在命令行工具中运行npm run dev 就相当于执行 node build/dev-server.js  .也就是开启了一个node写的开发行建议服务器。由此可以看出script字段是用来指定npm相关命令的缩写。

```

module.export = {
    // 编译入口文件
    entry: {},
    // 编译输出路径
    output: {},
    // 一些解决方案配置
    resolve: {},
    resolveLoader: {},
    module: {
        // 各种不同类型文件加载器配置
        loaders: {
        ...
        ...
        // js文件用babel转码
        {
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            // 哪些文件不需要转码
            exclude: /node_modules/
        },
        ...
        ...
        }
    },
    // vue文件一些相关配置
    vue: {}
}
```
这里有很多webpack的知识，我也有一个专门讲webpack的视频教程，你可以去看一看《跟技术胖学webpack视频教程》。

.babelrc
Babel解释器的配置文件，存放在根目录下。Babel是一个转码器，项目里需要用它将ES6代码转为ES5代码。如果你想了解更多，可以查看babel的知识。

```
{
  //设定转码规则
  "presets": [
    ["env", { "modules": false }],
    "stage-2"
  ],
  //转码用的插件
  "plugins": ["transform-runtime"],
  "comments": false,
  //对BABEL_ENV或者NODE_ENV指定的不同的环境变量，进行不同的编译操作
  "env": {
    "test": {
      "presets": ["env", "stage-2"],
      "plugins": [ "istanbul" ]
    }
  }
}
```
.editorconfig
该文件定义项目的编码规范，编译器的行为会与.editorconfig文件中定义的一致，并且其优先级比编译器自身的设置要高，这在多人合作开发项目时十分有用而且必要。


```
root = true

[*]    // 对所有文件应用下面的规则
charset = utf-8                    // 编码规则用utf-8
indent_style = space               // 缩进用空格
indent_size = 2                    // 缩进数量为2个空格
end_of_line = lf                   // 换行符格式
insert_final_newline = true        // 是否在文件的最后插入一个空行
trim_trailing_whitespace = true    // 是否删除行尾的空格
```
这是比较重要的关于vue-cli的配置文件，当然还有很多文件，我们会在以后的文章中讲解。

###第3节：解读Vue-cli的模板

我们通过两节课的讲解，你对vue-cli应该有了基本的了解，这节我们主要了解一下Vue-cli的模板操作，包括增加模板，修改模板，以及一个常规模板的基本结构。

一、npm run build 命令
有小伙伴问我，如何把写好的Vue网页放到服务器上，那我就在这里讲解一下，主要的命令就是要用到npm run build 命令。我们在命令行中输入npm run build命令后，vue-cli会自动进行项目发布打包。你在package.json文件的scripts字段中可以看出，你执行的npm run build命令就相对执行的 node build/build.js 。

package.json的scripts 字段：

```
  "scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js"
  },
  ```
在执行完npm run build命令后，在你的项目根目录生成了dist文件夹，这个文件夹里边就是我们要传到服务器上的文件。

dist文件夹下目录包括：

index.html 主页文件:因为我们开发的是单页web应用，所以说一般只有一个html文件。
static 静态资源文件夹：里边js、CSS和一些图片。
二、main.js文件解读
main.js是整个项目的入口文件,在src文件夹下：


```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false   //生产环境提示，这里设置成了false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```
通过代码可以看出这里引进了App的组件和<App/>的模板，它是通过 import App from ‘./App’这句代码引入的。  我们找到App.vue文件，打开查看。

三、App.vue文件:

```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
app.vue文件我们可以分成三部分解读，

<template></template>标签包裹的内容：这是模板的HTMLDom结构，里边引入了一张图片和<router-view></router-view>标签，<router-view>标签说明使用了路由机制。我们会在以后专门拿出一篇文章讲Vue-router。
<script></script>标签包括的js内容：你可以在这里些一些页面的动态效果和Vue的逻辑代码。
<style></style>标签包裹的css内容：这里就是你平时写的CSS样式，对页面样子进行装饰用的，需要特别说明的是你可以用<style scoped></style>来声明这些css样式只在本模板中起作用。
四、router/index.js 路由文件
引文在app.vue中我们看到了路由文件，虽然router的内容比较多，但是我们先简单的看一下。下篇文章我们就开始讲Vue-router。

```
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
```
我们可以看到 import Hello from ‘@/components/Hello’这句话， 文件引入了/components/Hello.vue文件。这个文件里就配置了一个路由，就是当我们访问网站时给我们显示Hello.vue的内容。

五、Hello.vue文件解读：

这个文件就是我们在第一节课看到的页面文件了。也是分为<template><script><style>三个部分，以后我们大部分的工作都是写这些.vue结尾的文件。现在我们可以试着改一些内容，然后预览一下。

```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
```
总结：
这个教程只是带着你大概浏览和重点讲解了vue-cli的知识，如果你想完全弄明白vue-cli，我建议最好是有调理的阅读所有代码，这对你以后成为vue实际项目 的开发很有帮助。如果你是一个初学者，了解这些已经足够向下学习了。