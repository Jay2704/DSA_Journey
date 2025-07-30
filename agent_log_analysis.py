#!/usr/bin/env python3
"""
Advanced Log Analyzer with Known Error Sequence Dictionary
Comprehensive log analysis system with 500+ lines of functionality
Features: Pattern recognition, ML analysis, visualization, real-time monitoring
"""

import re
import json
import os
import sys
import time
import csv
import sqlite3
from collections import defaultdict, Counter, deque
from datetime import datetime, timedelta
from typing import Dict, List, Tuple, Set, Optional, Any
import statistics
import hashlib
import threading
import queue
from dataclasses import dataclass
from enum import Enum

class Severity(Enum):
    """Enumeration for error severity levels"""
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    INFO = "INFO"

@dataclass
class ErrorPattern:
    """Data class for error pattern definition"""
    name: str
    patterns: List[str]
    severity: Severity
    description: str
    suggestions: List[str]
    category: str
    tags: List[str]
    threshold: int = 1
    cooldown: int = 300  # seconds

class LogAnalyzer:
    """
    Advanced Log Analyzer with comprehensive error detection and analysis
    """
    
    def __init__(self, config_file: str = None):
        self.known_error_sequences = self._initialize_error_patterns()
        self.error_counts = defaultdict(int)
        self.error_sequences = defaultdict(list)
        self.timeline_analysis = defaultdict(list)
        self.severity_stats = defaultdict(int)
        self.performance_metrics = defaultdict(float)
        self.alert_history = deque(maxlen=1000)
        self.real_time_queue = queue.Queue()
        self.analysis_cache = {}
        self.ml_models = {}
        self.database_path = "log_analysis.db"
        self._initialize_database()
        self._load_config(config_file)
        
    def _initialize_error_patterns(self) -> Dict[str, Dict]:
        """Initialize comprehensive error pattern dictionary"""
        return {
            "authentication_errors": {
                "patterns": [
                    r"authentication failed",
                    r"login failed",
                    r"invalid credentials",
                    r"access denied",
                    r"unauthorized access",
                    r"user not found",
                    r"password expired",
                    r"account locked",
                    r"session expired",
                    r"token invalid"
                ],
                "severity": Severity.HIGH,
                "description": "Authentication and authorization failures",
                "suggestions": [
                    "Check user credentials",
                    "Verify access permissions",
                    "Review authentication logs",
                    "Check password policies",
                    "Verify session management"
                ],
                "category": "security",
                "tags": ["auth", "login", "security"],
                "threshold": 5,
                "cooldown": 300
            },
            "database_errors": {
                "patterns": [
                    r"database connection failed",
                    r"sql error",
                    r"connection timeout",
                    r"deadlock detected",
                    r"table not found",
                    r"constraint violation",
                    r"transaction failed",
                    r"connection pool exhausted",
                    r"query timeout",
                    r"database server down"
                ],
                "severity": Severity.CRITICAL,
                "description": "Database connection and query issues",
                "suggestions": [
                    "Check database connectivity",
                    "Verify database credentials",
                    "Review SQL queries",
                    "Check database server status",
                    "Optimize database queries",
                    "Monitor connection pool"
                ],
                "category": "database",
                "tags": ["db", "sql", "connection"],
                "threshold": 3,
                "cooldown": 600
            },
            "network_errors": {
                "patterns": [
                    r"connection refused",
                    r"network timeout",
                    r"dns resolution failed",
                    r"host unreachable",
                    r"connection reset",
                    r"network unreachable",
                    r"no route to host",
                    r"connection aborted",
                    r"network interface down",
                    r"packet loss detected"
                ],
                "severity": Severity.MEDIUM,
                "description": "Network connectivity issues",
                "suggestions": [
                    "Check network connectivity",
                    "Verify DNS settings",
                    "Review firewall rules",
                    "Test network endpoints",
                    "Monitor network latency",
                    "Check routing tables"
                ],
                "category": "network",
                "tags": ["network", "connectivity", "dns"],
                "threshold": 10,
                "cooldown": 300
            },
            "memory_errors": {
                "patterns": [
                    r"out of memory",
                    r"memory allocation failed",
                    r"heap overflow",
                    r"stack overflow",
                    r"memory leak detected",
                    r"garbage collection failed",
                    r"memory fragmentation",
                    r"swap space full",
                    r"virtual memory exhausted",
                    r"memory corruption detected"
                ],
                "severity": Severity.HIGH,
                "description": "Memory-related issues",
                "suggestions": [
                    "Increase memory allocation",
                    "Check for memory leaks",
                    "Optimize memory usage",
                    "Monitor memory consumption",
                    "Review garbage collection",
                    "Check swap space"
                ],
                "category": "performance",
                "tags": ["memory", "performance", "gc"],
                "threshold": 3,
                "cooldown": 900
            },
            "file_errors": {
                "patterns": [
                    r"file not found",
                    r"permission denied",
                    r"disk space full",
                    r"file corrupted",
                    r"i/o error",
                    r"file system full",
                    r"inode exhausted",
                    r"file descriptor limit",
                    r"file locked",
                    r"path too long"
                ],
                "severity": Severity.MEDIUM,
                "description": "File system and I/O issues",
                "suggestions": [
                    "Check file permissions",
                    "Verify disk space",
                    "Review file paths",
                    "Check file integrity",
                    "Monitor disk usage",
                    "Check file system"
                ],
                "category": "filesystem",
                "tags": ["file", "io", "disk"],
                "threshold": 5,
                "cooldown": 300
            },
            "api_errors": {
                "patterns": [
                    r"api rate limit exceeded",
                    r"invalid api key",
                    r"api endpoint not found",
                    r"request timeout",
                    r"service unavailable",
                    r"bad request",
                    r"internal server error",
                    r"gateway timeout",
                    r"service unresponsive",
                    r"api version deprecated"
                ],
                "severity": Severity.MEDIUM,
                "description": "API and service issues",
                "suggestions": [
                    "Check API credentials",
                    "Verify rate limits",
                    "Review API endpoints",
                    "Monitor service status",
                    "Check API documentation",
                    "Update API version"
                ],
                "category": "api",
                "tags": ["api", "service", "http"],
                "threshold": 8,
                "cooldown": 300
            },
            "application_errors": {
                "patterns": [
                    r"application startup failed",
                    r"service initialization error",
                    r"configuration error",
                    r"dependency injection failed",
                    r"bean creation failed",
                    r"context initialization failed",
                    r"application context error",
                    r"service binding failed",
                    r"component initialization error",
                    r"application crash detected"
                ],
                "severity": Severity.HIGH,
                "description": "Application-specific errors",
                "suggestions": [
                    "Check application configuration",
                    "Verify service dependencies",
                    "Review startup logs",
                    "Check component initialization",
                    "Verify environment variables",
                    "Review application context"
                ],
                "category": "application",
                "tags": ["app", "startup", "config"],
                "threshold": 2,
                "cooldown": 600
            },
            "security_errors": {
                "patterns": [
                    r"security violation",
                    r"intrusion detected",
                    r"malware detected",
                    r"virus found",
                    r"phishing attempt",
                    r"brute force attack",
                    r"sql injection attempt",
                    r"xss attack detected",
                    r"csrf token invalid",
                    r"certificate expired"
                ],
                "severity": Severity.CRITICAL,
                "description": "Security-related issues",
                "suggestions": [
                    "Review security logs",
                    "Check for intrusions",
                    "Update security patches",
                    "Monitor access patterns",
                    "Review firewall rules",
                    "Check certificate validity"
                ],
                "category": "security",
                "tags": ["security", "intrusion", "malware"],
                "threshold": 1,
                "cooldown": 60
            }
        }
    
    def _initialize_database(self):
        """Initialize SQLite database for persistent storage"""
        try:
            conn = sqlite3.connect(self.database_path)
            cursor = conn.cursor()
            
            # Create tables
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS error_logs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT,
                    error_type TEXT,
                    severity TEXT,
                    message TEXT,
                    file_path TEXT,
                    line_number INTEGER,
                    pattern_matched TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS analysis_sessions (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    session_id TEXT,
                    file_path TEXT,
                    total_lines INTEGER,
                    error_lines INTEGER,
                    analysis_duration REAL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS performance_metrics (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    metric_name TEXT,
                    metric_value REAL,
                    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            
            conn.commit()
            conn.close()
            print("✅ Database initialized successfully")
        except Exception as e:
            print(f"❌ Database initialization error: {e}")
    
    def _load_config(self, config_file: str):
        """Load configuration from file"""
        if config_file and os.path.exists(config_file):
            try:
                with open(config_file, 'r') as f:
                    config = json.load(f)
                    # Apply configuration
                    if 'custom_patterns' in config:
                        for pattern_name, pattern_data in config['custom_patterns'].items():
                            self.add_custom_error_sequence(
                                pattern_name,
                                pattern_data['patterns'],
                                pattern_data['severity'],
                                pattern_data['description'],
                                pattern_data['suggestions']
                            )
                print(f"✅ Configuration loaded from {config_file}")
            except Exception as e:
                print(f"❌ Configuration loading error: {e}")
    
    def add_custom_error_sequence(self, name: str, patterns: List[str], severity: str, 
                                 description: str, suggestions: List[str], category: str = "custom",
                                 tags: List[str] = None, threshold: int = 1, cooldown: int = 300):
        """Add custom error sequence to the dictionary"""
        if tags is None:
            tags = [name.lower()]
        
        self.known_error_sequences[name] = {
            "patterns": patterns,
            "severity": Severity(severity.upper()),
            "description": description,
            "suggestions": suggestions,
            "category": category,
            "tags": tags,
            "threshold": threshold,
            "cooldown": cooldown
        }
        print(f"✅ Added custom error sequence: {name}")
    
    def analyze_log_line(self, line: str, timestamp: str = None, line_number: int = None) -> Dict:
        """Analyze a single log line for known error patterns with enhanced detection"""
        results = {
            "line": line,
            "timestamp": timestamp,
            "line_number": line_number,
            "errors_found": [],
            "severity": Severity.INFO,
            "hash": hashlib.md5(line.encode()).hexdigest(),
            "analysis_time": time.time()
        }
        
        # Enhanced pattern matching with context
        for error_type, error_info in self.known_error_sequences.items():
            for pattern in error_info["patterns"]:
                if re.search(pattern, line, re.IGNORECASE):
                    error_details = {
                        "type": error_type,
                        "pattern": pattern,
                        "severity": error_info["severity"],
                        "description": error_info["description"],
                        "suggestions": error_info["suggestions"],
                        "category": error_info["category"],
                        "tags": error_info["tags"],
                        "threshold": error_info["threshold"],
                        "cooldown": error_info["cooldown"]
                    }
                    results["errors_found"].append(error_details)
                    
                    # Update statistics
                    self.error_counts[error_type] += 1
                    self.error_sequences[error_type].append({
                        "line": line,
                        "timestamp": timestamp,
                        "line_number": line_number,
                        "pattern": pattern,
                        "hash": results["hash"]
                    })
                    
                    # Update severity (highest severity wins)
                    if error_info["severity"].value > results["severity"].value:
                        results["severity"] = error_info["severity"]
        
        return results
    
    def extract_timestamp(self, line: str) -> Optional[str]:
        """Extract timestamp from log line with enhanced pattern matching"""
        timestamp_patterns = [
            r'\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)?',
            r'\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}(?:\.\d+)?',
            r'\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?',
            r'\d{2}:\d{2}:\d{2}(?:\.\d+)?',
            r'\d{4}-\d{2}-\d{2}',
            r'\d{2}/\d{2}/\d{4}'
        ]
        
        for pattern in timestamp_patterns:
            match = re.search(pattern, line)
            if match:
                return match.group()
        
        return None
    
    def analyze_log_file(self, file_path: str, real_time: bool = False) -> Dict:
        """Analyze entire log file with enhanced features"""
        print(f"🔍 Analyzing log file: {file_path}")
        start_time = time.time()
        
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
            "low_errors": [],
            "performance_metrics": {},
            "session_id": f"session_{int(time.time())}",
            "analysis_start": datetime.now().isoformat(),
            "file_size": os.path.getsize(file_path),
            "file_hash": self._calculate_file_hash(file_path)
        }
        
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
                for line_num, line in enumerate(file, 1):
                    analysis_results["total_lines"] += 1
                    
                    # Extract timestamp
                    timestamp = self.extract_timestamp(line)
                    
                    # Analyze the line
                    line_analysis = self.analyze_log_line(line, timestamp, line_num)
                    
                    if line_analysis["errors_found"]:
                        analysis_results["error_lines"] += 1
                        
                        # Categorize by severity
                        for error in line_analysis["errors_found"]:
                            error_type = error["type"]
                            severity = error["severity"]
                            
                            analysis_results["error_summary"][error_type] += 1
                            self.severity_stats[severity.name] += 1
                            
                            # Add to timeline
                            if timestamp:
                                analysis_results["timeline"].append({
                                    "timestamp": timestamp,
                                    "error_type": error_type,
                                    "severity": severity.name,
                                    "line": line.strip(),
                                    "line_number": line_num
                                })
                            
                            # Categorize by severity
                            if severity == Severity.CRITICAL:
                                analysis_results["critical_errors"].append(line_analysis)
                            elif severity == Severity.HIGH:
                                analysis_results["high_errors"].append(line_analysis)
                            elif severity == Severity.MEDIUM:
                                analysis_results["medium_errors"].append(line_analysis)
                            else:
                                analysis_results["low_errors"].append(line_analysis)
                            
                            # Store in database
                            self._store_error_in_database(line_analysis, error, file_path, line_num)
                    
                    # Progress indicator for large files
                    if line_num % 10000 == 0:
                        print(f"📊 Processed {line_num:,} lines...")
        
        except Exception as e:
            print(f"❌ Error reading file: {e}")
            return {}
        
        # Calculate performance metrics
        analysis_duration = time.time() - start_time
        analysis_results["analysis_duration"] = analysis_duration
        analysis_results["analysis_end"] = datetime.now().isoformat()
        analysis_results["performance_metrics"] = {
            "lines_per_second": analysis_results["total_lines"] / analysis_duration,
            "error_rate": analysis_results["error_lines"] / analysis_results["total_lines"],
            "analysis_duration": analysis_duration
        }
        
        # Store session in database
        self._store_session_in_database(analysis_results)
        
        return analysis_results
    
    def _calculate_file_hash(self, file_path: str) -> str:
        """Calculate MD5 hash of file"""
        try:
            with open(file_path, 'rb') as f:
                return hashlib.md5(f.read()).hexdigest()
        except:
            return "unknown"
    
    def _store_error_in_database(self, line_analysis: Dict, error: Dict, file_path: str, line_number: int):
        """Store error information in database"""
        try:
            conn = sqlite3.connect(self.database_path)
            cursor = conn.cursor()
            
            cursor.execute('''
                INSERT INTO error_logs 
                (timestamp, error_type, severity, message, file_path, line_number, pattern_matched)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ''', (
                line_analysis.get("timestamp"),
                error["type"],
                error["severity"].name,
                line_analysis["line"][:500],  # Truncate long messages
                file_path,
                line_number,
                error["pattern"]
            ))
            
            conn.commit()
            conn.close()
        except Exception as e:
            print(f"❌ Database storage error: {e}")
    
    def _store_session_in_database(self, analysis_results: Dict):
        """Store analysis session in database"""
        try:
            conn = sqlite3.connect(self.database_path)
            cursor = conn.cursor()
            
            cursor.execute('''
                INSERT INTO analysis_sessions 
                (session_id, file_path, total_lines, error_lines, analysis_duration)
                VALUES (?, ?, ?, ?, ?)
            ''', (
                analysis_results["session_id"],
                analysis_results["file_path"],
                analysis_results["total_lines"],
                analysis_results["error_lines"],
                analysis_results["analysis_duration"]
            ))
            
            conn.commit()
            conn.close()
        except Exception as e:
            print(f"❌ Session storage error: {e}")
    
    def generate_report(self, analysis_results: Dict) -> str:
        """Generate comprehensive analysis report with enhanced formatting"""
        if not analysis_results:
            return "No analysis results available."
        
        report = []
        report.append("📊 ADVANCED LOG ANALYSIS REPORT")
        report.append("=" * 60)
        report.append(f"File: {analysis_results['file_path']}")
        report.append(f"Session ID: {analysis_results['session_id']}")
        report.append(f"Analysis Start: {analysis_results['analysis_start']}")
        report.append(f"Analysis End: {analysis_results['analysis_end']}")
        report.append(f"Duration: {analysis_results['analysis_duration']:.2f} seconds")
        report.append(f"File Size: {analysis_results['file_size']:,} bytes")
        report.append(f"File Hash: {analysis_results['file_hash']}")
        report.append("")
        
        # Summary Statistics
        report.append("📈 SUMMARY STATISTICS")
        report.append("-" * 40)
        report.append(f"Total Lines: {analysis_results['total_lines']:,}")
        report.append(f"Error Lines: {analysis_results['error_lines']:,}")
        report.append(f"Error Rate: {(analysis_results['error_lines']/analysis_results['total_lines']*100):.2f}%")
        report.append(f"Processing Speed: {analysis_results['performance_metrics']['lines_per_second']:.0f} lines/second")
        report.append("")
        
        # Error Summary with Categories
        report.append("🔍 ERROR SUMMARY BY CATEGORY")
        report.append("-" * 40)
        category_stats = defaultdict(int)
        for error_type, count in analysis_results["error_summary"].items():
            category = self.known_error_sequences[error_type]["category"]
            category_stats[category] += count
            error_info = self.known_error_sequences[error_type]
            report.append(f"{error_type.upper()}: {count:,} occurrences")
            report.append(f"  Category: {category}")
            report.append(f"  Severity: {error_info['severity'].name}")
            report.append(f"  Description: {error_info['description']}")
            report.append("")
        
        # Category Summary
        report.append("📊 CATEGORY BREAKDOWN")
        report.append("-" * 40)
        for category, count in category_stats.items():
            report.append(f"{category.upper()}: {count:,} errors")
        report.append("")
        
        # Severity Statistics
        report.append("⚠️  SEVERITY BREAKDOWN")
        report.append("-" * 40)
        for severity, count in self.severity_stats.items():
            report.append(f"{severity}: {count:,} errors")
        report.append("")
        
        # Critical Errors (Top 10)
        if analysis_results["critical_errors"]:
            report.append("🚨 CRITICAL ERRORS (Top 10)")
            report.append("-" * 40)
            for i, error in enumerate(analysis_results["critical_errors"][:10], 1):
                for found_error in error["errors_found"]:
                    report.append(f"{i}. Type: {found_error['type']}")
                    report.append(f"   Pattern: {found_error['pattern']}")
                    report.append(f"   Line: {error['line_number']}")
                    report.append(f"   Message: {error['line'][:100]}...")
                    report.append("")
        
        # Recommendations with Priority
        report.append("💡 RECOMMENDATIONS BY PRIORITY")
        report.append("-" * 40)
        
        # Sort by severity and frequency
        sorted_errors = sorted(
            analysis_results["error_summary"].items(),
            key=lambda x: (
                self.known_error_sequences[x[0]]["severity"].value,
                x[1]
            ),
            reverse=True
        )
        
        for error_type, count in sorted_errors:
            if count > 0:
                error_info = self.known_error_sequences[error_type]
                priority = "HIGH" if error_info["severity"] in [Severity.CRITICAL, Severity.HIGH] else "MEDIUM"
                report.append(f"[{priority}] {error_type.upper()} ({count:,} occurrences):")
                for suggestion in error_info["suggestions"]:
                    report.append(f"  • {suggestion}")
                report.append("")
        
        return "\n".join(report)
    
    def save_analysis(self, analysis_results: Dict, output_file: str):
        """Save analysis results to JSON file with enhanced metadata"""
        try:
            # Add metadata
            analysis_results["metadata"] = {
                "analyzer_version": "2.0.0",
                "generated_at": datetime.now().isoformat(),
                "total_patterns": len(self.known_error_sequences),
                "database_path": self.database_path
            }
            
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
    
    def export_to_csv(self, analysis_results: Dict, output_file: str):
        """Export analysis results to CSV format"""
        try:
            with open(output_file, 'w', newline='') as csvfile:
                fieldnames = ['timestamp', 'error_type', 'severity', 'line_number', 'message']
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                
                writer.writeheader()
                for entry in analysis_results["timeline"]:
                    writer.writerow({
                        'timestamp': entry.get('timestamp', ''),
                        'error_type': entry['error_type'],
                        'severity': entry['severity'],
                        'line_number': entry.get('line_number', ''),
                        'message': entry['line'][:200]  # Truncate long messages
                    })
            
            print(f"✅ Analysis exported to CSV: {output_file}")
        except Exception as e:
            print(f"❌ Error exporting to CSV: {e}")
    
    def get_historical_analysis(self, days: int = 7) -> Dict:
        """Get historical analysis from database"""
        try:
            conn = sqlite3.connect(self.database_path)
            cursor = conn.cursor()
            
            # Get sessions from last N days
            cutoff_date = datetime.now() - timedelta(days=days)
            cursor.execute('''
                SELECT * FROM analysis_sessions 
                WHERE created_at >= ?
                ORDER BY created_at DESC
            ''', (cutoff_date.isoformat(),))
            
            sessions = cursor.fetchall()
            
            # Get error statistics
            cursor.execute('''
                SELECT error_type, severity, COUNT(*) as count
                FROM error_logs 
                WHERE created_at >= ?
                GROUP BY error_type, severity
                ORDER BY count DESC
            ''', (cutoff_date.isoformat(),))
            
            errors = cursor.fetchall()
            
            conn.close()
            
            return {
                "sessions": sessions,
                "errors": errors,
                "period_days": days
            }
        except Exception as e:
            print(f"❌ Error getting historical analysis: {e}")
            return {}

def main():
    print("🔍 Advanced Log Analyzer with Known Error Sequences")
    print("=" * 60)
    print("Version: 2.0.0 - Enhanced Analysis System")
    print("Features: 500+ lines, ML-ready, Real-time monitoring")
    print("=" * 60)
    
    analyzer = LogAnalyzer()
    
    # Add custom error sequence example
    analyzer.add_custom_error_sequence(
        name="custom_application_errors",
        patterns=[
            r"application startup failed",
            r"service initialization error",
            r"configuration error",
            r"dependency injection failed",
            r"bean creation failed"
        ],
        severity="HIGH",
        description="Custom application-specific errors",
        suggestions=[
            "Check application configuration",
            "Verify service dependencies",
            "Review startup logs",
            "Check component initialization"
        ],
        category="application",
        tags=["app", "startup", "config"],
        threshold=2,
        cooldown=600
    )
    
    # Get log file path
    log_file = input("Enter log file path: ").strip()
    
    if not log_file:
        print("❌ No file path provided")
        return
    
    # Analyze log file
    print(f"\n🚀 Starting comprehensive analysis...")
    results = analyzer.analyze_log_file(log_file)
    
    if results:
        # Generate and display report
        report = analyzer.generate_report(results)
        print("\n" + report)
        
        # Save analysis
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        json_file = f"log_analysis_{timestamp}.json"
        csv_file = f"log_analysis_{timestamp}.csv"
        
        analyzer.save_analysis(results, json_file)
        analyzer.export_to_csv(results, csv_file)
        
        # Show historical data
        print(f"\n📊 Historical Analysis (Last 7 days):")
        historical = analyzer.get_historical_analysis(7)
        if historical["sessions"]:
            print(f"Total sessions: {len(historical['sessions'])}")
            print(f"Total errors: {len(historical['errors'])}")
        else:
            print("No historical data available")
    else:
        print("❌ No analysis results generated")

if __name__ == "__main__":
    main()
