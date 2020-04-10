// pages/englishsix/word.js
var Bmob = require('../../utils/Bmob-1.6.7.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numbersix: '',
    maxNumber: '1287',
    info: ''
  },
  //通过扇贝提供的api搜索该函数
  search: function (word) {
    this.setData({
      content: word
    })
    var that = this;
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word,
      data: {},
      method: 'GET',
      success: function (res) {

        that.setData({
          pron: res.data.data.pronunciations,
          pron_audio: res.data.data.audio_addresses,
          definition: res.data.data.definition,
        })
        var id = res.data.data.conent_id
        that.liju(id)
      },
      fail: function () { },
      complete: function () { }
    })

  },
  read: function (e) {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = e.target.id
    innerAudioContext.onPlay(() => { })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  moredefen: function () {

    this.setData({
      more: !(this.data.more)
    })
  },
  //触发例句函数
  liju(id) {
    var that = this
    wx.request({
      url: 'https://api.shanbay.com/bdc/example/?vocabulary_id=' + id,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          defen: [res.data.data[0], res.data.data[1], res.data.data[3], res.data.data[4]]
        })
        that.setData({
          bottomline: res.data.data[0].translation
        })
      },
      fail: function () { },
      complete: function () { }
    })

  },
  show: function () {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = this.data.pron_audio.uk[0]
    innerAudioContext.onPlay(() => { })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    this.setData({
      showNot: true,
      more: false
    })
  },
  pre:function(){
    var that = this;
    if (that.data.numbersix != 1) {

      that.data.numbersix = that.data.numbersix - 1;
      const query = Bmob.Query("WordSix");
      query.equalTo("id", "==", that.data.numbersix);
      query.find().then(res => {
        console.log(that.data.numbersix);
        console.log(res);
        that.setData({
          numbersix: that.data.numbersix,
          info: res[0].word,
          showNot: false
        });
        if (that.data.info != '') {
          that.search(that.data.info);
          wx.setStorageSync("_numbersix", this.data.numbersix);
        }
      });
    }
  },
  next: function () {
    var that = this;
    if (that.data.numbersix != that.data.maxNumber) {

      that.data.numbersix = that.data.numbersix + 1;
      const query = Bmob.Query("WordSix");
      query.equalTo("id", "==", that.data.numbersix);
      query.find().then(res => {
        console.log(that.data.numbersix);
        console.log(res);
        that.setData({
          numbersix: that.data.numbersix,
          info: res[0].word,
          showNot: false
        });
        if (that.data.info != '') {
          that.search(that.data.info);
          wx.setStorageSync("_numbersix", this.data.numbersix);
        }
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var _numbersix = wx.getStorageSync("_numbersix");
    if (_numbersix == '') {
      that.setData({
        numbersix: 1
      });
    } else {
      that.setData({
        numbersix: _numbersix
      });
    }
    const query = Bmob.Query("WordSix");
    query.equalTo("id", "==", that.data.numbersix);
    query.find().then(res => {

      console.log(res);
      that.setData({
        info: res[0].word,

      });
      console.log(that.data.info);
      if (that.data.info != '') {
        this.search(that.data.info);

      }
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
    wx.setStorageSync("_numbersix", this.data.numbersix);

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