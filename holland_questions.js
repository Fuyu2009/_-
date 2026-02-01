// holland_questions.js - 霍兰德职业兴趣测试完整题库
const HOLLAND_QUESTIONS = [
    {
        id: 1,
        question: "我喜欢把一件事情做完后再做另一件事",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "S",
        scoreRule: "选'否'得1分"
    },
    {
        id: 2,
        question: "在工作中我喜欢独自筹划，不愿受别人干涉",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "R",
        scoreRule: "选'是'得1分"
    },
    {
        id: 3,
        question: "在集体讨论中，我往往保持沉默",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "E",
        scoreRule: "选'否'得1分"
    },
    {
        id: 4,
        question: "我喜欢做戏剧、音乐、歌舞、新闻采访等方面的工作",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 5,
        question: "每次写信我都一挥而就，不再重复",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "C",
        scoreRule: "选'否'得1分"
    },
    {
        id: 6,
        question: "我经常不停地思考某一问题，直到想出正确的答案",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "I",
        scoreRule: "选'是'得1分"
    },
    {
        id: 7,
        question: "对别人借我的和我借别人的东西，我都能记得很清楚",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "C",
        scoreRule: "选'是'得1分"
    },
    {
        id: 8,
        question: "我喜欢抽象思维的工作，不喜欢动手的工作",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "I",
        scoreRule: "选'是'得1分"
    },
    {
        id: 9,
        question: "我喜欢成为人们注意的焦点",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 10,
        question: "我喜欢不时地夸耀一下自己取得的成就",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 11,
        question: "我曾经渴望有机会参加探险",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "E",
        scoreRule: "选'是'得1分"
    },
    {
        id: 12,
        question: "当我一个独处时，会感到更愉快",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "S",
        scoreRule: "选'否'得1分"
    },
    {
        id: 13,
        question: "我喜欢在做事情前，对此事情做出细致的安排",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "R",
        scoreRule: "选'是'得1分"
    },
    {
        id: 14,
        question: "我讨厌修理自行车、电器一类的工作",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "R",
        scoreRule: "选'否'得1分"
    },
    {
        id: 15,
        question: "我喜欢参加各种各样的聚会",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "S",
        scoreRule: "选'否'得1分"
    },
    {
        id: 16,
        question: "我愿意从事虽然工资少，但是比较稳定的职业",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "E",
        scoreRule: "选'否'得1分"
    },
    {
        id: 17,
        question: "音乐能使我陶醉",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 18,
        question: "我办事很少思前想后",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "C",
        scoreRule: "选'否'得1分"
    },
    {
        id: 19,
        question: "我喜欢经常请示上级",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "C",
        scoreRule: "选'是'得1分"
    },
    {
        id: 20,
        question: "我喜欢需要运用智力的游戏",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "I",
        scoreRule: "选'是'得1分"
    },
    {
        id: 21,
        question: "我很难做那种需要持续集中注意力的工作",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "I",
        scoreRule: "选'否'得1分"
    },
    {
        id: 22,
        question: "我喜欢亲自动手制作一些东西，从中得到乐趣",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "R",
        scoreRule: "选'是'得1分"
    },
    {
        id: 23,
        question: "我的动手能力很差",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "R",
        scoreRule: "选'否'得1分"
    },
    {
        id: 24,
        question: "和不熟悉的人交谈，对我来说毫无困难",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "E",
        scoreRule: "选'是'得1分"
    },
    {
        id: 25,
        question: "和别人谈判时，我总是很容易放弃自己的观点",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "E",
        scoreRule: "选'否'得1分"
    },
    {
        id: 26,
        question: "我很容易结识同性朋友",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "S",
        scoreRule: "选'是'得1分"
    },
    {
        id: 27,
        question: "对于社会问题，我通常持中庸的态度",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "S",
        scoreRule: "选'否'得1分"
    },
    {
        id: 28,
        question: "当我开始做一件事情后，即使碰到再多的困难，我也要执着地干下去",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "E",
        scoreRule: "选'是'得1分"
    },
    {
        id: 29,
        question: "我是一个沉静而不易动感情的人",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "C",
        scoreRule: "选'是'得1分"
    },
    {
        id: 30,
        question: "当我工作时，我喜欢避免干扰",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "I",
        scoreRule: "选'是'得1分"
    },
    {
        id: 31,
        question: "我的理想是当一名科学家",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "I",
        scoreRule: "选'是'得1分"
    },
    {
        id: 32,
        question: "与言情小说相比，我更喜欢推理小说",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "A",
        scoreRule: "选'否'得1分"
    },
    {
        id: 33,
        question: "有些人太霸道，有时明明知道他们是对的，我也要和他们对着干",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 34,
        question: "我爱幻想",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 35,
        question: "我总是主动地向别人提出自己的建议",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "E",
        scoreRule: "选'是'得1分"
    },
    {
        id: 36,
        question: "我喜欢使用榔头一类的工具",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "R",
        scoreRule: "选'是'得1分"
    },
    {
        id: 37,
        question: "我乐于解除别人的痛苦",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "S",
        scoreRule: "选'是'得1分"
    },
    {
        id: 38,
        question: "我更喜欢自己下了赌注的比赛或游戏",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "E",
        scoreRule: "选'是'得1分"
    },
    {
        id: 39,
        question: "我喜欢按部就班地完成要做的工作",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "C",
        scoreRule: "选'是'得1分"
    },
    {
        id: 40,
        question: "我希望能经常换不同的工作来做",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "C",
        scoreRule: "选'否'得1分"
    },
    {
        id: 41,
        question: "我总留有充裕的时间去赴约会",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "C",
        scoreRule: "选'是'得1分"
    },
    {
        id: 42,
        question: "我喜欢阅读自然科学方面的书籍和杂志",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "I",
        scoreRule: "选'是'得1分"
    },
    {
        id: 43,
        question: "如果掌握一门手艺并能以此为生，我会感到非常满意",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "R",
        scoreRule: "选'是'得1分"
    },
    {
        id: 44,
        question: "我曾渴望当一名汽车司机",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "R",
        scoreRule: "选'否'得1分"
    },
    {
        id: 45,
        question: "听别人谈'家中被盗'一类的事，很难引起我的同情",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "S",
        scoreRule: "选'否'得1分"
    },
    {
        id: 46,
        question: "如果待遇相同，我宁愿当商品推销员，而不愿当图书管理员",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "E",
        scoreRule: "选'是'得1分"
    },
    {
        id: 47,
        question: "我讨厌跟各类机械打交道",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "R",
        scoreRule: "选'否'得1分"
    },
    {
        id: 48,
        question: "我小时候经常把玩具拆开，把里面看个究竟",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "R",
        scoreRule: "选'否'得1分"
    },
    {
        id: 49,
        question: "当接受新任务后，我喜欢以自己的独特方法去完成它",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 50,
        question: "我有文艺方面的天赋",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 51,
        question: "我喜欢把一切安排得整整齐齐、井井有条",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "C",
        scoreRule: "选'是'得1分"
    },
    {
        id: 52,
        question: "我喜欢做一名教师",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "S",
        scoreRule: "选'是'得1分"
    },
    {
        id: 53,
        question: "和一群人在一起的时候，我总想不出恰当的话来说",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "S",
        scoreRule: "选'否'得1分"
    },
    {
        id: 54,
        question: "看情感影片时，我常禁不住眼圈红润",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "A",
        scoreRule: "选'是'得1分"
    },
    {
        id: 55,
        question: "我讨厌学数学",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "I",
        scoreRule: "选'否'得1分"
    },
    {
        id: 56,
        question: "在实验室里独自做实验会令我寂寞难耐",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "I",
        scoreRule: "选'否'得1分"
    },
    {
        id: 57,
        question: "对于急躁、爱发脾气的人，我仍能以礼相待",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "C",
        scoreRule: "选'是'得1分"
    },
    {
        id: 58,
        question: "遇到难解答的问题时，我常常放弃",
        options: [
            { text: "是", score: 0 },  // 选"是"得0分
            { text: "否", score: 1 }   // 选"否"得1分
        ],
        type: "I",
        scoreRule: "选'否'得1分"
    },
    {
        id: 59,
        question: "大家公认我是一名勤劳踏实、愿为大家服务的人",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "S",
        scoreRule: "选'是'得1分"
    },
    {
        id: 60,
        question: "我喜欢在人事部门工作",
        options: [
            { text: "是", score: 1 },  // 选"是"得1分
            { text: "否", score: 0 }   // 选"否"得0分
        ],
        type: "E",
        scoreRule: "选'是'得1分"
    }
];

// 霍兰德类型定义
const HOLLAND_TYPES = [
    { code: "R", name: "现实型", description: "具有顺从、坦率、谦虚、自然、坚毅、实际、有礼、害羞、稳健、节俭的特征" },
    { code: "I", name: "研究型", description: "具有分析、谨慎、批评、好奇、独立、聪明、内向、条理、谦逊、精确、理性、保守的特征" },
    { code: "A", name: "艺术型", description: "具有复杂、想象、冲动、独立、直觉、无秩序、情绪化、理想化、不顺从、有创意、富有表情、不重实际的特征" },
    { code: "S", name: "社会型", description: "具有合作、友善、慷慨、助人、仁慈、负责、圆滑、善社交、善解人意、说服他人、理想主义等特征" },
    { code: "E", name: "企业型", description: "具有冒险、野心、独断、冲动、乐观、自信、追求享受、精力充沛、善于社交、获取注意、知名度等特征" },
    { code: "C", name: "传统型", description: "具有顺从、谨慎、保守、自控、服从、规律、坚毅、实际、稳重、有效率等特征，但缺乏想象力" }
];

// 霍兰德职业匹配对照表
const HOLLAND_CAREER_MATCH = {
    "RIA": ["牙科技术员", "陶工", "建筑设计员", "模型工", "细木工"],
    "RIS": ["厨师", "护林员", "跳水员", "潜水员", "染色员", "电器修理工"],
    "RIE": ["工程技术人员", "家政经纪人", "计量员", "农民", "无线电修理工"],
    "RIC": ["接待员", "杂志保管员", "牙医助手"],
    "RAI": ["制作模型人员", "木工", "排版人员", "装订工"],
    "RSI": ["纺织工", "编织工", "农业学校教师", "职业课程教师"],
    "RSE": ["消防员", "交警", "警察", "门卫", "理发师", "清洁工"],
    "REI": ["轮船船长", "航海领航员", "轮船大副", "试管实验员"],
    "RES": ["旅馆服务员", "家畜饲养员", "渔民", "救生员", "登山导游"],
    "REC": ["抄水表员", "保姆", "实验室动物饲养员", "动物管理员"],
    "RCI": ["测量员", "勘测员", "仪表操作者", "农业工程技师"],
    "RCS": ["公共汽车驾驶员", "游泳池服务员", "裁缝", "建筑工人"],
    "RCE": ["打井工", "吊车驾驶员", "农场工人", "铲车司机"],
    "IRA": ["地理学家", "地质学家", "物理学家", "设计审核员", "气象员"],
    "IRS": ["流体物理学家", "食品科学家", "园艺学家", "植物学家"],
    "IRE": ["化验员", "化学工程师", "食品技师", "口腔科医生"],
    "IRC": ["飞行员", "物理实验室技师", "文献检查员", "工程技术员"],
    "IAR": ["人类学家", "天文学家", "化学家", "物理学家"],
    "IAS": ["心理学家", "哲学家", "内科医生", "数学家"],
    "ISR": ["生物学家", "视力矫正师", "牙科医生"],
    "ISE": ["营养学家", "饮食顾问", "火灾检查员"],
    "ISC": ["入殓师", "编目录者", "医学实验室技师"],
    "ISA": ["心理学家", "精神病学家", "护士"],
    "IES": ["细菌学家", "生理学家", "化学家", "地质专家", "药剂师"],
    "IEC": ["档案保管员", "保险统计员"],
    "ICR": ["质量检验技术员", "地质学技师", "工程师", "法官"],
    "AIR": ["建筑师", "画家", "摄影师", "绘图师", "雕刻家", "环境美化工"],
    "AIS": ["画家", "剧作家", "编辑", "评论家", "时装艺术大师"],
    "AIE": ["花匠", "皮衣设计师", "工业产品设计师", "剪影艺术家"],
    "ASI": ["美术教师", "歌星", "演奏家", "作家"],
    "ASE": ["戏剧导演", "舞蹈教师", "广告撰稿人", "报刊（或专栏）作者"],
    "AER": ["新闻摄影师", "电视摄影师", "艺术指导", "录音指导"],
    "AEI": ["音乐指挥人员", "舞台指导人员"],
    "AES": ["流行歌手", "舞蹈演员", "电影导演", "广播节目主持人"],
    "SRI": ["外科医师助手", "护理员"],
    "SRE": ["体育教师", "职业治疗师", "体育教练", "专业运动员"],
    "SRC": ["护理员", "护理助理", "医院勤杂工", "理发师"],
    "SIR": ["理疗员", "救护员", "手足病医生", "陪诊师"],
    "SIA": ["社会学家", "心理咨询师", "学校心理学家", "政治科学家"],
    "SIE": ["营养学家", "海关检查员", "安全检查员", "校长"],
    "SIC": ["描图员", "兽医助手", "诊所助理", "咨询人员"],
    "SER": ["体育教练", "游泳指导员"],
    "SEI": ["大学校长", "学院院长", "医院行政管理员", "历史学家"],
    "SEA": ["娱乐活动管理员", "国外服务办事员", "社会服务助理"],
    "SEC": ["社会活动家", "退伍军人服务人员", "工商会事务代表"],
    "SCE": ["部长助理", "福利机构职员", "生产协调人", "餐馆经理"],
    "ERI": ["建筑物管理员", "工业工程师", "护士长", "农场管理员"],
    "ERS": ["仓库管理员", "房屋管理员", "货栈监督管理员"],
    "ERC": ["邮政局长", "渔船船长", "机械操作领班", "木工领班"],
    "EIR": ["技术管理员", "杂志管理员"],
    "EIS": ["警官", "侦察员", "交通检验员", "安全咨询员", "合同管理者"],
    "EIC": ["专利代理人", "鉴定人", "运输服务检查员", "安全检查员"],
    "EAR": ["展览室管理员", "舞台管理员", "播音员", "驯兽师"],
    "EAS": ["法官", "律师", "公证人"],
    "ESR": ["家具销售员", "书店销售员", "公共汽车驾驶员", "护士长"],
    "ESI": ["博物馆管理员", "图书馆管理员", "超级市场管理员"],
    "ESA": ["博物馆馆长", "广告商", "导游", "空乘员", "船员"],
    "ESC": ["理发师", "裁判员", "行政管理员", "财政管理员", "售货员"],
    "ECI": ["银行行长", "审计员", "信用管理员", "地产管理员"],
    "ECS": ["信用办事员", "保险人员", "各类进货员", "海关服务经理"],
    "CRI": ["薄记员", "会计", "记时员", "铸造机操作工"],
    "CRS": ["仓库保管员", "档案管理员", "缝纫工", "讲述员", "收款员"],
    "CRE": ["标价员", "实验室工作者", "广告管理员", "电机装配工"],
    "CIR": ["校对员", "工程师", "检修计划员"],
    "CIS": ["保险顾问", "会计师", "估价员", "邮政检查员", "外贸检查员"],
    "CIE": ["统计员", "支票记录员", "订货员"],
    "CSR": ["运货代理商", "铁路职员", "交通检查员", "办公室通信员"],
    "CSA": ["秘书", "图书管理员", "办公室办事员"],
    "CSE": ["接待员", "通信员", "电话接线员", "卖票员", "旅馆服务员"],
    "CER": ["邮递员", "办公室办事员"],
    "CEI": ["推销员", "经济分析家"],
    "CES": ["银行会计", "记账员", "法人秘书", "司法辅助人员"]
};

// 计分规则解析
const HOLLAND_SCORING_RULES = {
    // 现实型(R)计分规则
    "R": {
        yes: [2, 13, 22, 36, 43],  // 选"是"得1分的题号
        no: [14, 23, 44, 47, 48]   // 选"否"得1分的题号
    },
    // 研究型(I)计分规则
    "I": {
        yes: [6, 8, 20, 30, 31, 42],  // 选"是"得1分的题号
        no: [21, 55, 56, 58]          // 选"否"得1分的题号
    },
    // 艺术型(A)计分规则
    "A": {
        yes: [4, 9, 10, 17, 33, 34, 49, 50, 54],  // 选"是"得1分的题号
        no: [32]                                  // 选"否"得1分的题号
    },
    // 社会型(S)计分规则
    "S": {
        yes: [26, 37, 52, 59],         // 选"是"得1分的题号
        no: [1, 12, 15, 27, 45, 53]    // 选"否"得1分的题号
    },
    // 企业型(E)计分规则
    "E": {
        yes: [11, 24, 28, 35, 38, 46, 60],  // 选"是"得1分的题号
        no: [3, 16, 25]                     // 选"否"得1分的题号
    },
    // 传统型(C)计分规则
    "C": {
        yes: [7, 19, 29, 39, 41, 51, 57],  // 选"是"得1分的题号
        no: [5, 18, 40]                    // 选"否"得1分的题号
    }
};

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HOLLAND_QUESTIONS,
        HOLLAND_TYPES,
        HOLLAND_CAREER_MATCH,
        HOLLAND_SCORING_RULES
    };
}

// 如果在浏览器环境中，添加到全局对象
if (typeof window !== 'undefined') {
    window.HollandTestData = {
        questions: HOLLAND_QUESTIONS,
        types: HOLLAND_TYPES,
        careerMatch: HOLLAND_CAREER_MATCH,
        scoringRules: HOLLAND_SCORING_RULES
    };
}