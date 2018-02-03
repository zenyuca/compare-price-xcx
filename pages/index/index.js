//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loginInfo: {}
  },
  //事件处理函数
  noticePage: function() {
    wx.navigateTo({
      url: '../notice/notice'
    })
  },
  toResultPage: function () {
    wx.navigateTo({
      url: '../result/result'
    })
  },
  dailishangPage: function() {
    let url = ''
    if (this.data.loginInfo.role === 0) {
      url = '../dailishang/dailishang' 
    } else {
      url = '../dailishangList/dailishangList' 
    }
    wx.navigateTo({
      url
    })
  },
  onLoad: function () {
    this.setData({
      loginInfo: app.globalData.loginInfo
    })
    wx.setNavigationBarTitle({
      title: '欢迎' + this.data.loginInfo.name
      
    })
  }
})
