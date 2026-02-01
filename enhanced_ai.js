// enhanced_ai.js - 改进的AI功能

class EnhancedAI {
    constructor() {
        this.apiKey = "sk-9b3acb3fda3f409f8075867cd60df78d"; // DeepSeek API密钥
        this.apiEndpoint = "https://api.deepseek.com/v1/chat/completions";
        this.conversationHistory = [];
        this.isLoading = false;
        this.init();
    }
    
    init() {
        console.log('Enhanced AI 已初始化');
    }
    
    // 构建系统提示词
    getSystemPrompt(testResults) {
        const testSummary = this.createTestSummary(testResults);
        
        return `你是一位专业的选科指导顾问和心理分析师，具有丰富的教育心理学知识。请根据用户的测试结果，提供科学、实用、个性化的选科建议。

用户测试结果分析：
${testSummary}

请遵循以下指导原则：
1. 使用亲切、鼓励的语气，语言简洁易懂
2. 优先考虑"3+1+2"选科模式
3. 结合用户的性格、兴趣、能力和价值观综合评估
4. 提供2-3个具体的选科组合方案
5. 每个方案需包含：适配度评分、适合理由、大学专业方向、职业发展建议
6. 考虑中国高考制度和大学招生要求
7. 给出具体的学习建议和发展路径
8. 最后鼓励用户提问

请用中文回复，适当使用表情符号增加亲和力。`;
    }
    
    // 创建测试摘要
    createTestSummary(testResults) {
        let summary = "";
        
        // MBTI结果
        if (testResults.mbti?.type) {
            const mbtiInfo = window.MBTITestData?.getMBTITypeDetails(testResults.mbti.type);
            summary += `📊 MBTI性格类型: ${testResults.mbti.type}\n`;
            summary += `   特征: ${mbtiInfo?.description || '未知'}\n`;
            summary += `   适合领域: ${mbtiInfo?.suitableFields || '未知'}\n\n`;
        }
        
        // 多元智能结果
        if (testResults.multipleIntelligence?.topIntelligences?.length > 0) {
            summary += `🧠 优势智能类型:\n`;
            testResults.multipleIntelligence.topIntelligences.forEach((item, index) => {
                const details = window.MultipleIntelligenceTestData?.getIntelligenceDetails(item[0]);
                summary += `   ${index + 1}. ${item[0]}: 得分 ${item[1]}\n`;
            });
            summary += "\n";
        }
        
        // 霍兰德结果
        if (testResults.holland?.code) {
            summary += `🎯 霍兰德职业代码: ${testResults.holland.code}\n`;
            summary += `   职业倾向: ${testResults.holland.careers?.slice(0, 3).join('、') || '未知'}\n\n`;
        }
        
        // 职业锚结果
        if (testResults.careerAnchor?.primary) {
            summary += `⚓ 主要职业锚: ${testResults.careerAnchor.primary.name}\n`;
            summary += `   核心需求: ${testResults.careerAnchor.primary.coreNeed || '未知'}\n\n`;
        }
        
        // 科目权重
        const subjectWeights = testResults.subjectWeights || {};
        if (Object.keys(subjectWeights).length > 0) {
            summary += `📚 科目适配度评分:\n`;
            for (const [subject, weight] of Object.entries(subjectWeights)) {
                let recommendation = "强推荐";
                if (weight < 7.0) recommendation = "中等推荐";
                if (weight < 4.5) recommendation = "不推荐";
                summary += `   ${subject}: ${weight.toFixed(1)}分 (${recommendation})\n`;
            }
        }
        
        return summary;
    }
    
    // 发送消息到AI
    async sendMessage(message, testResults = null, isInitial = false) {
        this.isLoading = true;
        
        try {
            // 如果是初始消息，构建系统提示
            if (isInitial && testResults) {
                const systemPrompt = this.getSystemPrompt(testResults);
                this.conversationHistory = [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: "请基于我的测试结果，为我提供选科建议。" }
                ];
            } else {
                // 普通对话消息
                this.conversationHistory.push({ role: "user", content: message });
            }
            
            // 构建请求数据
            const requestData = {
                model: "deepseek-chat",
                messages: this.conversationHistory,
                max_tokens: 1500,
                temperature: 0.7,
                stream: false
            };
            
            console.log('发送AI请求:', requestData);
            
            // 发送请求到DeepSeek API
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify(requestData)
            });
            
            if (!response.ok) {
                throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            
            // 提取AI回复
            const aiResponse = data.choices[0]?.message?.content;
            
            if (!aiResponse) {
                throw new Error('未收到有效的AI回复');
            }
            
            // 保存到对话历史
            this.conversationHistory.push({ role: "assistant", content: aiResponse });
            
            this.isLoading = false;
            return aiResponse;
            
        } catch (error) {
            console.error('AI请求错误:', error);
            this.isLoading = false;
            
            // 返回备用回复
            return this.getFallbackResponse(message, isInitial);
        }
    }
    
    // 备用回复（当API调用失败时使用）
    getFallbackResponse(message, isInitial) {
        if (isInitial) {
            return `您好！我是您的选科顾问DeepSeek AI。由于网络连接问题，我无法获取您完整的测试分析，但基于常见情况，我可以为您提供一般性建议：

**🎯 选科建议原则：**
1. **兴趣优先**：选择你真正感兴趣的科目
2. **能力匹配**：结合你的优势智能类型
3. **职业规划**：考虑未来的大学专业和职业方向
4. **现实因素**：学校的师资力量和教学资源

**📚 常见选科组合：**
1. **理科组合**：物理+化学+生物
   - 适合：逻辑思维强，喜欢实验操作
   - 专业方向：医学、工程、科研

2. **文理结合**：物理+生物+地理
   - 适合：兴趣广泛，文理均衡
   - 专业方向：环境科学、建筑、心理学

3. **文科组合**：历史+政治+地理
   - 适合：人文素养好，表达能力强
   - 专业方向：法律、教育、传媒

**💡 温馨提示：**
- 可以咨询老师、家长的意见
- 参加学科体验活动
- 关注目标大学的专业要求

请告诉我您更具体的关注点，我可以提供更有针对性的建议！`;
        } else {
            const responses = [
                "感谢您的提问！由于当前网络连接问题，我暂时无法提供详细的个性化分析。建议您：\n\n1. 检查网络连接后重试\n2. 向学校的心理老师咨询\n3. 参考历年学长学姐的选科经验",
                "这个问题很好！通常来说，选科决策需要考虑多个因素：个人兴趣、学科能力、未来职业规划、大学专业要求等。您可以先尝试回答这些问题：\n\n• 你对哪些科目有浓厚兴趣？\n• 你在哪些科目上成绩较好？\n• 你理想的大学专业是什么？",
                "选科是一个重要的决策，建议您：\n\n✅ 参加学校的选科指导讲座\n✅ 与班主任深入沟通\n✅ 了解心仪大学的招生要求\n✅ 考虑自己的长期职业目标"
            ];
            
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // 清空对话历史
    clearHistory() {
        this.conversationHistory = [];
    }
    
    // 获取对话历史
    getHistory() {
        return this.conversationHistory;
    }
    
    // 设置API密钥（如果需要动态更新）
    setApiKey(newKey) {
        this.apiKey = newKey;
        console.log('API密钥已更新');
    }
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedAI;
}

// 在浏览器环境中全局可用
if (typeof window !== 'undefined') {
    window.EnhancedAI = EnhancedAI;
}
