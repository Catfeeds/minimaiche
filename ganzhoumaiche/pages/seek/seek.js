// pages/seek/seek.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabNum:0,
    lisHidden:false,
    lisNum:'onea',
    brandNum:'brand01a',
    pricNum: 'price01a',
    tabValue01: '默认',
    tabValue02: '品牌',
    tabValue03: '价格'
  },
  hidebg(e) {
    this.setData({
      lisHidden: !this.data.lisHidden
    })
  },
  tabClick (e) {
    this.setData({
      tabNum: e.target.dataset.id,
      lisHidden: !this.data.lisHidden
    })
  },
  lisClick(e) {
    console.log(e.target.dataset.value)
    this.setData({
      lisNum: e.target.dataset.id,
      tabValue01: e.target.dataset.value,
      lisHidden:false
    })
  },
  brandClick(e) {
    console.log(e)
    this.setData({
      brandNum: e.target.dataset.id,
      tabValue02: e.target.dataset.value,
      lisHidden:false
    })
  },
  priceClick (e) {
    this.setData({
      pricNum: e.target.dataset.id,
      tabValue03: e.target.dataset.value,
      lisHidden:false
    })
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