// pages/woNsellDemo/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sysOption: [{
        name: '修改密码',
        icon: 'icon-lock'
      },
      {
        name: '附近商机',
        icon: 'icon-eye-fill'
      },
      {
        name: '在线客服',
        icon: 'icon-service'
      },
      {
        name: '更换帐号',
        icon: 'icon-change_line'
      },
    ],
    channelInfo: '电子渠道自提',
    userInfo: [{
        name: '渠道帐号',
        value: '51d2aue'
      },
      {
        name: '手机号码',
        value: '18000000000'
      },
      {
        name: 'CBSS工号',
        value: 'GZLT1591'
      },
    ]
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