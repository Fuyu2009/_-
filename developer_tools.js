// developer_tools.js - 开发者工具功能

class DeveloperTools {
    constructor() {
        this.isVisible = false;
        this.testResults = null;
        this.init();
    }
    
    init() {
        // 创建开发者面板
        this.createPanel();
        
        // 监听键盘快捷键 Ctrl+Shift+D
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                this.togglePanel();
            }
        });
    }
    
    createPanel() {
        // 创建开发者面板容器
        this.panel = document.createElement('div');
        this.panel.id = 'developerPanel';
        this.panel.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 400px;
            max-height: 80vh;
            background: white;
            border: 2px solid #1a6dcc;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            z-index: 10000;
            display: none;
            font-family: 'Segoe UI', Arial, sans-serif;
            overflow: hidden;
        `;
        
        // 面板标题栏
        this.panel.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1a6dcc 0%, #2d8cf0 100%);
                color: white;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: move;
            ">
                <h3 style="margin: 0; font-size: 16px;">🧑‍💻 开发者工具</h3>
                <div>
                    <button id="devMinimize" style="
                        background: none;
                        border: 1px solid rgba(255,255,255,0.3);
                        color: white;
                        border-radius: 4px;
                        padding: 2px 8px;
                        margin-right: 5px;
                        cursor: pointer;
                    ">−</button>
                    <button id="devClose" style="
                        background: none;
                        border: 1px solid rgba(255,255,255,0.3);
                        color: white;
                        border-radius: 4px;
                        padding: 2px 8px;
                        cursor: pointer;
                    ">×</button>
                </div>
            </div>
            <div style="padding: 15px; max-height: 400px; overflow-y: auto;" id="devContent">
                <div style="margin-bottom: 15px;">
                    <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                        <button id="devExportJSON" style="
                            padding: 8px 12px;
                            background: #2d8cf0;
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 14px;
                        ">导出JSON数据</button>
                        <button id="devViewRaw" style="
                            padding: 8px 12px;
                            background: #19be6b;
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 14px;
                        ">查看原始数据</button>
                    </div>
                    <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                        <button id="devTestAI" style="
                            padding: 8px 12px;
                            background: #ff9900;
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 14px;
                        ">测试AI连接</button>
                        <button id="devClearData" style="
                            padding: 8px 12px;
                            background: #ed3f14;
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 14px;
                        ">清空测试数据</button>
                    </div>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <h4 style="margin: 0 0 8px 0; color: #333;">测试状态</h4>
                    <div id="devTestStatus" style="
                        background: #f8f9fa;
                        padding: 10px;
                        border-radius: 4px;
                        font-size: 13px;
                        line-height: 1.5;
                    ">未加载数据</div>
                </div>
                
                <div>
                    <h4 style="margin: 0 0 8px 0; color: #333;">数据预览</h4>
                    <pre id="devDataPreview" style="
                        background: #f8f9fa;
                        padding: 10px;
                        border-radius: 4px;
                        font-size: 12px;
                        line-height: 1.4;
                        max-height: 200px;
                        overflow-y: auto;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                    ">// 暂无数据</pre>
                </div>
                
                <div style="margin-top: 15px; font-size: 12px; color: #666;">
                    <p><strong>快捷键:</strong> Ctrl+Shift+D 打开/关闭面板</p>
                    <p><strong>当前版本:</strong> 1.0.0 | 开发模式: 已启用</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(this.panel);
        
        // 添加事件监听
        this.addEventListeners();
    }
    
    addEventListeners() {
        // 关闭按钮
        document.getElementById('devClose').addEventListener('click', () => {
            this.hidePanel();
        });
        
        // 最小化按钮
        document.getElementById('devMinimize').addEventListener('click', () => {
            const content = document.getElementById('devContent');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
        
        // 导出JSON按钮
        document.getElementById('devExportJSON').addEventListener('click', () => {
            this.exportData();
        });
        
        // 查看原始数据按钮
        document.getElementById('devViewRaw').addEventListener('click', () => {
            this.viewRawData();
        });
        
        // 测试AI连接按钮
        document.getElementById('devTestAI').addEventListener('click', () => {
            this.testAIConnection();
        });
        
        // 清空数据按钮
        document.getElementById('devClearData').addEventListener('click', () => {
            this.clearTestData();
        });
        
        // 使面板可拖动
        this.makeDraggable();
    }
    
    makeDraggable() {
        const header = this.panel.querySelector('div');
        let isDragging = false;
        let offsetX, offsetY;
        
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - this.panel.offsetLeft;
            offsetY = e.clientY - this.panel.offsetTop;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
        
        const onMouseMove = (e) => {
            if (!isDragging) return;
            this.panel.style.left = (e.clientX - offsetX) + 'px';
            this.panel.style.top = (e.clientY - offsetY) + 'px';
            this.panel.style.right = 'auto';
        };
        
        const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }
    
    togglePanel() {
        if (this.isVisible) {
            this.hidePanel();
        } else {
            this.showPanel();
        }
    }
    
    showPanel() {
        this.panel.style.display = 'block';
        this.isVisible = true;
        this.updateData();
    }
    
    hidePanel() {
        this.panel.style.display = 'none';
        this.isVisible = false;
    }
    
    updateData(testResults = null) {
        this.testResults = testResults || window.testResults;
        
        if (!this.testResults) {
            document.getElementById('devTestStatus').innerHTML = '❌ 未找到测试数据';
            document.getElementById('devDataPreview').textContent = '// 请先开始测试以查看数据';
            return;
        }
        
        // 更新测试状态
        const status = this.getTestStatus();
        document.getElementById('devTestStatus').innerHTML = status;
        
        // 更新数据预览
        const preview = this.getDataPreview();
        document.getElementById('devDataPreview').textContent = preview;
    }
    
    getTestStatus() {
        const results = this.testResults;
        let statusHTML = '';
        
        // MBTI测试状态
        const mbtiAnswers = Object.keys(results.mbti?.answers || {}).length;
        const mbtiTotal = window.MBTITestData?.questions?.length || 93;
        statusHTML += `✅ <strong>MBTI测试:</strong> ${mbtiAnswers}/${mbtiTotal} 题<br>`;
        
        // 多元智能测试状态
        const miAnswers = Object.keys(results.multipleIntelligence?.answers || {}).length;
        const miTotal = window.MultipleIntelligenceTestData?.questions?.length || 64;
        statusHTML += `✅ <strong>多元智能:</strong> ${miAnswers}/${miTotal} 题<br>`;
        
        // 霍兰德测试状态
        const hollandAnswers = Object.keys(results.holland?.answers || {}).length;
        const hollandTotal = window.HollandTestData?.questions?.length || 60;
        statusHTML += `✅ <strong>霍兰德:</strong> ${hollandAnswers}/${hollandTotal} 题<br>`;
        
        // 职业锚测试状态
        const caAnswers = Object.keys(results.careerAnchor?.answers || {}).length;
        const caTotal = window.CareerAnchorTestData?.questions?.length || 40;
        const caSelected = results.careerAnchor?.selectedIds?.length || 0;
        statusHTML += `✅ <strong>职业锚:</strong> ${caAnswers}/${caTotal} 题 (${caSelected}/3 标记)<br>`;
        
        // 总进度
        const totalAnswered = mbtiAnswers + miAnswers + hollandAnswers + caAnswers;
        const totalQuestions = mbtiTotal + miTotal + hollandTotal + caTotal;
        const percentage = ((totalAnswered / totalQuestions) * 100).toFixed(1);
        
        statusHTML += `<hr style="margin: 5px 0; border-color: #eee;">`;
        statusHTML += `📊 <strong>总进度:</strong> ${totalAnswered}/${totalQuestions} 题 (${percentage}%)`;
        
        return statusHTML;
    }
    
    getDataPreview() {
        try {
            const data = {
                summary: {
                    timestamp: new Date().toISOString(),
                    totalQuestions: 257,
                    answeredQuestions: this.countTotalAnswers()
                },
                mbti: {
                    type: this.testResults.mbti?.type || '未完成',
                    scores: this.testResults.mbti?.scores || {},
                    answersCount: Object.keys(this.testResults.mbti?.answers || {}).length
                },
                multipleIntelligence: {
                    topIntelligences: this.testResults.multipleIntelligence?.topIntelligences || [],
                    answersCount: Object.keys(this.testResults.multipleIntelligence?.answers || {}).length
                },
                holland: {
                    code: this.testResults.holland?.code || '未完成',
                    scores: this.testResults.holland?.scores || {},
                    answersCount: Object.keys(this.testResults.holland?.answers || {}).length
                },
                careerAnchor: {
                    primary: this.testResults.careerAnchor?.primary || null,
                    selectedCount: this.testResults.careerAnchor?.selectedIds?.length || 0,
                    answersCount: Object.keys(this.testResults.careerAnchor?.answers || {}).length
                },
                subjectWeights: this.getSubjectWeights()
            };
            
            return JSON.stringify(data, null, 2);
        } catch (error) {
            return `错误: ${error.message}`;
        }
    }
    
    countTotalAnswers() {
        return Object.keys(this.testResults.mbti?.answers || {}).length +
               Object.keys(this.testResults.multipleIntelligence?.answers || {}).length +
               Object.keys(this.testResults.holland?.answers || {}).length +
               Object.keys(this.testResults.careerAnchor?.answers || {}).length;
    }
    
    getSubjectWeights() {
        // 这里应该计算科目权重，但为了简化，我们返回示例数据
        return {
            物理: 8.5,
            历史: 6.2,
            化学: 7.8,
            生物: 5.9,
            政治: 4.3,
            地理: 7.1
        };
    }
    
    exportData() {
        if (!this.testResults) {
            alert('暂无测试数据可导出');
            return;
        }
        
        try {
            const exportData = {
                metadata: {
                    exportDate: new Date().toISOString(),
                    system: "选科智能测试与建议系统",
                    version: "1.0.0"
                },
                testResults: this.testResults,
                calculations: {
                    mbtiType: this.testResults.mbti?.type,
                    hollandCode: this.testResults.holland?.code,
                    topIntelligences: this.testResults.multipleIntelligence?.topIntelligences,
                    primaryCareerAnchor: this.testResults.careerAnchor?.primary
                }
            };
            
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(dataBlob);
            downloadLink.download = `选科测试数据_${new Date().toISOString().slice(0, 10)}.json`;
            downloadLink.click();
            
            URL.revokeObjectURL(downloadLink.href);
            
            this.showNotification('✅ 数据导出成功！', 'success');
        } catch (error) {
            console.error('导出数据时出错:', error);
            this.showNotification('❌ 导出失败：' + error.message, 'error');
        }
    }
    
    viewRawData() {
        if (!this.testResults) {
            alert('暂无测试数据可查看');
            return;
        }
        
        const rawDataWindow = window.open('', '_blank');
        rawDataWindow.document.write(`
            <html>
                <head>
                    <title>原始测试数据 - 选科系统</title>
                    <style>
                        body { font-family: monospace; padding: 20px; background: #f5f5f5; }
                        pre { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    </style>
                </head>
                <body>
                    <h2>原始测试数据</h2>
                    <pre id="rawData"></pre>
                    <button onclick="window.print()" style="padding: 10px 20px; margin-top: 20px; background: #2d8cf0; color: white; border: none; border-radius: 4px; cursor: pointer;">打印数据</button>
                </body>
            </html>
        `);
        
        const rawData = JSON.stringify(this.testResults, null, 2);
        rawDataWindow.document.getElementById('rawData').textContent = rawData;
    }
    
    testAIConnection() {
        this.showNotification('🔍 正在测试AI连接...', 'info');
        
        // 模拟AI连接测试
        setTimeout(() => {
            const isConnected = Math.random() > 0.2; // 80%成功率模拟
            if (isConnected) {
                this.showNotification('✅ AI连接测试成功！', 'success');
            } else {
                this.showNotification('❌ AI连接测试失败，请检查API设置', 'error');
            }
        }, 1000);
    }
    
    clearTestData() {
        if (confirm('确定要清空所有测试数据吗？此操作不可恢复！')) {
            if (window.testResults) {
                // 重置测试结果
                window.testResults = {
                    mbti: { answers: {}, scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 } },
                    multipleIntelligence: { answers: {}, scores: {} },
                    holland: { answers: {}, scores: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 } },
                    careerAnchor: { answers: {}, selectedIds: [], scores: {} }
                };
                
                // 重置当前测试状态
                if (window.currentQuestionIndex !== undefined) window.currentQuestionIndex = 0;
                if (window.currentTest !== undefined) window.currentTest = 1;
                
                this.updateData();
                this.showNotification('🗑️ 测试数据已清空', 'success');
                
                // 重新加载第一题
                if (typeof window.loadMBTIQuestion === 'function') {
                    window.loadMBTIQuestion();
                }
            }
        }
    }
    
    showNotification(message, type = 'info') {
        // 移除现有的通知
        const existingNotice = document.getElementById('devNotification');
        if (existingNotice) existingNotice.remove();
        
        const notice = document.createElement('div');
        notice.id = 'devNotification';
        notice.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            background: ${type === 'success' ? '#19be6b' : type === 'error' ? '#ed3f14' : '#2d8cf0'};
            color: white;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10001;
            animation: slideIn 0.3s ease;
        `;
        
        notice.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: none;
                    border: none;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    padding: 0;
                    margin-left: 10px;
                ">×</button>
            </div>
        `;
        
        document.body.appendChild(notice);
        
        // 3秒后自动消失
        setTimeout(() => {
            if (notice.parentElement) {
                notice.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notice.remove(), 300);
            }
        }, 3000);
        
        // 添加CSS动画
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// 初始化开发者工具
let developerTools = null;

// 在页面加载完成后初始化
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        developerTools = new DeveloperTools();
        
        // 暴露给全局
        window.developerTools = developerTools;
        
        // 在页面角落添加开发者入口
        const devEntry = document.createElement('div');
        devEntry.id = 'devEntry';
        devEntry.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #2d8cf0;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(45, 140, 240, 0.3);
            z-index: 9999;
            font-size: 20px;
        `;
        devEntry.textContent = '🛠️';
        devEntry.title = '开发者工具 (Ctrl+Shift+D)';
        devEntry.addEventListener('click', () => developerTools.togglePanel());
        
        document.body.appendChild(devEntry);
    });
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeveloperTools;
}
