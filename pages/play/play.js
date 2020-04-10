var md5js = require('../../utils/md5.min.js');
Page({
    onReady: function(t) {
        this.videoContext = wx.createVideoContext("myVideo");
    },
    inputValue: "",
    data: {
      src: "",
        form_info: "",
        danmuList: [ {
            text: "可来啦小老弟~[]~(￣▽￣)~*",
            color: "#ff0000",
            time: 1
        } ],
        adswitch: "0",
        adcode: ""
    },
    test:function(){
      
      var md = md5js("","","");
      console.log(md);
    wx.request({
      url: "http://api.ckflv.cn/json/url.php?vid=123456&id=http://www.le.com/ptv/vplay/31561846.html&type=letv&siteuser=&md5="+md+"&hd=&lg=",
      method: "get", 
      success:function(e){
        console.log(e);
      }
    })
    },
    onLoad: function(t) {
      this.test();
        // this.setData({
        //     src: t.src
        // });
    },
    bindInputBlur: function(t) {
        this.inputValue = t.detail.value;
    },
    bindSendDanmu: function() {
        this.videoContext.sendDanmu({
            text: this.inputValue,
            color: t()
        }), this.setData({
            form_info: ""
        });
    },
    bindPlay: function() {
        this.videoContext.play();
    },
    bindPause: function() {
        this.videoContext.pause();
    },
    videoErrorCallback: function(t) {
        console.log("视频错误信息:"), console.log(t.detail.errMsg);
    },
    navtofore:function(){
     wx.reLaunch({
       url: '../index/index',
    })
    }
});