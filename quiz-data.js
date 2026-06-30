const QUIZ_DATA = [
  {
    "id": 1,
    "type": "single",
    "question": "机器学习的基本框架可以概括为以下哪个公式？",
    "options": [
      {
        "key": "A",
        "text": "y=wx"
      },
      {
        "key": "B",
        "text": "y=w+x"
      },
      {
        "key": "C",
        "text": "y=w/x"
      },
      {
        "key": "D",
        "text": "y=w-x"
      }
    ],
    "answer": "A",
    "explanation": "第一章\"机器学习的基本框架可以概括为 y=wx，利用大量已知样本拟合参数，再进行预测（归纳→演绎）\""
  },
  {
    "id": 2,
    "type": "single",
    "question": "以下哪个网络结构专门用于高效处理图像？",
    "options": [
      {
        "key": "A",
        "text": "全连接网络（FC）"
      },
      {
        "key": "B",
        "text": "卷积神经网络（CNN）"
      },
      {
        "key": "C",
        "text": "循环神经网络（RNN）"
      },
      {
        "key": "D",
        "text": "感知机"
      }
    ],
    "answer": "B",
    "explanation": "第一章\"经典网络：全连接网络（FC）、卷积神经网络（CNN，高效处理图像）\""
  },
  {
    "id": 3,
    "type": "single",
    "question": "ResNet（残差网络）主要解决了什么问题？",
    "options": [
      {
        "key": "A",
        "text": "计算速度慢"
      },
      {
        "key": "B",
        "text": "梯度弥散"
      },
      {
        "key": "C",
        "text": "内存不足"
      },
      {
        "key": "D",
        "text": "数据量不够"
      }
    ],
    "answer": "B",
    "explanation": "第一章\"残差网络（ResNet，解决梯度弥散）\""
  },
  {
    "id": 4,
    "type": "single",
    "question": "以下哪个不是大模型发展的三大技术前提？",
    "options": [
      {
        "key": "A",
        "text": "Transformer"
      },
      {
        "key": "B",
        "text": "自监督学习"
      },
      {
        "key": "C",
        "text": "强化学习"
      },
      {
        "key": "D",
        "text": "生成式模型"
      }
    ],
    "answer": "C",
    "explanation": "第一章\"大模型三大技术前提：Transformer、自监督学习、生成式模型（多任务统一学习）\"，强化学习不属于三大前提"
  },
  {
    "id": 5,
    "type": "single",
    "question": "Transformer 结构由哪两部分构成？",
    "options": [
      {
        "key": "A",
        "text": "输入层和输出层"
      },
      {
        "key": "B",
        "text": "Encoder 和 Decoder"
      },
      {
        "key": "C",
        "text": "卷积层和池化层"
      },
      {
        "key": "D",
        "text": "前向传播和反向传播"
      }
    ],
    "answer": "B",
    "explanation": "第一章\"Transformer：一统天下的网络结构，由 Encoder+Decoder 构成\""
  },
  {
    "id": 6,
    "type": "single",
    "question": "自监督学习的核心作用是什么？",
    "options": [
      {
        "key": "A",
        "text": "减少计算量"
      },
      {
        "key": "B",
        "text": "将无标注数据变为可学习形式"
      },
      {
        "key": "C",
        "text": "提高模型精度"
      },
      {
        "key": "D",
        "text": "加速训练过程"
      }
    ],
    "answer": "B",
    "explanation": "第一章\"自监督学习：将互联网海量无标注数据变为可学习形式，解决样本不足问题\""
  },
  {
    "id": 7,
    "type": "single",
    "question": "生成式模型（多任务统一学习）的核心思想是什么？",
    "options": [
      {
        "key": "A",
        "text": "每个任务训练一个独立模型"
      },
      {
        "key": "B",
        "text": "将不同任务统一为序列化输入输出"
      },
      {
        "key": "C",
        "text": "只处理文本生成任务"
      },
      {
        "key": "D",
        "text": "依赖大量标注数据"
      }
    ],
    "answer": "B",
    "explanation": "第一章\"生成式模型（多任务统一学习）：将不同任务统一为序列化输入输出，一个模型解决多种任务\""
  },
  {
    "id": 8,
    "type": "single",
    "question": "大模型\"智能涌现\"现象出现在参数量达到什么量级时？",
    "options": [
      {
        "key": "A",
        "text": "10^6~10^7"
      },
      {
        "key": "B",
        "text": "10^8~10^9"
      },
      {
        "key": "C",
        "text": "10^10~10^11"
      },
      {
        "key": "D",
        "text": "10^12~10^13"
      }
    ],
    "answer": "C",
    "explanation": "第一章\"智能涌现：参数量达到 10^10~10^11 时，模型能力出现阶跃式提升\""
  },
  {
    "id": 9,
    "type": "single",
    "question": "Instruct GPT 的核心贡献是什么？",
    "options": [
      {
        "key": "A",
        "text": "增加模型参数量"
      },
      {
        "key": "B",
        "text": "少量指令标注样本即可大幅提升模型对齐人类需求的能力"
      },
      {
        "key": "C",
        "text": "提出Transformer架构"
      },
      {
        "key": "D",
        "text": "实现多模态融合"
      }
    ],
    "answer": "B",
    "explanation": "第一章\"指令学习（Instruct GPT）：少量指令标注样本即可大幅提升模型对齐人类需求的能力\""
  },
  {
    "id": 10,
    "type": "single",
    "question": "大语言模型的本质是什么？",
    "options": [
      {
        "key": "A",
        "text": "图像识别"
      },
      {
        "key": "B",
        "text": "文字接龙"
      },
      {
        "key": "C",
        "text": "语音合成"
      },
      {
        "key": "D",
        "text": "视频生成"
      }
    ],
    "answer": "B",
    "explanation": "第一章\"大语言模型本质：文字接龙，根据输入不断预测下一个词\""
  },
  {
    "id": 11,
    "type": "single",
    "question": "CLIP 模型的训练方式是什么？",
    "options": [
      {
        "key": "A",
        "text": "纯文本训练"
      },
      {
        "key": "B",
        "text": "纯图像训练"
      },
      {
        "key": "C",
        "text": "图文对训练"
      },
      {
        "key": "D",
        "text": "语音文本对训练"
      }
    ],
    "answer": "C",
    "explanation": "第一章\"视觉大模型：CLIP（图文对训练）\""
  },
  {
    "id": 12,
    "type": "single",
    "question": "MAE（掩码自编码器）的训练方式是什么？",
    "options": [
      {
        "key": "A",
        "text": "图像分类"
      },
      {
        "key": "B",
        "text": "图像重建"
      },
      {
        "key": "C",
        "text": "目标检测"
      },
      {
        "key": "D",
        "text": "语义分割"
      }
    ],
    "answer": "B",
    "explanation": "第一章\"视觉大模型：MAE（图像重建）\""
  },
  {
    "id": 13,
    "type": "single",
    "question": "多模态大模型以什么为骨干进行思考和推理？",
    "options": [
      {
        "key": "A",
        "text": "视觉模型"
      },
      {
        "key": "B",
        "text": "语音模型"
      },
      {
        "key": "C",
        "text": "大语言模型"
      },
      {
        "key": "D",
        "text": "图神经网络"
      }
    ],
    "answer": "C",
    "explanation": "第一章\"多模态大模型：以大语言模型为骨干，将不同模态转为自然语言进行思考和推理\""
  },
  {
    "id": 14,
    "type": "single",
    "question": "千亿参数模型训练大约需要什么级别的算力资源？",
    "options": [
      {
        "key": "A",
        "text": "单卡GPU"
      },
      {
        "key": "B",
        "text": "十卡集群"
      },
      {
        "key": "C",
        "text": "百卡集群"
      },
      {
        "key": "D",
        "text": "千卡集群"
      }
    ],
    "answer": "D",
    "explanation": "第一章\"算力成本：千亿参数模型训练需千卡集群，成本数千万至上亿\""
  },
  {
    "id": 15,
    "type": "single",
    "question": "DeepSeek V3 的训练成本约为多少？",
    "options": [
      {
        "key": "A",
        "text": "557万美元"
      },
      {
        "key": "B",
        "text": "5570万美元"
      },
      {
        "key": "C",
        "text": "5.57亿美元"
      },
      {
        "key": "D",
        "text": "557万人民币"
      }
    ],
    "answer": "A",
    "explanation": "第一章\"DeepSeek V3：训练成本仅 557 万美元，打破算力军备竞赛魔咒\""
  },
  {
    "id": 16,
    "type": "single",
    "question": "DeepSeek R1 的核心能力是什么？",
    "options": [
      {
        "key": "A",
        "text": "图像生成"
      },
      {
        "key": "B",
        "text": "语音识别"
      },
      {
        "key": "C",
        "text": "慢思考/推理能力"
      },
      {
        "key": "D",
        "text": "视频理解"
      }
    ],
    "answer": "C",
    "explanation": "第一章\"DeepSeek R1：具备慢思考/推理能力（复杂信息处理、任务拆解规划、编程计算）\""
  },
  {
    "id": 17,
    "type": "single",
    "question": "星辰大模型是中国电信的什么类型产品？",
    "options": [
      {
        "key": "A",
        "text": "合作开发"
      },
      {
        "key": "B",
        "text": "开源社区"
      },
      {
        "key": "C",
        "text": "全自研、全模态、全国产"
      },
      {
        "key": "D",
        "text": "仅语义模型"
      }
    ],
    "answer": "C",
    "explanation": "第一章\"星辰大模型：中国电信全自研、全模态、全国产（语义/语音/视觉/多模态/全双工）\""
  },
  {
    "id": 18,
    "type": "single",
    "question": "智能体与大模型的关系类比中，大模型相当于什么？",
    "options": [
      {
        "key": "A",
        "text": "完整汽车"
      },
      {
        "key": "B",
        "text": "方向盘"
      },
      {
        "key": "C",
        "text": "发动机"
      },
      {
        "key": "D",
        "text": "轮胎"
      }
    ],
    "answer": "C",
    "explanation": "第二章\"与大模型关系：大模型=发动机，智能体=完整汽车（加上知识库、工具、记忆等外设）\""
  },
  {
    "id": 19,
    "type": "single",
    "question": "以下哪种智能体类型稳定性最好？",
    "options": [
      {
        "key": "A",
        "text": "自主规划智能体"
      },
      {
        "key": "B",
        "text": "工作流智能体"
      },
      {
        "key": "C",
        "text": "超级智能体"
      },
      {
        "key": "D",
        "text": "聊天机器人"
      }
    ],
    "answer": "B",
    "explanation": "第二章\"工作流智能体：人工编排步骤+大模型动态执行，半自动，稳定性好\""
  },
  {
    "id": 20,
    "type": "single",
    "question": "自主规划智能体最适合的场景是什么？",
    "options": [
      {
        "key": "A",
        "text": "复杂业务流程"
      },
      {
        "key": "B",
        "text": "深度报告生成"
      },
      {
        "key": "C",
        "text": "简单知识问答、客服"
      },
      {
        "key": "D",
        "text": "数据分析"
      }
    ],
    "answer": "C",
    "explanation": "第二章\"自主规划智能体：配置简单，全自动，但稳定性差，适用场景：简单知识问答、客服\""
  },
  {
    "id": 21,
    "type": "single",
    "question": "超级智能体的典型代表产品不包括以下哪个？",
    "options": [
      {
        "key": "A",
        "text": "Manus"
      },
      {
        "key": "B",
        "text": "Coze Space"
      },
      {
        "key": "C",
        "text": "ChatGPT 3.5"
      },
      {
        "key": "D",
        "text": "以上都是超级智能体代表"
      }
    ],
    "answer": "C",
    "explanation": "第二章\"超级智能体（Manus、Coze Space 等）成为新趋势\"，ChatGPT 3.5 不属于超级智能体"
  },
  {
    "id": 22,
    "type": "single",
    "question": "\"换脑子\"指的是智能体优化四法中的哪一种？",
    "options": [
      {
        "key": "A",
        "text": "提示词优化"
      },
      {
        "key": "B",
        "text": "模型微调"
      },
      {
        "key": "C",
        "text": "反馈学习"
      },
      {
        "key": "D",
        "text": "工作流拆解"
      }
    ],
    "answer": "B",
    "explanation": "第二章\"智能体优化四法：模型微调——换脑子（训练模型）\""
  },
  {
    "id": 23,
    "type": "single",
    "question": "\"领导指导\"指的是智能体优化四法中的哪一种？",
    "options": [
      {
        "key": "A",
        "text": "提示词优化"
      },
      {
        "key": "B",
        "text": "模型微调"
      },
      {
        "key": "C",
        "text": "反馈学习"
      },
      {
        "key": "D",
        "text": "工作流拆解"
      }
    ],
    "answer": "A",
    "explanation": "第二章\"智能体优化四法：提示词优化——领导指导（调整提示词）\""
  },
  {
    "id": 24,
    "type": "single",
    "question": "长文档创作智能体的模块一主要功能是什么？",
    "options": [
      {
        "key": "A",
        "text": "迭代创作内容"
      },
      {
        "key": "B",
        "text": "生成大纲"
      },
      {
        "key": "C",
        "text": "格式化输出"
      },
      {
        "key": "D",
        "text": "知识库检索"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"模块一：生成大纲（A-参考用户文档 / B-匹配知识库 / C-格式化变量）\""
  },
  {
    "id": 25,
    "type": "single",
    "question": "长文档创作智能体的模块二主要功能是什么？",
    "options": [
      {
        "key": "A",
        "text": "生成大纲"
      },
      {
        "key": "B",
        "text": "迭代创作（根据大纲逐条扩展内容）"
      },
      {
        "key": "C",
        "text": "文档提取"
      },
      {
        "key": "D",
        "text": "问题分类"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"模块二：迭代创作（根据大纲逐条扩展内容，循环拼接）\""
  },
  {
    "id": 26,
    "type": "single",
    "question": "系统提示词与用户提示词的优先级关系是什么？",
    "options": [
      {
        "key": "A",
        "text": "用户提示词优先"
      },
      {
        "key": "B",
        "text": "系统提示词优先"
      },
      {
        "key": "C",
        "text": "两者相同"
      },
      {
        "key": "D",
        "text": "取决于模型"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"提示词工程：系统提示词（角色/技能/注意事项/输出格式）优先级高于用户提示词\""
  },
  {
    "id": 27,
    "type": "single",
    "question": "思维链（CoT）的核心提示语是什么？",
    "options": [
      {
        "key": "A",
        "text": "\"请直接回答\""
      },
      {
        "key": "B",
        "text": "\"让我们一步步思考\""
      },
      {
        "key": "C",
        "text": "\"请简短回答\""
      },
      {
        "key": "D",
        "text": "\"请给出最终结果\""
      }
    ],
    "answer": "B",
    "explanation": "第三章\"思维链（CoT）：'让我们一步步思考'可大幅提升复杂推理准确率\""
  },
  {
    "id": 28,
    "type": "single",
    "question": "ReAct 框架的执行循环是什么？",
    "options": [
      {
        "key": "A",
        "text": "思考→输出→结束"
      },
      {
        "key": "B",
        "text": "思考→行动→观察"
      },
      {
        "key": "C",
        "text": "输入→处理→输出"
      },
      {
        "key": "D",
        "text": "感知→决策→执行"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"ReAct 框架：思考→行动→观察的循环，实现多步任务执行\""
  },
  {
    "id": 29,
    "type": "single",
    "question": "RAG 技术主要解决大模型的哪些问题？",
    "options": [
      {
        "key": "A",
        "text": "幻觉、知识更新、数据安全"
      },
      {
        "key": "B",
        "text": "计算速度、内存占用、网络延迟"
      },
      {
        "key": "C",
        "text": "模型大小、训练时间、部署成本"
      },
      {
        "key": "D",
        "text": "用户界面、交互体验、响应格式"
      }
    ],
    "answer": "A",
    "explanation": "第三章\"RAG 技术：解决大模型幻觉、知识更新、数据安全问题\""
  },
  {
    "id": 30,
    "type": "single",
    "question": "Graph RAG 的核心特点是什么？",
    "options": [
      {
        "key": "A",
        "text": "关键词搜索"
      },
      {
        "key": "B",
        "text": "知识图谱层层抽象"
      },
      {
        "key": "C",
        "text": "纯语义检索"
      },
      {
        "key": "D",
        "text": "图像生成"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"Graph RAG（知识图谱层层抽象）\""
  },
  {
    "id": 31,
    "type": "single",
    "question": "Agentic RAG 与传统 RAG 的区别是什么？",
    "options": [
      {
        "key": "A",
        "text": "只做检索"
      },
      {
        "key": "B",
        "text": "检索+规划推理"
      },
      {
        "key": "C",
        "text": "只做生成"
      },
      {
        "key": "D",
        "text": "只做分类"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"Agentic RAG（检索+规划推理）\""
  },
  {
    "id": 32,
    "type": "single",
    "question": "MCP 协议的全称是什么？",
    "options": [
      {
        "key": "A",
        "text": "Model Control Protocol"
      },
      {
        "key": "B",
        "text": "Model Context Protocol"
      },
      {
        "key": "C",
        "text": "Machine Communication Protocol"
      },
      {
        "key": "D",
        "text": "Multi-Cloud Platform"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"MCP 协议：Model Context Protocol，专为 AI 设计的工具调用协议\""
  },
  {
    "id": 33,
    "type": "single",
    "question": "MCP 协议主要解决什么问题？",
    "options": [
      {
        "key": "A",
        "text": "模型训练效率"
      },
      {
        "key": "B",
        "text": "HTTP 协议无状态、封装不统一等工具调用问题"
      },
      {
        "key": "C",
        "text": "数据存储安全"
      },
      {
        "key": "D",
        "text": "网络传输速度"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"MCP 协议：专为 AI 设计的工具调用协议，解决 HTTP 协议无状态、封装不统一等问题\""
  },
  {
    "id": 34,
    "type": "single",
    "question": "大模型的短期记忆是指什么？",
    "options": [
      {
        "key": "A",
        "text": "跨会话记忆"
      },
      {
        "key": "B",
        "text": "当前会话记忆"
      },
      {
        "key": "C",
        "text": "外部知识库"
      },
      {
        "key": "D",
        "text": "长期存储"
      }
    ],
    "answer": "B",
    "explanation": "第三章\"大模型记忆：短期记忆（当前会话）、长期记忆（跨会话）、外部知识\""
  },
  {
    "id": 35,
    "type": "single",
    "question": "四阶段十二步方法论中，第一阶段是什么？",
    "options": [
      {
        "key": "A",
        "text": "设计与筹备"
      },
      {
        "key": "B",
        "text": "实施"
      },
      {
        "key": "C",
        "text": "场景决策"
      },
      {
        "key": "D",
        "text": "持续运营"
      }
    ],
    "answer": "C",
    "explanation": "第四章\"四阶段十二步方法论：1.场景决策 2.设计与筹备 3.实施 4.持续运营\""
  },
  {
    "id": 36,
    "type": "single",
    "question": "LoRA 微调技术的核心原理是什么？",
    "options": [
      {
        "key": "A",
        "text": "只调输出层"
      },
      {
        "key": "B",
        "text": "矩阵分解"
      },
      {
        "key": "C",
        "text": "输入纵向切分"
      },
      {
        "key": "D",
        "text": "全参数微调"
      }
    ],
    "answer": "B",
    "explanation": "第四章\"高效微调技术：LoRA（矩阵分解）\""
  },
  {
    "id": 37,
    "type": "single",
    "question": "Adapter Tuning 微调技术的特点是什么？",
    "options": [
      {
        "key": "A",
        "text": "矩阵分解"
      },
      {
        "key": "B",
        "text": "只调输出层"
      },
      {
        "key": "C",
        "text": "输入纵向切分"
      },
      {
        "key": "D",
        "text": "全参数微调"
      }
    ],
    "answer": "B",
    "explanation": "第四章\"高效微调技术：Adapter Tuning（只调输出层）\""
  },
  {
    "id": 38,
    "type": "single",
    "question": "Prefix Tuning 微调技术的特点是什么？",
    "options": [
      {
        "key": "A",
        "text": "矩阵分解"
      },
      {
        "key": "B",
        "text": "只调输出层"
      },
      {
        "key": "C",
        "text": "输入纵向切分"
      },
      {
        "key": "D",
        "text": "全参数微调"
      }
    ],
    "answer": "C",
    "explanation": "第四章\"高效微调技术：Prefix Tuning（输入纵向切分）\""
  },
  {
    "id": 39,
    "type": "single",
    "question": "单机 Docker Compose 部署最低需要什么配置？",
    "options": [
      {
        "key": "A",
        "text": "16C/32G"
      },
      {
        "key": "B",
        "text": "32C/64G/100G系统盘+1T数据盘"
      },
      {
        "key": "C",
        "text": "64C/128G"
      },
      {
        "key": "D",
        "text": "8C/16G"
      }
    ],
    "answer": "B",
    "explanation": "第四章\"单机部署（Docker Compose）：支持 x86 和 ARM，需 32C/64G/100G 系统盘+1T 数据盘\""
  },
  {
    "id": 40,
    "type": "single",
    "question": "星辰智能体平台的内核使用什么语言开发以保证高并发稳定？",
    "options": [
      {
        "key": "A",
        "text": "Java"
      },
      {
        "key": "B",
        "text": "Python"
      },
      {
        "key": "C",
        "text": "Go"
      },
      {
        "key": "D",
        "text": "Rust"
      }
    ],
    "answer": "C",
    "explanation": "第六章\"安全可控：Go 语言内核高并发稳定\""
  },
  {
    "id": 41,
    "type": "multiple",
    "question": "以下哪些是经典神经网络？（多选）",
    "options": [
      {
        "key": "A",
        "text": "全连接网络（FC）"
      },
      {
        "key": "B",
        "text": "卷积神经网络（CNN）"
      },
      {
        "key": "C",
        "text": "残差网络（ResNet）"
      },
      {
        "key": "D",
        "text": "循环神经网络（RNN）"
      }
    ],
    "answer": "ABCD",
    "explanation": "第一章\"经典网络：全连接网络（FC）、卷积神经网络（CNN，高效处理图像）、残差网络（ResNet，解决梯度弥散）、循环神经网络（RNN，处理序列化输入）\""
  },
  {
    "id": 42,
    "type": "multiple",
    "question": "Transformer 的优势包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "支持长距离建模"
      },
      {
        "key": "B",
        "text": "可并行化计算"
      },
      {
        "key": "C",
        "text": "只能处理文本"
      },
      {
        "key": "D",
        "text": "由 Encoder 和 Decoder 构成"
      }
    ],
    "answer": "ABD",
    "explanation": "第一章\"Transformer：一统天下的网络结构，由 Encoder+Decoder 构成，支持长距离建模且可并行化计算\"，C 错误，Transformer 不限于文本"
  },
  {
    "id": 43,
    "type": "multiple",
    "question": "自监督学习的典型方式包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "文本完形填空"
      },
      {
        "key": "B",
        "text": "图文对比"
      },
      {
        "key": "C",
        "text": "有监督分类"
      },
      {
        "key": "D",
        "text": "强化学习"
      }
    ],
    "answer": "AB",
    "explanation": "第一章\"自监督学习：将互联网海量无标注数据（文本完形填空、图文对比）变为可学习形式\""
  },
  {
    "id": 44,
    "type": "multiple",
    "question": "大模型\"智能涌现\"体现在哪些能力上？（多选）",
    "options": [
      {
        "key": "A",
        "text": "数学推理"
      },
      {
        "key": "B",
        "text": "代码编程"
      },
      {
        "key": "C",
        "text": "图像生成"
      },
      {
        "key": "D",
        "text": "语音合成"
      }
    ],
    "answer": "AB",
    "explanation": "第一章\"智能涌现：参数量达到 10^10~10^11 时，模型能力出现阶跃式提升（数学推理、代码编程等）\""
  },
  {
    "id": 45,
    "type": "multiple",
    "question": "AI 研发范式的变化包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "所需样本量大幅减少"
      },
      {
        "key": "B",
        "text": "端到端解决问题"
      },
      {
        "key": "C",
        "text": "从多小模型变为链大模型"
      },
      {
        "key": "D",
        "text": "需要更多标注数据"
      }
    ],
    "answer": "ABC",
    "explanation": "第一章\"AI 研发范式变化：所需样本量大幅减少、端到端解决问题、从多小模型变为链大模型\""
  },
  {
    "id": 46,
    "type": "multiple",
    "question": "大模型技术挑战包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "算力成本"
      },
      {
        "key": "B",
        "text": "工程难度"
      },
      {
        "key": "C",
        "text": "训练不稳定"
      },
      {
        "key": "D",
        "text": "数据标注困难"
      }
    ],
    "answer": "ABC",
    "explanation": "第一章\"大模型技术挑战：算力成本、工程难度、训练不稳定\""
  },
  {
    "id": 47,
    "type": "multiple",
    "question": "分布式训练的并行方式包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "张量并行"
      },
      {
        "key": "B",
        "text": "流水线并行"
      },
      {
        "key": "C",
        "text": "数据并行"
      },
      {
        "key": "D",
        "text": "以上都不是"
      }
    ],
    "answer": "ABC",
    "explanation": "第一章\"工程难度：需使用张量并行、流水线并行等复杂分布式训练方式\"，数据并行也是常见方式"
  },
  {
    "id": 48,
    "type": "multiple",
    "question": "星辰大模型包含哪些模态？（多选）",
    "options": [
      {
        "key": "A",
        "text": "语义"
      },
      {
        "key": "B",
        "text": "语音"
      },
      {
        "key": "C",
        "text": "视觉"
      },
      {
        "key": "D",
        "text": "多模态"
      }
    ],
    "answer": "ABCD",
    "explanation": "第一章\"星辰大模型：中国电信全自研、全模态、全国产（语义/语音/视觉/多模态/全双工）\""
  },
  {
    "id": 49,
    "type": "multiple",
    "question": "B 端智能体落地要求包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "与主营业务整合"
      },
      {
        "key": "B",
        "text": "从单一任务走向综合流程"
      },
      {
        "key": "C",
        "text": "切实生产力回报"
      },
      {
        "key": "D",
        "text": "只需技术先进即可"
      }
    ],
    "answer": "ABC",
    "explanation": "第一章\"B 端落地要求：与主营业务整合、从单一任务走向综合流程、切实生产力回报\""
  },
  {
    "id": 50,
    "type": "multiple",
    "question": "智能体的核心组成部分包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "大模型"
      },
      {
        "key": "B",
        "text": "知识库"
      },
      {
        "key": "C",
        "text": "工具"
      },
      {
        "key": "D",
        "text": "记忆"
      }
    ],
    "answer": "ABCD",
    "explanation": "第二章\"与大模型关系：大模型=发动机，智能体=完整汽车（加上知识库、工具、记忆等外设）\""
  },
  {
    "id": 51,
    "type": "multiple",
    "question": "以下哪些是工作流智能体的特点？（多选）",
    "options": [
      {
        "key": "A",
        "text": "人工编排步骤"
      },
      {
        "key": "B",
        "text": "大模型动态执行"
      },
      {
        "key": "C",
        "text": "半自动"
      },
      {
        "key": "D",
        "text": "稳定性好"
      }
    ],
    "answer": "ABCD",
    "explanation": "第二章\"工作流智能体：人工编排步骤+大模型动态执行，半自动，稳定性好\""
  },
  {
    "id": 52,
    "type": "multiple",
    "question": "超级智能体的特征包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "虚拟机环境"
      },
      {
        "key": "B",
        "text": "多智能体协同"
      },
      {
        "key": "C",
        "text": "长程规划"
      },
      {
        "key": "D",
        "text": "反思纠错"
      }
    ],
    "answer": "ABCD",
    "explanation": "第二章\"超级智能体：全自动，虚拟机环境+多智能体协同+长程规划+反思纠错\""
  },
  {
    "id": 53,
    "type": "multiple",
    "question": "智能体优化四法包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "提示词优化"
      },
      {
        "key": "B",
        "text": "模型微调"
      },
      {
        "key": "C",
        "text": "反馈学习"
      },
      {
        "key": "D",
        "text": "工作流拆解"
      }
    ],
    "answer": "ABCD",
    "explanation": "第二章\"智能体优化四法：提示词优化、模型微调、反馈学习、工作流拆解\""
  },
  {
    "id": 54,
    "type": "multiple",
    "question": "长文档创作智能体模块一包含哪些子路径？（多选）",
    "options": [
      {
        "key": "A",
        "text": "参考用户文档"
      },
      {
        "key": "B",
        "text": "匹配知识库"
      },
      {
        "key": "C",
        "text": "格式化变量"
      },
      {
        "key": "D",
        "text": "迭代创作"
      }
    ],
    "answer": "ABC",
    "explanation": "第三章\"模块一：生成大纲（A-参考用户文档 / B-匹配知识库 / C-格式化变量）\"，D 属于模块二"
  },
  {
    "id": 55,
    "type": "multiple",
    "question": "以下哪些属于能力型工作流节点？（多选）",
    "options": [
      {
        "key": "A",
        "text": "大模型节点"
      },
      {
        "key": "B",
        "text": "智能体节点"
      },
      {
        "key": "C",
        "text": "知识库节点"
      },
      {
        "key": "D",
        "text": "条件节点"
      }
    ],
    "answer": "ABC",
    "explanation": "第三章\"能力型节点：大模型节点、智能体节点、知识库节点、文档提取节点、代码节点、HTTP 节点、MCP 节点\"，条件节点属于流程型"
  },
  {
    "id": 56,
    "type": "multiple",
    "question": "以下哪些属于流程型工作流节点？（多选）",
    "options": [
      {
        "key": "A",
        "text": "条件节点"
      },
      {
        "key": "B",
        "text": "迭代节点"
      },
      {
        "key": "C",
        "text": "问题分类节点"
      },
      {
        "key": "D",
        "text": "变量赋值节点"
      }
    ],
    "answer": "ABCD",
    "explanation": "第三章\"流程型节点：条件节点、迭代节点、问题分类节点、变量聚合节点、变量赋值节点、模板转换节点\""
  },
  {
    "id": 57,
    "type": "multiple",
    "question": "知识库节点支持的搜索方式包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "关键词搜索"
      },
      {
        "key": "B",
        "text": "语义搜索"
      },
      {
        "key": "C",
        "text": "混合搜索"
      },
      {
        "key": "D",
        "text": "随机搜索"
      }
    ],
    "answer": "ABC",
    "explanation": "第三章\"知识库节点：RAG 检索（关键词+语义+混合搜索）\""
  },
  {
    "id": 58,
    "type": "multiple",
    "question": "提示词工程的要点包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "明确无歧义"
      },
      {
        "key": "B",
        "text": "提供示例"
      },
      {
        "key": "C",
        "text": "迭代调优"
      },
      {
        "key": "D",
        "text": "越长越好"
      }
    ],
    "answer": "ABC",
    "explanation": "第三章\"提示词工程：需明确无歧义、提供示例、迭代调优\"，D 错误，不是越长越好"
  },
  {
    "id": 59,
    "type": "multiple",
    "question": "RAG 技术解决的大模型问题包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "幻觉"
      },
      {
        "key": "B",
        "text": "知识更新"
      },
      {
        "key": "C",
        "text": "数据安全"
      },
      {
        "key": "D",
        "text": "训练速度"
      }
    ],
    "answer": "ABC",
    "explanation": "第三章\"RAG 技术：解决大模型幻觉、知识更新、数据安全问题\""
  },
  {
    "id": 60,
    "type": "multiple",
    "question": "大模型记忆的类型包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "短期记忆"
      },
      {
        "key": "B",
        "text": "长期记忆"
      },
      {
        "key": "C",
        "text": "外部知识"
      },
      {
        "key": "D",
        "text": "永久记忆"
      }
    ],
    "answer": "ABC",
    "explanation": "第三章\"大模型记忆：短期记忆（当前会话）、长期记忆（跨会话）、外部知识\"，不存在\"永久记忆\"分类"
  },
  {
    "id": 61,
    "type": "multiple",
    "question": "四阶段十二步方法论中\"实施\"阶段包括哪些步骤？（多选）",
    "options": [
      {
        "key": "A",
        "text": "开发"
      },
      {
        "key": "B",
        "text": "测试"
      },
      {
        "key": "C",
        "text": "部署集成"
      },
      {
        "key": "D",
        "text": "效果评估"
      }
    ],
    "answer": "ABCD",
    "explanation": "第四章\"实施：开发 → 测试 → 部署集成 → 效果评估\""
  },
  {
    "id": 62,
    "type": "multiple",
    "question": "适合做智能体的场景四要点包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "复杂业务需求"
      },
      {
        "key": "B",
        "text": "高频人机交互"
      },
      {
        "key": "C",
        "text": "工具链已完善"
      },
      {
        "key": "D",
        "text": "风险敏感"
      }
    ],
    "answer": "ABCD",
    "explanation": "第四章\"适合做智能体的场景四要点：复杂业务需求、高频人机交互、工具链已完善、风险敏感\""
  },
  {
    "id": 63,
    "type": "multiple",
    "question": "模型微调技术包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "Continue Pretrain"
      },
      {
        "key": "B",
        "text": "SFT 监督微调"
      },
      {
        "key": "C",
        "text": "LoRA"
      },
      {
        "key": "D",
        "text": "Adapter Tuning"
      }
    ],
    "answer": "ABCD",
    "explanation": "第四章\"模型微调技术：Continue Pretrain、SFT 监督微调、LoRA、Adapter Tuning\""
  },
  {
    "id": 64,
    "type": "multiple",
    "question": "高效微调技术包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "LoRA"
      },
      {
        "key": "B",
        "text": "Adapter Tuning"
      },
      {
        "key": "C",
        "text": "Prefix Tuning"
      },
      {
        "key": "D",
        "text": "全参数微调"
      }
    ],
    "answer": "ABC",
    "explanation": "第四章\"高效微调技术：LoRA（矩阵分解）、Adapter Tuning（只调输出层）、Prefix Tuning（输入纵向切分），大幅减少训练参数量\"，全参数微调不属于高效微调"
  },
  {
    "id": 65,
    "type": "multiple",
    "question": "硬件资源评估需要考虑哪些方面？（多选）",
    "options": [
      {
        "key": "A",
        "text": "CPU"
      },
      {
        "key": "B",
        "text": "GPU"
      },
      {
        "key": "C",
        "text": "存储"
      },
      {
        "key": "D",
        "text": "网络"
      }
    ],
    "answer": "ABC",
    "explanation": "第四章\"硬件资源评估：CPU、GPU、存储\""
  },
  {
    "id": 66,
    "type": "multiple",
    "question": "电信行业智能体案例包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "新小宸智能体"
      },
      {
        "key": "B",
        "text": "通信助手"
      },
      {
        "key": "C",
        "text": "知享乐芙"
      },
      {
        "key": "D",
        "text": "网络负荷分析"
      }
    ],
    "answer": "ABCD",
    "explanation": "第五章\"电信行业：新小宸智能体、通信助手、知享乐芙、网络负荷分析\""
  },
  {
    "id": 67,
    "type": "multiple",
    "question": "通信助手智能体的技术特点包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "意图分类"
      },
      {
        "key": "B",
        "text": "动态提示词"
      },
      {
        "key": "C",
        "text": "方言支持"
      },
      {
        "key": "D",
        "text": "安全监督"
      }
    ],
    "answer": "ABCD",
    "explanation": "第五章\"通信助手：漏接电话智能代接，基于星辰大模型+意图分类+动态提示词+方言支持+安全监督\""
  },
  {
    "id": 68,
    "type": "multiple",
    "question": "企业智能化转型四关键包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "统一认知"
      },
      {
        "key": "B",
        "text": "大模型基建+智能平台"
      },
      {
        "key": "C",
        "text": "人才团队建设"
      },
      {
        "key": "D",
        "text": "锁定核心场景"
      }
    ],
    "answer": "ABCD",
    "explanation": "第五章\"企业智能化转型四关键：统一认知、大模型基建+智能平台、人才团队建设、锁定核心场景\""
  },
  {
    "id": 69,
    "type": "multiple",
    "question": "星辰智能体平台的四大优势包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "端到端效果保障"
      },
      {
        "key": "B",
        "text": "产业特性"
      },
      {
        "key": "C",
        "text": "安全可控"
      },
      {
        "key": "D",
        "text": "教培认证"
      }
    ],
    "answer": "ABCD",
    "explanation": "第六章\"四大优势：端到端效果保障、产业特性、安全可控、教培认证\""
  },
  {
    "id": 70,
    "type": "multiple",
    "question": "星辰智能体平台的部署形态包括哪些？（多选）",
    "options": [
      {
        "key": "A",
        "text": "标准版"
      },
      {
        "key": "B",
        "text": "公有云 SaaS 版"
      },
      {
        "key": "C",
        "text": "企业运营版"
      },
      {
        "key": "D",
        "text": "一体机"
      }
    ],
    "answer": "ABCD",
    "explanation": "第六章\"部署形态：标准版、公有云 SaaS 版、企业运营版、一体机\""
  },
  {
    "id": 71,
    "type": "judge",
    "question": "机器学习的基本思路是先演绎后归纳。",
    "options": [],
    "answer": "✕",
    "explanation": "第一章\"机器学习：通过 y=wx 框架，利用大量已知样本拟合参数，再进行预测（归纳→演绎）\"，是先归纳后演绎"
  },
  {
    "id": 72,
    "type": "judge",
    "question": "深度学习模拟人脑神经元结构，用感知机组成不同神经网络。",
    "options": [],
    "answer": "✓",
    "explanation": "第一章\"深度学习：模拟人脑神经元结构，用感知机组成不同神经网络，拟合任意复杂函数\""
  },
  {
    "id": 73,
    "type": "judge",
    "question": "CNN（卷积神经网络）专门用于高效处理序列化输入。",
    "options": [],
    "answer": "✕",
    "explanation": "第一章\"卷积神经网络（CNN，高效处理图像）\"，RNN 才是处理序列化输入"
  },
  {
    "id": 74,
    "type": "judge",
    "question": "Transformer 只能处理文本数据，无法处理其他模态。",
    "options": [],
    "answer": "✕",
    "explanation": "第一章\"Transformer：支持长距离建模且可并行化计算\"，且多模态大模型也基于 Transformer"
  },
  {
    "id": 75,
    "type": "judge",
    "question": "自监督学习需要大量人工标注数据。",
    "options": [],
    "answer": "✕",
    "explanation": "第一章\"自监督学习：将互联网海量无标注数据变为可学习形式，解决样本不足问题\""
  },
  {
    "id": 76,
    "type": "judge",
    "question": "生成式模型将不同任务统一为序列化输入输出，一个模型解决多种任务。",
    "options": [],
    "answer": "✓",
    "explanation": "第一章\"生成式模型（多任务统一学习）：将不同任务统一为序列化输入输出，一个模型解决多种任务\""
  },
  {
    "id": 77,
    "type": "judge",
    "question": "大模型\"智能涌现\"意味着参数量越大能力一定线性增长。",
    "options": [],
    "answer": "✕",
    "explanation": "第一章\"智能涌现：参数量达到 10^10~10^11 时，模型能力出现阶跃式提升\"，是阶跃式而非线性"
  },
  {
    "id": 78,
    "type": "judge",
    "question": "Instruct GPT 证明少量指令标注样本即可大幅提升模型对齐人类需求的能力。",
    "options": [],
    "answer": "✓",
    "explanation": "第一章\"指令学习（Instruct GPT）：少量指令标注样本即可大幅提升模型对齐人类需求的能力\""
  },
  {
    "id": 79,
    "type": "judge",
    "question": "大语言模型的本质是文字接龙，根据输入不断预测下一个词。",
    "options": [],
    "answer": "✓",
    "explanation": "第一章\"大语言模型本质：文字接龙，根据输入不断预测下一个词\""
  },
  {
    "id": 80,
    "type": "judge",
    "question": "CLIP 模型通过纯文本训练实现 Zero-shot 能力。",
    "options": [],
    "answer": "✕",
    "explanation": "第一章\"视觉大模型：CLIP（图文对训练）\"，是通过图文对训练而非纯文本"
  },
  {
    "id": 81,
    "type": "judge",
    "question": "多模态大模型以视觉模型为骨干进行思考和推理。",
    "options": [],
    "answer": "✕",
    "explanation": "第一章\"多模态大模型：以大语言模型为骨干，将不同模态转为自然语言进行思考和推理\""
  },
  {
    "id": 82,
    "type": "judge",
    "question": "千亿参数模型训练需要千卡集群，成本可达数千万至上亿。",
    "options": [],
    "answer": "✓",
    "explanation": "第一章\"算力成本：千亿参数模型训练需千卡集群，成本数千万至上亿\""
  },
  {
    "id": 83,
    "type": "judge",
    "question": "DeepSeek V3 的训练成本远低于同级别模型。",
    "options": [],
    "answer": "✓",
    "explanation": "第一章\"DeepSeek V3：训练成本仅 557 万美元，打破算力军备竞赛魔咒\""
  },
  {
    "id": 84,
    "type": "judge",
    "question": "DeepSeek R1 不具备推理能力，只能做简单问答。",
    "options": [],
    "answer": "✕",
    "explanation": "第一章\"DeepSeek R1：具备慢思考/推理能力（复杂信息处理、任务拆解规划、编程计算）\""
  },
  {
    "id": 85,
    "type": "judge",
    "question": "星辰大模型是中国电信全自研、全模态、全国产的大模型。",
    "options": [],
    "answer": "✓",
    "explanation": "第一章\"星辰大模型：中国电信全自研、全模态、全国产（语义/语音/视觉/多模态/全双工）\""
  },
  {
    "id": 86,
    "type": "judge",
    "question": "智能体就是大模型本身，两者没有区别。",
    "options": [],
    "answer": "✕",
    "explanation": "第二章\"与大模型关系：大模型=发动机，智能体=完整汽车（加上知识库、工具、记忆等外设）\"，两者有本质区别"
  },
  {
    "id": 87,
    "type": "judge",
    "question": "工作流智能体是全自动的，不需要人工编排步骤。",
    "options": [],
    "answer": "✕",
    "explanation": "第二章\"工作流智能体：人工编排步骤+大模型动态执行，半自动\"，需要人工编排"
  },
  {
    "id": 88,
    "type": "judge",
    "question": "超级智能体具备反思纠错能力。",
    "options": [],
    "answer": "✓",
    "explanation": "第二章\"超级智能体：全自动，虚拟机环境+多智能体协同+长程规划+反思纠错\""
  },
  {
    "id": 89,
    "type": "judge",
    "question": "提示词优化是智能体优化四法之一。",
    "options": [],
    "answer": "✓",
    "explanation": "第二章\"智能体优化四法：提示词优化、模型微调、反馈学习、工作流拆解\""
  },
  {
    "id": 90,
    "type": "judge",
    "question": "系统提示词的优先级低于用户提示词。",
    "options": [],
    "answer": "✕",
    "explanation": "第三章\"提示词工程：系统提示词优先级高于用户提示词\""
  },
  {
    "id": 91,
    "type": "judge",
    "question": "思维链（CoT）可以提升复杂推理的准确率。",
    "options": [],
    "answer": "✓",
    "explanation": "第三章\"思维链（CoT）：'让我们一步步思考'可大幅提升复杂推理准确率\""
  },
  {
    "id": 92,
    "type": "judge",
    "question": "ReAct 框架的执行循环是\"思考→行动→观察\"。",
    "options": [],
    "answer": "✓",
    "explanation": "第三章\"ReAct 框架：思考→行动→观察的循环，实现多步任务执行\""
  },
  {
    "id": 93,
    "type": "judge",
    "question": "MCP 协议是专为 AI 设计的工具调用协议。",
    "options": [],
    "answer": "✓",
    "explanation": "第三章\"MCP 协议：专为 AI 设计的工具调用协议\""
  },
  {
    "id": 94,
    "type": "judge",
    "question": "大模型的长期记忆是指当前会话中的记忆。",
    "options": [],
    "answer": "✕",
    "explanation": "第三章\"大模型记忆：短期记忆（当前会话）、长期记忆（跨会话）\"，长期记忆是跨会话的"
  },
  {
    "id": 95,
    "type": "judge",
    "question": "四阶段十二步方法论的第一阶段是\"设计与筹备\"。",
    "options": [],
    "answer": "✕",
    "explanation": "第四章\"四阶段十二步方法论：1.场景决策 2.设计与筹备 3.实施 4.持续运营\"，第一阶段是场景决策"
  },
  {
    "id": 96,
    "type": "judge",
    "question": "LoRA 微调技术的核心原理是矩阵分解。",
    "options": [],
    "answer": "✓",
    "explanation": "第四章\"高效微调技术：LoRA（矩阵分解）\""
  },
  {
    "id": 97,
    "type": "judge",
    "question": "单机 Docker Compose 部署支持 x86 和 ARM 架构。",
    "options": [],
    "answer": "✓",
    "explanation": "第四章\"单机部署（Docker Compose）：支持 x86 和 ARM\""
  },
  {
    "id": 98,
    "type": "judge",
    "question": "全域感知智能体采用视频流+图片多模态接入。",
    "options": [],
    "answer": "✓",
    "explanation": "第五章\"全域感知智能体：视频流+图片多模态接入\""
  },
  {
    "id": 99,
    "type": "judge",
    "question": "星辰智能体平台的内核使用 Python 开发。",
    "options": [],
    "answer": "✕",
    "explanation": "第六章\"安全可控：Go 语言内核高并发稳定\"，使用 Go 语言而非 Python"
  },
  {
    "id": 100,
    "type": "judge",
    "question": "星辰智能体平台获得了工信部独家认证智能体开发工程师资质。",
    "options": [],
    "answer": "✓",
    "explanation": "第六章\"教培认证：工信部独家认证智能体开发工程师\""
  }
];
