const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var rootDocment = 'https://www.zenyuca.club';//你的域名  

function get(url, data, cb) {
  wx.request({
    url: rootDocment + url + '?appType=hlxt',
    data: data,
    method: 'get',
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.code === 200) {
        return typeof cb == "function" && cb(res.data)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      }
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}

function post(url, data, cb) {
  wx.request({
    url: rootDocment + url + '?appType=hlxt',
    data: data,
    method: 'post',
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}


module.exports = {
  formatTime: formatTime,
  get,
  post
}
