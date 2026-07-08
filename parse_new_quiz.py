import docx
import re

doc = docx.Document(r'd:\hzj\shuati\课程测试题100道.docx')

questions = []
current_section = None
current_question = None
current_options = []

single_answers = {}
multi_answers = {}
judge_answers = {}

in_answers = False

for para in doc.paragraphs:
    text = para.text.strip()
    if not text:
        continue
    
    if text.startswith('参考答案'):
        in_answers = True
        continue
    
    if in_answers:
        if text.startswith('一、单选题') or text.startswith('二、多选题') or text.startswith('三、判断题'):
            continue
        
        parts = text.split()
        for part in parts:
            if '.' in part:
                num, ans = part.split('.', 1)
                num = int(num)
                if 1 <= num <= 40:
                    single_answers[num] = ans
                elif 41 <= num <= 70:
                    multi_answers[num] = ans
                elif 71 <= num <= 100:
                    judge_answers[num] = ans
        continue
    
    if text.startswith('一、单选题'):
        current_section = 'single'
        continue
    elif text.startswith('二、多选题'):
        current_section = 'multiple'
        continue
    elif text.startswith('三、判断题'):
        current_section = 'judge'
        continue
    
    if text.startswith('**') and text.endswith('**'):
        q_text = text[2:-2].strip()
        q_match = re.match(r'(\d+)\.\s+(.*)', q_text)
        if q_match:
            if current_question:
                questions.append({
                    'id': current_question['id'],
                    'type': current_section,
                    'question': current_question['question'],
                    'options': current_options,
                    'answer': '',
                    'explanation': ''
                })
            
            q_id = int(q_match.group(1))
            question_text = q_match.group(2).strip()
            if question_text.endswith('？'):
                question_text = question_text[:-1]
            current_question = {'id': q_id, 'question': question_text}
            current_options = []
        continue
    
    opt_match = re.match(r'^([ABCD])\.\s*(.+)$', text)
    if opt_match and current_options is not None:
        key = opt_match.group(1)
        opt_text = opt_match.group(2).strip()
        current_options.append({'key': key, 'text': opt_text})
        continue

if current_question:
    questions.append({
        'id': current_question['id'],
        'type': current_section,
        'question': current_question['question'],
        'options': current_options,
        'answer': '',
        'explanation': ''
    })

print(f'提取到题目: {len(questions)}')
print(f'单选题答案: {len(single_answers)}')
print(f'多选题答案: {len(multi_answers)}')
print(f'判断题答案: {len(judge_answers)}')

for q in questions:
    q_id = q['id']
    if q['type'] == 'single':
        q['answer'] = single_answers.get(q_id, '')
    elif q['type'] == 'multiple':
        q['answer'] = multi_answers.get(q_id, '')
    elif q['type'] == 'judge':
        ans = judge_answers.get(q_id, '')
        q['answer'] = '✓' if ans == '√' else ('✕' if ans == '×' else '')

lines = ['const QUIZ_DATA_NEW = [']
for q in questions:
    q_text = q['question'].replace('"', '\\"')
    lines.append('  {')
    lines.append(f'    "id": {q["id"]},')
    lines.append(f'    "type": "{q["type"]}",')
    lines.append(f'    "question": "{q_text}",')
    lines.append('    "options": [')
    for opt in q['options']:
        opt_text = opt['text'].replace('"', '\\"')
        lines.append('      {')
        lines.append(f'        "key": "{opt["key"]}",')
        lines.append(f'        "text": "{opt_text}"')
        lines.append('      },')
    lines.append('    ],')
    lines.append(f'    "answer": "{q["answer"]}",')
    lines.append('    "explanation": "暂无解析。"')
    lines.append('  },')
lines.append('];')

with open(r'd:\hzj\shuati\quiz-data-new.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f'生成完成，共 {len(questions)} 道题目')
print(f'单选题: {len([q for q in questions if q["type"] == "single"])}')
print(f'多选题: {len([q for q in questions if q["type"] == "multiple"])}')
print(f'判断题: {len([q for q in questions if q["type"] == "judge"])}')