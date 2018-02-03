//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        type: 1,
        name: '菜品投标'
      },
      {
        type: 2,
        name: '肉类投标'
      },
      {
        type: 3,
        name: '干杂投标'
      },
      {
        type: 4,
        name: '冻品投标'
      }
    ]
  },
  //事件处理函数
  toUserInfoPage: function(event) {
    let type = event.currentTarget.dataset.type
    app.func.get(`/rest/export/find/tender/result/${type}`, {}, (res) => {
      if (!res) {
        wx.showToast({
          title: '暂无数据，请耐心等待……',
          icon: 'none',
          duration: 2000
        })
        return
      }
      let i = 0
      for (let item of res) {
        item.seq = ++i
      }
      app.globalData.resultInfo =  res
      let url = ''
      if (type === 2) {
        url = '../resultpage/rou/rou'
      } else if (type === 1) {
        url = '../resultpage/cai/cai'
      } else if (type === 3) {
        url = '../resultpage/gan/gan'
      } else if (type === 4) {
        url = '../resultpage/shui/shui'
      }
      if (url) {
        wx.navigateTo({
          url
        })
      }
    })
    
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '投标结果列表'
    })
  }
})
