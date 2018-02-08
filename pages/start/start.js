//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        type: 1,
        name: '菜品招标'
      },
      {
        type: 2,
        name: '肉类招标'
      },
      {
        type: 3,
        name: '干杂招标'
      },
      {
        type: 4,
        name: '冻品招标'
      }
    ]
  },
  //事件处理函数
  toUserInfoPage: function(event) {
    let type = event.currentTarget.dataset.type
    app.get(`/rest/export/find/bj_export_detail_copy/${type}`, {}, (res) => {
      if (!res.data) {
        wx.showToast({
          title: '暂无数据，请耐心等待……',
          icon: 'none',
          duration: 2000
        })
        return
      }
      let i = 0
      for (let item of res.data) {
        item.seq = ++i
      }
      app.globalData.startInfo = res.data
      app.globalData.startEndTime = res.endTime
      let url = ''
      if (type === 2) {
        url = '../startpage/rou/rou'
      } else if (type === 1) {
        url = '../startpage/cai/cai'
      } else if (type === 3) {
        url = '../startpage/gan/gan'
      } else if (type === 4) {
        url = '../startpage/shui/shui'
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
      title: '招标信息列表'
    })
  }
})
