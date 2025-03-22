package main

import (
	"fmt"
)

// Strucure of Node of BST
type Node struct {
	data  int
	left  *Node
	right *Node
}

// Insert a node into BST
func insert(root *Node, data int) *Node {
	if root == nil {
		return &Node{data: data, left: nil, right: nil}
	}
	if data < root.data {
		root.left = insert(root.left, data)
	} else {
		root.right = insert(root.right, data)
	}
	return root
}

// Inorder Traversal (Left, Root, Right)
func inorder(root *Node) {
	if root != nil {
		inorder(root.left)
		fmt.Print(root.data, " ")
		inorder(root.right)
	}
}

// Preorder Traversal (Root, Left, Right)
func preorder(root *Node) {
	if root != nil {
		fmt.Print(root.data, " ")
		preorder(root.left)
		preorder(root.right)
	}
}

// Postorder Traversal (Left, Right, Root)
func postorder(root *Node) {
	if root != nil {
		postorder(root.left)
		postorder(root.right)
		fmt.Print(root.data, " ")
	}
}

// Find the Lowest Common Ancestor (LCA)
func findLCA(root *Node, n1, n2 int) *Node {
	if root == nil {
		return nil
	}
	if root.data > n1 && root.data > n2 {
		return findLCA(root.left, n1, n2)
	}
	if root.data < n1 && root.data < n2 {
		return findLCA(root.right, n1, n2)
	}
	return root
}

// Search for a node in BST
func search(root *Node, key int) bool {
	if root == nil {
		return false
	}
	if root.data == key {
		return true
	} else if key < root.data {
		return search(root.left, key)
	} else {
		return search(root.right, key)
	}
}

// Find the minimum value in BST
func findMin(root *Node) int {
	if root == nil {
		return -1 // BST is empty
	}
	for root.left != nil {
		root = root.left
	}
	return root.data
}

// Find the maximum value in BST
func findMax(root *Node) int {
	if root == nil {
		return -1 // BST is empty
	}
	for root.right != nil {
		root = root.right
	}
	return root.data
}

// Find the height of BST
func findHeight(root *Node) int {
	if root == nil {
		return -1
	}
	leftHeight := findHeight(root.left)
	rightHeight := findHeight(root.right)
	if leftHeight > rightHeight {
		return leftHeight + 1
	} else {
		return rightHeight + 1
	}
}

// Main function
func main() {
	var root *Node
	elements := []int{20, 10, 30, 5, 15, 25, 35}

	// Insert elements into BST
	for _, val := range elements {
		root = insert(root, val)
	}

	fmt.Println("Inorder Traversal: ")
	inorder(root)
	fmt.Println("\nPreorder Traversal: ")
	preorder(root)
	fmt.Println("\nPostorder Traversal: ")
	postorder(root)

	// Finding LCA of two nodes
	n1, n2 := 5, 15
	lca := findLCA(root, n1, n2)
	fmt.Printf("\nLowest Common Ancestor of %d and %d: %d\n", n1, n2, lca.data)

	// Searching for a node
	key := 25
	if search(root, key) {
		fmt.Printf("\n%d is present in BST.\n", key)
	} else {
		fmt.Printf("\n%d is not present in BST.\n", key)
	}

	// Finding Min, Max, and Height
	fmt.Printf("\nMinimum value in BST: %d\n", findMin(root))
	fmt.Printf("Maximum value in BST: %d\n", findMax(root))
	fmt.Printf("Height of BST: %d\n", findHeight(root))
}