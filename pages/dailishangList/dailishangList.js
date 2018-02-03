//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    users: [
    ]
  },
  //事件处理函数
  toUserInfoPage: function(event) {
    let id = event.currentTarget.dataset.id
    app.func.get(`/rest/admin/find/remark/${id}`, {}, res => {
      for (let user of this.data.users) {
        if (id === user.id) {
          let i = 0
          for (let item of res) {
            item.seq = ++i
            item.createTime = new Date(item.createTime).Format('yyyy-MM-dd hh:mm:ss')
          }
          user.remark = res
          app.globalData.userInfo = user
          break;
        }
      }
      wx.navigateTo({
        url: '../dailishang/dailishang'
      })
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '代理商列表'
    })
    app.func.get('/rest/admin/find/agent', {}, (res) => {
      this.setData({
        users: res
      })
    })
  }
})
