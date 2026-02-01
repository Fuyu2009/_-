// multiple_intelligence_questions.js - 多元智能测试完整题库

const MULTIPLE_INTELLIGENCE_QUESTIONS = [
    {
        id: 1,
        module: "语言智能",
        question: "喜欢模仿方言",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "语言智能第 1 题"
    },
    {
        id: 2,
        module: "语言智能",
        question: "有写日记的习惯",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "语言智能第 2 题"
    },
    {
        id: 3,
        module: "语言智能",
        question: "一有时间就会捧起一本书",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "语言智能第 3 题"
    },
    {
        id: 4,
        module: "语言智能",
        question: "善于和各种各样的人说话",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "语言智能第 4 题"
    },
    {
        id: 5,
        module: "语言智能",
        question: "总是能耐心地听别人讲述",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "语言智能第 5 题"
    },
    {
        id: 6,
        module: "语言智能",
        question: "写作时感到文思泉涌",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "语言智能第 6 题"
    },
    {
        id: 7,
        module: "语言智能",
        question: "对外语学习很感兴趣",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "语言智能第 7 题"
    },
    {
        id: 8,
        module: "语言智能",
        question: "和别人意见不同时总能说服别人",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "语言智能第 8 题"
    },
    {
        id: 9,
        module: "数学逻辑智能",
        question: "对各种物品的功能都了解得非常清楚",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "数学逻辑智能第 1 题"
    },
    {
        id: 10,
        module: "数学逻辑智能",
        question: "有掂量物品的习惯",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "数学逻辑智能第 2 题"
    },
    {
        id: 11,
        module: "数学逻辑智能",
        question: "喜欢做数学运算题",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "数学逻辑智能第 3 题"
    },
    {
        id: 12,
        module: "数学逻辑智能",
        question: "善于找出事物之间的逻辑关系",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "数学逻辑智能第 4 题"
    },
    {
        id: 13,
        module: "数学逻辑智能",
        question: "觉得数学公式比语言描述更容易理解",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "数学逻辑智能第 5 题"
    },
    {
        id: 14,
        module: "数学逻辑智能",
        question: "对什么问题都喜欢做出假设",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "数学逻辑智能第 6 题"
    },
    {
        id: 15,
        module: "数学逻辑智能",
        question: "思考问题时能进行层层推理",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "数学逻辑智能第 7 题"
    },
    {
        id: 16,
        module: "数学逻辑智能",
        question: "喜欢用抽象的符号代替语言文字描述",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "数学逻辑智能第 8 题"
    },
    {
        id: 17,
        module: "身体运动智能",
        question: "喜欢摆弄物体",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "身体运动智能第 1 题"
    },
    {
        id: 18,
        module: "身体运动智能",
        question: "能很好地保持身体平衡",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "身体运动智能第 2 题"
    },
    {
        id: 19,
        module: "身体运动智能",
        question: "手眼的配合很协调",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "身体运动智能第 3 题"
    },
    {
        id: 20,
        module: "身体运动智能",
        question: "对穿针线等精细活很在行",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "身体运动智能第 4 题"
    },
    {
        id: 21,
        module: "身体运动智能",
        question: "喜欢跑步、打球等体育项目",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "身体运动智能第 5 题"
    },
    {
        id: 22,
        module: "身体运动智能",
        question: "走路时步态轻盈",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "身体运动智能第 6 题"
    },
    {
        id: 23,
        module: "身体运动智能",
        question: "学东西时总喜欢亲自动手",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "身体运动智能第 7 题"
    },
    {
        id: 24,
        module: "身体运动智能",
        question: "每天总保持一定的运动量",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "身体运动智能第 8 题"
    },
    {
        id: 25,
        module: "空间智能",
        question: "对各种物品的形状颜色等很敏感",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "空间智能第 1 题"
    },
    {
        id: 26,
        module: "空间智能",
        question: "善于玩走迷宫的游戏",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "空间智能第 2 题"
    },
    {
        id: 27,
        module: "空间智能",
        question: "哪怕是第一次去的地方都不会搞错方向",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "空间智能第 3 题"
    },
    {
        id: 28,
        module: "空间智能",
        question: "能在交通拥挤的地方来去自如地穿梭前行",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "空间智能第 4 题"
    },
    {
        id: 29,
        module: "空间智能",
        question: "理解新学的事物时脑中会浮现一幅幅图像或场景",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "空间智能第 5 题"
    },
    {
        id: 30,
        module: "空间智能",
        question: "喜欢摄影或绘画",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "空间智能第 6 题"
    },
    {
        id: 31,
        module: "空间智能",
        question: "能独自设计一些图案或形状各异的物品",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "空间智能第 7 题"
    },
    {
        id: 32,
        module: "空间智能",
        question: "喜欢用坐标图等代替语言文字描述",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "空间智能第 8 题"
    },
    {
        id: 33,
        module: "音乐智能",
        question: "喜欢听各种各样的声音",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "音乐智能第 1 题"
    },
    {
        id: 34,
        module: "音乐智能",
        question: "每天都要有音乐陪伴",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "音乐智能第 2 题"
    },
    {
        id: 35,
        module: "音乐智能",
        question: "一首新曲子只要听几遍就能哼出来",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "音乐智能第 3 题"
    },
    {
        id: 36,
        module: "音乐智能",
        question: "善于捕捉各种曲调所表达的意义",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "音乐智能第 4 题"
    },
    {
        id: 37,
        module: "音乐智能",
        question: "喜欢购置大量的音源等音像资料",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "音乐智能第 5 题"
    },
    {
        id: 38,
        module: "音乐智能",
        question: "听到不同曲子时会有很多联想",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "音乐智能第 6 题"
    },
    {
        id: 39,
        module: "音乐智能",
        question: "只要听到音乐片段，就能说出它所蕴含的意义",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "音乐智能第 7 题"
    },
    {
        id: 40,
        module: "音乐智能",
        question: "能够弹奏乐器",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "音乐智能第 8 题"
    },
    {
        id: 41,
        module: "人际智能",
        question: "孝顺父母",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "人际智能第 1 题"
    },
    {
        id: 42,
        module: "人际智能",
        question: "与陌生人交谈都能有一见如故之感",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "人际智能第 2 题"
    },
    {
        id: 43,
        module: "人际智能",
        question: "有许多一直保持联系的朋友",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "人际智能第 3 题"
    },
    {
        id: 44,
        module: "人际智能",
        question: "善于同各种人打交道",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "人际智能第 4 题"
    },
    {
        id: 45,
        module: "人际智能",
        question: "在各种场合都会成为受人关注的对象",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "人际智能第 5 题"
    },
    {
        id: 46,
        module: "人际智能",
        question: "在同学中很有号召力",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "人际智能第 6 题"
    },
    {
        id: 47,
        module: "人际智能",
        question: "善于从别人的表情中揣摩其内心的想法",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "人际智能第 7 题"
    },
    {
        id: 48,
        module: "人际智能",
        question: "总能赢得大家的喜爱",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "人际智能第 8 题"
    },
    {
        id: 49,
        module: "自我认知智能",
        question: "对自己有一个适度的评价",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自我认知智能第 1 题"
    },
    {
        id: 50,
        module: "自我认知智能",
        question: "经常能保持心情愉快",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自我认知智能第 2 题"
    },
    {
        id: 51,
        module: "自我认知智能",
        question: "总为自己设定新的目标",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自我认知智能第 3 题"
    },
    {
        id: 52,
        module: "自我认知智能",
        question: "对人生有自己独特的见解",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自我认知智能第 4 题"
    },
    {
        id: 53,
        module: "自我认知智能",
        question: "喜欢一个人独立思考",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自我认知智能第 5 题"
    },
    {
        id: 54,
        module: "自我认知智能",
        question: "很清楚地知道自己的弱点",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自我认知智能第 6 题"
    },
    {
        id: 55,
        module: "自我认知智能",
        question: "总有很高的生活热情",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自我认知智能第 7 题"
    },
    {
        id: 56,
        module: "自我认知智能",
        question: "总能独当一面地完成任务",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自我认知智能第 8 题"
    },
    {
        id: 57,
        module: "自然认知智能",
        question: "对自然环境的变化很敏感",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自然认知智能第 1 题"
    },
    {
        id: 58,
        module: "自然认知智能",
        question: "了解各种植物的名称和特性",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自然认知智能第 2 题"
    },
    {
        id: 59,
        module: "自然认知智能",
        question: "喜欢到野外考察",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自然认知智能第 3 题"
    },
    {
        id: 60,
        module: "自然认知智能",
        question: "对生物链等问题感兴趣",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自然认知智能第 4 题"
    },
    {
        id: 61,
        module: "自然认知智能",
        question: "喜欢观察星座等天文现象",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自然认知智能第 5 题"
    },
    {
        id: 62,
        module: "自然认知智能",
        question: "经常搜集石头或其他标本",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自然认知智能第 6 题"
    },
    {
        id: 63,
        module: "自然认知智能",
        question: "对动物充满好奇，总想了解它们的习性",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自然认知智能第 7 题"
    },
    {
        id: 64,
        module: "自然认知智能",
        question: "喜欢到森林等自然环境中旅行",
        options: [
            { text: "很符合", score: 2 },
            { text: "不太符合", score: 1 },
            { text: "不知道", score: 0 },
            { text: "不符合", score: -1 }
        ],
        note: "自然认知智能第 8 题"
    }
];

// 清理所有选项文本，移除括号和分数
// 这是为了确保即使text字段中包含了分数，也会被移除
MULTIPLE_INTELLIGENCE_QUESTIONS.forEach(question => {
    question.options.forEach(option => {
        // 移除括号和括号内的所有内容（包括分数）
        option.text = option.text.replace(/（[^）]*）/, '');
        // 或者如果使用英文括号，使用下面的正则表达式
        // option.text = option.text.replace(/\([^)]*\)/, '');
    });
});

// 多元智能类型定义和职业对应表
const MULTIPLE_INTELLIGENCE_TYPES = [
    {
        type: "语言智能",
        features: "对语言的掌握和灵活运用能力突出",
        preferences: "文学、外语、历史、社会科学",
        careers: "作家、教师、演说家、律师、报社编辑、记者、外交人员、宣传人员"
    },
    {
        type: "数学逻辑智能",
        features: "擅长理解逻辑结构关系，推理和思维表达能力强",
        preferences: "数学、科学、经济学、软件",
        careers: "数学家、科学家、经济学家、工程师、计算机编程人员、金融分析师、统计员"
    },
    {
        type: "身体运动智能",
        features: "身体感知、协调、平衡能力出色",
        preferences: "舞蹈、戏剧影视表演、体育、烹饪",
        careers: "运动员、教练、健身指导员、舞蹈演员、厨师、手工艺人、机械维修师"
    },
    {
        type: "空间智能",
        features: "对色彩、形状、空间位置的感受和表达能力强",
        preferences: "绘画、工艺、摄影、雕塑",
        careers: "建筑设计师、画家、平面设计师、空中管制人员、棋手、雕塑家、摄影师、导航员"
    },
    {
        type: "音乐智能",
        features: "善于感受、辨别、记忆和表达音乐",
        preferences: "音乐、舞蹈",
        careers: "歌手、作曲家、指挥家、演奏家、音响师、舞蹈演员、音乐教师、音乐制作人"
    },
    {
        type: "人际智能",
        features: "能敏锐觉察和体验他人情绪、意图，善于沟通回应",
        preferences: "文学、心理学、社会学、政治",
        careers: "教师、临床医生、心理咨询师、销售人员、社会工作者、政治家、护士、人力资源专员"
    },
    {
        type: "自我认知智能",
        features: "具备较强的自我认识、洞察和反省能力",
        preferences: "心理学、文学、哲学、宗教",
        careers: "作家、心理治疗师、哲学家、职业规划师、心理咨询师、学术研究者"
    },
    {
        type: "自然认知智能",
        features: "能辨别动植物，敏锐感知自然界事物及变化",
        preferences: "天文、自然地理、环境、旅游",
        careers: "地质工作者、环保工作者、导游、生物学家、天文学家、气象工作者、农业技术员、生态研究员"
    }
];

// 计算多元智能测试结果
function calculateMultipleIntelligenceScores(answers) {
    // answers 格式：{ 题号: 选择的选项索引 }
    const moduleScores = {};
    
    // 初始化所有智能类型的分数为0
    MULTIPLE_INTELLIGENCE_TYPES.forEach(intelligence => {
        moduleScores[intelligence.type] = 0;
    });
    
    // 计算每个智能类型的总分
    for (const questionId in answers) {
        const question = MULTIPLE_INTELLIGENCE_QUESTIONS.find(q => q.id === parseInt(questionId));
        if (question) {
            const answerIndex = answers[questionId];
            if (answerIndex >= 0 && answerIndex < question.options.length) {
                const score = question.options[answerIndex].score;
                moduleScores[question.module] += score;
            }
        }
    }
    
    return moduleScores;
}

// 获取得分最高的智能类型
function getTopIntelligences(scores, count = 3) {
    const scoreArray = Object.entries(scores);
    scoreArray.sort((a, b) => b[1] - a[1]);
    return scoreArray.slice(0, count);
}

// 获取完整的智能类型详情
function getIntelligenceDetails(intelligenceType) {
    return MULTIPLE_INTELLIGENCE_TYPES.find(intelligence => intelligence.type === intelligenceType) || null;
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MULTIPLE_INTELLIGENCE_QUESTIONS,
        MULTIPLE_INTELLIGENCE_TYPES,
        calculateMultipleIntelligenceScores,
        getTopIntelligences,
        getIntelligenceDetails
    };
}

// 如果在浏览器环境中，添加到全局对象
if (typeof window !== 'undefined') {
    window.MultipleIntelligenceTestData = {
        questions: MULTIPLE_INTELLIGENCE_QUESTIONS,
        intelligenceTypes: MULTIPLE_INTELLIGENCE_TYPES,
        calculateMultipleIntelligenceScores: calculateMultipleIntelligenceScores,
        getTopIntelligences: getTopIntelligences,
        getIntelligenceDetails: getIntelligenceDetails
    };
}