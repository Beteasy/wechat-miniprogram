// pages/movies/movies.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var inTheaters = app.globalUrl.doubanUrl + "/v2/movie/in_theaters?start=0&&count=3";
    var comingSoon = app.globalUrl.doubanUrl + "/v2/movie/coming_soon?start=0&&count=3";
    var top250 = app.globalUrl.doubanUrl + "/v2/movie/top250?start=0&&count=3";
    this.getMovieInfo(comingSoon, this.callback, "inTheaters", "正在热映");
    this.getMovieInfo(inTheaters, this.callback, "comingSoon", "即将上映");
    this.getMovieInfo(top250, this.callback, "top250", "TOP250");
  },

  getMovieInfo: function(url, callback, category, categoryName) {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success(res) {
        // console.log(res);
        callback(res.data, category, categoryName);
      }
    })
  },

  callback: function(res, category, categoryName) {
    //处理数据
    var movies = [];
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

    var readyData = {};
    readyData[category] = {
      categoryName: categoryName,
      movies: movies
    }
    // console.log(readyData);
    this.setData(readyData);
  },

  moreTap: function(event) {
    var categoryName = event.currentTarget.dataset.categoryname;
    //console.log(event);
    wx.navigateTo({
      url: 'moviesMore/moviesMore?categoryName=' + categoryName,
    })
  },

  movieDetailEvent: function (event) {
    var movieid = event.currentTarget.movieid;
    console.log(event);
    wx.navigateTo({
      url: 'moviesDetail/moviesDetail?movieid=' + movieid
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
  onReachBottom: function(event) {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})