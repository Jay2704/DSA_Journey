# 🤖 AI Agent System with Crew Framework

A comprehensive multi-agent AI system built using the Crew framework for collaborative task execution and project management.

## 🚀 Features

### **Multi-Agent Architecture**
- **Research Specialist** - Conducts comprehensive research using real-time sources
- **Content Creator** - Creates engaging, well-structured content
- **Data Analyst** - Analyzes data and provides actionable insights
- **Project Planner** - Creates detailed project plans and coordinates tasks
- **Quality Assurance** - Reviews and validates work quality

### **Advanced Tools**
- **Search Integration** - Real-time web search capabilities
- **Calculator Tool** - Mathematical calculations and analysis
- **File Writer** - Automatic content saving and organization
- **Custom Tools** - Extensible tool system

### **Project Types**
1. **Comprehensive Research Projects** - Full research with planning and QA
2. **Data Analysis Projects** - Statistical analysis with insights
3. **Custom Projects** - Extensible for specific use cases

## 📦 Installation

### **Prerequisites**
```bash
pip install crewai langchain langchain-openai openai python-dotenv
```

### **Setup**
```bash
cd ai_agents
python setup.py
```

### **Environment Configuration**
Create a `.env` file:
```env
OPENAI_API_KEY=your_openai_api_key_here
CREWAI_LOG_LEVEL=INFO
```

## 🎯 Usage

### **Basic Usage**
```python
from advanced_crew_agent import AdvancedCrewAgent

# Initialize agent
agent = AdvancedCrewAgent()

# Run comprehensive research project
result = agent.run_comprehensive_project("Artificial Intelligence in Healthcare")
print(result)
```

### **Data Analysis Project**
```python
# Run data analysis
data = """
Sales Data:
Q1: $100,000
Q2: $120,000
Q3: $150,000
Q4: $180,000
"""
result = agent.run_data_analysis_project(data)
print(result)
```

### **Command Line Interface**
```bash
python advanced_crew_agent.py
```

## 🏗️ Architecture

### **Agent Roles**

#### **Research Specialist**
- **Goal**: Conduct comprehensive research using multiple sources
- **Tools**: Web search, data gathering
- **Output**: Comprehensive research reports

#### **Content Creator**
- **Goal**: Create engaging, well-structured content
- **Tools**: File writing, content formatting
- **Output**: Professional content and documentation

#### **Data Analyst**
- **Goal**: Analyze data and provide actionable insights
- **Tools**: Calculator, statistical analysis
- **Output**: Data insights and recommendations

#### **Project Planner**
- **Goal**: Create detailed project plans and coordinate tasks
- **Tools**: Planning frameworks, timeline management
- **Output**: Detailed project plans with timelines

#### **Quality Assurance**
- **Goal**: Review and validate work quality
- **Tools**: Quality assessment, feedback generation
- **Output**: Quality reviews and improvement suggestions

### **Workflow Process**

```
Research → Planning → Analysis → Writing → QA → Final Output
```

## 🔧 Customization

### **Adding New Agents**
```python
def create_custom_agent(self):
    return Agent(
        role='Custom Role',
        goal='Custom goal description',
        backstory='Custom backstory',
        verbose=True,
        allow_delegation=True,
        tools=[your_custom_tools]
    )
```

### **Adding New Tools**
```python
def custom_tool_function(self, input_data: str) -> str:
    # Your custom tool logic
    return "Tool output"

self.tools['custom_tool'] = Tool(
    name="CustomTool",
    func=self.custom_tool_function,
    description="Custom tool description"
)
```

### **Creating Custom Tasks**
```python
def create_custom_task(self, data: str) -> Task:
    return Task(
        description=f"Custom task description: {data}",
        agent=self.agents['custom_agent'],
        expected_output="Expected output description"
    )
```

## 📊 Example Outputs

### **Research Project Output**
```
📋 Project Results:
==================================================

Executive Summary:
- Key findings and insights
- Market analysis
- Future implications

Detailed Analysis:
- Statistical data
- Expert opinions
- Case studies

Recommendations:
- Actionable insights
- Implementation steps
- Risk assessment
```

### **Data Analysis Output**
```
📊 Analysis Results:
==================================================

Statistical Analysis:
- Trend identification
- Pattern recognition
- Comparative analysis

Insights:
- Key findings
- Predictive analysis
- Recommendations

Visual Suggestions:
- Chart recommendations
- Data visualization ideas
```

## 🛠️ Development

### **File Structure**
```
ai_agents/
├── advanced_crew_agent.py    # Main agent system
├── crew_agent.py            # Basic agent implementation
├── setup.py                 # Setup and configuration
├── requirements.txt         # Dependencies
├── README.md               # Documentation
└── example_usage.py        # Usage examples
```

### **Extending the System**

1. **Add New Agent Types**
   - Define agent role and goals
   - Assign appropriate tools
   - Create specialized tasks

2. **Integrate External APIs**
   - Add API tools to agents
   - Handle authentication
   - Process API responses

3. **Custom Workflows**
   - Define new task sequences
   - Create specialized crews
   - Implement custom processes

## 🔒 Security Considerations

- **API Key Management**: Store keys securely in environment variables
- **Rate Limiting**: Implement proper rate limiting for API calls
- **Data Privacy**: Ensure sensitive data is handled appropriately
- **Access Control**: Implement proper access controls for production use

## 📈 Performance Optimization

- **Parallel Processing**: Use Process.parallel for independent tasks
- **Caching**: Implement result caching for repeated queries
- **Resource Management**: Monitor and optimize memory usage
- **Error Handling**: Implement robust error handling and recovery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Add tests and documentation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **CrewAI Team** - For the excellent framework
- **LangChain** - For the powerful AI tools
- **OpenAI** - For the language models

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ by the AI Agent Team</p>
</div> 