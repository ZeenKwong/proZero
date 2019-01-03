// pages/woNsellDemo/orderTrack/orderTrack.js
Page({

	/**
	 * 页面的初始数据
	 */

	data: {
		inputPlaceholder:'请输入订单手机号码',
		orderNone:"您还没有任何订单",
		isNone:false,
		orderKind: ['全部', '预付费实名', '号卡开户', '宽带开户', '集客异步开户', '智慧沃家', '二次人脸', '宽带收费'],
		currentStep:0,
	},
	filterChange(event){
		this.setData({
			currentStep: event.currentTarget.dataset.index,
		});
		console.log(event.currentTarget.dataset.index);
		console.log(this.currentStep);
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const orderDataList = require('../../../utils/orderData.js');
		var orderData = orderDataList.orderData;
		this.setData({
			orderData,
		});
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