var app = getApp();
Page({
  data: {
    markers: [{
      iconPath: "../../image/02.png",
      id: 0,
      latitude: '',
      longitude: '',
      shop_name:'',
      shop_address:''
    }]
  },  
  click:function() {
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Index/getLocal',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 1) {
          that.setData({
            latitude: res.data.location_y,
            longitude: res.data.location_x,
            shop_name: res.data.shop_name,
            shop_address: res.data.shop_address,
          })
          wx.openLocation({
            latitude: that.data.latitude,
            longitude: that.data.longitude,
            scale: 18,
            name: res.data.shop_name,
            address: res.data.shop_address
          })
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 30000
          });
        }

      }
    });
  },
  onLoad: function (options) { 
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Index/getLocal',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 1) {
          that.setData({
            latitude: res.data.location_y,
            longitude: res.data.location_x,
            shop_name: res.data.shop_name,
            shop_address: res.data.shop_address,
          })
          wx.openLocation({
            latitude: that.data.latitude,
            longitude: that.data.longitude,
            scale: 18,
            name: res.data.shop_name,
            address: res.data.shop_address
          })
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 30000
          });
        }

      }
    });
   
    },
  onShow: function () { 
    
    
   
  }
})