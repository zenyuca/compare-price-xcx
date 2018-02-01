//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
    }
  },
  onLoad: function () {
    let title = '供应商资料'
    if (app.globalData.loginInfo.role === 0) {
      title = '我的资料'
      this.setData({
        userInfo: app.globalData.loginInfo
      })
      console.log(app.globalData.loginInfo)
    } else {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
    wx.setNavigationBarTitle({
      title
    })
  }
})
