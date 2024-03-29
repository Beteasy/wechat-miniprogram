var newsData = require("../newsData/newsData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      newsData:newsData.newsData
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
    
  },

  navigateToDetail:function(event){
    // 不同的信息有不同的ID，跳转时需获取信息的ID，跳转到对应的详情页，但是所有信息都跳转到同一个详情页，只是不同的信息对应的详情不同
    var newsId = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'lostAndFoundDetail/lostAndFoundDetail?newsId='+newsId,
    })
  }
})