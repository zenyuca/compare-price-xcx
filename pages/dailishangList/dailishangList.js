//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    let title = '供应商信息'
    console.log(app.globalData.loginInfo.role)
    if (app.globalData.loginInfo.role === 0) {
      title = '我的信息'
    }
    wx.setNavigationBarTitle({
      title
    })
  }
})
