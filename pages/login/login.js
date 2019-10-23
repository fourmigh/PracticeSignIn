// pages/login/login.js
const utils = require('../../utils/util.js')
const Mcaptcha = require('../../utils/mcaptcha.js');

Page({

  onTap() {
    this.mcaptcha.refresh();
  },

  watchMobile(event) {
    var value = event.detail.value
    if (value.length == 11 && utils.isMobile(value)) {
      this.setData({
        showCaptcha: true,
        inputCaptcha: true,
        showSMSCode: false,
        inputSMSCode: false
      })
    } else {
      this.setData({
        showCaptcha: false,
        inputCaptcha: false,
        showSMSCode: false,
        inputSMSCode: false
      })
    }
  },

  watchCaptcha(event) {
    var value = event.detail.value
    if (value.length == 4 && this.mcaptcha.validate(value)) {
      this.setData({
        showSMSCode: true,
        inputSMSCode: true
      })
    } else {
      this.setData({
        showSMSCode: false,
        inputSMSCode: false
      })
    }
  },

  watchSMSCode(event) {
    if (event.detail.value.length == 6) {
      //TODO
      console.log('watchSMSCode', "开始登录");
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    showCaptcha: false,
    inputCaptcha: false,
    showSMSCode: false,
    inputSMSCode: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const query = wx.Bmob.Query("Admin");
    // query.find().then(res => {
    //   console.log('res', res);
    //   console.log('res.length', utils.isNumber(res.length));
    //   console.log('res.length', res.length);
    //   console.log('res.0', res[0]);
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mcaptcha = new Mcaptcha({
      el: 'canvas',
      width: 80,
      height: 35,
      createCodeImg: ""
    });
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