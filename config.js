// config.js - 系统配置文件

const SystemConfig = {
    // API配置
    api: {
        deepseek: {
            endpoint: "https://api.deepseek.com/v1/chat/completions",
            defaultKey: "sk-9b3acb3fda3f409f8075867cd60df78d",
            model: "deepseek-chat",
            maxTokens: 1500,
            temperature: 0.7
        }
    },
    
    // 系统配置
    system: {
        version: "1.1.0",
        name: "选科智能测试与建议系统",
        developerMode: true,
        maxQuestionsPerTest: {
            mbti: 93,
            multipleIntelligence: 64,
            holland: 60,
            careerAnchor: 40
        }
    },
    
    // 科目配置
    subjects: [
        { code: "physics", name: "物理", color: "#1a6dcc" },
        { code: "history", name: "历史", color: "#19be6b" },
        { code: "chemistry", name: "化学", color: "#2d8cf0" },
        { code: "biology", name: "生物", color: "#ff9900" },
        { code: "politics", name: "政治", color: "#ed3f14" },
        { code: "geography", name: "地理", color: "#722ed1" }
    ],
    
    // AI提示词模板
    aiPrompts: {
        initial: `你是一位专业的选科指导顾问。请根据用户测试结果，提供科学、实用的选科建议。`,
        followup: `请继续回答用户的问题，保持专业、友好的态度。`
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SystemConfig;
}

if (typeof window !== 'undefined') {
    window.SystemConfig = SystemConfig;
}
