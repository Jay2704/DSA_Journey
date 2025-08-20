import os
import json
from typing import List, Dict, Any, Optional
from datetime import datetime
from crewai import Agent, Task, Crew, Process
from langchain_openai import ChatOpenAI
from langchain.tools import DuckDuckGoSearchRun, Calculator
from langchain_community.tools import FileWriteTool
from dotenv import load_dotenv

load_dotenv()


class CrewAIAgent:
    
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        if not self.api_key:
            raise ValueError("OpenAI API key is required. Set OPENAI_API_KEY environment variable.")
        
        self.llm = ChatOpenAI(
            model="gpt-4",
            temperature=0.7,
            api_key=self.api_key
        )
        
        self.search_tool = DuckDuckGoSearchRun()
        self.calculator_tool = Calculator()
        self.file_writer_tool = FileWriteTool()
        self.agents = {}
        self.crews = {}
        
        self._setup_default_agents()
    
    
    def _setup_default_agents(self):
        
        self.agents['researcher'] = Agent(
            role='Research Specialist',
            goal='Conduct thorough research and gather comprehensive information',
            backstory="""You are an expert research specialist with years of experience 
            in gathering, analyzing, and synthesizing information from various sources. 
            You excel at finding relevant data, identifying key insights, and presenting 
            information in a clear, organized manner.""",
            verbose=True,
            allow_delegation=False,
            tools=[self.search_tool],
            llm=self.llm
        )
        
        self.agents['writer'] = Agent(
            role='Content Creator',
            goal='Create engaging, well-structured content based on research',
            backstory="""You are a skilled content creator and writer with expertise 
            in transforming complex information into clear, engaging content. You have 
            a talent for storytelling, technical writing, and creating content that 
            resonates with different audiences.""",
            verbose=True,
            allow_delegation=False,
            tools=[self.file_writer_tool],
            llm=self.llm
        )
        
        self.agents['analyst'] = Agent(
            role='Data Analyst',
            goal='Analyze data and provide insights and recommendations',
            backstory="""You are a data analyst with strong analytical skills and 
            experience in interpreting complex data sets. You excel at identifying 
            patterns, trends, and actionable insights from data.""",
            verbose=True,
            allow_delegation=False,
            tools=[self.calculator_tool],
            llm=self.llm
        )
        
        self.agents['manager'] = Agent(
            role='Project Manager',
            goal='Coordinate tasks, manage timelines, and ensure project success',
            backstory="""You are an experienced project manager who excels at 
            coordinating complex projects, managing timelines, and ensuring all 
            team members work together effectively to achieve project goals.""",
            verbose=True,
            allow_delegation=True,
            tools=[],
            llm=self.llm
        )
    
    def create_custom_agent(self, role: str, goal: str, backstory: str, 
                           tools: List = None) -> Agent:
        agent = Agent(
            role=role,
            goal=goal,
            backstory=backstory,
            verbose=True,
            allow_delegation=False,
            tools=tools or [],
            llm=self.llm
        )
        
        agent_key = f"custom_{len(self.agents)}"
        self.agents[agent_key] = agent
        
        return agent
    
    def create_research_task(self, topic: str, requirements: str = "") -> Task:
        return Task(
            description=f"""
            Conduct comprehensive research on the topic: {topic}
            
            Requirements:
            - Gather information from multiple reliable sources
            - Identify key facts, statistics, and insights
            - Analyze different perspectives on the topic
            - Compile a detailed research summary
            
            {requirements}
            
            Provide a well-structured research report with:
            1. Executive summary
            2. Key findings
            3. Supporting evidence
            4. Sources and references
            """,
            agent=self.agents['researcher'],
            expected_output="A comprehensive research report with detailed findings and sources"
        )
    
    def create_writing_task(self, research_output: str, content_type: str = "article") -> Task:
        return Task(
            description=f"""
            Create engaging {content_type} content based on the research provided.
            
            Research Data: {research_output}
            
            Requirements:
            - Transform the research into engaging, readable content
            - Maintain accuracy while making it accessible
            - Include relevant examples and case studies
            - Structure the content logically with clear sections
            - Add appropriate headings, subheadings, and formatting
            
            Create content that is:
            - Informative and well-researched
            - Engaging and easy to read
            - Properly structured and formatted
            - Suitable for the target audience
            """,
            agent=self.agents['writer'],
            expected_output=f"A well-written {content_type} based on the research"
        )
    
    def create_analysis_task(self, data: str, analysis_type: str = "general") -> Task:
        return Task(
            description=f"""
            Perform {analysis_type} analysis on the provided data.
            
            Data: {data}
            
            Requirements:
            - Analyze patterns and trends in the data
            - Identify key insights and findings
            - Provide quantitative analysis where applicable
            - Generate actionable recommendations
            - Create visual representations if needed
            
            Deliverables:
            1. Executive summary of findings
            2. Detailed analysis with supporting data
            3. Key insights and trends
            4. Recommendations and next steps
            5. Risk assessment (if applicable)
            """,
            agent=self.agents['analyst'],
            expected_output="A comprehensive analysis report with insights and recommendations"
        )
    
    def create_management_task(self, project_description: str) -> Task:
        return Task(
            description=f"""
            Manage and coordinate the project: {project_description}
            
            Responsibilities:
            - Create a project timeline and milestones
            - Coordinate between different team members
            - Ensure all tasks are completed on time
            - Monitor progress and identify potential issues
            - Provide regular status updates
            - Ensure quality standards are met
            
            Deliverables:
            1. Project plan with timeline
            2. Task assignments and responsibilities
            3. Progress tracking system
            4. Risk mitigation strategies
            5. Final project summary
            """,
            agent=self.agents['manager'],
            expected_output="A comprehensive project management plan and execution summary"
        )
    
    def setup_crew(self, agents: List[str], tasks: List[Task], 
                   process: Process = Process.sequential) -> Crew:
        crew_agents = [self.agents[agent] for agent in agents if agent in self.agents]
        
        crew = Crew(
            agents=crew_agents,
            tasks=tasks,
            process=process,
            verbose=True
        )
        
        return crew
    
    def run_research_project(self, topic: str, requirements: str = "", 
                           output_file: str = None) -> Dict[str, Any]:
        try:
            research_task = self.create_research_task(topic, requirements)
            writing_task = self.create_writing_task("{{research_output}}", "research report")
            
            crew = self.setup_crew(
                agents=['researcher', 'writer'],
                tasks=[research_task, writing_task]
            )
            
            result = crew.kickoff()
            
            if output_file:
                self._save_results(result, output_file)
            
            return {
                'topic': topic,
                'result': result,
                'timestamp': datetime.now().isoformat(),
                'status': 'completed'
            }
            
        except Exception as e:
            return {
                'topic': topic,
                'error': str(e),
                'timestamp': datetime.now().isoformat(),
                'status': 'failed'
            }
    
    def run_data_analysis_project(self, data: str, analysis_type: str = "general") -> Dict[str, Any]:
        try:
            analysis_task = self.create_analysis_task(data, analysis_type)
            management_task = self.create_management_task(f"Data analysis project: {analysis_type}")
            
            crew = self.setup_crew(
                agents=['analyst', 'manager'],
                tasks=[analysis_task, management_task]
            )
            
            result = crew.kickoff()
            
            return {
                'analysis_type': analysis_type,
                'result': result,
                'timestamp': datetime.now().isoformat(),
                'status': 'completed'
            }
            
        except Exception as e:
            return {
                'analysis_type': analysis_type,
                'error': str(e),
                'timestamp': datetime.now().isoformat(),
                'status': 'failed'
            }
    
    def run_comprehensive_project(self, topic: str, project_type: str = "research") -> Dict[str, Any]:
        try:
            if project_type == "research":
                return self.run_research_project(topic)
            elif project_type == "analysis":
                return self.run_data_analysis_project(topic)
            else:
                research_task = self.create_research_task(topic)
                writing_task = self.create_writing_task("{{research_output}}")
                analysis_task = self.create_analysis_task("{{writing_output}}")
                management_task = self.create_management_task(f"Comprehensive project: {topic}")
                
                crew = self.setup_crew(
                    agents=['researcher', 'writer', 'analyst', 'manager'],
                    tasks=[research_task, writing_task, analysis_task, management_task]
                )
                
                result = crew.kickoff()
                
                return {
                    'topic': topic,
                    'project_type': project_type,
                    'result': result,
                    'timestamp': datetime.now().isoformat(),
                    'status': 'completed'
                }
                
        except Exception as e:
            return {
                'topic': topic,
                'project_type': project_type,
                'error': str(e),
                'timestamp': datetime.now().isoformat(),
                'status': 'failed'
            }
    
    def _save_results(self, results: Any, filename: str):
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                if isinstance(results, str):
                    f.write(results)
                else:
                    json.dump(results, f, indent=2, default=str)
        except Exception as e:
            print(f"Error saving results: {e}")
    
    def get_agent_status(self) -> Dict[str, Any]:
        status = {}
        for key, agent in self.agents.items():
            status[key] = {
                'role': agent.role,
                'goal': agent.goal,
                'tools': [tool.__class__.__name__ for tool in agent.tools],
                'allow_delegation': agent.allow_delegation
            }
        return status


def main():
    print("=== Crew AI Agent System Demo ===\n")
    
    try:
        agent_system = CrewAIAgent()
        print("✅ Crew AI Agent system initialized successfully")
        
        print("\n📋 Available Agents:")
        status = agent_system.get_agent_status()
        for agent_key, agent_info in status.items():
            print(f"  - {agent_key}: {agent_info['role']}")
        
        print("\n🔍 Running Research Project...")
        research_result = agent_system.run_research_project(
            topic="Artificial Intelligence in Healthcare",
            requirements="Focus on recent developments and practical applications"
        )
        
        if research_result['status'] == 'completed':
            print("✅ Research project completed successfully")
            print(f"📄 Results: {research_result['result'][:200]}...")
        else:
            print(f"❌ Research project failed: {research_result['error']}")
        
        print("\n📊 Running Data Analysis Project...")
        analysis_result = agent_system.run_data_analysis_project(
            data="Sample data for analysis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
            analysis_type="statistical"
        )
        
        if analysis_result['status'] == 'completed':
            print("✅ Data analysis project completed successfully")
            print(f"📈 Results: {analysis_result['result'][:200]}...")
        else:
            print(f"❌ Data analysis project failed: {analysis_result['error']}")
        
        print("\n🎉 Demo completed successfully!")
        
    except Exception as e:
        print(f"❌ Error initializing Crew AI Agent system: {e}")
        print("Please ensure you have set the OPENAI_API_KEY environment variable.")


if __name__ == "__main__":
    main()
