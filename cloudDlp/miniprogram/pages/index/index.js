//index.js
//获取应用实例
// const app = getApp();
// const IMGURL = app.globalData.imgUrl;
// const WXURL = app.globalData.wxUrl;

Page({
  data: {
    duration: 1000,
    interval: 3000,
    indicatorColor: '#fff',
    indicatorActiveColor: '#d1a87a',
    autoplay: true,
    circular: true,
    indicatorDots: true,
    swiperItems: [
      'https://www.cuit.edu.cn/Images/Slide/2019_04_29_10_36_09_3609.jpg',
      'https://www.cuit.edu.cn/Images/Slide/2019_06_19_15_12_23_1223.jpg',
      'https://www.cuit.edu.cn/Images/Slide/2019_06_19_09_48_07_4807.jpg',
      'https://www.cuit.edu.cn/Images/Slide/2019_06_18_10_40_15_4015.jpg'
    ]
  },
  
  onLoad: function () {
    // this.getAdvs();
    // this.getDecorate();
  },
  // getAdvs() {
  //   var that =this;
  //   wx.request({
  //     url: WXURL + 'ad/index',
  //     success: (res)=> {
  //       that.setData({
  //         advs: res.data.data
  //       })
  //     }
  //   })
  // },
  // getDecorate() {
  //   var that = this;
  //   wx.request({
  //     url: WXURL + 'article/index_show',
  //     success: (res) => {
  //       that.setData({
  //         decorate: res.data.data
  //       })
  //     }
  //   })
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
