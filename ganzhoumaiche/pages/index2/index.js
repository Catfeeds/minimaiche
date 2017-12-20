//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    hotData:true,
    brand:[],
    ggbottom:[],
    pro_list:[]
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
    var that = this;
    //获取首页信息
    wx.request({
      url: app.d.ceshiUrl + '/Api/Index/index',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          imgUrls: res.data.ggtop,
          classify: res.data.procat,
          shop: res.data.shop,
          renqi: res.data.renqi,
          tubiao: res.data.tubiao,
          brand:res.data.brand,
          ggbottom: res.data.ggbottom,
          pro_list:res.data.prolist
        })
      }
    })
  },

  gotopro: function (e) {
    var brand_id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../listdetail/listdetail?brand_id=' + brand_id + '&name=' + name
    })
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
    return {
      title: '赣州买车',
      path: '/pages/index/index',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  }
})