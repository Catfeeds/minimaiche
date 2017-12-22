// pages/seek/seek.js
var app = getApp();
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
    tabValue03: '价格',
    list:[],
    cname:'',
    cid:0,
    brand:[],
    bid:0,
    price:'',
    search:'',
    keyword:'',
    ggtop:[]
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
    });
    var that = this;
    that.setData({
      search: e.target.dataset.value,
      tabValue03: '价格',
      price:''
    });
    wx.request({
      url: app.d.ceshiUrl + '/Api/product/dataList',
      method: 'post',
      data: {
        search: e.target.dataset.value,
        cid:that.data.cid,
        bid: that.data.bid,
        price:that.data.price,
        keyword:that.data.keyword
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          list: res.data.list,
          cname:res.data.cname
        })
      }
    })
  },
  brandClick(e) {
    console.log(e.target.dataset.bid)
    this.setData({
      brandNum: e.target.dataset.id,
      tabValue02: e.target.dataset.value,
      lisHidden:false
    });
    var bid = e.target.dataset.bid;
    var that = this;
    that.setData({
      bid: bid
    });
    wx.request({
      url: app.d.ceshiUrl + '/Api/product/dataList',
      method: 'post',
      data: {
        search: that.data.search,
        cid: that.data.cid,
        bid:bid,
        price:that.data.price,
        keyword: that.data.keyword
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if(res.data.status == 1){
          that.setData({
            list: res.data.list,
            cname: res.data.cname
          })
        }else{
          that.setData({
            list: res.data.list,
          })
          wx.showToast({
            title: res.data.err,
            duration:2000
          })
        }
       
      }
    })
  },
  priceClick (e) {
    console.log(e.target.dataset.value)
    this.setData({
      pricNum: e.target.dataset.id,
      tabValue03: e.target.dataset.value,
      lisHidden:false,
      price: e.target.value,
      tabValue01: '默认',
      search:'',
    });
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/product/dataList',
      method: 'post',
      data: {
        search: that.data.search,
        cid: that.data.cid,
        bid: that.data.bid,
        price: e.target.dataset.value,
        keyword: that.data.keyword
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            list: res.data.list,
            cname: res.data.cname
          })
        } else {
          that.setData({
            list: res.data.list,
          })
          wx.showToast({
            title: res.data.err,
            duration: 2000
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cid = options.cid;
    var that = this;
    that.setData({
      cid:cid
    });
    wx.request({
      url: app.d.ceshiUrl + '/Api/product/dataList',
      method: 'post',
      data: {
        cid:cid,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          list:res.data.list,
          cname:res.data.cname,
          brand:res.data.brand,
          ggtop:res.data.ggtop
        })
      }
    })
  },
  detail: function (e) {
    var pid = e.currentTarget.dataset.pid;
    wx.navigateTo({
      url: '../product/detail?productId=' + pid,
    })
  },
  sou: function (e) {
    var keyword = e.detail.value;
    this.setData({
      keyword: keyword
    });
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/product/dataList',
      method: 'post',
      data: {
        search: that.data.search,
        cid: that.data.cid,
        bid: that.data.bid,
        price: that.data.price,
        keyword: keyword
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            list: res.data.list,
          })
        } else {
          that.setData({
            list: res.data.list,
          })
          wx.showToast({
            title: res.data.err,
            duration: 2000
          })
        }
      }
    })
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

  loadData: function (e) {

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