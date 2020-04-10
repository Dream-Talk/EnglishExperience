// pages/dairy/dairy.js
var Bmob = require('../../utils/Bmob-1.6.7.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
   txt : '',
   hidden:false,
   mytxt:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var objectId = options.objectId;
    var tableName = options.tableName;
    const query = Bmob.Query(tableName);
    query.get(objectId).then(res => {
      that.setData({ txt: res });
    }).catch(err => {
      console.log(err)
    })

  },
  hide:function(){
    if (this.data.hidden == false) {
      this.setData({
        hidden:true
      });
    } else {
      this.setData({
        hidden:false
      });
    }
  
  },
save:function(e){
this.data.mytxt=e.detail.value
},
clear:function(){
this.setData({
  mytxt:''
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
    var info = wx.getStorageSync('txt')
    console.log(info);
    this.setData({
      mytxt: info
    });
   
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
    console.log(this.data.mytxt);
  wx.setStorageSync('txt',this.data.mytxt)
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