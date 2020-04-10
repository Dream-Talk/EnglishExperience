//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/swiper_1.png',
      '../../images/swiper_2.png',
      '../../images/swiper_3.png'
    ],
    //标题的icon
    icon1: '../../images/icon1.png',
    icon2: '../../images/icon2.png',
    icon3: '../../images/icon3.png',
    //swiper设置
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pointcolor:'#030303',
    spointcolor: '#FFF68F',
    //生活常用区的数据
    grids: [
     {
        name:'查单词',
        url:'../word/word',
        icon:'../../images/word.png',
     },
     
      {
        name: '查天气',
        url: '../air/air',
        icon: '../../images/air.png',
      },
        {
        name: 'BMI体脂计算器',
        url: '../BMI/BMI',
        icon: '../../images/pangzi.png',
      },

      {
        name: '体测估分',
        url: '../gym/gym',
        icon: '../../images/subject.png',
      },
      {
        name: '四六级估分',
        url: '../estimate/estimate',
        icon: '../../images/estimate.png',
      },
      {
        name: '表白墙',
        url: '表白墙',
        icon: '../../images/love.jpg',
      },
      {
        name: '电影综艺',
        url: '电影综艺',
        icon: '../../images/goods.png',
      },
    ],
  },
  instruction:function(){
    wx.navigateTo({
      url: '../instruction/instruction',
    })
  },
  onShareAppMessage:function(ops){
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '嘿,分享你一个可以估分的神器',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  },
  /**
   * 点击对应图标
   */
  moveto:function(e){
    let url = e.currentTarget.dataset.url;
    if(url=='电影综艺'){
     wx.navigateToMiniProgram({
       appId: 'wx460ecc8cab518299',
     })
    }else if(url=='表白墙'){
      wx.navigateToMiniProgram({
        appId: 'wx6d421803b8749228',
      })
      }else{
      wx.navigateTo({
        url: url,
      })
    }
  }
})

  

