// pages/lostAndFound/lostAndFoundDetail/lostAndFoundDetail.js

const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsData: null,
    userName: '',
    publishDate: '',
    newsTitle: '',
    newsContent: '',
    userHead: '',
    newsImage: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var that = this;
    // console.log("newsId")
    // console.log(options.newsId)
    db.collection("userMessage").where({
        _id: options.newsId
      }).get()
      .then(res => {
        // console.log(res)
        // console.log("get information")
        // console.log(res.data[0]);
        // var that = this
        this.setData({
          newsContent: res.data[0].content,
          newsImage:res.data[0].fileID,
          newsTitle: res.data[0].title,
          userHead: res.data[0].userHead,
          publishDate: res.data[0].publishDate,
          userName: res.data[0].userName,
          // newsData:res.data[0]
        })

        wx.setNavigationBarTitle({
          title: this.data.newsTitle
        })
      
      })
      .catch(err => {
        console.log(err);
      })
    // console.log("newsData")
    // console.log(this.data.newsData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})