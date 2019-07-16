// pages/fill/fill.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: '',
    title:"",
    content:"",
    fileID:"",
    userHeadAndNickname:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options)
    this.setData({
      userHeadAndNickname:options.userInfo.split(",")
    })
  },

  inputEvent:function(event){
    
  },

  formSubmit:function(event){
    // console.log(event);
    var date = new Date();
    var publishDate = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
    db.collection('userMessage').add({
      data: {
        publishDate: publishDate,
        userHead: this.data.userHeadAndNickname[0],
        userName: this.data.userHeadAndNickname[1],
        title:event.detail.value.title,
        content:event.detail.value.content,
        contentPreview: event.detail.value.content.substring(0,20),
        fileID: this.data.fileID
      }
    }).then(res => {
      // console.log(res);
      wx.showToast({
        title: '提交成功',
      })
    }).catch(err => {
      // console.log(err);
      wx.showToast({
        icon: 'none',
        title: '提交失败',
      })
    })
  },

  uploadImage: function(event) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          tempFilePaths: tempFilePaths[0]
        })
        // console.log(that.data.tempFilePaths)
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + '.png',
          filePath: that.data.tempFilePaths, // 文件路径
        }).then(res => {
          // get resource ID
          // console.log(res.fileID)
          that.setData({
            fileID:res.fileID
          })
        }).catch(error => {
          // handle error
          console.log(error);
        })
      }
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