var e = {
    name: "体重指数",
    unit: "千克/米²",
    weight: .15,
    score: [ 100, 80, 80, 60 ],
    grade: [ "正常", "低体重", "超重", "肥胖" ],
    userInput: !1,
    performance: {
        male: {
            university: [ [ [ 17.9, 23.9 ], [ 0, 17.8 ], [ 24, 27.9 ], [ 28, 100 ] ], [ [ 17.9, 23.9 ], [ 0, 17.8 ], [ 24, 27.9 ], [ 28, 100 ] ], [ [ 17.9, 23.9 ], [ 0, 17.8 ], [ 24, 27.9 ], [ 28, 100 ] ], [ [ 17.9, 23.9 ], [ 0, 17.8 ], [ 24, 27.9 ], [ 28, 100 ] ] ]
        },
        female: {
            university: [ [ [ 17.2, 23.9 ], [ 0, 17.1 ], [ 24, 27.9 ], [ 28, 100 ] ], [ [ 17.2, 23.9 ], [ 0, 17.1 ], [ 24, 27.9 ], [ 28, 100 ] ], [ [ 17.2, 23.9 ], [ 0, 17.1 ], [ 24, 27.9 ], [ 28, 100 ] ], [ [ 17.2, 23.9 ], [ 0, 17.1 ], [ 24, 27.9 ], [ 28, 100 ] ] ]
        }
    }
};

module.exports = {
    bmiData: e
};