var a = require("../../utils/wxcharts.js"), t = require("../cal/cal_grade.js"), e = (getApp(),
  null), i = null, n = null;

Page({
  data: {
    sex: ["男", "女"],
    sexIndex: 0,
    grade: ["大一", "大二", "大三", "大四"],
    gradeIndex: 0,
    height: 0,
    weight: 0,
    capacity: 0,
    sit_and_reach: 0,
    jump: 0,
    race_50: 0,
    race_long: 0,
    other: 0,
    canvasWidth: "0px",
    winWidth: 0,
    winHeight: 0,
    currentPage: 0,
    calGrade: 0,
    bmi: 0,
    time: "00:00",
    color: "grey",
    modalhidden: !0
  },
  onLoad: function (a) {
    var t, e, i = this;
    try {
      var s = wx.getSystemInfoSync();
      t = s.windowWidth, e = s.windowHeight, this.setData({
        canvasWidth: t / 2 + "px",
        winWidth: t,
        winHeight: e
      });
    } catch (a) {
      console.error("getSystemInfoSync failed!");
    }
    this.drawGradeCircle(), this.drawBMICircle(); 
    // wx.createRewardedVideoAd && ((n = wx.createRewardedVideoAd({
    //   adUnitId: "adunit-67cba6d19be81f31"
    // })).onError(function (a) { }), n.onClose(function (a) {
    //   a && a.isEnded || void 0 === a ? i.calGrade() : wx.showModal({
    //     title: "提示",
    //     content: "Sorry...您需要看完视频才能计算最后成绩～",
    //     confirmText: "盘它",
    //     cancelText: "劳资就不",
    //     success: function (a) {
    //       a.confirm && n.load().then(function () {
    //         return n.show();
    //       }).catch(function (a) {
    //         return console.log(a.errMsg);
    //       });
    //     }
    //   });
    // }));
  },
  calGrade: function () {
    var a = new t(this.data.sexIndex, this.data.gradeIndex, this.data.height, this.data.weight, this.data.capacity, this.data.sit_and_reach, this.data.jump, this.data.race_50, this.data.other, this.data.race_long).getCalGrade();
    this.setData({
      calGrade: parseInt(a.calGrade),
      bmi: a.bmiunit
    }), this.drawGradeCircle(), this.drawBMICircle();
  },
  onShareAppMessage: function () {
    return {
      title: "点击算算我的体测成绩🏃‍",
      desc: "点击算算我的体测成绩🏃‍",
      path: "pages/index/index"
    };
  },
  shareApp: function () {
    wx.showModal({
      title: "提示",
      content: "点击右上角转发👆👆👆",
      showCancel: !1,
      confirmText: "好的",
      confirmColor: "#3CC51F",
      success: function (a) { },
      fail: function (a) { },
      complete: function (a) { }
    });
  },
  bindSexChange: function (a) {
    console.log("性别改变为" + a.detail.value), this.setData({
      sexIndex: a.detail.value,
      other: 0
    }), this.calGrade();
  },
  bindGradeChange: function (a) {
    console.log("年级改变为", a.detail.value), this.setData({
      gradeIndex: a.detail.value
    }), this.calGrade();
  },
  heightOnBindBlur: function (a) {
    console.log(a.detail.value), isNaN(parseFloat(a.detail.value)) ? this.setData({
      height: 0
    }) : this.setData({
      height: parseInt(a.detail.value)
    }), this.calGrade();
  },
  weightOnBindBlur: function (a) {
    isNaN(parseFloat(a.detail.value)) ? this.setData({
      weight: 0
    }) : this.setData({
      weight: parseInt(a.detail.value)
    }), this.calGrade();
  },
  capacityOnBindBlur: function (a) {
    isNaN(parseFloat(a.detail.value)) ? this.setData({
      capacity: 0
    }) : this.setData({
      capacity: parseInt(a.detail.value)
    }), this.calGrade();
  },
  sit_and_reachOnBindBlur: function (a) {
    isNaN(parseFloat(a.detail.value)) ? this.setData({
      sit_and_reach: 0
    }) : this.setData({
      sit_and_reach: a.detail.value
    }), this.calGrade();
  },
  jumpOnBindBlur: function (a) {
    isNaN(parseFloat(a.detail.value)) ? this.setData({
      jump: 0
    }) : this.setData({
      jump: a.detail.value
    }), this.calGrade();
  },
  race_50OnBindBlur: function (a) {
    isNaN(parseFloat(a.detail.value)) ? this.setData({
      race_50: 0
    }) : this.setData({
      race_50: a.detail.value
    }), this.calGrade();
  },
  otherOnBindBlur: function (a) {
    isNaN(parseFloat(a.detail.value)) ? this.setData({
      other: 0
    }) : this.setData({
      other: a.detail.value
    }), console.log("aaaaaaaaaaaaaaaaaaaaaaaa" + this.data.other), this.calGrade();
  },
  bindTimeChange: function (a) {
    console.log(n);
    var t = this;
    this.setData({
      time: a.detail.value
    });
    var e = a.detail.value.split(":"), i = parseInt(60 * e[0]) + parseInt(e[1]);
    this.setData({
      race_long: i
    });
    //  wx.showModal({
    //   title: "提示",
    //   content: "您需要观看一段视频才能计算最后成绩～",
    //   confirmText: "盘它",
    //   cancelText: "劳资就不",
    //   success: function (a) {
    //     a.confirm && (t.calGrade(), n.show().catch(function (a) {
    //       n.load().then(function () {
    //         return n.show();
    //       });
    //     }));
    //   }
    // });
  },
  drawGradeCircle: function () {
    console.log(this.data.calGrade);
    var t = this.data.calGrade, i = 100 - this.data.calGrade;
    e = new a({
      animation: !0,
      canvasId: "gradeCanvas",
      type: "ring",
      extra: {
        ringWidth: 10,
        pie: {
          offsetAngle: -90
        }
      },
      title: {
        name: "" + t,
        color: "#7cb5ec",
        fontSize: 25
      },
      subtitle: {
        name: "成绩",
        color: "#666666",
        fontSize: 20
      },
      series: [{
        name: "",
        data: t,
        stroke: !1
      }, {
        name: "",
        data: i,
        stroke: !1
      }],
      disablePieStroke: !1,
      width: this.data.winWidth / 2,
      height: 200,
      dataLabel: !1,
      legend: !1,
      padding: 0
    });
  },
  drawBMICircle: function () {
    var t, e;
    0 == this.data.height || 0 == this.data.weight ? (t = 1, e = 1) : (t = this.data.height,
      e = this.data.weight), i = null, i = new a({
        animation: !1,
        canvasId: "BMICanvas",
        type: "ring",
        extra: {
          ringWidth: 10,
          pie: {
            offsetAngle: -90
          }
        },
        title: {
          name: "" + this.data.bmi,
          color: "#7cb5ec",
          fontSize: 25
        },
        subtitle: {
          name: "BMI",
          color: "#666666",
          fontSize: 20
        },
        series: [{
          name: "",
          data: e,
          stroke: !1
        }, {
          name: "",
          data: t,
          stroke: !1
        }],
        disablePieStroke: !1,
        width: this.data.winWidth / 2,
        height: 200,
        dataLabel: !1,
        legend: !1,
        padding: 0
      });
  },
  touchHandler: function (a) {
    wx.showModal({
      title: "身体质量指数(BMI)",
      content: "体质指数(BMI)=体重(kg)÷身高^2(m)\n过轻：低于18.5\n正常：18.5-23.9\n过重：24-27\n肥胖：28-32\n",
      showCancel: !1,
      confirmText: "我知道了",
      confirmColor: "#3CC51F",
      success: function (a) { },
      fail: function (a) { },
      complete: function (a) { }
    });
  },
  bindconfirm: function (a) {
    this.setData({
      modalhidden: !0
    });
  },
  iconTap: function (a) {
    this.setData({
      color: " #3667ec"
    });
  },
  iconTouchCancle: function (a) {
    console.log(a), this.setData({
      color: "grey"
    });
  },
});