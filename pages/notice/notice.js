//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    notice: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '注意事项'
    })
    app.get('/rest/admin/get/configure/1', {}, (res) => {
      this.setData({
        notice: res.content
      })
    })
  }
})
