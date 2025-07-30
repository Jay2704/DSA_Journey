#!/usr/bin/env python3
"""
Advanced AI Agent System using Crew Framework
Multi-agent collaboration with specialized roles and tools
"""

from crewai import Agent, Task, Crew, Process
from langchain.tools import Tool, DuckDuckGoSearchRun
from langchain.agents import load_tools
import os
from typing import List, Dict
import json

class AdvancedCrewAgent:
    def __init__(self):
        self.agents = {}
        self.tools = {}
        self.crews = {}
        self.setup_tools()
    
    def setup_tools(self):
        """Setup tools for agents"""
        # Search tool
        self.tools['search'] = DuckDuckGoSearchRun()
        
        # Custom tools
        self.tools['calculator'] = Tool(
            name="Calculator",
            func=self.calculate,
            description="Perform mathematical calculations"
        )
        
        self.tools['file_writer'] = Tool(
            name="FileWriter",
            func=self.write_file,
            description="Write content to files"
        )
    
    def calculate(self, expression: str) -> str:
        """Simple calculator function"""
        try:
            return str(eval(expression))
        except:
            return "Error: Invalid expression"
    
    def write_file(self, content: str) -> str:
        """Write content to file"""
        try:
            filename = f"output_{len(os.listdir('.'))}.txt"
            with open(filename, 'w') as f:
                f.write(content)
            return f"Content written to {filename}"
        except Exception as e:
            return f"Error writing file: {e}"
    
    def create_research_agent(self):
        """Create a research agent with search capabilities"""
        return Agent(
            role='Research Specialist',
            goal='Conduct comprehensive research using multiple sources',
            backstory="""You are an expert research specialist with access to 
            real-time information. You excel at finding accurate, up-to-date 
            information from reliable sources and synthesizing complex data.""",
            verbose=True,
            allow_delegation=True,
            tools=[self.tools['search']]
        )
    
    def create_writer_agent(self):
        """Create a content writer agent"""
        return Agent(
            role='Content Creator',
            goal='Create engaging, well-structured content based on research',
            backstory="""You are a skilled content creator with expertise in 
            writing compelling narratives, technical documentation, and marketing 
            content. You know how to adapt tone and style for different audiences.""",
            verbose=True,
            allow_delegation=True,
            tools=[self.tools['file_writer']]
        )
    
    def create_analyst_agent(self):
        """Create a data analyst agent"""
        return Agent(
            role='Data Analyst',
            goal='Analyze data, identify patterns, and provide actionable insights',
            backstory="""You are a data analyst with strong analytical skills. 
            You can process complex datasets, identify trends, and provide 
            data-driven recommendations.""",
            verbose=True,
            allow_delegation=True,
            tools=[self.tools['calculator']]
        )
    
    def create_planner_agent(self):
        """Create a project planner agent"""
        return Agent(
            role='Project Planner',
            goal='Create detailed project plans and coordinate tasks',
            backstory="""You are a project management expert who excels at 
            breaking down complex projects into manageable tasks, setting 
            timelines, and coordinating team efforts.""",
            verbose=True,
            allow_delegation=True,
            tools=[]
        )
    
    def create_qa_agent(self):
        """Create a quality assurance agent"""
        return Agent(
            role='Quality Assurance Specialist',
            goal='Review and validate work quality and accuracy',
            backstory="""You are a QA specialist with keen attention to detail. 
            You ensure all work meets high standards for accuracy, completeness, 
            and quality.""",
            verbose=True,
            allow_delegation=True,
            tools=[]
        )
    
    def create_research_task(self, topic: str) -> Task:
        """Create a comprehensive research task"""
        return Task(
            description=f"""
            Research the following topic thoroughly: {topic}
            
            Requirements:
            1. Find current and historical information
            2. Identify key trends and developments
            3. Gather statistics and data points
            4. Find expert opinions and case studies
            5. Analyze market/industry landscape
            6. Identify future implications and predictions
            
            Provide a comprehensive research report with:
            - Executive summary
            - Key findings
            - Data and statistics
            - Expert insights
            - Future outlook
            """,
            agent=self.agents['researcher'],
            expected_output="Comprehensive research report with findings and insights"
        )
    
    def create_planning_task(self, research_data: str) -> Task:
        """Create a project planning task"""
        return Task(
            description=f"""
            Based on the research data, create a detailed project plan:
            
            Research Data: {research_data}
            
            Create:
            1. Project overview and objectives
            2. Detailed task breakdown
            3. Timeline and milestones
            4. Resource requirements
            5. Risk assessment
            6. Success metrics
            
            Make the plan actionable and realistic.
            """,
            agent=self.agents['planner'],
            expected_output="Detailed project plan with timeline and resources"
        )
    
    def create_analysis_task(self, data: str) -> Task:
        """Create a data analysis task"""
        return Task(
            description=f"""
            Analyze the provided data and extract insights:
            
            Data: {data}
            
            Provide:
            1. Statistical analysis and calculations
            2. Pattern and trend identification
            3. Comparative analysis
            4. Predictive insights
            5. Actionable recommendations
            6. Visual representation suggestions
            
            Use clear explanations and data-driven insights.
            """,
            agent=self.agents['analyst'],
            expected_output="Comprehensive data analysis with insights and recommendations"
        )
    
    def create_writing_task(self, content_data: str) -> Task:
        """Create a content writing task"""
        return Task(
            description=f"""
            Create engaging content based on the provided data:
            
            Content Data: {content_data}
            
            Create:
            1. Executive summary
            2. Key insights and takeaways
            3. Detailed analysis
            4. Actionable recommendations
            5. Visual content suggestions
            6. Implementation guide
            
            Make the content engaging, clear, and actionable.
            """,
            agent=self.agents['writer'],
            expected_output="Engaging content with insights and recommendations"
        )
    
    def create_qa_task(self, final_content: str) -> Task:
        """Create a quality assurance task"""
        return Task(
            description=f"""
            Review and validate the final content for quality:
            
            Content: {final_content}
            
            Check for:
            1. Accuracy and completeness
            2. Clarity and readability
            3. Logical flow and structure
            4. Actionable insights
            5. Professional presentation
            6. Any gaps or inconsistencies
            
            Provide feedback and suggestions for improvement.
            """,
            agent=self.agents['qa'],
            expected_output="Quality review with feedback and recommendations"
        )
    
    def setup_agents(self):
        """Setup all agents"""
        self.agents['researcher'] = self.create_research_agent()
        self.agents['writer'] = self.create_writer_agent()
        self.agents['analyst'] = self.create_analyst_agent()
        self.agents['planner'] = self.create_planner_agent()
        self.agents['qa'] = self.create_qa_agent()
    
    def run_comprehensive_project(self, topic: str) -> str:
        """Run a comprehensive project with all agents"""
        print(f"🚀 Starting comprehensive project on: {topic}")
        
        # Setup agents
        self.setup_agents()
        
        # Create tasks
        research_task = self.create_research_task(topic)
        planning_task = self.create_planning_task("Research findings will be provided")
        writing_task = self.create_writing_task("Research and planning data will be provided")
        qa_task = self.create_qa_task("Final content will be provided")
        
        # Create crew
        crew = Crew(
            agents=list(self.agents.values()),
            tasks=[research_task, planning_task, writing_task, qa_task],
            verbose=True,
            process=Process.sequential
        )
        
        # Execute
        result = crew.kickoff()
        return result
    
    def run_data_analysis_project(self, data: str) -> str:
        """Run a data analysis project"""
        print(f"📊 Starting data analysis project")
        
        # Setup agents
        self.setup_agents()
        
        # Create tasks
        analysis_task = self.create_analysis_task(data)
        writing_task = self.create_writing_task("Analysis results will be provided")
        qa_task = self.create_qa_task("Final analysis will be provided")
        
        # Create crew
        crew = Crew(
            agents=[self.agents['analyst'], self.agents['writer'], self.agents['qa']],
            tasks=[analysis_task, writing_task, qa_task],
            verbose=True,
            process=Process.sequential
        )
        
        # Execute
        result = crew.kickoff()
        return result

def main():
    print("🤖 Advanced AI Agent with Crew Framework")
    print("=" * 50)
    
    # Initialize agent
    agent = AdvancedCrewAgent()
    
    print("Available project types:")
    print("1. Comprehensive Research Project")
    print("2. Data Analysis Project")
    print("3. Custom Project")
    
    choice = input("\nSelect project type (1-3): ").strip()
    
    if choice == "1":
        topic = input("Enter research topic: ").strip()
        if topic:
            try:
                result = agent.run_comprehensive_project(topic)
                print("\n📋 Project Results:")
                print("=" * 50)
                print(result)
            except Exception as e:
                print(f"❌ Error: {e}")
    
    elif choice == "2":
        data = input("Enter data to analyze: ").strip()
        if data:
            try:
                result = agent.run_data_analysis_project(data)
                print("\n📊 Analysis Results:")
                print("=" * 50)
                print(result)
            except Exception as e:
                print(f"❌ Error: {e}")
    
    else:
        print("Custom project functionality coming soon!")

if __name__ == "__main__":
    main() 