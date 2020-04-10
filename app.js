//app.js
var Bmob = require('./utils/Bmob-1.6.7.min.js');
Bmob.initialize("432b205103f7ea27d76500e76a2689b1", "4aa0a898474cad3c364233c105dff14a");
App({
  onLaunch: function () {
    //用户一键登录
    Bmob.User.auth().then(res => {
      // console.log(res)
       //this.objectID = res.objectId;
       this.globalData.objectID = res.objectId;
       console.log(res.objectId);
 

    }).catch(err => {
      console.log(err)
    });
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == 'function' && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == 'function' && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },
  //扇贝接口
  getInfo: function (words, cb) {
    const requestTask = wx.request({
      url: 'https://api.shanbay.com/bdc/search/',
      data: {
        word: words
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
      }
    })
  },
  getSen: function (wordsid, cb) {
    const requestTask = wx.request({
      url: 'https://api.shanbay.com/bdc/example/',
      data: {
        vocabulary_id: wordsid,
        "type": "sys"
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
      }
    })
  },































  
  //colorui全局颜色
  globalData: {
    objectID: '',
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
    ]
  }
})