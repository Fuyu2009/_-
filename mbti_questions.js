// mbti_questions.js - MBTI职业性格测试完整题库
const MBTI_QUESTIONS = [
    {
        id: 1,
        question: "当你要外出一整天，你会：",
        optionA: "计划要做什么和在什么时候做",
        optionB: "说去就去",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第一部分（感受/行为）"
    },
    {
        id: 2,
        question: "你认为自己是一个：",
        optionA: "随兴所至的人",
        optionB: "有条理的人",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第一部分（感受/行为）"
    },
    {
        id: 3,
        question: "假如你是一位老师，你会选教：",
        optionA: "以事实为主的课程",
        optionB: "涉及理论的课程",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第一部分（感受/行为）"
    },
    {
        id: 4,
        question: "你通常：",
        optionA: "与人容易混熟",
        optionB: "比较沉默或矜持",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第一部分（感受/行为）"
    },
    {
        id: 5,
        question: "一般来说，你和哪些人比较合得来？",
        optionA: "富有想象力的人",
        optionB: "现实的人",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第一部分（感受/行为）"
    },
    {
        id: 6,
        question: "你是否经常让：",
        optionA: "你的情感支配你的理智",
        optionB: "你的理智主宰你的情感",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第一部分（感受/行为）"
    },
    {
        id: 7,
        question: "处理许多事情时，你喜欢：",
        optionA: "凭兴所至行事",
        optionB: "按照计划行事",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第一部分（感受/行为）"
    },
    {
        id: 8,
        question: "你：",
        optionA: "容易让人了解",
        optionB: "难于让人了解",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第一部分（感受/行为）"
    },
    {
        id: 9,
        question: "按照流程做事：",
        optionA: "合你心意",
        optionB: "令你感到束缚",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第一部分（感受/行为）"
    },
    {
        id: 10,
        question: "当你要做一项特别的任务，你喜欢：",
        optionA: "开始前小心组织、计划",
        optionB: "边做边找需做什么",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第一部分（感受/行为）"
    },
    {
        id: 11,
        question: "在大多数情况下，你会选择：",
        optionA: "顺其自然",
        optionB: "按流程做事",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第一部分（感受/行为）"
    },
    {
        id: 12,
        question: "大多数人会说你是一个：",
        optionA: "重视自我隐私的人",
        optionB: "非常坦率开放的人",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第一部分（感受/行为）"
    },
    {
        id: 13,
        question: "你宁愿被人认为是一个：",
        optionA: "实事求是的人",
        optionB: "机灵的人",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第一部分（感受/行为）"
    },
    {
        id: 14,
        question: "在一大群人当中，通常是：",
        optionA: "你介绍大家认识",
        optionB: "别人介绍你",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第一部分（感受/行为）"
    },
    {
        id: 15,
        question: "你会跟哪些人做朋友？",
        optionA: "常提出新主意的",
        optionB: "脚踏实地的",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第一部分（感受/行为）"
    },
    {
        id: 16,
        question: "你倾向：",
        optionA: "重视感情多于逻辑",
        optionB: "重视逻辑多于感情",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第一部分（感受/行为）"
    },
    {
        id: 17,
        question: "你比较喜欢：",
        optionA: "坐观事情发展，然后做计划",
        optionB: "很早就做计划",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第一部分（感受/行为）"
    },
    {
        id: 18,
        question: "你喜欢花很多的时间：",
        optionA: "一个人独处",
        optionB: "和别人在一起",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第一部分（感受/行为）"
    },
    {
        id: 19,
        question: "与很多人在一起，你会：",
        optionA: "活力倍增",
        optionB: "心力交瘁",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第一部分（感受/行为）"
    },
    {
        id: 20,
        question: "你比较喜欢：",
        optionA: "很早把约会、社交聚集等事情安排妥当",
        optionB: "无拘无束，看当时有什么好玩就做什么",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第一部分（感受/行为）"
    },
    {
        id: 21,
        question: "计划一个旅程时，你喜欢：",
        optionA: "大部分时间都是跟着当天的感觉行事",
        optionB: "事先知道大部分的时间会做什么",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第一部分（感受/行为）"
    },
    {
        id: 22,
        question: "在社交聚会中，你：",
        optionA: "有时感到郁闷",
        optionB: "常常乐在其中",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第一部分（感受/行为）"
    },
    {
        id: 23,
        question: "你通常：",
        optionA: "和别人容易混熟",
        optionB: "趋向自处一隅",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第一部分（感受/行为）"
    },
    {
        id: 24,
        question: "哪些人会更吸引你？",
        optionA: "一个思维敏捷、非常聪颖的人",
        optionB: "实事求是、富有丰富常识的人",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第一部分（感受/行为）"
    },
    {
        id: 25,
        question: "在日常工作中，你会：",
        optionA: "喜欢处理迫使你分秒必争的突发事件",
        optionB: "通常预先计划，以免在压力下工作",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第一部分（感受/行为）"
    },
    {
        id: 26,
        question: "你认为别人一般：",
        optionA: "要花很长时间才认识你",
        optionB: "用很短的时间便认识你",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第一部分（感受/行为）"
    },
    {
        id: 27,
        question: "更符合你心意的是：",
        optionA: "注重隐私",
        optionB: "坦率开放",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第二部分（词语偏好）"
    },
    {
        id: 28,
        question: "更符合你心意的是：",
        optionA: "预先安排的",
        optionB: "无计划的",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第二部分（词语偏好）"
    },
    {
        id: 29,
        question: "更符合你心意的是：",
        optionA: "抽象",
        optionB: "具体",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第二部分（词语偏好）"
    },
    {
        id: 30,
        question: "更符合你心意的是：",
        optionA: "温柔",
        optionB: "坚定",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第二部分（词语偏好）"
    },
    {
        id: 31,
        question: "更符合你心意的是：",
        optionA: "思考",
        optionB: "感受",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第二部分（词语偏好）"
    },
    {
        id: 32,
        question: "更符合你心意的是：",
        optionA: "事实",
        optionB: "意念",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第二部分（词语偏好）"
    },
    {
        id: 33,
        question: "更符合你心意的是：",
        optionA: "冲动",
        optionB: "决定",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第二部分（词语偏好）"
    },
    {
        id: 34,
        question: "更符合你心意的是：",
        optionA: "热衷",
        optionB: "文静",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第二部分（词语偏好）"
    },
    {
        id: 35,
        question: "更符合你心意的是：",
        optionA: "内向",
        optionB: "外向",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第二部分（词语偏好）"
    },
    {
        id: 36,
        question: "更符合你心意的是：",
        optionA: "系统的",
        optionB: "随意的",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第二部分（词语偏好）"
    },
    {
        id: 37,
        question: "更符合你心意的是：",
        optionA: "理论",
        optionB: "肯定",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第二部分（词语偏好）"
    },
    {
        id: 38,
        question: "更符合你心意的是：",
        optionA: "敏感",
        optionB: "公正",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第二部分（词语偏好）"
    },
    {
        id: 39,
        question: "更符合你心意的是：",
        optionA: "令人信服",
        optionB: "感人的",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第二部分（词语偏好）"
    },
    {
        id: 40,
        question: "更符合你心意的是：",
        optionA: "声明",
        optionB: "概念",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第二部分（词语偏好）"
    },
    {
        id: 41,
        question: "更符合你心意的是：",
        optionA: "不受约束",
        optionB: "预先安排",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第二部分（词语偏好）"
    },
    {
        id: 42,
        question: "更符合你心意的是：",
        optionA: "矜持",
        optionB: "健谈",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第二部分（词语偏好）"
    },
    {
        id: 43,
        question: "更符合你心意的是：",
        optionA: "有条不紊",
        optionB: "不拘小节",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第二部分（词语偏好）"
    },
    {
        id: 44,
        question: "更符合你心意的是：",
        optionA: "意念",
        optionB: "实况",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第二部分（词语偏好）"
    },
    {
        id: 45,
        question: "更符合你心意的是：",
        optionA: "同情、怜悯",
        optionB: "远见",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第二部分（词语偏好）"
    },
    {
        id: 46,
        question: "更符合你心意的是：",
        optionA: "利益",
        optionB: "祝福",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第二部分（词语偏好）"
    },
    {
        id: 47,
        question: "更符合你心意的是：",
        optionA: "务实的",
        optionB: "理论的",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第二部分（词语偏好）"
    },
    {
        id: 48,
        question: "更符合你心意的是：",
        optionA: "朋友不多",
        optionB: "朋友众多",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第二部分（词语偏好）"
    },
    {
        id: 49,
        question: "更符合你心意的是：",
        optionA: "系统的",
        optionB: "即兴的",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第二部分（词语偏好）"
    },
    {
        id: 50,
        question: "更符合你心意的是：",
        optionA: "富有想象",
        optionB: "以事论事",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第二部分（词语偏好）"
    },
    {
        id: 51,
        question: "更符合你心意的是：",
        optionA: "亲切的",
        optionB: "客观的",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第二部分（词语偏好）"
    },
    {
        id: 52,
        question: "更符合你心意的是：",
        optionA: "客观的",
        optionB: "热情的",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第二部分（词语偏好）"
    },
    {
        id: 53,
        question: "更符合你心意的是：",
        optionA: "建造",
        optionB: "发明",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第二部分（词语偏好）"
    },
    {
        id: 54,
        question: "更符合你心意的是：",
        optionA: "文静",
        optionB: "爱合群",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第二部分（词语偏好）"
    },
    {
        id: 55,
        question: "更符合你心意的是：",
        optionA: "理论",
        optionB: "事实",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第二部分（词语偏好）"
    },
    {
        id: 56,
        question: "更符合你心意的是：",
        optionA: "富有同情心",
        optionB: "符合逻辑",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第二部分（词语偏好）"
    },
    {
        id: 57,
        question: "更符合你心意的是：",
        optionA: "具有分析力",
        optionB: "多愁善感",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第二部分（词语偏好）"
    },
    {
        id: 58,
        question: "更符合你心意的是：",
        optionA: "合情合理",
        optionB: "令人着迷",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第二部分（词语偏好）"
    },
    {
        id: 59,
        question: "当你要在一个星期内完成一个大项目，你在开始的时候会：",
        optionA: "把要做的不同工作依次列出",
        optionB: "马上动工",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第三部分（感受/行为）"
    },
    {
        id: 60,
        question: "在社交场合中，你经常会感到：",
        optionA: "与某些人很难打开话匣子或保持对话",
        optionB: "与多数人都能从容地畅谈",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第三部分（感受/行为）"
    },
    {
        id: 61,
        question: "要做许多人也做的事情，你比较喜欢：",
        optionA: "按照一般认可的方法做",
        optionB: "构想一个自己的想法",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第三部分（感受/行为）"
    },
    {
        id: 62,
        question: "你刚认识的朋友能否说出你的兴趣？",
        optionA: "马上可以",
        optionB: "要待他们真正了解你之后才可以",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第三部分（感受/行为）"
    },
    {
        id: 63,
        question: "你通常较喜欢的科目是：",
        optionA: "讲授概念和原则的",
        optionB: "讲授事实和数据的",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第三部分（感受/行为）"
    },
    {
        id: 64,
        question: "你认为哪个是较高的赞誉？",
        optionA: "一贯感性的人",
        optionB: "一贯理性的人",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第三部分（感受/行为）"
    },
    {
        id: 65,
        question: "你认为按照流程做事：",
        optionA: "有时是需要的，但一般来说你不太喜欢这样做",
        optionB: "大多数情况下是有好处的，而且是你喜欢做的",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第三部分（感受/行为）"
    },
    {
        id: 66,
        question: "和一群人在一起，你通常会：",
        optionA: "跟自己熟悉的人谈话",
        optionB: "参与大伙的谈话",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第三部分（感受/行为）"
    },
    {
        id: 67,
        question: "在社交聚会上，你会：",
        optionA: "说很多话的",
        optionB: "让别人多说话",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第三部分（感受/行为）"
    },
    {
        id: 68,
        question: "把周末要完成的事列成清单，这个主意会：",
        optionA: "合你意",
        optionB: "使你提不起劲",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第三部分（感受/行为）"
    },
    {
        id: 69,
        question: "你认为哪个是较高的赞誉？",
        optionA: "能干的",
        optionB: "富有同情心",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第三部分（感受/行为）"
    },
    {
        id: 70,
        question: "你通常喜欢：",
        optionA: "事先安排自己的社交活动",
        optionB: "随兴所至做事情",
        dimension: "J/P",
        scoreA: "J",
        scoreB: "P",
        part: "第三部分（感受/行为）"
    },
    {
        id: 71,
        question: "总的来说，要做一项大型工作时，你会：",
        optionA: "边做边想该做什么",
        optionB: "首先把工作按步细分",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第三部分（感受/行为）"
    },
    {
        id: 72,
        question: "你能否滔滔不绝地与人聊天？",
        optionA: "只限于跟自己有共同兴趣的人",
        optionB: "几乎跟任何人都可以",
        dimension: "E/I",
        scoreA: "I",
        scoreB: "E",
        part: "第三部分（感受/行为）"
    },
    {
        id: 73,
        question: "你会：",
        optionA: "用一些被证明有效的方法做事",
        optionB: "分析问题，并针对尚未解决的难题展开研究",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第三部分（感受/行为）"
    },
    {
        id: 74,
        question: "为乐趣而阅读时，你喜欢：",
        optionA: "奇特或创新的表达方式",
        optionB: "作者直话直说",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第三部分（感受/行为）"
    },
    {
        id: 75,
        question: "你愿意替哪一类人工作？",
        optionA: "天性淳良但常常前后不一",
        optionB: "言辞尖锐但永远合乎逻辑",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第三部分（感受/行为）"
    },
    {
        id: 76,
        question: "你做事多数是：",
        optionA: "按当天心情去做",
        optionB: "按照拟好的流程去做",
        dimension: "J/P",
        scoreA: "P",
        scoreB: "J",
        part: "第三部分（感受/行为）"
    },
    {
        id: 77,
        question: "你是哪种类型的人？",
        optionA: "可以和任何人从容地交谈",
        optionB: "只对某些人或在某种情况下才能畅所欲言",
        dimension: "E/I",
        scoreA: "E",
        scoreB: "I",
        part: "第三部分（感受/行为）"
    },
    {
        id: 78,
        question: "要做决定时，你认为比较重要的是：",
        optionA: "据事实衡量",
        optionB: "考虑他人的感受和意见",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第三部分（感受/行为）"
    },
    {
        id: 79,
        question: "更符合你心意的是：",
        optionA: "想象的",
        optionB: "真实的",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第四部分（词语偏好）"
    },
    {
        id: 80,
        question: "更符合你心意的是：",
        optionA: "仁慈慷慨的",
        optionB: "意志坚定的",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第四部分（词语偏好）"
    },
    {
        id: 81,
        question: "更符合你心意的是：",
        optionA: "公正的",
        optionB: "有关怀心",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第四部分（词语偏好）"
    },
    {
        id: 82,
        question: "更符合你心意的是：",
        optionA: "制作",
        optionB: "设计",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第四部分（词语偏好）"
    },
    {
        id: 83,
        question: "更符合你心意的是：",
        optionA: "可能性",
        optionB: "必然性",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第四部分（词语偏好）"
    },
    {
        id: 84,
        question: "更符合你心意的是：",
        optionA: "温柔",
        optionB: "力量",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第四部分（词语偏好）"
    },
    {
        id: 85,
        question: "更符合你心意的是：",
        optionA: "实际",
        optionB: "多愁善感",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第四部分（词语偏好）"
    },
    {
        id: 86,
        question: "更符合你心意的是：",
        optionA: "制造",
        optionB: "创造",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第四部分（词语偏好）"
    },
    {
        id: 87,
        question: "更符合你心意的是：",
        optionA: "新颖的",
        optionB: "已知的",
        dimension: "S/N",
        scoreA: "N",
        scoreB: "S",
        part: "第四部分（词语偏好）"
    },
    {
        id: 88,
        question: "更符合你心意的是：",
        optionA: "同情",
        optionB: "分析",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第四部分（词语偏好）"
    },
    {
        id: 89,
        question: "更符合你心意的是：",
        optionA: "坚持已见",
        optionB: "温柔、有爱心",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第四部分（词语偏好）"
    },
    {
        id: 90,
        question: "更符合你心意的是：",
        optionA: "具体的",
        optionB: "抽象的",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第四部分（词语偏好）"
    },
    {
        id: 91,
        question: "更符合你心意的是：",
        optionA: "全心投入",
        optionB: "有决心的",
        dimension: "T/F",
        scoreA: "F",
        scoreB: "T",
        part: "第四部分（词语偏好）"
    },
    {
        id: 92,
        question: "更符合你心意的是：",
        optionA: "能干",
        optionB: "仁慈",
        dimension: "T/F",
        scoreA: "T",
        scoreB: "F",
        part: "第四部分（词语偏好）"
    },
    {
        id: 93,
        question: "更符合你心意的是：",
        optionA: "实际",
        optionB: "创新",
        dimension: "S/N",
        scoreA: "S",
        scoreB: "N",
        part: "第四部分（词语偏好）"
    }
];

// MBTI类型定义和解释
const MBTI_TYPES = {
    "E": {
        name: "外向",
        description: "心理能量聚焦外部世界，热衷社交互动（如聚会、讨论），通过与人交往获取动力，关注自身对环境的影响。"
    },
    "I": {
        name: "内向",
        description: "心理能量聚焦内部世界，偏好独立思考（如阅读、独处），通过自我沉淀恢复精力，关注环境对自身的影响。"
    },
    "S": {
        name: "感觉",
        description: "倾向通过感官获取具体信息（如看到、听到的细节），注重事实和经验，喜欢运用已知技能处理事务。"
    },
    "N": {
        name: "直觉",
        description: "倾向关注事物整体趋势与潜在可能（如灵感、预测），重视想象力与独创力，喜欢探索新技能和未知领域。"
    },
    "T": {
        name: "思考",
        description: "决策时依赖逻辑分析与客观标准，注重事物间的因果关系，追求公正、理性的判断结果。"
    },
    "F": {
        name: "情感",
        description: "决策时重视自身与他人的感受，以价值观为判定核心，注重人际关系的和谐与善意。"
    },
    "J": {
        name: "判断",
        description: "偏好有计划、有条理的生活，喜欢提前制定方案并严格执行，重视结果与秩序。"
    },
    "P": {
        name: "感知",
        description: "偏好灵活、宽松的生活方式，适应力强，喜欢随情况调整目标，重视过程与多种选择。"
    }
};

// 16种MBTI性格类型核心特征与适配领域
const MBTI_PERSONALITY_TYPES = [
    {
        type: "ESTJ",
        name: "管家型",
        description: "实际果断、擅长组织、注重规则",
        suitableFields: "营销、服务、管理"
    },
    {
        type: "ESTP",
        name: "挑战者型",
        description: "灵活务实、行动导向、热爱体验",
        suitableFields: "贸易、金融、娱乐、体育"
    },
    {
        type: "ESFJ",
        name: "主人型",
        description: "热心负责、善于合作、重视和谐",
        suitableFields: "无明显领域限制，适配需人际协作的场景"
    },
    {
        type: "ESFP",
        name: "表演者型",
        description: "外向友好、适应力强、注重实用",
        suitableFields: "消费类商业、广告、旅游、社区服务"
    },
    {
        type: "ENTJ",
        name: "统帅型",
        description: "坦诚果断、领导力强、长于规划",
        suitableFields: "工商业、政界、金融投资、管理咨询"
    },
    {
        type: "ENTP",
        name: "智多星型",
        description: "反应敏捷、乐于创新、善于策略",
        suitableFields: "投资策划、市场营销、公共关系"
    },
    {
        type: "ENFJ",
        name: "教导型",
        description: "热情利他、善于激励、重视他人成长",
        suitableFields: "培训、教育、新闻传播、艺术"
    },
    {
        type: "ENFP",
        name: "公关型",
        description: "富有想象、热情灵活、擅长表达",
        suitableFields: "艺术、媒体、设计"
    },
    {
        type: "ISTJ",
        name: "检查员型",
        description: "安静严谨、责任心强、注重秩序",
        suitableFields: "工商业、政府机构、金融、医务"
    },
    {
        type: "ISTP",
        name: "冒险家型",
        description: "冷静务实、善于分析、行动力强",
        suitableFields: "技术、证券、贸易、户外运动"
    },
    {
        type: "ISFJ",
        name: "照顾者型",
        description: "温和体贴、忠诚勤勉、重视细节",
        suitableFields: "无明显领域限制，适配需细致服务的场景"
    },
    {
        type: "ISFP",
        name: "艺术家型",
        description: "敏感友善、注重当下、不喜冲突",
        suitableFields: "手工艺、艺术、医护、服务业"
    },
    {
        type: "INTJ",
        name: "专家型",
        description: "创新坚韧、洞察力强、要求严苛",
        suitableFields: "科研、科技应用、管理咨询、金融"
    },
    {
        type: "INTP",
        name: "学者型",
        description: "内向灵活、热衷思考、擅长分析",
        suitableFields: "计算机理论研究、学术、艺术"
    },
    {
        type: "INFJ",
        name: "博爱型",
        description: "洞察力强、坚守价值观、注重意义",
        suitableFields: "咨询、教育、科研、设计"
    },
    {
        type: "INFP",
        name: "哲学家型",
        description: "理想主义、善于理解、重视契合",
        suitableFields: "艺术、教育、研究、咨询"
    }
];

// 同分处理规则
const MBTI_TIE_RULES = {
    "E/I": "I",  // E=I 时，判定为 I（内向）
    "S/N": "N",  // S=N 时，判定为 N（直觉）
    "T/F": "F",  // T=F 时，判定为 F（情感）
    "J/P": "P"   // J=P 时，判定为 P（感知）
};

// 计算MBTI类型
function calculateMBTIType(scores) {
    // 计算每个维度的倾向
    const dimensions = [
        { pair: ["E", "I"], scores: [scores.E || 0, scores.I || 0] },
        { pair: ["S", "N"], scores: [scores.S || 0, scores.N || 0] },
        { pair: ["T", "F"], scores: [scores.T || 0, scores.F || 0] },
        { pair: ["J", "P"], scores: [scores.J || 0, scores.P || 0] }
    ];
    
    let result = "";
    
    dimensions.forEach(dim => {
        const [type1, type2] = dim.pair;
        const [score1, score2] = dim.scores;
        
        if (score1 > score2) {
            result += type1;
        } else if (score1 < score2) {
            result += type2;
        } else {
            // 同分情况，应用同分规则
            result += MBTI_TIE_RULES[`${type1}/${type2}`];
        }
    });
    
    return result;
}

// 获取MBTI类型详情
function getMBTITypeDetails(typeCode) {
    return MBTI_PERSONALITY_TYPES.find(t => t.type === typeCode) || null;
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MBTI_QUESTIONS,
        MBTI_TYPES,
        MBTI_PERSONALITY_TYPES,
        MBTI_TIE_RULES,
        calculateMBTIType,
        getMBTITypeDetails
    };
}

// 如果在浏览器环境中，添加到全局对象
if (typeof window !== 'undefined') {
    window.MBTITestData = {
        questions: MBTI_QUESTIONS,
        types: MBTI_TYPES,
        personalityTypes: MBTI_PERSONALITY_TYPES,
        tieRules: MBTI_TIE_RULES,
        calculateMBTIType: calculateMBTIType,
        getMBTITypeDetails: getMBTITypeDetails
    };
}