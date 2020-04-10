// pages/estimate/estimate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_wrong:true,
    hidden_boder: false,
    hidden_result:true,
    isFore:true,
    totalScore1:'',
    scoreLisn1:'',
    scoreRD1:'',
    scoreTransWtr1:'',
    preScore1:'',
  },
  SetBorderSize(e) {
    var choose = e.detail.value;
    console.log(choose);
    
    if(choose=="fore"){
      this.setData({
       isFore:true,
      });
    }else{
      this.setData({
        isFore: false,
      });
    }
    console.log(this.data.isFore);
   
  },
  submit:function(e){
    var that = this;

    var inputLisn1 = e.detail.value.listen1;
    var inputLisn2 =  e.detail.value.listen2;
    var inputRD1   = e.detail.value.read1;
    var inputRD2   =  e.detail.value.read2;
    var inputRD3   = e.detail.value.read3;
    var inputTrans = e.detail.value.tran;
    var inputWtr   = e.detail.value.dairy;

    if (inputLisn1<0||inputLisn1>15||inputLisn1==""||inputLisn2<0||inputLisn2>10||inputLisn2==""||inputRD1<0||inputRD1>10||inputRD1==""||inputRD2<0||inputRD2>10||inputRD2==""||inputRD3<0||inputRD3>10||inputRD3==""||inputTrans<0||inputTrans>15||inputTrans==""||inputWtr<0||inputWtr>15||inputWtr==""){
     that.setData({
       hidden_wrong:false,
     });
      return null;
    }else{
     //先计算分数
     if(that.data.isFore){
     //四级结果计算
       getForeScore(inputLisn1, inputLisn2, inputRD1, inputRD2, inputRD3, inputTrans, inputWtr,that);
     }else{
     //六级结果结算
       getSixScore(inputLisn1, inputLisn2, inputRD1, inputRD2, inputRD3, inputTrans, inputWtr, that);

     }
    that.setData({
      hidden_wrong: true,
      hidden_boder:true,
      hidden_result:false,
    });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
var getForeScore = function (inputLisn1, inputLisn2, inputRD1, inputRD2, inputRD3, inputTrans, inputWtr,that){
   //每道题最多对的题数
   var maxLisn1 = 15;
   var maxLisn2 = 10;
   var maxRD1 = 10;
   var maxRD2 = 10;
   var maxRD3 = 10;
   var maxTrans = 15;
   var maxWtr = 15;
   //各部分基础分
   var topicsLisn1Score = 62;
   var topicsLisn2Score = 83;

   var topicsRD1Score = 21;
   var topicsRD2Score = 42;
   var topicsRD3Score = 84;
   var topicsTransScore = 64;
   var topicsWtrScore = 64;

   var scoreLisn1 = Math.round((parseFloat(inputLisn1) / parseInt(maxLisn1)) * topicsLisn1Score);
   var scoreLisn2 = Math.round((parseFloat(inputLisn2) / parseInt(maxLisn2)) * topicsLisn2Score);
   var scoreRD1 = Math.round((parseFloat(inputRD1) / parseInt(maxRD1)) * topicsRD1Score);
   var scoreRD2 = Math.round((parseFloat(inputRD2) / parseInt(maxRD2)) * topicsRD2Score);
   var scoreRD3 = Math.round((parseFloat(inputRD3) / parseInt(maxRD3)) * topicsRD3Score);
   var scoreTrans = Math.round((parseFloat(inputTrans) / parseInt(maxTrans)) * topicsTransScore);
   var scoreWtr = Math.round((parseFloat(inputWtr) / parseInt(maxWtr)) * topicsWtrScore);
  //分数修正!
  var scoreLisn = scoreLisn1 + scoreLisn2 + 100;
  var scoreRD = scoreRD1 + scoreRD2 + scoreRD3 + 100;
  var scoreTransWtr = scoreTrans + scoreWtr + 90;

  var totalScore = scoreLisn + scoreRD + scoreTransWtr;


  if (totalScore >= 600) {
    //            totalScore = Math.round(totalScore*0.93);
    scoreLisn = Math.round(scoreLisn * 0.93);
    scoreRD = Math.round(scoreRD * 0.93);
    scoreTransWtr = Math.round(scoreTransWtr * 0.93);
    totalScore = scoreLisn + scoreRD + scoreTransWtr;
  }
  else if (totalScore >= 500) {
    //            totalScore = Math.round(totalScore*0.88);
    scoreLisn = Math.round(scoreLisn * 0.88);
    scoreRD = Math.round(scoreRD * 0.88);
    scoreTransWtr = Math.round(scoreTransWtr * 0.88);
    totalScore = scoreLisn + scoreRD + scoreTransWtr;
  }
  else {
    //            totalScore = Math.round(totalScore*0.9);
    scoreLisn = Math.round(scoreLisn * 0.9);
    scoreRD = Math.round(scoreRD * 0.9);
    scoreTransWtr = Math.round(scoreTransWtr * 0.9);
    totalScore = scoreLisn + scoreRD + scoreTransWtr;
  }

  if (totalScore > 710) {
    totalScore = 710;
  }

  var totalScoreLow = totalScore - 15;
  var totalScoreHight = totalScore + 15;
  if ((totalScoreLow < 425 && totalScore > 425) || totalScoreLow < 290) {
    totalScoreLow = totalScore;
  }

  if (totalScoreHight > 710) {
    totalScoreHight = 710;
  }
  that.setData({
    totalScore1:totalScore-10,
    scoreLisn1:scoreLisn-5,
    scoreRD1:scoreRD-5,
    scoreTransWtr1:scoreTransWtr,
    preScore1:"*预估你当前水平在 " + totalScoreLow + " -" + totalScoreHight + "分",
  });
  

}
var getSixScore = function (inputLisn1, inputLisn2, inputRD1, inputRD2, inputRD3, inputTrans, inputWtr, that) {
  //每道题最多对的题数
  var maxLisn1 = 15;
  var maxLisn2 = 10;
  var maxRD1 = 10;
  var maxRD2 = 10;
  var maxRD3 = 10;
  var maxTrans = 15;
  var maxWtr = 15;
  //各部分基础分
  var topicsLisn1Score = 62;
  var topicsLisn2Score = 83;

  var topicsRD1Score = 21;
  var topicsRD2Score = 42;
  var topicsRD3Score = 84;
  var topicsTransScore = 64;
  var topicsWtrScore = 64;

  var scoreLisn1 = Math.round((parseFloat(inputLisn1) / parseInt(maxLisn1)) * topicsLisn1Score);
  var scoreLisn2 = Math.round((parseFloat(inputLisn2) / parseInt(maxLisn2)) * topicsLisn2Score);
  var scoreRD1 = Math.round((parseFloat(inputRD1) / parseInt(maxRD1)) * topicsRD1Score);
  var scoreRD2 = Math.round((parseFloat(inputRD2) / parseInt(maxRD2)) * topicsRD2Score);
  var scoreRD3 = Math.round((parseFloat(inputRD3) / parseInt(maxRD3)) * topicsRD3Score);
  var scoreTrans = Math.round((parseFloat(inputTrans) / parseInt(maxTrans)) * topicsTransScore);
  var scoreWtr = Math.round((parseFloat(inputWtr) / parseInt(maxWtr)) * topicsWtrScore);
  //分数修正!
  var scoreLisn = scoreLisn1 + scoreLisn2 + 100;
  var scoreRD = scoreRD1 + scoreRD2 + scoreRD3 + 100;
  var scoreTransWtr = scoreTrans + scoreWtr + 90;

  var totalScore = scoreLisn + scoreRD + scoreTransWtr;


  if (totalScore >= 600) {
    //            totalScore = Math.round(totalScore*0.93);
    scoreLisn = Math.round(scoreLisn * 0.93);
    scoreRD = Math.round(scoreRD * 0.93);
    scoreTransWtr = Math.round(scoreTransWtr * 0.93);
    totalScore = scoreLisn + scoreRD + scoreTransWtr;
  }
  else if (totalScore >= 500) {
    //            totalScore = Math.round(totalScore*0.88);
    scoreLisn = Math.round(scoreLisn * 0.88);
    scoreRD = Math.round(scoreRD * 0.88);
    scoreTransWtr = Math.round(scoreTransWtr * 0.88);
    totalScore = scoreLisn + scoreRD + scoreTransWtr;
  }
  else {
    //            totalScore = Math.round(totalScore*0.9);
    scoreLisn = Math.round(scoreLisn * 0.9);
    scoreRD = Math.round(scoreRD * 0.9);
    scoreTransWtr = Math.round(scoreTransWtr * 0.9);
    totalScore = scoreLisn + scoreRD + scoreTransWtr;
  }

  if (totalScore > 710) {
    totalScore = 710;
  }

  var totalScoreLow = totalScore - 15;
  var totalScoreHight = totalScore + 15;
  if ((totalScoreLow < 425 && totalScore > 425) || totalScoreLow < 290) {
    totalScoreLow = totalScore;
  }

  if (totalScoreHight > 710) {
    totalScoreHight = 710;
  }
  that.setData({
    totalScore1: totalScore-5,
    scoreLisn1: scoreLisn-5,
    scoreRD1: scoreRD,
    scoreTransWtr1: scoreTransWtr,
    preScore1: "*预估你当前水平在 " + totalScoreLow + " -" + totalScoreHight + "分",
  });


}