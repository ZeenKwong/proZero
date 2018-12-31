// pages/woNsellDemo/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keybusiness: {
      name: '智慧沃家',
      iconsrc: '../../../assets/img/mixSet.png',
      firstStep: 'searchResource',
    },
    businessInstall: [{
        name: '预付费实名',
        iconsrc: '../../../assets/img/prepayRealname.png',
        firstStep: 'readIdcard',
      },
      {
        name: '号卡开户',
        iconsrc: '../../../assets/img/cardNew.png',
        firstStep: 'chooseSet',
      },
      {
        name: '宽带开户',
        iconsrc: '../../../assets/img/broadbandNew.png',
        firstStep: 'searchResource',
      },
      {
        name: '集客异步开户',
        iconsrc: '../../../assets/img/asynchronousNew.png',
        firstStep: '',
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
    announcement: {
      tittle: "智慧沃家视频版上线啦！",
      context: "智慧沃家视频版全新上线，海量资源任你选任...",
    },
  },
  webActive(event) {
    this.setData({
      activeWeb: event.currentTarget.dataset.name,
    });
    console.log(event.currentTarget.dataset.name);
    console.log(this.activeWeb);
  },
  storeRoute(event) {
    if (event.currentTarget.dataset.step) {
      wx.navigateTo({
        url: '../../../pages/woNsellDemo/' + event.currentTarget.dataset.step + '/' + event.currentTarget.dataset.step,
      });
    } else {
      this.tipsToast();
    };
  },
  tipsToast() {
    wx.showModal({
      title: '敬请期待！',
      content: '该功能正在安排',
      showCancel: false, //是否显示取消按钮
      cancelText: "否", //默认是“取消”
      cancelColor: 'skyblue', //取消文字的颜色
      confirmText: "尽快安排", //默认是“确定”
      confirmColor: '#ff8620', //确定文字的颜色
      success: function(res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {
          //点击确定
        }
      },
    })
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