#!/usr/bin/env python3
"""
Setup script for AI Agent with Crew Framework
"""

import os
import subprocess
import sys

def install_requirements():
    """Install required packages"""
    print("📦 Installing required packages...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ Requirements installed successfully!")
    except subprocess.CalledProcessError as e:
        print(f"❌ Error installing requirements: {e}")
        return False
    return True

def setup_environment():
    """Setup environment variables"""
    print("🔧 Setting up environment...")
    
    # Check if .env file exists
    if not os.path.exists('.env'):
        print("📝 Creating .env file...")
        with open('.env', 'w') as f:
            f.write("# OpenAI API Configuration\n")
            f.write("OPENAI_API_KEY=your_openai_api_key_here\n")
            f.write("\n# Crew AI Configuration\n")
            f.write("CREWAI_LOG_LEVEL=INFO\n")
        
        print("✅ .env file created!")
        print("⚠️  Please add your OpenAI API key to the .env file")
    else:
        print("✅ .env file already exists")

def create_example_usage():
    """Create example usage script"""
    print("📝 Creating example usage...")
    
    example_code = '''#!/usr/bin/env python3
"""
Example usage of Crew AI Agent
"""

from crew_agent import CrewAIAgent

def main():
    # Initialize agent
    agent = CrewAIAgent()
    
    # Example 1: Research Project
    print("🔍 Research Project Example")
    topic = "Artificial Intelligence in Healthcare"
    result = agent.run_research_project(topic)
    print(f"Research Results: {result}")
    
    # Example 2: Data Analysis
    print("\\n📊 Data Analysis Example")
    sample_data = """
    Sales Data:
    Q1: $100,000
    Q2: $120,000
    Q3: $150,000
    Q4: $180,000
    """
    result = agent.run_data_analysis(sample_data)
    print(f"Analysis Results: {result}")

if __name__ == "__main__":
    main()
'''
    
    with open('example_usage.py', 'w') as f:
        f.write(example_code)
    
    print("✅ Example usage created!")

def main():
    print("🤖 AI Agent with Crew Framework Setup")
    print("=" * 40)
    
    # Install requirements
    if not install_requirements():
        return
    
    # Setup environment
    setup_environment()
    
    # Create example
    create_example_usage()
    
    print("\n🎉 Setup completed!")
    print("\n📋 Next steps:")
    print("1. Add your OpenAI API key to .env file")
    print("2. Run: python crew_agent.py")
    print("3. Check example_usage.py for examples")

if __name__ == "__main__":
    main() 