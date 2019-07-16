// pages/myPage/myPage.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: null,
    signIn: false,
    openID:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  getUserInfo: function(event) {
    var that = this;
    wx.getUserInfo({
      success(res) {
        that.setData({
          userinfo: res.userInfo
        })
        // console.log(that.data.userinfo)
        that.setData({
          signIn: true
        })
        wx.cloud.callFunction({
          name: 'login',
        }).then(res => {
          // console.log(res)
          that.setData({
            openID:res.result.event.userInfo.openId
          })
          // console.log(that.data.openID)
        }).catch(err => {
          console.log(err)
        })
      }
    })
  },

//跳转到我发布的信息页面
  myPublishEvent: function(event) {
    wx.navigateTo({
      url: 'myNews/myNews?openID='+this.data.openID,
    })
  },

//跳转到发布信息的页面
  publishInformation:function(event){
    // console.log(this.data.userinfo)
    wx.navigateTo({
      url: '../fill/fill?userInfo='+this.data.userinfo.avatarUrl+","+this.data.userinfo.nickName,
    })
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