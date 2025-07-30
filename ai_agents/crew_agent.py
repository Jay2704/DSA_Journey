#!/usr/bin/env python3
"""
AI Agent using Crew Framework
Multi-agent system for task collaboration
"""

from crewai import Agent, Task, Crew, Process
from langchain.tools import Tool
from typing import List
import os

class CrewAIAgent:
    def __init__(self):
        self.agents = {}
        self.tasks = []
        self.crew = None
    
    def create_researcher_agent(self):
        """Create a research agent"""
        return Agent(
            role='Research Analyst',
            goal='Conduct thorough research and gather accurate information',
            backstory="""You are an expert research analyst with years of experience 
            in data analysis and information gathering. You excel at finding reliable 
            sources and synthesizing complex information.""",
            verbose=True,
            allow_delegation=False,
            tools=[]
        )
    
    def create_writer_agent(self):
        """Create a content writer agent"""
        return Agent(
            role='Content Writer',
            goal='Create engaging and informative content based on research',
            backstory="""You are a skilled content writer with expertise in 
            creating compelling narratives and clear explanations. You know how to 
            structure information for maximum impact.""",
            verbose=True,
            allow_delegation=False,
            tools=[]
        )
    
    def create_analyst_agent(self):
        """Create a data analyst agent"""
        return Agent(
            role='Data Analyst',
            goal='Analyze data and provide insights',
            backstory="""You are a data analyst with strong analytical skills. 
            You can identify patterns, trends, and provide actionable insights 
            from complex datasets.""",
            verbose=True,
            allow_delegation=False,
            tools=[]
        )
    
    def create_research_task(self, topic: str) -> Task:
        """Create a research task"""
        return Task(
            description=f"""
            Research the following topic thoroughly: {topic}
            
            Your research should include:
            1. Current state of the topic
            2. Key trends and developments
            3. Important statistics and data
            4. Expert opinions and insights
            5. Future implications
            
            Provide a comprehensive report with your findings.
            """,
            agent=self.agents['researcher'],
            expected_output="A detailed research report with findings and insights"
        )
    
    def create_writing_task(self, research_data: str) -> Task:
        """Create a writing task"""
        return Task(
            description=f"""
            Based on the research data provided, create engaging content:
            
            Research Data: {research_data}
            
            Create:
            1. An executive summary
            2. Key insights and takeaways
            3. Actionable recommendations
            4. Visual content suggestions
            
            Make the content engaging and accessible to a general audience.
            """,
            agent=self.agents['writer'],
            expected_output="Engaging content with insights and recommendations"
        )
    
    def create_analysis_task(self, data: str) -> Task:
        """Create a data analysis task"""
        return Task(
            description=f"""
            Analyze the provided data and extract insights:
            
            Data: {data}
            
            Provide:
            1. Statistical analysis
            2. Pattern identification
            3. Trend analysis
            4. Predictive insights
            5. Recommendations based on data
            
            Use clear visualizations and explanations.
            """,
            agent=self.agents['analyst'],
            expected_output="Comprehensive data analysis with insights and recommendations"
        )
    
    def setup_crew(self, agents: List[str] = None):
        """Setup the crew with specified agents"""
        if agents is None:
            agents = ['researcher', 'writer', 'analyst']
        
        # Create agents
        if 'researcher' in agents:
            self.agents['researcher'] = self.create_researcher_agent()
        
        if 'writer' in agents:
            self.agents['writer'] = self.create_writer_agent()
        
        if 'analyst' in agents:
            self.agents['analyst'] = self.create_analyst_agent()
        
        # Create crew
        self.crew = Crew(
            agents=list(self.agents.values()),
            tasks=[],
            verbose=True,
            process=Process.sequential
        )
    
    def run_research_project(self, topic: str) -> str:
        """Run a complete research project"""
        print(f"🔍 Starting research project on: {topic}")
        
        # Setup crew
        self.setup_crew(['researcher', 'writer'])
        
        # Create tasks
        research_task = self.create_research_task(topic)
        writing_task = self.create_writing_task("Research findings will be provided")
        
        # Update crew with tasks
        self.crew.tasks = [research_task, writing_task]
        
        # Execute
        result = self.crew.kickoff()
        return result
    
    def run_data_analysis(self, data: str) -> str:
        """Run data analysis project"""
        print(f"📊 Starting data analysis project")
        
        # Setup crew
        self.setup_crew(['analyst', 'writer'])
        
        # Create tasks
        analysis_task = self.create_analysis_task(data)
        writing_task = self.create_writing_task("Analysis results will be provided")
        
        # Update crew with tasks
        self.crew.tasks = [analysis_task, writing_task]
        
        # Execute
        result = self.crew.kickoff()
        return result

def main():
    print("🤖 AI Agent with Crew Framework")
    print("=" * 40)
    
    # Initialize agent
    agent = CrewAIAgent()
    
    # Example usage
    print("1. Research Project Example")
    print("-" * 30)
    
    topic = input("Enter a research topic: ").strip()
    if topic:
        try:
            result = agent.run_research_project(topic)
            print("\n📋 Research Results:")
            print("=" * 30)
            print(result)
        except Exception as e:
            print(f"❌ Error: {e}")
            print("Make sure you have the required dependencies installed:")
            print("pip install crewai langchain")

if __name__ == "__main__":
    main() 