// pages/myPage/myNews/myNewsDetail/myNewsDetail.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    publishDate: '',
    newsTitle: '',
    newsContent: '',
    userHead: '',
    newsImage: '',
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("userMessage").where({
      _id: options.newsId
    }).get()
      .then(res => {
        console.log(res)
        this.setData({
          newsContent: res.data[0].content,
          newsImage: res.data[0].fileID,
          newsTitle: res.data[0].title,
          userHead: res.data[0].userHead,
          publishDate: res.data[0].publishDate,
          userName: res.data[0].userName,
          id:options.newsId
        })
        console.log(this.data.id)
      })
      .catch(err => {
        console.log(err);
      })
    wx.setNavigationBarTitle({
      title: this.data.newsTitle
    })
      
  },

  deleteButtonEvent:function(event){
    var  that = this;
    wx.showModal({
      title: '提示',
      content: '删除后此消息将不会被展示',
      success(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          // console.log(that.data.id)
          db.collection("userMessage").doc(that.data.id).remove({
            success: res => {
              wx.showToast({
                title: '删除成功',
              })
            },
            fail: err => {
              wx.showToast({
                icon: 'none',
                title: '删除失败',
              })
            }
          })
          //删除图片
          wx.cloud.deleteFile({
            fileList: [that.data.newsImage]
          }).then(res => {
            // handle success
            console.log(res.fileList)
          }).catch(error => {
            // handle error
            console.log("fialed")
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})