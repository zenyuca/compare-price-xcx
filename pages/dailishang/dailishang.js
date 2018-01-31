//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
      username: 'yuca',
      linker: '李先生',
      linkPhone: '1110',
      email: '23424234@qq.com',
      wechat: '234242432424'
    }
  },
  onLoad: function () {
    let title = '供应商资料'
    if (app.globalData.loginInfo.role === 0) {
      title = '我的资料'
      this.setData({
        userInfo: app.globalData.loginInfo
      })
    }
    wx.setNavigationBarTitle({
      title
    })
  }
})
