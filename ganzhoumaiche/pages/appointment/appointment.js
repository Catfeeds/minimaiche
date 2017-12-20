// pages/appointment/appointment.js
var app = getApp();
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
  bindFormSubmit: function (e) {
    var that = this;
    console.log(e)
    var fdata = e.detail.value;
    wx.request({
      url: app.d.ceshiUrl + '/Api/User/appoint',
      method: 'post',
      data: {
        uid: app.d.userId,
        name: fdata.name,
        phone: fdata.phone,
        model: fdata.model,
        time: fdata.time,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // //--init data        
        var data = res.data;
        if (data.status == 1) {
          wx.showToast({
            title: data.err,
            duration: 2000
          });
        } else {
          wx.showToast({
            title: data.err,
            duration: 2000
          });
        }
      },
      fail: function () {
        // fail
        wx.showToast({
          title: '网络异常！',
          duration: 30000
        });
      }
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