// pages/woNsellDemo/orderTrack/orderTrack.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    inputPlaceholder: '请输入订单手机号码',
    orderNone: "您还没有任何订单",
    isNone: false,
    orderKind: ['全部', '预付费实名', '号卡开户', '宽带开户', '集客异步开户', '智慧沃家', '二次人脸', '宽带收费'],
    currentStep: 0,
    currentName: '全部',
    successStep: ['开户成功', '交易成功', '登记成功'],
    queueStep: ['等待开户', '等待竣工', '等待审核'],
    failureStep: ['登记失败', '订单失效'],

  },
  filterChange(event) {
    this.setData({
      currentStep: event.currentTarget.dataset.index,
      currentName: event.currentTarget.dataset.name,
    });
  },
  onFocus: function(e) {
    this.setData({
      inputPlaceholder: " "
    })
  },
  onBlur: function(e) {
    this.setData({
      inputPlaceholder: "请输入订单手机号码"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const orderDataList = require('../../../utils/orderData.js');
    var orderData = orderDataList.orderData;
    orderData.forEach(element => {
      if (this.data.successStep.indexOf(element.step) != -1) {
        element['color'] = '#49DF9D';
      } else if (this.data.failureStep.indexOf(element.step) != -1) {
        element['color'] = '#F95050';
      } else {
        element['color'] = '#80C7FB';
      }
    });
    this.setData({
      orderData,
    });
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