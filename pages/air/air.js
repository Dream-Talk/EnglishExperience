// pages/air/air.js
var bmap = require('../../libs/bmap-wx.js'); 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentWeather:'',
    flu:'',
    forecast:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: '6CtT0tIaWrz7SMjoWLy7qSkp2Lf9VUey'
    });
    var fail = function (data) {
      console.log(查询失败)
    };
    var success = function (data) {

      console.log(data);
      var currentWeather = data.currentWeather[0];
      //感冒信息
      var flu = data.originalData.results[0].index[2];
      //未来三天的天气
      var forecast = new Array(3);
      for (var i = 0; i < 3; i++) {
        forecast[i] = data.originalData.results[0].weather_data[i + 1];
      }
      //配置数据
      that.setData({
        currentWeather: currentWeather,
        flu: flu,
        forecast: forecast
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  
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