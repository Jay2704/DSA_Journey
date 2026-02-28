# DATA STRUCTURES AND ALGORITHMS Journey 🚀

[![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-Jay2704-red.svg)](https://github.com/Jay2704)

Welcome to **DSA Journey**, a comprehensive collection of Data Structures & Algorithms implemented in Python (and Java). This repository mirrors Striver's Recursion videos and covers core DSA topics, providing hands-on solutions for learning and reference.

## 📋 Table of Contents

- [Repository Structure](#-repository-structure)
- [Visual Representations](#-visual-representations)
- [Getting Started](#-getting-started)
- [Topics Covered](#-topics-covered)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## 📁 Repository Structure

```
DSA_Journey/
├── 📁 arrays/                    # Classic array problems
│   ├── check_sorted.py           # Check if an array is sorted
│   ├── largest_number.py           # Find the largest number in an array
│   ├── missing_element.py        # Find the missing element in 1…N
│   ├── move_zeros.py             # Move zeros to the end of an array
│   ├── remove_duplicates.py      # Remove duplicates from a sorted array
│   ├── rotate_array.py           # Rotate an array by k positions
│   ├── second_largest.py         # Find the second largest element
│   └── subtitle_convertor.py     # Convert subtitles to a specific format
│
├── 📁 Binary_Trees/              # Basic BST 
│   ├── BST.java                  # Java implementation of a Binary Search Tree
│   └── bst.py                    # Python implementation of the same
│
├── 📁 Graphs/                    # Graph-based problems
│   ├── graph.py                  # Adjacency-list graph class
│   ├── bfs_traversal.py          # Breadth-First Search traversal
│   ├── dfs_traversal.py          # Depth-First Search traversal
│   ├── number_of_provinces.py    # Connected components in matrix graph
│   └── rotten_oranges.py         # Multi-source BFS (rotting oranges)
│
├── 📁 recursion/                 # Solutions keyed to Striver recursion videos
│   ├── v1.py                     # Video 1: Recursion intro & factorial
│   ├── v2.py                     # Video 2: Fibonacci with recursion
│   ├── v3.py                     # Video 3: Sum of digits & array sum
│   ├── v4.py                     # Video 4: String recursion & palindrome
│   ├── v5.py                     # Video 5: Backtracking subsets
│   ├── v6.py                     # Video 6: Tree traversals (pre/in/post)
│   ├── v7.py                     # Video 7: Advanced backtracking (permutations)
│   └── v8.py                     # Video 8: Additional recursion problems
│
├── 📁 stacks/                    # Stack-based problems & utilities
│   ├── asteroid_collision.py     # Asteroid collision problem
│   ├── largest_rectangle_histogram.py # Largest rectangle in histogram
│   ├── min_stack.py              # Stack with minimum retrieval
│   ├── next_greater_element.py   # Next greater element in an array
│   ├── stack.py                  # Simple stack class implementation
│   ├── sum_of_aubarray_ranges.py # Sum of subarray ranges
│   ├── sum_of_subarray_minimum.py # Sum of subarray minimums
│   ├── trapping_rain_water.py    # Trapping rainwater problem
│   └── valid_paranthesis.py      # Check for balanced parentheses
│
├── 📄 README.md                  # Project overview & instructions
└── 📄 LICENSE                    # MIT License
```

> **Note**: In **recursion/**, `v1.py`–`v8.py` correspond to Striver's Recursion videos 1–8.

## 🎨 Visual Representations

### 📊 Stack Operations
```
┌─────────────┐
│   STACK     │
├─────────────┤
│     5       │ ← Top (Last In)
│     4       │
│     3       │
│     2       │
│     1       │ ← Bottom (First In)
└─────────────┘

Operations:
• Push: Add to top
• Pop: Remove from top
• Peek: View top element
```

### 🌳 Binary Search Tree
```
       8
      / \
     3   10
    / \    \
   1   6    14
      / \   /
     4   7 13

Traversal Orders:
• Inorder: 1, 3, 4, 6, 7, 8, 10, 13, 14
• Preorder: 8, 3, 1, 6, 4, 7, 10, 14, 13
• Postorder: 1, 4, 7, 6, 3, 13, 14, 10, 8
```

### 🔄 Recursion Flow
```
Factorial(5)
├── 5 × Factorial(4)
│   ├── 4 × Factorial(3)
│   │   ├── 3 × Factorial(2)
│   │   │   ├── 2 × Factorial(1)
│   │   │   │   └── 1 (Base Case)
│   │   │   └── 2 × 1 = 2
│   │   └── 3 × 2 = 6
│   └── 4 × 6 = 24
└── 5 × 24 = 120
```

### 📈 Next Greater Element
```
Input:  [4, 5, 2, 25]
Output: [5, 25, 25, -1]

Visualization:
4 → 5 (next greater)
5 → 25 (next greater)  
2 → 25 (next greater)
25 → -1 (no greater element)
```

### 🔗 Valid Parentheses
```
Valid:   "({[]})"     Invalid: "([)]"
         │ │ │ │              │ │ │ │
         └─┘ └─┘              └─┘ └─┘
         Matched pairs         Mismatched

Stack Operations:
"(" → Push
"{" → Push  
"[" → Push
"]" → Pop & Match
"}" → Pop & Match
")" → Pop & Match
```

## 🚀 Getting Started

### Prerequisites

- **Python 3.7+**
- (Optional) Java JDK for `BST.java`

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Jay2704/DSA_Journey.git
   cd DSA_Journey
   ```

2. **Run Examples**
   ```bash
   # Run array problems
   python3 arrays/check_sorted.py
   
   # Run stack problems
   python3 stacks/valid_paranthesis.py
   
   # Run recursion examples
   python3 recursion/v1.py
   ```

## 📚 Topics Covered

### Arrays
- ✅ Check if array is sorted
- ✅ Find largest number
- ✅ Find missing element
- ✅ Move zeros to end
- ✅ Remove duplicates
- ✅ Rotate array
- ✅ Find second largest
- ✅ Subtitle conversion

### Binary Trees
- ✅ BST implementation (Python & Java)
- ✅ Tree traversals



### Recursion
- ✅ Factorial calculation
- ✅ Fibonacci series
- ✅ Sum of digits
- ✅ String recursion
- ✅ Backtracking (subsets, permutations)
- ✅ Tree traversals
- ✅ Additional recursion problems

### Stacks
- ✅ Stack implementation
- ✅ Valid parentheses
- ✅ Next greater element
- ✅ Asteroid collision
- ✅ Largest rectangle in histogram
- ✅ Stack with minimum retrieval
- ✅ Sum of subarray ranges
- ✅ Sum of subarray minimums
- ✅ Trapping rainwater problem

## 💻 Usage

### Running Python Files
```bash
# Example: Run stack implementation
python3 stacks/stack.py

# Example: Run valid parentheses checker
python3 stacks/valid_paranthesis.py

# Example: Run next greater element
python3 stacks/next_greater_element.py

# Example: Run graph problems
python3 Graphs/graph.py
python3 Graphs/bfs_traversal.py
python3 Graphs/dfs_traversal.py
python3 Graphs/number_of_provinces.py
python3 Graphs/rotten_oranges.py
```

### Running Java Files
```bash
# Compile and run BST
javac Binary_Trees/BST.java
java -cp Binary_Trees BST
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Striver** for the excellent recursion video series
- The DSA community for inspiration and learning resources

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ by <a href="https://github.com/Jay2704">Jay2704</a></p>
</div>
