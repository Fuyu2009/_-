// career_anchor_questions.js - 职业锚测试完整题库

const CAREER_ANCHOR_QUESTIONS = [
    {
        id: 1,
        question: "我希望做自己擅长的事，这样我的专业建议就会不断被采纳",
        type: "TF",
        description: "TF型（技术/职能型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 TF 型对应题号 1"
    },
    {
        id: 2,
        question: "当我整合并整理其他人的工作时，我非常有成就感",
        type: "GM",
        description: "GM型（管理型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 GM 型对应题号 2"
    },
    {
        id: 3,
        question: "我希望工作能够按自己的方式、自己的计划去开展",
        type: "AU",
        description: "AU型（自主/独立型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 AU 型对应题号 3"
    },
    {
        id: 4,
        question: "对我而言，安全与稳定比自由和自主更重要",
        type: "SE",
        description: "SE型（安全/稳定型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SE 型对应题号 4"
    },
    {
        id: 5,
        question: "我一直在寻找可以让我创立自己事业（公司）的创意（点子）",
        type: "EC",
        description: "EC型（创造/创业型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 EC 型对应题号 5"
    },
    {
        id: 6,
        question: "我认为只有对社会做出真正贡献的职业才算是成功的职业",
        type: "SV",
        description: "SV型（服务/奉献型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SV 型对应题号 6"
    },
    {
        id: 7,
        question: "在工作中，我希望去解决那些有挑战性的问题",
        type: "CH",
        description: "CH型（挑战型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 CH 型对应题号 7"
    },
    {
        id: 8,
        question: "我宁愿离开公司，也不愿从事需要个人和家庭做出一定牺牲的工作",
        type: "LS",
        description: "LS型（生活型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 LS 型对应题号 8"
    },
    {
        id: 9,
        question: "我认为，将技术和专业水平发展到一个更具有竞争力的层次是成功职业的必要条件",
        type: "TF",
        description: "TF型（技术/职能型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 TF 型对应题号 9"
    },
    {
        id: 10,
        question: "我希望能够管理一个大的组织（公司），让我的决策影响更多人",
        type: "GM",
        description: "GM型（管理型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 GM 型对应题号 10"
    },
    {
        id: 11,
        question: "如果职业允许自己自由地决定工作内容、计划、过程时，我会非常满意",
        type: "AU",
        description: "AU型（自主/独立型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 AU 型对应题号 11"
    },
    {
        id: 12,
        question: "如果工作的结果使我丧失了自己在组织中的安全、稳定感，我宁愿离开这个岗位",
        type: "SE",
        description: "SE型（安全/稳定型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SE 型对应题号 12"
    },
    {
        id: 13,
        question: "对我而言，创办自己的公司比在其他公司中争取一个高的管理职位更有意义",
        type: "EC",
        description: "EC型（创造/创业型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 EC 型对应题号 13"
    },
    {
        id: 14,
        question: "我的职业满足感来自我可以用自己的才能去为他人提供服务",
        type: "SV",
        description: "SV型（服务/奉献型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SV 型对应题号 14"
    },
    {
        id: 15,
        question: "我认为职业的成就感来自克服自己面临的非常有挑战性的困难",
        type: "CH",
        description: "CH型（挑战型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 CH 型对应题号 15"
    },
    {
        id: 16,
        question: "我希望我的职业能够兼顾个人、家庭和工作的需要",
        type: "LS",
        description: "LS型（生活型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 LS 型对应题号 16"
    },
    {
        id: 17,
        question: "对我而言，在我喜欢的专业领域内做资深专家比总经理更具有吸引力",
        type: "TF",
        description: "TF型（技术/职能型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 TF 型对应题号 17"
    },
    {
        id: 18,
        question: "只有在我成为公司的总经理后，我才认为职业人生是成功的",
        type: "GM",
        description: "GM型（管理型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 GM 型对应题号 18"
    },
    {
        id: 19,
        question: "成功的职业应该允许我有完全的自主与自由",
        type: "AU",
        description: "AU型（自主/独立型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 AU 型对应题号 19"
    },
    {
        id: 20,
        question: "我愿意在能给我安全感、稳定感的公司工作",
        type: "SE",
        description: "SE型（安全/稳定型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SE 型对应题号 20"
    },
    {
        id: 21,
        question: "当通过自己的努力或想法完成工作时，我的工作成就感最强",
        type: "EC",
        description: "EC型（创造/创业型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 EC 型对应题号 21"
    },
    {
        id: 22,
        question: "对我而言，利用自己的才能使这个世界变得更适合生活或居住，比争取一个高的管理职位更重要",
        type: "SV",
        description: "SV型（服务/奉献型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SV 型对应题号 22"
    },
    {
        id: 23,
        question: "当我解决了看上去不可能解决的问题，或者在必输无疑的竞赛中胜出，我会非常有成就感",
        type: "CH",
        description: "CH型（挑战型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 CH 型对应题号 23"
    },
    {
        id: 24,
        question: "我认为只有很好地平衡个人、家庭、职业三者的关系，工作、生活才算是成功的",
        type: "LS",
        description: "LS型（生活型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 LS 型对应题号 24"
    },
    {
        id: 25,
        question: "我宁愿离开公司，也不愿频繁接受那些不属于我专业领域的工作",
        type: "TF",
        description: "TF型（技术/职能型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 TF 型对应题号 25"
    },
    {
        id: 26,
        question: "对我而言，做一个全面管理者比在我喜欢的专业领域内做资深专家更有吸引力",
        type: "GM",
        description: "GM型（管理型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 GM 型对应题号 26"
    },
    {
        id: 27,
        question: "对我而言，用自己的方式不受约束地完成工作，比安全、稳定更加重要",
        type: "AU",
        description: "AU型（自主/独立型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 AU 型对应题号 27"
    },
    {
        id: 28,
        question: "只有当我的收入和工作有保障时，我才会对工作感到满意",
        type: "SE",
        description: "SE型（安全/稳定型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SE 型对应题号 28"
    },
    {
        id: 29,
        question: "在我的职业生涯中，如果我能成功地创造或实现完全属于自己的产品或点子，我会感到非常成功",
        type: "EC",
        description: "EC型（创造/创业型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 EC 型对应题号 29"
    },
    {
        id: 30,
        question: "我希望从事对人类和社会真正有贡献的工作",
        type: "SV",
        description: "SV型（服务/奉献型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SV 型对应题号 30"
    },
    {
        id: 31,
        question: "我希望工作中有更多的机会，不断提升自己解决问题的能力（或竞争力）",
        type: "CH",
        description: "CH型（挑战型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 CH 型对应题号 31"
    },
    {
        id: 32,
        question: "我认为能很好地平衡个人生活与工作，比达到一个高的管理职位更重要",
        type: "LS",
        description: "LS型（生活型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 LS 型对应题号 32"
    },
    {
        id: 33,
        question: "如果在工作中能经常用到我特别的技巧和才能，我会感到特别满意",
        type: "TF",
        description: "TF型（技术/职能型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 TF 型对应题号 33"
    },
    {
        id: 34,
        question: "我宁愿离开公司，也不愿意接受让我离开全面管理的工作",
        type: "GM",
        description: "GM型（管理型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 GM 型对应题号 34"
    },
    {
        id: 35,
        question: "我宁愿离开公司，也不愿意接受约束自己自由和自主控制权的工作",
        type: "AU",
        description: "AU型（自主/独立型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 AU 型对应题号 35"
    },
    {
        id: 36,
        question: "我希望有一份让自己有安全感和稳定感的工作",
        type: "SE",
        description: "SE型（安全/稳定型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SE 型对应题号 36"
    },
    {
        id: 37,
        question: "我梦想创建属于自己的事业",
        type: "EC",
        description: "EC型（创造/创业型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 EC 型对应题号 37"
    },
    {
        id: 38,
        question: "如果工作限制了我为他人提供帮助或服务，我宁愿离开公司",
        type: "SV",
        description: "SV型（服务/奉献型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 SV 型对应题号 38"
    },
    {
        id: 39,
        question: "去解决那些几乎无法解决的难题，比获得一个高的管理职位更有意义",
        type: "CH",
        description: "CH型（挑战型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 CH 型对应题号 39"
    },
    {
        id: 40,
        question: "我一直在寻找一份能最小化个人和家庭之间冲突的工作",
        type: "LS",
        description: "LS型（生活型）",
        minScore: 1,
        maxScore: 6,
        note: "教材 LS 型对应题号 40"
    }
];

// 职业锚类型定义和解释
const CAREER_ANCHOR_TYPES = [
    {
        code: "TF",
        name: "技术/职能型",
        description: "倾向'专家式'发展，专注专业领域深耕",
        coreNeed: "提升专业技能、获得专业认可，避免脱离专业的全面管理工作",
        typicalCareers: "工程师、医生、律师、科研人员、技术顾问、专业教师"
    },
    {
        code: "GM",
        name: "管理型",
        description: "对管理工作有强烈兴趣，以管理晋升为职业目标",
        coreNeed: "拥有管理权限、影响他人决策、带领团队达成目标",
        typicalCareers: "企业高管、部门经理、项目负责人、行政主管、组织管理者"
    },
    {
        code: "AU",
        name: "自主/独立型",
        description: "注重工作自主性，反感约束和规则限制",
        coreNeed: "按自身方式、节奏和标准工作，拥有工作自由决策权",
        typicalCareers: "自由职业者、独立顾问、个体经营者、远程工作者、科研独立研究者"
    },
    {
        code: "SE",
        name: "安全/稳定型",
        description: "优先考虑职业的安全性和稳定性，规避风险",
        coreNeed: "工作环境可预测、收入稳定、职业发展路径清晰",
        typicalCareers: "公务员、事业单位职员、国企员工、档案管理员、出纳会计"
    },
    {
        code: "EC",
        name: "创造/创业型",
        description: "有强烈的创业冲动，渴望创建属于自己的事业",
        coreNeed: "实现自主创意、主导项目发展、拥有事业所有权",
        typicalCareers: "创业者、企业创始人、产品研发创始人、个体工商户"
    },
    {
        code: "SV",
        name: "服务/奉献型",
        description: "以职业的社会价值为核心，关注对他人/社会的贡献",
        coreNeed: "用自身能力帮助他人、改善社会，实现公益价值",
        typicalCareers: "公益组织从业者、社工、教师、医护人员、志愿者、慈善项目管理者"
    },
    {
        code: "CH",
        name: "挑战型",
        description: "将'克服困难、突破挑战'视为职业成功的核心",
        coreNeed: "解决复杂问题、战胜强大对手、突破不可能的目标",
        typicalCareers: "销售精英、竞技运动员、律师（诉讼类）、危机公关专家、探险行业从业者"
    },
    {
        code: "LS",
        name: "生活型",
        description: "重视工作与生活的平衡，不愿为职业牺牲个人/家庭需求",
        coreNeed: "兼顾个人兴趣、家庭责任与工作，追求整体生活质量",
        typicalCareers: "弹性工作制从业者、社区工作者、中小学教师、自由职业者（平衡型）"
    }
];

// 计算职业锚测试结果
function calculateCareerAnchorScores(answers, selectedIds = []) {
    // answers 格式：{ 题号: 原始得分(1-6) }
    // selectedIds 格式：[题号1, 题号2, 题号3] - 最符合的3道题目
    
    const typeScores = {};
    
    // 初始化所有类型的分数为0
    CAREER_ANCHOR_TYPES.forEach(type => {
        typeScores[type.code] = {
            code: type.code,
            name: type.name,
            totalScore: 0,
            questionCount: 0
        };
    });
    
    // 第一步：计算原始分数并累加
    for (const questionId in answers) {
        const question = CAREER_ANCHOR_QUESTIONS.find(q => q.id === parseInt(questionId));
        if (question) {
            let score = parseInt(answers[questionId]);
            
            // 检查是否是最符合的题目（额外加4分）
            if (selectedIds.includes(parseInt(questionId))) {
                score += 4;
            }
            
            const typeCode = question.type;
            if (typeScores[typeCode]) {
                typeScores[typeCode].totalScore += score;
                typeScores[typeCode].questionCount += 1;
            }
        }
    }
    
    // 第二步：计算平均分（每类型有5道题，所以除以5）
    const results = [];
    for (const typeCode in typeScores) {
        const typeScore = typeScores[typeCode];
        const averageScore = typeScore.totalScore / 5; // 每类型5道题
        
        // 获取该类型的详细信息
        const typeInfo = CAREER_ANCHOR_TYPES.find(t => t.code === typeCode);
        
        results.push({
            code: typeCode,
            name: typeScore.name,
            totalScore: typeScore.totalScore,
            averageScore: parseFloat(averageScore.toFixed(2)),
            description: typeInfo?.description || "",
            coreNeed: typeInfo?.coreNeed || "",
            typicalCareers: typeInfo?.typicalCareers || ""
        });
    }
    
    // 按平均分降序排序
    results.sort((a, b) => b.averageScore - a.averageScore);
    
    return results;
}

// 获取主要职业锚类型（平均分最高的类型）
function getPrimaryCareerAnchor(results) {
    if (!results || results.length === 0) return null;
    
    const maxScore = results[0].averageScore;
    const primaryAnchors = results.filter(r => r.averageScore === maxScore);
    
    return primaryAnchors;
}

// 获取完整的职业锚类型详情
function getCareerAnchorDetails(typeCode) {
    return CAREER_ANCHOR_TYPES.find(type => type.code === typeCode) || null;
}

// 获取类型的所有题目
function getQuestionsByType(typeCode) {
    return CAREER_ANCHOR_QUESTIONS.filter(question => question.type === typeCode);
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CAREER_ANCHOR_QUESTIONS,
        CAREER_ANCHOR_TYPES,
        calculateCareerAnchorScores,
        getPrimaryCareerAnchor,
        getCareerAnchorDetails,
        getQuestionsByType
    };
}

// 如果在浏览器环境中，添加到全局对象
if (typeof window !== 'undefined') {
    window.CareerAnchorTestData = {
        questions: CAREER_ANCHOR_QUESTIONS,
        careerAnchorTypes: CAREER_ANCHOR_TYPES,
        calculateCareerAnchorScores: calculateCareerAnchorScores,
        getPrimaryCareerAnchor: getPrimaryCareerAnchor,
        getCareerAnchorDetails: getCareerAnchorDetails,
        getQuestionsByType: getQuestionsByType
    };
}
