// pages/woNsellDemo/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    businessInstall: [{
        name: '预付费实名',
        iconsrc: '../../../assets/img/prepayRealname.png'
      },
      {
        name: '号卡开户',
        iconsrc: '../../../assets/img/cardNew.png'
      },
      {
        name: '宽带开户',
        iconsrc: '../../../assets/img/broadbandNew.png'
      },
      {
        name: '集客异步开户',
        iconsrc: '../../../assets/img/asynchronousNew.png'
      },
    ],
    businessHandle: [{
        name: '二次人脸',
        iconsrc: '../../../assets/img/secondFaceRECG.png'
      },
      {
        name: '宽带收费',
        iconsrc: '../../../assets/img/broadbandToll.png'
      },
    ],
    tabList: [{
        name: '首页',
        icon: 'icon-home'
      },
      {
        name: '订单',
        icon: 'icon-order'
      },
      {
        name: '我的',
        icon: 'icon-me'
      }
    ],
    announcement: {
      tittle: "智慧沃家视频版上线啦！",
      context: "智慧沃家视频版全新上线，海量资源任你选任...",
    },
    activeWeb: "首页",
  },
	webActive(event){
		this.setData({
			activeWeb : event.currentTarget.dataset.name,
		});
		console.log(event.currentTarget.dataset.name);
		console.log(this.activeWeb);
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})