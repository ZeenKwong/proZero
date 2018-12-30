## 基础文件结构

**project.config.json**：项目配置文件，比如项目的名字，appid等等。在创建项目时自动生成，暂无需配置；  
**app.js**：这个是小程序的脚本代码文件，可以在这个文件上进行监听，并处理小程序的一些生命周期（比如一些全局变量），在这个app.js文件内，需要使用App()函数，来注册程序。，初始化时建立空的APP({ })方法，内涵一个空对象即可；
		
	App({
	/**
	 * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
	 */
	onLaunch: function () {
		
	},

	/**
	 * 当小程序启动，或从后台进入前台显示，会触发 onShow
	 */
	onShow: function (options) {
		
	},

	/**
	 * 当小程序从前台进入后台，会触发 onHide
	 */
	onHide: function () {
		
	},

	/**
	 * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
	 */
	onError: function (msg) {
		
	}
})

**app.json**：小程序的全局配置文件，初始化为一个空对象，此处先学习pages属性，它来指定小程序由哪些页面组成，接受一个数组，每一项都是字符串。每一项代表对应页面的【路径+文件名】信息，只需要写wxml文件的路径，数组的第一项代表小程序的初始页面。小程序中新增/减少页面，都需要对pages数组进行修改。  

	{
	"pages":[
		"pages/helloWorld/helloWorld"
	]
}
> **pages **：  
> 小程序页面包含以下四个基本文件，如果是通过微信开发者工具进行开发，在app.json中进行注册之后，就会在对应的路径自动生成这四个文件，如果用vscode则无法自动生成；  
>> helloWorld.js  //初始化时需要创建一个Page()函数来进行页面注册；

	  // pages/helloWorld/helloWorld.js
	Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
	})
>> helloWorld.json  //页面配置文件，初始化时传空对象即可；  
>> helloWorld.wxml  //可以通过view标签写点什么用于页面显示，view标签相当于div标签；

	  <text>pages/helloWorld/helloWorld.wxml</text>
>> helloWorld.wxss  

## 代码托管 
[参考文章](https://static.oschina.net/news/99140/mini-program-gitee "参考文章")  
这里主要介绍如何将小程序文档与github远端仓库进行绑定，这里需要注意的一个点是绑定远端仓库后，需要第一次推送时选的是**推送到新的远端仓库分支**不然会各种报错。同时添加完远端仓库后需要配置github的帐号密码。

## 通过vscode编辑
若要通过VScode进行小程序开发，建议安装*minapp*和*小程序助手*两个组件，用于wxml和wxss文件的高亮和补齐，此插件的补齐需要先敲入“<”符号才能进行后续补齐。  

## 通过MarkdownPad编写md文件
[参考文章](https://www.jianshu.com/p/1745a7f53404)   
这一款是破解版，最经典，适合开始适应md的编写，从头开始自己写标签太劝退了。  
如果是win10还需要安装一个组件 awesomium_v1.6.6_sdk_win，否则会无法同步渲染。  

	//tips
	//删除当前行
	ctrl+D
	//首行缩进
	半方大的空白&ensp;或&#8194;
	全方大的空白&emsp;或&#8195;
	不断行的空白格&nbsp;或&#160;

## 类vue的小程序框架---wepy
	
	npm install wepy-cli -g  //全局安装
	wepy new 项目名称  //在根目录下生成框架
	cd 项目名称
	npm  install  //安装依赖
	wepy build --watch  开启实时编译