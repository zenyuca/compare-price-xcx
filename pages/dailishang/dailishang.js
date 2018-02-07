//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
    }
  },
  previewImg (e) {
    let url = e.currentTarget.dataset.url
    let imgArr = [url]
    wx.previewImage({
      current: imgArr[0],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function () {
    let title = '供应商资料'
    if (app.globalData.loginInfo.role === 0) {
      title = '我的资料'
      let userInfo = app.globalData.loginInfo
      app.get(`/rest/admin/find/remark/${userInfo.id}`, {}, res => {
        userInfo.remark = res
        if (res) {
          let i = 0
          for (let item of userInfo.remark) {
            item.seq = ++i
            item.createTime = new Date(item.createTime).Format('yyyy-MM-dd hh:mm:ss')
          }
        }
        this.setData({
          userInfo
        })
      })
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
