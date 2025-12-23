#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json

def parse_srt_content(srt_content):
    """解析SRT格式内容"""
    subtitles = []
    lines = srt_content.strip().split('\n')
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        # 跳过空行
        if not line:
            i += 1
            continue
            
        # 序号
        if line.isdigit():
            index = int(line)
            i += 1
            
            # 时间戳
            if i < len(lines) and ' --> ' in lines[i]:
                time_line = lines[i].strip()
                start_time, end_time = time_line.split(' --> ')
                i += 1
                
                # 英文文本
                english_text = ""
                while i < len(lines) and lines[i].strip() and not lines[i].strip().startswith(('让我们', '这就是', '你知道的', '还有那', '但所有', '对吧？', '但它也', '你究竟', '你知道', '整个挑战', '非常时髦', '也就是', '人们总是', '所以', '价值连城', '这意味着', '针对', '新的故事', '当你', '将')):
                    if english_text:
                        english_text += " "
                    english_text += lines[i].strip()
                    i += 1
                
                # 中文文本
                chinese_text = ""
                while i < len(lines) and lines[i].strip():
                    if chinese_text:
                        chinese_text += " "
                    chinese_text += lines[i].strip()
                    i += 1
                
                # 添加字幕条目
                subtitles.append({
                    'index': index,
                    'start': start_time,
                    'end': end_time,
                    'english': english_text,
                    'chinese': chinese_text
                })
                
                continue
        
        i += 1
    
    return subtitles

def main():
    # 读取字幕文件
    with open('/workspace/user_input_files/Slide1 - Slide22 - 字幕.md', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 解析每个幻灯片
    slides_data = {}
    current_slide = None
    current_srt_content = ""
    in_code_block = False
    
    for line in content.split('\n'):
        # 检测幻灯片标题
        slide_match = re.match(r'### Slide (\d+)', line.strip())
        if slide_match:
            # 保存之前的幻灯片数据
            if current_slide and current_srt_content:
                slides_data[current_slide] = parse_srt_content(current_srt_content)
            
            # 开始新的幻灯片
            current_slide = int(slide_match.group(1))
            current_srt_content = ""
            in_code_block = False
            continue
        
        # 处理代码块
        if line.strip() == '```':
            if in_code_block:
                # 代码块结束，保存数据
                if current_slide and current_srt_content:
                    slides_data[current_slide] = parse_srt_content(current_srt_content)
                in_code_block = False
            else:
                # 代码块开始
                in_code_block = True
            continue
        
        # 在代码块内收集内容
        if in_code_block:
            current_srt_content += line + '\n'
    
    # 保存解析结果
    with open('/workspace/subtitle_parsed_data.json', 'w', encoding='utf-8') as f:
        json.dump(slides_data, f, ensure_ascii=False, indent=2)
    
    print(f'成功解析 {len(slides_data)} 个幻灯片的字幕数据')
    print('幻灯片列表:', sorted(slides_data.keys()))
    
    # 显示第一个幻灯片的解析结果作为示例
    if 1 in slides_data:
        print('\nSlide 1 解析结果示例:')
        for sub in slides_data[1][:3]:  # 显示前3条
            print(f"  {sub['index']}: {sub['start']} --> {sub['end']}")
            print(f"  EN: {sub['english']}")
            print(f"  ZH: {sub['chinese']}")
            print()

if __name__ == '__main__':
    main()
