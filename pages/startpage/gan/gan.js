//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    startInfo: [],
    endTime: ''
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
    wx.setNavigationBarTitle({
      title: '干杂投标信息'
    })
    let info = {
      startInfo: app.globalData.startInfo
    }
    if (app.globalData.startEndTime) {
      info.endTime = new Date(app.globalData.startEndTime).Format('yyyy-MM-dd hh:mm:ss')
    }
    this.setData(info)
  }
})
