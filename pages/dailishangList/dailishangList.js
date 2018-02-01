//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    users: [
      {
        id: 1,
        name: 'uuca',
        linkman: 'Half'
      },
      {
        id: 2,
        name: '图小脚',
        linkman: '吐鲁番',
        mobile: '13412341234',
        email: '18489465646@qq.com',
        wecatId: '234242342343'
      }
    ]
  },
  //事件处理函数
  toUserInfoPage: function(event) {
    let id = event.currentTarget.dataset.id
    console.log(`id: ${id}`)
    for (let user of this.data.users) {
      if (id === user.id) {
        app.globalData.userInfo = user
        break;
      }
    }
    wx.navigateTo({
      url: '../dailishang/dailishang'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '供应商列表'
    })
    app.func.get('/rest/admin/find/agent', {}, (res) => {
      this.setData({
        users: res.data
      })
    })
  }
})
