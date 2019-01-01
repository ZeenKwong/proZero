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
	wepy init standard 项目名称  //在根目录下生成框架
	cd 项目名称
	npm  install  //安装依赖
	wepy build --watch  开启实时编译

## flex布局
[参考链接](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  
是09年由w3c提出的新布局模式，译为“弹性布局”，可以 替代原先使用position为基础的布局方式，基本用法如下：  
	
	display: flex;  //使用这句开启flex布局及其相关属性
	flex-direction: row | row-reverse | column | column-reverse;  //确定flex轴方向，依次为+x/-x/-y/+y
	flex-wrap: nowrap | wrap | wrap-reverse;  //这个是定义是否需要换行，用于方便多组件自动换行布局，依次代表不换行/换行/向上换行
	
## 小程序的列表渲染
使用wx:for进行列表渲染，其中wx:key是必须的，不然会有警告，wx:for-index/wx:for-item好像是以前的写法，下次不写试试；

	<view class='busIness' wx:for="{{businessHandle}}" wx:for-index="index" wx:for-item="item" wx:key='index'>
## rpx单位
rpx是小程序专有的单位，可以引入后可以很方便地实现自适应，使用前最好建议设计的同事提供已iPhone6为原型的图。此外对于“加粗”这种属性，建议不要使用rpx进行适应；

	100 rpx;  //错
	100rpx;  //对，加了空格会识别不出来

## iconfont图标引入
1. 在阿里巴巴矢量图标库下载需要的图标 ；
2. 解压后将其中的tf文件通过网站[base64转换](https://transfonter.org/)转换为css文件；
3. 将转换后的css文件存放到项目icon文件夹中，并修改格式名为wxss；
4. 声明部分的代码可以从原解压出的css中复制即可；  

    	wxml:   
    	class='iconfont icon-home'
    	  
    	------  
    
    	app.wxss:   //后续有icon需要引入时，.iconfont部分不用改，只需把对应的wxss引入，然后在下方声明即可
    	@import "assets/icon/bottomtab.wxss";
    	.iconfont {
    	  font-family:"iconfont" !important;
    	  font-size:16px;
    	  font-style:normal;
    	  -webkit-font-smoothing: antialiased;
    	  -moz-osx-font-smoothing: grayscale;
    	}
    	
    	.icon-me:before { content: "\e618"; }
    	
    	.icon-home:before { content: "\e644"; }
    	
    	.icon-order:before { content: "\e621"; }


## 样式绑定
通过三元表达式实现样式绑定，同理可以套到style里 

	class="classA" :class="{classB:isActive} " //这是vue中的写法
	class="classA {{isActice?' ':classB}}"  //这是小程序里的写法
## 事件bind&catch  
详见[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)中对于事件的介绍 ，只需在相关的时间前加入bind或者catch即可触发相关方法，可以简单理解为原click

	touchstart	手指触摸动作开始	
	touchmove	手指触摸后移动	
	touchcancel	手指触摸动作被打断，如来电提醒，弹窗	
	touchend	手指触摸动作结束	
	tap	手指触摸后马上离开	
	longpress	手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发	1.5.0
	longtap	手指触摸后，超过350ms再离开（推荐使用longpress事件代替）	
	transitionend	会在 WXSS transition 或 wx.createAnimation 动画结束后触发	
	animationstart	会在一个 WXSS animation 动画开始时触发	
	animationiteration	会在一个 WXSS animation 一次迭代结束时触发	
	animationend	会在一个 WXSS animation 动画完成时触发	
	touchforcechange	在支持 3D Touch 的 iPhone 设备，重按时会触发	1.9.90
## setData()
修改page({ })中的data时  

	this.abc = 变量  //原vue可以直接将进行赋值修改
	
	setData(){
		abc : 变量；  //小程序中必须通过setData()方法，同时注意是通过冒号进行赋值，不是等于号；
	}
## tabBar
当首页需要底部tabbar时官方有直接提供 ，在app.json中声明使用即可，注意iconpath、selectedIconPath仅支持png jpg jpeg

	tabBar": {
		"list": [{
			"pagePath": "pagePath",
			"text": "text",
			"iconPath": "iconPath",
			"selectedIconPath": "selectedIconPath"
		}]
	}
iconpath仅支持png jpg jpeg
