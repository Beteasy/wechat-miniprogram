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


//公共获取电影数据请求
function getMovieInfo(url, callback) {
  wx.request({
    url: url,
    method: "GET",
    header: {
      'content-type': 'application/xml' // 默认值
    },
    success(res) {
      // console.log(res);
      callback(res.data);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getMovieInfo: getMovieInfo
}

