---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3046022100a9835f87b69b41f899e5ce9c6972857abb16ee015ad62c01c3f3786390d019a8022100b14c33cb92fef3570e2690ea229ffef60123bf6b126723a321b9e84246d6db5e
    ReservedCode2: 3045022100de072748f758efb0e2589b805d4f37c1fb09a1511500ffcb7acb004b909ff69b02200c7ea3c555ac212a81fc670790d60b62b997926892de5ba00d326d44473bbb23
---

# 🎬 字幕生成系统指南

## 📋 **概述**

本项目包含Python脚本用于生成精确时间戳的字幕数据，支持从SRT格式转换为JavaScript格式。

## 🛠️ **系统要求**

- **Python**: 3.7 或更高版本
- **依赖**: 无需额外安装包，使用标准库

## 📁 **文件结构**

```
chongqing-presentation/
├── parse_subtitles.py       # SRT解析脚本
├── generate_subtitles.py    # JavaScript生成脚本
├── subtitles/
│   ├── precise-subtitle-data.js  # 生成的精确字幕数据
│   └── subtitle-data.js          # 原始字幕数据
└── user_input_files/        # 输入文件目录
    └── Slide1 - Slide22 - 字幕.md  # SRT格式字幕源文件
```

## 🔄 **字幕生成流程**

### **1. 准备输入文件**

确保您有SRT格式的字幕文件，包含以下格式：

```srt
1
00:00:00,000 --> 00:00:03,500
English text here
中文翻译

2
00:00:03,500 --> 00:00:07,500
Another English sentence
另一句中文翻译
```

### **2. 运行解析脚本**

```bash
# 方法一：在项目目录运行
cd chongqing-presentation
python3 parse_subtitles.py

# 方法二：从workspace根目录运行
cd /path/to/workspace
python3 parse_subtitles.py
```

**输出示例：**
```
成功解析 22 个幻灯片的字幕数据
幻灯片列表: [1, 2, 3, ..., 22]
```

### **3. 生成JavaScript数据**

```bash
# 运行生成脚本
python3 generate_subtitles.py
```

**输出示例：**
```
生成精确时间戳字幕数据完成
包含 22 个幻灯片的字幕数据
```

### **4. 验证生成结果**

检查生成的 `subtitles/precise-subtitle-data.js` 文件：

```javascript
// 精确时间戳双语字幕数据
const preciseSubtitleData = {
  "1": [
    {
      index: 1,
      start: '00:00:00,000',
      end: '00:00:03,500',
      english: 'So let\'s talk about Chongqing...',
      chinese: '让我们来聊聊重庆...'
    }
  ]
};
```

## 📊 **脚本功能详解**

### **parse_subtitles.py - 解析功能**

**功能：**
- 读取MD格式的字幕文件
- 解析SRT格式的时间戳和文本
- 按幻灯片分组字幕数据
- 输出JSON格式的中间数据

**支持格式：**
- 标准SRT时间戳：`HH:MM:SS,mmm`
- 中英文对照显示
- 幻灯片自动分组

### **generate_subtitles.py - 生成功能**

**功能：**
- 读取解析后的JSON数据
- 转换为JavaScript兼容格式
- 生成精确时间戳字幕系统
- 支持网页直接引用

**输出格式：**
```javascript
const preciseSubtitleData = {
  "幻灯片编号": [
    {
      index: 序号,
      start: '开始时间',
      end: '结束时间',
      english: '英文文本',
      chinese: '中文翻译'
    }
  ]
};
```

## 🔧 **高级配置**

### **自定义时间戳格式**

如果需要支持其他时间戳格式，可以修改 `parseTimeToSeconds` 函数：

```javascript
function parseTimeToSeconds(timeStr) {
    // 支持格式：
    // "HH:MM:SS,mmm" (当前)
    // "HH:MM:SS.mmm" (可选)
    // "MM:SS,mmm" (可选)
    // "SS,mmm" (可选)
    
    const parts = timeStr.split(':');
    // ... 自定义解析逻辑
}
```

### **添加字幕样式**

可以在生成时添加自定义样式：

```javascript
{
  index: 1,
  start: '00:00:00,000',
  end: '00:00:03,500',
  english: 'Text',
  chinese: '翻译',
  style: 'highlight',  // 自定义样式
  position: 'bottom'   // 显示位置
}
```

## 🐛 **故障排除**

### **常见错误**

#### **1. 文件路径错误**
```
FileNotFoundError: [Errno 2] No such file or directory: 'Slide1 - Slide22 - 字幕.md'
```
**解决方案：**
- 确保文件路径正确
- 检查文件名是否包含特殊字符
- 确认文件存在且可读

#### **2. SRT格式错误**
```
ValueError: time data 'invalid-time' does not match format 'HH:MM:SS,mmm'
```
**解决方案：**
- 检查时间戳格式是否正确
- 确保使用逗号分隔毫秒：`HH:MM:SS,mmm`
- 验证时间格式一致性

#### **3. 编码错误**
```
UnicodeDecodeError: 'utf-8' codec can't decode byte
```
**解决方案：**
- 确保文件使用UTF-8编码
- 检查文件中是否包含特殊字符
- 尝试指定正确的编码格式

### **调试模式**

在脚本中添加调试输出：

```python
# 在 parse_subtitles.py 中
def parse_srt_content(srt_content):
    # 添加调试信息
    print(f"Processing {len(srt_content)} lines...")
    print(f"First few lines: {srt_content[:200]}")
    
    # 继续解析逻辑...
```

## 📈 **性能优化**

### **大文件处理**

对于包含大量字幕的文件：

```python
# 分批处理
def process_large_file(file_path, batch_size=100):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 分批处理
    slides_data = {}
    for i in range(0, len(content), batch_size):
        batch = content[i:i+batch_size]
        processed_batch = parse_srt_content(batch)
        slides_data.update(processed_batch)
    
    return slides_data
```

### **内存优化**

```python
# 流式处理
def parse_large_srt(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        current_slide = None
        current_content = []
        
        for line in f:
            # 逐行处理，避免加载整个文件
            if line.startswith('### Slide'):
                if current_slide:
                    yield process_slide(current_slide, current_content)
                current_slide = parse_slide_number(line)
                current_content = []
            else:
                current_content.append(line)
```

## 🎯 **使用场景**

### **场景1：批量更新字幕**
```bash
# 1. 准备新的字幕文件
cp new_subtitles.md user_input_files/

# 2. 重新生成
python3 parse_subtitles.py
python3 generate_subtitles.py

# 3. 部署更新
vercel --prod
```

### **场景2：添加新幻灯片**
```bash
# 1. 在字幕文件中添加新幻灯片
# 2. 运行生成脚本
python3 parse_subtitles.py

# 3. 检查输出
python3 -c "
import json
with open('subtitle_parsed_data.json', 'r') as f:
    data = json.load(f)
print(f'生成的幻灯片数量: {len(data)}')
print(f'幻灯片列表: {list(data.keys())}')
"
```

### **场景3：字幕格式转换**
```bash
# 从其他格式转换到SRT
python3 -c "
# 自定义转换逻辑
def convert_to_srt(input_file, output_file):
    # 实现转换逻辑
    pass
"
```

## 📞 **技术支持**

### **脚本日志**

运行脚本时会显示详细日志：

```
正在解析字幕文件...
成功解析 22 个幻灯片的字幕数据
幻灯片列表: [1, 2, 3, ..., 22]
生成精确时间戳字幕数据完成
包含 22 个幻灯片的字幕数据
```

### **验证生成结果**

```bash
# 检查生成的JavaScript文件
head -20 subtitles/precise-subtitle-data.js

# 验证JSON格式
python3 -c "
import json
with open('subtitle_parsed_data.json', 'r') as f:
    data = json.load(f)
print('JSON格式验证通过')
print(f'幻灯片数量: {len(data)}')
"
```

---

## 🎉 **字幕系统完整指南**

通过本指南，您现在可以：
- ✅ 使用Python脚本生成精确字幕数据
- ✅ 处理各种字幕格式
- ✅ 调试和优化字幕生成过程
- ✅ 集成字幕系统到演示网站

**完整的字幕生成工具链，让您的演示更加专业！** 🎬✨

---
*字幕生成系统指南 v1.0 - 2025年12月23日*
