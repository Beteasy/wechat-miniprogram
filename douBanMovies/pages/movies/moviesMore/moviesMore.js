// pages/movies/moviesMore/moviesMore.js

var app = getApp();
var utils = require("../../../utils/util.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    totalMovies:[],
    nextIndex:0,
    isEmpty:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var categoryName = options.categoryName;
    var publicUrl = app.globalUrl.doubanUrl;
    var url = "";
    this.setData({
      categoryName: categoryName
    })
    switch (options.categoryName) {
      case "正在热映":
        var url = publicUrl + "/v2/movie/in_theaters";
        break;
      case "即将上映":
        var url = publicUrl + "/v2/movie/coming_soon";
        break;
      case "TOP250":
        var url = publicUrl + "/v2/movie/top250";
        break;
    }
    this.setData({
      url: url
    })
    utils.getMovieInfo(url, this.callback);
    wx.showNavigationBarLoading();
  },

  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    //上啦加载。url的起始位置需要变化
    var nextUrl = this.data.url+"?start="+this.data.nextIndex+"&count=20";
    utils.getMovieInfo(nextUrl,this.callback);
    wx.showNavigationBarLoading();
  },

  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    var refreshUrl = this.data.url;
    this.data.totalMovies = [];
    this.data.isEmpty = true;
    utils.getMovieInfo(refreshUrl, this.callback);
  },

  callback: function(res) {
    //处理数据
    var movies = [];
    var totalMovies = [];
    for (var index in res.subjects) {
      var subjectItem = res.subjects[index];
      var title = subjectItem.title;
      if (title.length > 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        title: title,
        movieImage: subjectItem.images.large,
        id: subjectItem.id,
      }
      movies.push(temp);
    }

    if(!this.data.isEmpty){
      totalMovies = this.data.movies.concat(movies);
    }
    else{
      totalMovies = movies;
      this.data.isEmpty = false;
    }

    this.setData({
      movies: totalMovies
    });
    this.data.nextIndex += 20;
    wx.hideNavigationBarLoading();
    console.log(movies);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.data.categoryName
    })
  },

  movieDetailEvent:function(event){
    var id = event.currentTarget.id;
    wx.navigateTo({
      url: '../../moviesDetail/moviesDetail?id='+id
    })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})