//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    pwd: ''
  },
  changeUsername: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  changePwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    let role = 0
    if (this.data.username === '1') {
      role = 1
    }
    app.globalData.loginInfo = {
      username: this.data.username,
      pwd: this.data.pwd,
      role: role
    }
    
    app.func.req('/api/login', {
      name: this.data.username,
      pwd: this.data.pwd
    }, (res) => {
      if (res.errno === 0) {
        app.globalData.loginInfo = res.data
        console.log(app.globalData.loginInfo)
        wx.navigateTo({
          url: '../index/index'
        })
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '比价小程序'
    })
  }
})
