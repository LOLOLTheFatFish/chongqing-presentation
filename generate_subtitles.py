#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

# 读取解析的字幕数据
with open('/workspace/subtitle_parsed_data.json', 'r', encoding='utf-8') as f:
    slides_data = json.load(f)

# 转换为JavaScript格式
js_content = '''// 精确时间戳双语字幕数据
const subtitleData = {
'''

for slide_num in sorted(slides_data.keys(), key=int):
    slide_data = slides_data[slide_num]
    js_content += f'  "{slide_num}": [\n'
    
    for sub in slide_data:
        english_text = sub['english'].replace("'", "\\'")
        chinese_text = sub['chinese'].replace("'", "\\'")
        js_content += f'''    {{
      index: {sub['index']},
      start: '{sub['start']}',
      end: '{sub['end']}',
      english: '{english_text}',
      chinese: '{chinese_text}'
    }},
'''
    
    js_content += '  ],\n\n'

js_content += '''};

// 导出字幕数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = subtitleData;
}
'''

# 保存新的字幕文件
with open('/workspace/chongqing-presentation/subtitles/precise-subtitle-data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print('生成精确时间戳字幕数据完成')
print(f'包含 {len(slides_data)} 个幻灯片的字幕数据')
