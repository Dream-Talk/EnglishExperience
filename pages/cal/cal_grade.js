var a, e, t, s, r, o, l, i, h, n, p, g = require("../data/bmi.js"), c = require("../data/capacity.js"), F = require("../data/pull_up.js"), f = require("../data/race_1000.js"), m = require("../data/race_50.js"), d = require("../data/race_800.js"), u = require("../data/sit_and_reach.js"), y = require("../data/situp.js"), _ = require("../data/standing_long_jump.js"), x = require("../data/common.js"), V = new Array(2), D = new Array(2), w = new Array(2), b = new Array(2), v = new Array(2), j = new Array(2), k = new Array(2);

V[0] = new Array(4), V[1] = new Array(4), D[0] = new Array(4), D[1] = new Array(4), 
w[0] = new Array(4), w[1] = new Array(4), b[0] = new Array(4), b[1] = new Array(4), 
v[0] = new Array(4), v[1] = new Array(4), j[0] = new Array(4), j[1] = new Array(4), 
k[0] = new Array(4), k[1] = new Array(4);

for (A = m.race_50Data.performance.female.university.length - 1; A >= 0; A--) V[1][A] = m.race_50Data.performance.female.university[A];

for (A = m.race_50Data.performance.male.university.length - 1; A >= 0; A--) V[0][A] = m.race_50Data.performance.male.university[A];

e = m.race_50Data.weight;

for (A = u.sit_and_reachData.performance.female.university.length - 1; A >= 0; A--) D[1][A] = u.sit_and_reachData.performance.female.university[A];

for (A = u.sit_and_reachData.performance.male.university.length - 1; A >= 0; A--) D[0][A] = u.sit_and_reachData.performance.male.university[A];

t = u.sit_and_reachData.weight;

for (A = _.standing_long_jumpData.performance.female.university.length - 1; A >= 0; A--) w[1][A] = _.standing_long_jumpData.performance.female.university[A];

for (A = _.standing_long_jumpData.performance.male.university.length - 1; A >= 0; A--) w[0][A] = _.standing_long_jumpData.performance.male.university[A];

s = _.standing_long_jumpData.weight;

for (A = d.race_800Data.performance.female.university.length - 1; A >= 0; A--) b[1][A] = d.race_800Data.performance.female.university[A];

for (A = f.race_1000Data.performance.male.university.length - 1; A >= 0; A--) b[0][A] = f.race_1000Data.performance.male.university[A];

r = f.race_1000Data.weight;

for (A = y.sit_upData.performance.female.university.length - 1; A >= 0; A--) v[1][A] = y.sit_upData.performance.female.university[A];

for (A = F.pull_upData.performance.male.university.length - 1; A >= 0; A--) v[0][A] = F.pull_upData.performance.male.university[A];

o = F.pull_upData.weight;

for (A = c.capacityData.performance.female.university.length - 1; A >= 0; A--) j[1][A] = c.capacityData.performance.female.university[A];

for (A = c.capacityData.performance.male.university.length - 1; A >= 0; A--) j[0][A] = c.capacityData.performance.male.university[A];

l = c.capacityData.weight;

for (A = g.bmiData.performance.female.university.length - 1; A >= 0; A--) k[1][A] = g.bmiData.performance.female.university[A];

for (var A = g.bmiData.performance.male.university.length - 1; A >= 0; A--) k[0][A] = g.bmiData.performance.male.university[A];

a = g.bmiData.score, g.bmiData.grade, i = g.bmiData.weight, h = x.commonData.score, 
module.exports = function(g, c, F, f, m, d, u, y, _, x) {
    this.sex = g, this.grade = c, this.height = F, this.weight = f, this.capacityVal = m, 
    this.sit_and_reachVal = d, this.jumpVal = u, this.race50Val = y, this.longRaceVal = x, 
    this.otherVal = _, this.getCalGrade = function() {
        console.log(V), console.log(D), console.log(w), console.log(j), console.log(k), 
        console.log("性别--------" + this.sex), console.log("50m-----" + this.race50Val), 
        console.log("年级-------" + this.grade), console.log("坐立前去-------" + this.sit_and_reachVal), 
        console.log("跳远-------" + this.jumpVal), console.log("长跑----------" + this.longRaceVal), 
        console.log("肺活量----------" + this.capacityVal), console.log("身高----------------" + this.height), 
        console.log("体重----------------" + this.weight), console.log("引体向上/仰卧起坐" + this.otherVal);
        for (var g = 0, c = 0; c <= V[this.sex][this.grade].length - 2 && 0 != parseFloat(this.race50Val); c++) {
            if (parseFloat(this.race50Val) > parseFloat(V[this.sex][this.grade][c]) && parseFloat(this.race50Val) <= parseFloat(V[this.sex][this.grade][c + 1])) {
                g += parseFloat(h[c + 1]) * parseFloat(e), console.log("50m" + parseFloat(h[c + 1]) * parseFloat(e));
                break;
            }
            if (parseFloat(this.race50Val) <= V[this.sex][this.grade][0]) {
                g += parseFloat(h[0]) * parseFloat(e), console.log("50m" + parseFloat(h[0]) * parseFloat(e));
                break;
            }
            if (parseFloat(this.race50Val) > V[this.sex][this.grade][V[this.sex][this.grade].length - 1]) {
                console.log("50m0");
                break;
            }
        }
        for (c = 0; c <= D[this.sex][this.grade].length - 2 && 0 != parseFloat(this.sit_and_reachVal); c++) {
            if (parseFloat(this.sit_and_reachVal) < parseFloat(D[this.sex][this.grade][c]) && parseFloat(this.sit_and_reachVal) >= parseFloat(D[this.sex][this.grade][c + 1])) {
                g += parseFloat(h[c + 1]) * parseFloat(t), console.log("坐体前屈" + parseFloat(h[c + 1]) * parseFloat(t));
                break;
            }
            if (parseFloat(this.sit_and_reachVal) >= D[this.sex][this.grade][0]) {
                g += parseFloat(h[0]) * parseFloat(t), console.log("坐体前屈" + parseFloat(h[0]) * parseFloat(t));
                break;
            }
            if (parseFloat(this.sit_and_reachVal) < D[this.sex][this.grade][D[this.sex][this.grade].length - 1]) {
                console.log("坐体前屈0");
                break;
            }
        }
        for (c = 0; c <= w[this.sex][this.grade].length - 2; c++) {
            if (parseFloat(this.jumpVal) < parseFloat(w[this.sex][this.grade][c]) && parseFloat(this.jumpVal) >= parseFloat(w[this.sex][this.grade][c + 1])) {
                g += parseFloat(h[c]) * parseFloat(s), console.log("跳远" + parseFloat(h[c]) * parseFloat(s));
                break;
            }
            if (parseFloat(this.jumpVal) >= w[this.sex][this.grade][0]) {
                g += parseFloat(h[0]) * parseFloat(s), console.log("跳远" + parseFloat(h[0]) * parseFloat(s));
                break;
            }
            if (parseFloat(this.jumpVal) < w[this.sex][this.grade][w[this.sex][this.grade].length - 1]) {
                console.log("跳远0");
                break;
            }
        }
        for (c = 0; c <= b[this.sex][this.grade].length - 2 && 0 != parseFloat(this.longRaceVal); c++) {
            if (parseFloat(this.longRaceVal) > parseFloat(b[this.sex][this.grade][c]) && parseFloat(this.longRaceVal) <= parseFloat(b[this.sex][this.grade][c + 1])) {
                g += parseFloat(h[c + 1]) * parseFloat(r), console.log("长跑" + parseFloat(h[c + 1]) * parseFloat(r));
                break;
            }
            if (parseFloat(this.longRaceVal) <= b[this.sex][this.grade][0]) {
                g += parseFloat(h[0]) * parseFloat(r), console.log("长跑" + parseFloat(h[0]) * parseFloat(r));
                break;
            }
            if (parseFloat(this.longRaceVal) > b[this.sex][this.grade][b[this.sex][this.grade].length - 1]) {
                console.log("长跑0");
                break;
            }
        }
        for (c = 0; c <= j[this.sex][this.grade].length - 2; c++) {
            if (parseFloat(this.capacityVal) < parseFloat(j[this.sex][this.grade][c]) && parseFloat(this.capacityVal) >= parseFloat(j[this.sex][this.grade][c + 1])) {
                g += parseFloat(h[c + 1]) * parseFloat(l), console.log("肺活量" + parseFloat(h[c + 1]) * parseFloat(l));
                break;
            }
            if (parseFloat(this.capacityVal) >= j[this.sex][this.grade][0]) {
                g += parseFloat(h[0]) * parseFloat(l), console.log("肺活量" + parseFloat(h[0]) * parseFloat(l));
                break;
            }
            if (parseFloat(this.capacityVal) < j[this.sex][this.grade][j[this.sex][this.grade].length - 1]) {
                console.log("肺活量0");
                break;
            }
        }
        if (0 == this.sex) for (console.log("男"), c = 0; c <= v[this.sex][this.grade].length - 2; c++) {
            if (parseFloat(this.otherVal) == parseFloat(v[this.sex][this.grade][c])) {
                g += parseFloat(h[c]) * parseFloat(o), console.log("引体向上/仰卧起坐" + parseFloat(h[c]) * parseFloat(o));
                break;
            }
            if (parseFloat(this.otherVal) >= v[this.sex][this.grade][0]) {
                g += parseFloat(h[0]) * parseFloat(o), console.log("引体向上/仰卧起坐" + parseFloat(h[0]) * parseFloat(o));
                break;
            }
            if (parseFloat(this.otherVal) < v[this.sex][this.grade][v[this.sex][this.grade].length - 1]) {
                console.log("引体向上/仰卧起坐0");
                break;
            }
        } else for (console.log("女"), c = 0; c <= v[this.sex][this.grade].length - 2; c++) {
            if (parseFloat(this.otherVal) <= parseFloat(v[this.sex][this.grade][c]) && parseFloat(this.otherVal) >= parseFloat(v[this.sex][this.grade][c + 1])) {
                g += parseFloat(h[c]) * parseFloat(o), console.log("引体向上/仰卧起坐" + parseFloat(h[c]) * parseFloat(o));
                break;
            }
            if (parseFloat(this.otherVal) >= v[this.sex][this.grade][0]) {
                g += parseFloat(h[0]) * parseFloat(o), console.log("引体向上/仰卧起坐" + parseFloat(h[0]) * parseFloat(o));
                break;
            }
            if (parseFloat(this.otherVal) < v[this.sex][this.grade][v[this.sex][this.grade].length - 1]) {
                console.log("引体向上/仰卧起坐0");
                break;
            }
        }
        for (n = 0 == this.height ? 0 : this.weight / Math.pow(this.height / 100, 2), console.log("BMI" + n), 
        c = 0; c <= k[this.sex][this.grade].length - 2 && 0 != parseFloat(n); c++) if (parseFloat(n) >= parseFloat(k[this.sex][this.grade][c][0]) && parseFloat(n) <= parseFloat(k[this.sex][this.grade][c][1])) {
            g += (p = a[c]) * i, console.log(p * i);
            break;
        }
        return console.log(g), g >= 100 && (g = 100), {
            calGrade: g,
            bmiunit: n.toFixed(1)
        };
    };
};