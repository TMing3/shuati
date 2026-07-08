const QUIZ_DATA_NEW = [
  {
    "id": 1,
    "type": "single",
    "question": "机器学习的基本框架可以概括为？",
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
        "text": "y=w^x"
      },
    ],
    "answer": "A",
    "explanation": "暂无解析。"
  },
  {
    "id": 2,
    "type": "single",
    "question": "深度学习中，感知机的核心计算是？",
    "options": [
      {
        "key": "A",
        "text": "纯线性变换"
      },
      {
        "key": "B",
        "text": "加权和+非线性变换"
      },
      {
        "key": "C",
        "text": "仅非线性变换"
      },
      {
        "key": "D",
        "text": "仅加权和"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 3,
    "type": "single",
    "question": "以下哪个网络结构通过\"跨层直连\"解决梯度弥散问题？",
    "options": [
      {
        "key": "A",
        "text": "全连接网络"
      },
      {
        "key": "B",
        "text": "CNN"
      },
      {
        "key": "C",
        "text": "ResNet"
      },
      {
        "key": "D",
        "text": "RNN"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 4,
    "type": "single",
    "question": "Transformer的核心机制是？",
    "options": [
      {
        "key": "A",
        "text": "卷积操作"
      },
      {
        "key": "B",
        "text": "循环连接"
      },
      {
        "key": "C",
        "text": "Attention机制"
      },
      {
        "key": "D",
        "text": "残差连接"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 5,
    "type": "single",
    "question": "自监督学习的核心思想是？",
    "options": [
      {
        "key": "A",
        "text": "依赖大量人工标注数据"
      },
      {
        "key": "B",
        "text": "将无标注数据转化为可学习形式"
      },
      {
        "key": "C",
        "text": "仅使用有标注的少量数据"
      },
      {
        "key": "D",
        "text": "不需要任何数据"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 6,
    "type": "single",
    "question": "ChatGPT中\"智能涌现\"现象出现在参数量达到什么量级时？",
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
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 7,
    "type": "single",
    "question": "Instruct GPT的核心贡献是？",
    "options": [
      {
        "key": "A",
        "text": "增加模型参数量"
      },
      {
        "key": "B",
        "text": "少量标注样本即可大幅提升对齐人类需求的能力"
      },
      {
        "key": "C",
        "text": "提出Transformer架构"
      },
      {
        "key": "D",
        "text": "实现多模态融合"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 8,
    "type": "single",
    "question": "大语言模型的本质工作方式是？",
    "options": [
      {
        "key": "A",
        "text": "图像识别"
      },
      {
        "key": "B",
        "text": "文字接龙（预测下一个词）"
      },
      {
        "key": "C",
        "text": "逻辑推理"
      },
      {
        "key": "D",
        "text": "数值计算"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 9,
    "type": "single",
    "question": "CLIP模型的训练方式是？",
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
        "text": "语音训练"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 10,
    "type": "single",
    "question": "MAE（掩码自编码器）的预训练方式是？",
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
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 11,
    "type": "single",
    "question": "多模态大模型的核心思路是？",
    "options": [
      {
        "key": "A",
        "text": "每种模态独立处理"
      },
      {
        "key": "B",
        "text": "以大语言模型为骨干，不同模态转为自然语言进行思考和推理"
      },
      {
        "key": "C",
        "text": "仅处理文本和图像"
      },
      {
        "key": "D",
        "text": "不需要语言模型参与"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 12,
    "type": "single",
    "question": "DeepSeek V3的训练成本约为？",
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
        "text": "55.7亿美元"
      },
    ],
    "answer": "A",
    "explanation": "暂无解析。"
  },
  {
    "id": 13,
    "type": "single",
    "question": "DeepSeek R1的核心突破方向是？",
    "options": [
      {
        "key": "A",
        "text": "图像生成"
      },
      {
        "key": "B",
        "text": "从\"快思考\"到\"慢思考\"的推理能力"
      },
      {
        "key": "C",
        "text": "语音合成"
      },
      {
        "key": "D",
        "text": "视频理解"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 14,
    "type": "single",
    "question": "中国电信星辰大模型的特点是？",
    "options": [
      {
        "key": "A",
        "text": "仅支持文本"
      },
      {
        "key": "B",
        "text": "仅支持图像"
      },
      {
        "key": "C",
        "text": "全自研、全模态、全国产"
      },
      {
        "key": "D",
        "text": "基于开源模型微调"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 15,
    "type": "single",
    "question": "智能体的核心组成要素是？",
    "options": [
      {
        "key": "A",
        "text": "仅大模型"
      },
      {
        "key": "B",
        "text": "大模型+知识库+工具+记忆"
      },
      {
        "key": "C",
        "text": "仅知识库和工具"
      },
      {
        "key": "D",
        "text": "仅提示词"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 16,
    "type": "single",
    "question": "以下哪种智能体类型是产业落地的主流？",
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
        "text": "简单问答智能体"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 17,
    "type": "single",
    "question": "超级智能体的核心运行环境是？",
    "options": [
      {
        "key": "A",
        "text": "浏览器"
      },
      {
        "key": "B",
        "text": "虚拟机环境"
      },
      {
        "key": "C",
        "text": "手机端"
      },
      {
        "key": "D",
        "text": "嵌入式设备"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 18,
    "type": "single",
    "question": "工作流智能体的特点是？",
    "options": [
      {
        "key": "A",
        "text": "完全自动，无需人工干预"
      },
      {
        "key": "B",
        "text": "人工编排+大模型动态决策，半自动"
      },
      {
        "key": "C",
        "text": "仅靠规则引擎驱动"
      },
      {
        "key": "D",
        "text": "不需要大模型参与"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 19,
    "type": "single",
    "question": "RAG技术主要解决大模型的哪些问题？",
    "options": [
      {
        "key": "A",
        "text": "计算速度慢"
      },
      {
        "key": "B",
        "text": "幻觉、知识更新、数据安全"
      },
      {
        "key": "C",
        "text": "模型参数过多"
      },
      {
        "key": "D",
        "text": "训练数据不足"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 20,
    "type": "single",
    "question": "RAG的混合检索策略是指？",
    "options": [
      {
        "key": "A",
        "text": "仅关键词检索"
      },
      {
        "key": "B",
        "text": "仅语义检索"
      },
      {
        "key": "C",
        "text": "关键词检索+语义检索"
      },
      {
        "key": "D",
        "text": "随机检索"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 21,
    "type": "single",
    "question": "思维链（CoT）提示词的核心作用是？",
    "options": [
      {
        "key": "A",
        "text": "减少计算量"
      },
      {
        "key": "B",
        "text": "提升复杂任务的准确率"
      },
      {
        "key": "C",
        "text": "加快推理速度"
      },
      {
        "key": "D",
        "text": "减少模型参数"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 22,
    "type": "single",
    "question": "ReAct框架的执行流程是？",
    "options": [
      {
        "key": "A",
        "text": "思考→行动→观察的循环"
      },
      {
        "key": "B",
        "text": "仅思考"
      },
      {
        "key": "C",
        "text": "仅行动"
      },
      {
        "key": "D",
        "text": "观察→思考→行动"
      },
    ],
    "answer": "A",
    "explanation": "暂无解析。"
  },
  {
    "id": 23,
    "type": "single",
    "question": "MCP协议的全称是？",
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
        "text": "Multi-Channel Protocol"
      },
      {
        "key": "D",
        "text": "Memory Cache Protocol"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 24,
    "type": "single",
    "question": "MCP协议被比喻为AI领域的什么？",
    "options": [
      {
        "key": "A",
        "text": "操作系统"
      },
      {
        "key": "B",
        "text": "数据库"
      },
      {
        "key": "C",
        "text": "USB"
      },
      {
        "key": "D",
        "text": "编程语言"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 25,
    "type": "single",
    "question": "LoRA微调技术的核心原理是？",
    "options": [
      {
        "key": "A",
        "text": "冻结全部参数"
      },
      {
        "key": "B",
        "text": "矩阵分解，只训练低秩矩阵"
      },
      {
        "key": "C",
        "text": "只训练输出层"
      },
      {
        "key": "D",
        "text": "在输入端添加前缀"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 26,
    "type": "single",
    "question": "Adapter Tuning微调技术的特点是？",
    "options": [
      {
        "key": "A",
        "text": "训练所有参数"
      },
      {
        "key": "B",
        "text": "只调输出层"
      },
      {
        "key": "C",
        "text": "在每层插入小模块"
      },
      {
        "key": "D",
        "text": "仅修改注意力权重"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 27,
    "type": "single",
    "question": "Prefix Tuning微调技术的做法是？",
    "options": [
      {
        "key": "A",
        "text": "修改所有层参数"
      },
      {
        "key": "B",
        "text": "输入纵向切分，只训练前缀部分"
      },
      {
        "key": "C",
        "text": "只训练最后一层"
      },
      {
        "key": "D",
        "text": "冻结嵌入层"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 28,
    "type": "single",
    "question": "智能体设计方法论中，场景决策阶段的首要原则是？",
    "options": [
      {
        "key": "A",
        "text": "选择技术最先进的场景"
      },
      {
        "key": "B",
        "text": "选择高价值场景（主营业务）"
      },
      {
        "key": "C",
        "text": "选择最简单的场景"
      },
      {
        "key": "D",
        "text": "选择用户最多的场景"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 29,
    "type": "single",
    "question": "适合智能体的场景四要点中，\"复杂业务需求\"对应推荐哪种模式？",
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
        "text": "简单问答"
      },
      {
        "key": "D",
        "text": "纯检索"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 30,
    "type": "single",
    "question": "新小宸智能体中的\"通信助手\"功能是用什么替代了传统NLP+模板方案？",
    "options": [
      {
        "key": "A",
        "text": "规则引擎"
      },
      {
        "key": "B",
        "text": "大模型+提示词"
      },
      {
        "key": "C",
        "text": "纯知识库检索"
      },
      {
        "key": "D",
        "text": "人工客服"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 31,
    "type": "single",
    "question": "全域感知智能体的核心闭环流程是？",
    "options": [
      {
        "key": "A",
        "text": "数据采集→存储→展示"
      },
      {
        "key": "B",
        "text": "风险感知→事件分析→方案决策"
      },
      {
        "key": "C",
        "text": "监控→报警→人工处理"
      },
      {
        "key": "D",
        "text": "训练→推理→部署"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 32,
    "type": "single",
    "question": "多模态大模型相比传统视觉小模型的优势不包括？",
    "options": [
      {
        "key": "A",
        "text": "一模型识万物（Zero-shot）"
      },
      {
        "key": "B",
        "text": "语义理解能力强"
      },
      {
        "key": "C",
        "text": "部署简单无需预设逻辑"
      },
      {
        "key": "D",
        "text": "训练数据需求更少"
      },
    ],
    "answer": "D",
    "explanation": "暂无解析。"
  },
  {
    "id": 33,
    "type": "single",
    "question": "星辰智能体平台POC版最少需要几台CPU服务器？",
    "options": [
      {
        "key": "A",
        "text": "1台"
      },
      {
        "key": "B",
        "text": "2台"
      },
      {
        "key": "C",
        "text": "3台"
      },
      {
        "key": "D",
        "text": "5台"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 34,
    "type": "single",
    "question": "高可用版部署方案需要几台CPU服务器？",
    "options": [
      {
        "key": "A",
        "text": "3台"
      },
      {
        "key": "B",
        "text": "5台"
      },
      {
        "key": "C",
        "text": "8台"
      },
      {
        "key": "D",
        "text": "12台"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 35,
    "type": "single",
    "question": "GPU推理场景中，计算所需卡数的主要依据是？",
    "options": [
      {
        "key": "A",
        "text": "模型参数量"
      },
      {
        "key": "B",
        "text": "并发量"
      },
      {
        "key": "C",
        "text": "训练数据量"
      },
      {
        "key": "D",
        "text": "存储容量"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 36,
    "type": "single",
    "question": "GPU分布式训练中，有效算力比例通常约为？",
    "options": [
      {
        "key": "A",
        "text": "20%"
      },
      {
        "key": "B",
        "text": "50%"
      },
      {
        "key": "C",
        "text": "80%"
      },
      {
        "key": "D",
        "text": "100%"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 37,
    "type": "single",
    "question": "Graph RAG相比传统RAG的核心优势是？",
    "options": [
      {
        "key": "A",
        "text": "检索速度更快"
      },
      {
        "key": "B",
        "text": "通过知识图谱进行层层抽象，更好回答概括性问题"
      },
      {
        "key": "C",
        "text": "存储空间更小"
      },
      {
        "key": "D",
        "text": "不需要向量数据库"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 38,
    "type": "single",
    "question": "Agent RAG相比传统RAG增加了什么能力？",
    "options": [
      {
        "key": "A",
        "text": "更快的检索"
      },
      {
        "key": "B",
        "text": "规划、思考和决策能力"
      },
      {
        "key": "C",
        "text": "更大的存储"
      },
      {
        "key": "D",
        "text": "更多的数据源"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 39,
    "type": "single",
    "question": "星辰智能体平台的内核使用什么语言编写？",
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
        "text": "Golang"
      },
      {
        "key": "D",
        "text": "JavaScript"
      },
    ],
    "answer": "C",
    "explanation": "暂无解析。"
  },
  {
    "id": 40,
    "type": "single",
    "question": "星辰智能体平台的职业认证由谁颁发？",
    "options": [
      {
        "key": "A",
        "text": "中国电信"
      },
      {
        "key": "B",
        "text": "工信部"
      },
      {
        "key": "C",
        "text": "教育部"
      },
      {
        "key": "D",
        "text": "科技部"
      },
    ],
    "answer": "B",
    "explanation": "暂无解析。"
  },
  {
    "id": 41,
    "type": "multiple",
    "question": "深度学习的经典网络结构包括？",
    "options": [
      {
        "key": "A",
        "text": "全连接网络"
      },
      {
        "key": "B",
        "text": "CNN"
      },
      {
        "key": "C",
        "text": "ResNet"
      },
      {
        "key": "D",
        "text": "RNN"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 42,
    "type": "multiple",
    "question": "Transformer架构的优势包括？",
    "options": [
      {
        "key": "A",
        "text": "支持长距离依赖建模"
      },
      {
        "key": "B",
        "text": "支持并行化计算"
      },
      {
        "key": "C",
        "text": "必须串行处理"
      },
      {
        "key": "D",
        "text": "仅适用于文本任务"
      },
    ],
    "answer": "AB",
    "explanation": "暂无解析。"
  },
  {
    "id": 43,
    "type": "multiple",
    "question": "大模型出现的\"智能涌现\"能力包括？",
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
        "text": "创造性任务"
      },
      {
        "key": "D",
        "text": "仅文本分类"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 44,
    "type": "multiple",
    "question": "AI研发范式的变化体现在？",
    "options": [
      {
        "key": "A",
        "text": "样本需求大幅减少"
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
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 45,
    "type": "multiple",
    "question": "大模型面临的技术挑战包括？",
    "options": [
      {
        "key": "A",
        "text": "算力成本高"
      },
      {
        "key": "B",
        "text": "工程难度大"
      },
      {
        "key": "C",
        "text": "训练不稳定"
      },
      {
        "key": "D",
        "text": "只需要单卡即可训练"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 46,
    "type": "multiple",
    "question": "星辰大模型覆盖的模态包括？",
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
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 47,
    "type": "multiple",
    "question": "大模型产业落地的B端趋势包括？",
    "options": [
      {
        "key": "A",
        "text": "与主营业务整合"
      },
      {
        "key": "B",
        "text": "从单一任务到综合流程"
      },
      {
        "key": "C",
        "text": "切实生产力回报"
      },
      {
        "key": "D",
        "text": "仅做技术展示"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 48,
    "type": "multiple",
    "question": "智能体的优化方法包括？",
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
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 49,
    "type": "multiple",
    "question": "自主规划智能体的特点包括？",
    "options": [
      {
        "key": "A",
        "text": "配置简单"
      },
      {
        "key": "B",
        "text": "全自动执行"
      },
      {
        "key": "C",
        "text": "复杂任务稳定性差"
      },
      {
        "key": "D",
        "text": "需要大量人工编排"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 50,
    "type": "multiple",
    "question": "工作流智能体的基础节点包括？",
    "options": [
      {
        "key": "A",
        "text": "开始节点"
      },
      {
        "key": "B",
        "text": "回复节点"
      },
      {
        "key": "C",
        "text": "大模型节点"
      },
      {
        "key": "D",
        "text": "条件节点"
      },
    ],
    "answer": "AB",
    "explanation": "暂无解析。"
  },
  {
    "id": 51,
    "type": "multiple",
    "question": "工作流智能体的能力节点包括？",
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
        "text": "工具节点"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 52,
    "type": "multiple",
    "question": "工作流智能体的流程节点包括？",
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
        "text": "变量赋值节点"
      },
      {
        "key": "D",
        "text": "模板转换节点"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 53,
    "type": "multiple",
    "question": "提示词工程中，系统提示词包含的要素有？",
    "options": [
      {
        "key": "A",
        "text": "角色"
      },
      {
        "key": "B",
        "text": "技能"
      },
      {
        "key": "C",
        "text": "格式"
      },
      {
        "key": "D",
        "text": "模型参数"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 54,
    "type": "multiple",
    "question": "RAG技术解决的大模型问题包括？",
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
        "text": "计算速度"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 55,
    "type": "multiple",
    "question": "智能体的记忆机制包括？",
    "options": [
      {
        "key": "A",
        "text": "短期记忆（会话内）"
      },
      {
        "key": "B",
        "text": "长期记忆（跨会话）"
      },
      {
        "key": "C",
        "text": "外部知识"
      },
      {
        "key": "D",
        "text": "永久不变的记忆"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 56,
    "type": "multiple",
    "question": "记忆的存储方式包括？",
    "options": [
      {
        "key": "A",
        "text": "文字存储"
      },
      {
        "key": "B",
        "text": "参数化向量存储"
      },
      {
        "key": "C",
        "text": "图像存储"
      },
      {
        "key": "D",
        "text": "音频存储"
      },
    ],
    "answer": "AB",
    "explanation": "暂无解析。"
  },
  {
    "id": 57,
    "type": "multiple",
    "question": "模型微调的技术包括？",
    "options": [
      {
        "key": "A",
        "text": "Continue Pretrain"
      },
      {
        "key": "B",
        "text": "SFT监督微调"
      },
      {
        "key": "C",
        "text": "LoRA"
      },
      {
        "key": "D",
        "text": "Adapter Tuning"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 58,
    "type": "multiple",
    "question": "智能体设计四阶段包括？",
    "options": [
      {
        "key": "A",
        "text": "场景决策"
      },
      {
        "key": "B",
        "text": "设计与筹备"
      },
      {
        "key": "C",
        "text": "实施"
      },
      {
        "key": "D",
        "text": "部署集成"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 59,
    "type": "multiple",
    "question": "适合智能体的场景四要点包括？",
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
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 60,
    "type": "multiple",
    "question": "企业智能化转型的四个关键包括？",
    "options": [
      {
        "key": "A",
        "text": "统一认知"
      },
      {
        "key": "B",
        "text": "大模型基建"
      },
      {
        "key": "C",
        "text": "人才团队"
      },
      {
        "key": "D",
        "text": "锁定场景"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 61,
    "type": "multiple",
    "question": "多模态大模型相比传统视觉小模型的优势包括？",
    "options": [
      {
        "key": "A",
        "text": "一模型识万物（Zero-shot）"
      },
      {
        "key": "B",
        "text": "语义理解能力强"
      },
      {
        "key": "C",
        "text": "部署简单无需预设逻辑"
      },
      {
        "key": "D",
        "text": "训练数据需求更少"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 62,
    "type": "multiple",
    "question": "硬件资源评估的三种资源类型是？",
    "options": [
      {
        "key": "A",
        "text": "CPU资源"
      },
      {
        "key": "B",
        "text": "GPU资源"
      },
      {
        "key": "C",
        "text": "存储资源"
      },
      {
        "key": "D",
        "text": "网络资源"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 63,
    "type": "multiple",
    "question": "存储资源的四种类型包括？",
    "options": [
      {
        "key": "A",
        "text": "训练数据存储"
      },
      {
        "key": "B",
        "text": "应用数据存储"
      },
      {
        "key": "C",
        "text": "实时数据存储"
      },
      {
        "key": "D",
        "text": "中间件数据存储"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 64,
    "type": "multiple",
    "question": "星辰智能体平台的四大优势包括？",
    "options": [
      {
        "key": "A",
        "text": "效果保障"
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
        "text": "教培服务"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 65,
    "type": "multiple",
    "question": "星辰智能体平台预置的产业资产包括？",
    "options": [
      {
        "key": "A",
        "text": "100+特色产业工具"
      },
      {
        "key": "B",
        "text": "数百行业知识库"
      },
      {
        "key": "C",
        "text": "50+领域定制大模型"
      },
      {
        "key": "D",
        "text": "100+成熟应用样板"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 66,
    "type": "multiple",
    "question": "星辰智能体平台支持的部署形态包括？",
    "options": [
      {
        "key": "A",
        "text": "标准版（本地化部署）"
      },
      {
        "key": "B",
        "text": "公有云SaaS版"
      },
      {
        "key": "C",
        "text": "企业运营版"
      },
      {
        "key": "D",
        "text": "一体机"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 67,
    "type": "multiple",
    "question": "超级智能体的技术框架核心包括？",
    "options": [
      {
        "key": "A",
        "text": "规划大模型"
      },
      {
        "key": "B",
        "text": "执行大模型"
      },
      {
        "key": "C",
        "text": "记忆机制"
      },
      {
        "key": "D",
        "text": "多智能体协同"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 68,
    "type": "multiple",
    "question": "超级智能体的定制能力包括？",
    "options": [
      {
        "key": "A",
        "text": "知识定制"
      },
      {
        "key": "B",
        "text": "工具定制"
      },
      {
        "key": "C",
        "text": "任务专家型智能体"
      },
      {
        "key": "D",
        "text": "界面定制"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 69,
    "type": "multiple",
    "question": "星辰智能体平台的安全特性包括？",
    "options": [
      {
        "key": "A",
        "text": "安全围栏防护"
      },
      {
        "key": "B",
        "text": "代码扫描"
      },
      {
        "key": "C",
        "text": "输出安全防护"
      },
      {
        "key": "D",
        "text": "Golang内核高并发稳定"
      },
    ],
    "answer": "ABCD",
    "explanation": "暂无解析。"
  },
  {
    "id": 70,
    "type": "multiple",
    "question": "教培认证服务合作的高校包括？",
    "options": [
      {
        "key": "A",
        "text": "北京大学"
      },
      {
        "key": "B",
        "text": "浙江大学"
      },
      {
        "key": "C",
        "text": "中国科学技术大学"
      },
      {
        "key": "D",
        "text": "清华大学"
      },
    ],
    "answer": "ABC",
    "explanation": "暂无解析。"
  },
  {
    "id": 71,
    "type": "judge",
    "question": "机器学习的基本框架是y=wx，其中w和x需要通过大量已知样本来拟合。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 72,
    "type": "judge",
    "question": "深度学习中，感知机仅进行线性变换，不包含非线性变换。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 73,
    "type": "judge",
    "question": "ResNet通过\"跨层直连\"解决了深层网络中的梯度弥散问题。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 74,
    "type": "judge",
    "question": "RNN（循环神经网络）的优势在于可以完全并行化计算。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 75,
    "type": "judge",
    "question": "Transformer架构同时支持长距离依赖建模和并行化计算。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 76,
    "type": "judge",
    "question": "自监督学习需要大量人工标注数据才能工作。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 77,
    "type": "judge",
    "question": "生成式模型可以将多种任务统一为一种学习方式，催生了\"提示词\"概念。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 78,
    "type": "judge",
    "question": "大模型的\"智能涌现\"是指参数量增加到一定规模后，能力出现阶跃式提升。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 79,
    "type": "judge",
    "question": "Instruct GPT需要大量标注样本才能提升对齐人类需求的能力。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 80,
    "type": "judge",
    "question": "大语言模型的本质是\"文字接龙\"，即根据输入不断预测下一个词。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 81,
    "type": "judge",
    "question": "CLIP模型是通过纯文本数据进行训练的。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 82,
    "type": "judge",
    "question": "多模态大模型以大语言模型为骨干，将不同模态转为自然语言进行思考和推理。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 83,
    "type": "judge",
    "question": "DeepSeek V3的训练成本与GPT-4o相当，都在5-10亿美元级别。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 84,
    "type": "judge",
    "question": "DeepSeek R1实现了从\"快思考\"到\"慢思考\"的推理能力突破。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 85,
    "type": "judge",
    "question": "中国电信星辰大模型是基于开源模型微调而来的。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 86,
    "type": "judge",
    "question": "智能体等于大模型加上知识库、工具和记忆。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 87,
    "type": "judge",
    "question": "自主规划智能体配置简单，在复杂任务上也能保持高稳定性。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 88,
    "type": "judge",
    "question": "工作流智能体是当前产业落地的主流智能体类型。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 89,
    "type": "judge",
    "question": "超级智能体具备长程规划和反思纠错能力。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 90,
    "type": "judge",
    "question": "RAG的混合检索策略是仅使用关键词检索。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 91,
    "type": "judge",
    "question": "思维链（CoT）提示词可以大幅提升复杂任务的准确率。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 92,
    "type": "judge",
    "question": "MCP协议是传统HTTP协议的别名，两者完全相同。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 93,
    "type": "judge",
    "question": "LoRA微调技术通过矩阵分解，只训练低秩矩阵，大幅减少可训练参数。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 94,
    "type": "judge",
    "question": "智能体设计方法论中，场景决策应优先选择高价值的主营业务场景。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 95,
    "type": "judge",
    "question": "GPU分布式训练中，单卡算力可以100%发挥出来。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 96,
    "type": "judge",
    "question": "存储资源评估中，应用数据存储会随业务量增长而增长较快，需要重点关注。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 97,
    "type": "judge",
    "question": "Graph RAG通过知识图谱进行层层抽象，比传统RAG更适合回答概括性问题。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 98,
    "type": "judge",
    "question": "Agent RAG在传统RAG基础上增加了规划、思考和决策能力。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
  {
    "id": 99,
    "type": "judge",
    "question": "星辰智能体平台的公有云SaaS版需要付费才能使用。",
    "options": [
    ],
    "answer": "✕",
    "explanation": "暂无解析。"
  },
  {
    "id": 100,
    "type": "judge",
    "question": "星辰智能体平台的职业认证证书由工信部颁发，是国家认可的继续教育方向证书。",
    "options": [
    ],
    "answer": "✓",
    "explanation": "暂无解析。"
  },
];