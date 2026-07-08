import re

content = open(r'd:\hzj\shuati\quiz-data-new.js', 'r', encoding='utf-8').read()
count = len(re.findall(r'"id": \d+', content))
single = len(re.findall(r'"type": "single"', content))
multi = len(re.findall(r'"type": "multiple"', content))
judge = len(re.findall(r'"type": "judge"', content))
print(f'题目总数: {count}')
print(f'单选题: {single}')
print(f'多选题: {multi}')
print(f'判断题: {judge}')