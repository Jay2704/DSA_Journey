#!/usr/bin/env python3
"""
Enhanced Log Analyzer with Known Error Sequence Dictionary
Analyzes log files and identifies patterns using predefined error sequences
"""

import re
import json
import os
from collections import defaultdict, Counter
from datetime import datetime
from typing import Dict, List, Tuple, Set

class LogAnalyzer:
    def __init__(self):
        # Known error sequences and patterns
        self.known_error_sequences = {
            "authentication_errors": {
                "patterns": [
                    r"authentication failed",
                    r"login failed",
                    r"invalid credentials",
                    r"access denied",
                    r"unauthorized access"
                ],
                "severity": "HIGH",
                "description": "Authentication and authorization failures",
                "suggestions": [
                    "Check user credentials",
                    "Verify access permissions",
                    "Review authentication logs"
                ]
            },
            "database_errors": {
                "patterns": [
                    r"database connection failed",
                    r"sql error",
                    r"connection timeout",
                    r"deadlock detected",
                    r"table not found"
                ],
                "severity": "CRITICAL",
                "description": "Database connection and query issues",
                "suggestions": [
                    "Check database connectivity",
                    "Verify database credentials",
                    "Review SQL queries",
                    "Check database server status"
                ]
            },
            "network_errors": {
                "patterns": [
                    r"connection refused",
                    r"network timeout",
                    r"dns resolution failed",
                    r"host unreachable",
                    r"connection reset"
                ],
                "severity": "MEDIUM",
                "description": "Network connectivity issues",
                "suggestions": [
                    "Check network connectivity",
                    "Verify DNS settings",
                    "Review firewall rules",
                    "Test network endpoints"
                ]
            },
            "memory_errors": {
                "patterns": [
                    r"out of memory",
                    r"memory allocation failed",
                    r"heap overflow",
                    r"stack overflow",
                    r"memory leak detected"
                ],
                "severity": "HIGH",
                "description": "Memory-related issues",
                "suggestions": [
                    "Increase memory allocation",
                    "Check for memory leaks",
                    "Optimize memory usage",
                    "Monitor memory consumption"
                ]
            },
            "file_errors": {
                "patterns": [
                    r"file not found",
                    r"permission denied",
                    r"disk space full",
                    r"file corrupted",
                    r"i/o error"
                ],
                "severity": "MEDIUM",
                "description": "File system and I/O issues",
                "suggestions": [
                    "Check file permissions",
                    "Verify disk space",
                    "Review file paths",
                    "Check file integrity"
                ]
            },
            "api_errors": {
                "patterns": [
                    r"api rate limit exceeded",
                    r"invalid api key",
                    r"api endpoint not found",
                    r"request timeout",
                    r"service unavailable"
                ],
                "severity": "MEDIUM",
                "description": "API and service issues",
                "suggestions": [
                    "Check API credentials",
                    "Verify rate limits",
                    "Review API endpoints",
                    "Monitor service status"
                ]
            }
        }
        
        self.error_counts = defaultdict(int)
        self.error_sequences = defaultdict(list)
        self.timeline_analysis = defaultdict(list)
        self.severity_stats = defaultdict(int)
    
    def add_custom_error_sequence(self, name: str, patterns: List[str], severity: str, 
                                 description: str, suggestions: List[str]):
        """Add custom error sequence to the dictionary"""
        self.known_error_sequences[name] = {
            "patterns": patterns,
            "severity": severity,
            "description": description,
            "suggestions": suggestions
        }
        print(f"✅ Added custom error sequence: {name}")
    
    def analyze_log_line(self, line: str, timestamp: str = None) -> Dict:
        """Analyze a single log line for known error patterns"""
        results = {
            "line": line,
            "timestamp": timestamp,
            "errors_found": [],
            "severity": "INFO"
        }
        
        for error_type, error_info in self.known_error_sequences.items():
            for pattern in error_info["patterns"]:
                if re.search(pattern, line, re.IGNORECASE):
                    error_details = {
                        "type": error_type,
                        "pattern": pattern,
                        "severity": error_info["severity"],
                        "description": error_info["description"],
                        "suggestions": error_info["suggestions"]
                    }
                    results["errors_found"].append(error_details)
                    
                    # Update statistics
                    self.error_counts[error_type] += 1
                    self.error_sequences[error_type].append({
                        "line": line,
                        "timestamp": timestamp,
                        "pattern": pattern
                    })
                    
                    # Update severity
                    if error_info["severity"] in ["CRITICAL", "HIGH"]:
                        results["severity"] = error_info["severity"]
        
        return results
    
    def analyze_log_file(self, file_path: str) -> Dict:
        """Analyze entire log file"""
        print(f"🔍 Analyzing log file: {file_path}")
        
        if not os.path.exists(file_path):
            print(f"❌ File not found: {file_path}")
            return {}
        
        analysis_results = {
            "file_path": file_path,
            "total_lines": 0,
            "error_lines": 0,
            "error_summary": defaultdict(int),
            "timeline": [],
            "critical_errors": [],
            "high_errors": [],
            "medium_errors": [],
            "low_errors": []
        }
        
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                for line_num, line in enumerate(file, 1):
                    analysis_results["total_lines"] += 1
                    
                    # Extract timestamp if present
                    timestamp = self.extract_timestamp(line)
                    
                    # Analyze the line
                    line_analysis = self.analyze_log_line(line, timestamp)
                    
                    if line_analysis["errors_found"]:
                        analysis_results["error_lines"] += 1
                        
                        # Categorize by severity
                        for error in line_analysis["errors_found"]:
                            error_type = error["type"]
                            severity = error["severity"]
                            
                            analysis_results["error_summary"][error_type] += 1
                            self.severity_stats[severity] += 1
                            
                            # Add to timeline
                            if timestamp:
                                analysis_results["timeline"].append({
                                    "timestamp": timestamp,
                                    "error_type": error_type,
                                    "severity": severity,
                                    "line": line.strip()
                                })
                            
                            # Categorize by severity
                            if severity == "CRITICAL":
                                analysis_results["critical_errors"].append(line_analysis)
                            elif severity == "HIGH":
                                analysis_results["high_errors"].append(line_analysis)
                            elif severity == "MEDIUM":
                                analysis_results["medium_errors"].append(line_analysis)
                            else:
                                analysis_results["low_errors"].append(line_analysis)
        
        except Exception as e:
            print(f"❌ Error reading file: {e}")
            return {}
        
        return analysis_results
    
    def extract_timestamp(self, line: str) -> str:
        """Extract timestamp from log line"""
        # Common timestamp patterns
        timestamp_patterns = [
            r'\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}',
            r'\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}',
            r'\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}',
            r'\d{2}:\d{2}:\d{2}'
        ]
        
        for pattern in timestamp_patterns:
            match = re.search(pattern, line)
            if match:
                return match.group()
        
        return None
    
    def generate_report(self, analysis_results: Dict) -> str:
        """Generate comprehensive analysis report"""
        if not analysis_results:
            return "No analysis results available."
        
        report = []
        report.append("📊 LOG ANALYSIS REPORT")
        report.append("=" * 50)
        report.append(f"File: {analysis_results['file_path']}")
        report.append(f"Total Lines: {analysis_results['total_lines']}")
        report.append(f"Error Lines: {analysis_results['error_lines']}")
        report.append(f"Error Rate: {(analysis_results['error_lines']/analysis_results['total_lines']*100):.2f}%")
        report.append("")
        
        # Error Summary
        report.append("🔍 ERROR SUMMARY")
        report.append("-" * 30)
        for error_type, count in analysis_results["error_summary"].items():
            error_info = self.known_error_sequences[error_type]
            report.append(f"{error_type.upper()}: {count} occurrences")
            report.append(f"  Severity: {error_info['severity']}")
            report.append(f"  Description: {error_info['description']}")
            report.append("")
        
        # Severity Statistics
        report.append("⚠️  SEVERITY BREAKDOWN")
        report.append("-" * 30)
        for severity, count in self.severity_stats.items():
            report.append(f"{severity}: {count} errors")
        report.append("")
        
        # Critical Errors
        if analysis_results["critical_errors"]:
            report.append("🚨 CRITICAL ERRORS")
            report.append("-" * 30)
            for error in analysis_results["critical_errors"][:5]:  # Show first 5
                for found_error in error["errors_found"]:
                    report.append(f"Type: {found_error['type']}")
                    report.append(f"Pattern: {found_error['pattern']}")
                    report.append(f"Line: {error['line'][:100]}...")
                    report.append("")
        
        # Recommendations
        report.append("💡 RECOMMENDATIONS")
        report.append("-" * 30)
        for error_type, count in analysis_results["error_summary"].items():
            if count > 0:
                error_info = self.known_error_sequences[error_type]
                report.append(f"For {error_type.upper()} ({count} occurrences):")
                for suggestion in error_info["suggestions"]:
                    report.append(f"  • {suggestion}")
                report.append("")
        
        return "\n".join(report)
    
    def save_analysis(self, analysis_results: Dict, output_file: str):
        """Save analysis results to JSON file"""
        try:
            with open(output_file, 'w') as f:
                json.dump(analysis_results, f, indent=2, default=str)
            print(f"✅ Analysis saved to: {output_file}")
        except Exception as e:
            print(f"❌ Error saving analysis: {e}")
    
    def load_analysis(self, input_file: str) -> Dict:
        """Load analysis results from JSON file"""
        try:
            with open(input_file, 'r') as f:
                return json.load(f)
        except Exception as e:
            print(f"❌ Error loading analysis: {e}")
            return {}

def main():
    print("🔍 Enhanced Log Analyzer with Known Error Sequences")
    print("=" * 60)
    
    analyzer = LogAnalyzer()
    
    # Add custom error sequence example
    analyzer.add_custom_error_sequence(
        name="custom_application_errors",
        patterns=[
            r"application startup failed",
            r"service initialization error",
            r"configuration error"
        ],
        severity="HIGH",
        description="Custom application-specific errors",
        suggestions=[
            "Check application configuration",
            "Verify service dependencies",
            "Review startup logs"
        ]
    )
    
    # Get log file path
    log_file = input("Enter log file path: ").strip()
    
    if not log_file:
        print("❌ No file path provided")
        return
    
    # Analyze log file
    results = analyzer.analyze_log_file(log_file)
    
    if results:
        # Generate and display report
        report = analyzer.generate_report(results)
        print("\n" + report)
        
        # Save analysis
        output_file = f"log_analysis_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        analyzer.save_analysis(results, output_file)
    else:
        print("❌ No analysis results generated")

if __name__ == "__main__":
    main()
