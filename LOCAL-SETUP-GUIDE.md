---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 304602210080214c441090e6002769244a679c442ca45efa615a4e089137c8687d960fb46a022100851ca5fd404010174126299d4835bf153cc4cdabdd101b81ee341878209a5516
    ReservedCode2: 304502205c790ccb5c6fdc48331b73e68d185d3e0cc3b4baa52d897edd321c33f00b0d84022100988fa047daa802b4ed2f8ef4d2163855e3ec4c23c55b04ef10a37ba409bd8a7d
---

# 💻 本地运行指南

## 📋 **项目概述**

**重庆从网红到长红** - 专业学术演示网站，包含22页幻灯片、精确时间戳字幕、自动播放功能。

## 🛠️ **系统要求**

- **Node.js**: 18.0 或更高版本
- **Python**: 3.7 或更高版本
- **浏览器**: Chrome、Safari、Firefox（支持HTML5和ES6）

## 📁 **项目结构**

```
chongqing-presentation/
├── presentation.html          # 主演示文件
├── index.html                # 项目首页
├── audio/                    # 音频文件目录
│   ├── slide1.mp3 - slide22.mp3
├── slides/                   # 幻灯片HTML文件
│   ├── slide1.html - slide22.html
├── subtitles/                # 字幕数据
│   ├── precise-subtitle-data.js  # 精确时间戳字幕
│   └── subtitle-data.js          # 原始字幕数据
├── images/                   # 图片资源
└── [其他文档...]
```

## 🚀 **快速开始**

### **1. 下载项目文件**

将整个 `chongqing-presentation` 文件夹下载到本地。

### **2. 启动本地服务器**

#### **方法一：Python HTTP服务器（推荐）**
```bash
# 进入项目目录
cd chongqing-presentation

# 启动Python HTTP服务器
python3 -m http.server 8080
# 或者
python -m http.server 8080

# 访问 http://localhost:8080
```

#### **方法二：Node.js HTTP服务器**
```bash
# 安装serve包
npm install -g serve

# 启动服务器
serve -p 8080

# 访问 http://localhost:8080
```

#### **方法三：VS Code Live Server**
1. 安装 VS Code 扩展 "Live Server"
2. 右键点击 `presentation.html`
3. 选择 "Open with Live Server"

### **3. 访问演示网站**

打开浏览器访问：
- **主演示**: http://localhost:8080/presentation.html
- **项目首页**: http://localhost:8080/index.html

## 🔧 **字幕系统设置**

### **使用现有字幕数据**

项目已包含预处理的精确字幕数据，直接使用即可。

### **自定义字幕（可选）**

如果您需要修改字幕内容，可以使用提供的Python脚本：

```bash
# 确保您在workspace根目录
cd /path/to/your/workspace

# 运行字幕解析脚本
python3 parse_subtitles.py

# 生成新的字幕数据
python3 generate_subtitles.py
```

**需要的文件:**
- `user_input_files/Slide1 - Slide22 - 字幕.md` - 包含SRT格式的字幕数据

## 🎮 **功能使用**

### **主要功能**

1. **🎯 自动播放演示**
   - 点击 "🎯 Auto Play Presentation" 开始
   - 音频自动播放，字幕同步显示

2. **🎬 字幕控制**
   - 点击 "🎬 Subtitles" 开启/关闭字幕
   - 字幕根据音频时间精确显示

3. **🎮 播放控制**
   - 播放/暂停
   - 进度拖拽
   - 速度调节 (0.5x - 2x)
   - 全屏模式

4. **📊 PPT控制**
   - 上一页/下一页
   - 幻灯片导航
   - 进度显示

### **快捷键**

- **空格键**: 播放/暂停
- **左右箭头**: 上一页/下一页
- **F键**: 全屏切换
- **Esc键**: 退出全屏

## 🐛 **常见问题**

### **Q: 音频无法播放？**
**A:** 
1. 检查浏览器是否支持HTML5音频
2. 确保音频文件路径正确
3. 尝试使用HTTPS或本地HTTP服务器

### **Q: 字幕不显示？**
**A:**
1. 确认字幕数据文件存在
2. 检查浏览器控制台是否有错误信息
3. 确认字幕功能已开启

### **Q: 页面加载缓慢？**
**A:**
1. 检查网络连接
2. 确认所有资源文件存在
3. 清理浏览器缓存

### **Q: 跨域错误？**
**A:**
确保使用HTTP服务器访问，不要直接打开HTML文件。

## 📱 **移动端支持**

网站完全支持移动设备：
- 响应式设计
- 触摸友好的控制界面
- 优化的字幕显示

## 🔧 **开发调试**

### **浏览器开发者工具**

1. **F12** 打开开发者工具
2. **Console** 查看调试信息
3. **Network** 检查资源加载
4. **Elements** 检查DOM结构

### **调试信息**

当字幕数据正确加载时，控制台会显示：
```
Precise subtitle data loaded successfully
Available slides: ["1","2","3","4",...]
```

## 🎯 **测试清单**

### **功能测试**

- [ ] 页面正常加载
- [ ] 音频文件播放正常
- [ ] 字幕逐句显示（不是整段）
- [ ] 页面切换字幕更新
- [ ] 自动播放功能正常
- [ ] 控制按钮响应正常
- [ ] 全屏模式工作正常
- [ ] 移动端显示正常

### **性能测试**

- [ ] 页面加载速度 < 3秒
- [ ] 音频切换流畅
- [ ] 字幕同步精确
- [ ] 内存使用正常

## 📞 **技术支持**

如遇到问题，请检查：
1. 浏览器控制台错误信息
2. 网络请求状态
3. 音频文件完整性
4. 字幕数据格式

---
*本地运行指南 v1.0 - 2025年12月23日*
