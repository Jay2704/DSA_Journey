class Node:
    """A class to create a Node of BST."""
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key


class BST:
    """A class for the Binary Search Tree."""
    def __init__(self):
        self.root = None

    def insert(self, root, key):
        """Insert a node into BST."""
        if root is None:
            return Node(key)
        if key < root.val:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)
        return root

    def inorder(self, root):
        """Inorder traversal (Left -> Root -> Right)."""
        if root:
            self.inorder(root.left)
            print(root.val, end=" ")
            self.inorder(root.right)

    def preorder(self, root):
        """Preorder traversal (Root -> Left -> Right)."""
        if root:
            print(root.val, end=" ")
            self.preorder(root.left)
            self.preorder(root.right)

    def postorder(self, root):
        """Postorder traversal (Left -> Right -> Root)."""
        if root:
            self.postorder(root.left)
            self.postorder(root.right)
            print(root.val, end=" ")

    def search(self, root, key):
        """Search for a key in BST."""
        if root is None or root.val == key:
            return root
        if key < root.val:
            return self.search(root.left, key)
        return self.search(root.right, key)

    def min_value_node(self, root):
        """Find the node with the smallest value in the BST."""
        current = root
        while current.left is not None:
            current = current.left
        return current

    def max_value_node(self, root):
        """Find the node with the largest value in the BST."""
        current = root
        while current.right is not None:
            current = current.right
        return current

    def delete_node(self, root, key):
        """Delete a node from BST."""
        if root is None:
            return root
        if key < root.val:
            root.left = self.delete_node(root.left, key)
        elif key > root.val:
            root.right = self.delete_node(root.right, key)
        else:
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left
            temp = self.min_value_node(root.right)
            root.val = temp.val
            root.right = self.delete_node(root.right, temp.val)
        return root

    def find_lca(self, root, n1, n2):
        """Find Lowest Common Ancestor (LCA) of two nodes."""
        if root is None:
            return None
        if root.val > n1 and root.val > n2:
            return self.find_lca(root.left, n1, n2)
        elif root.val < n1 and root.val < n2:
            return self.find_lca(root.right, n1, n2)
        return root

    def height(self, root):
        """Find the height of the BST."""
        if root is None:
            return -1
        left_height = self.height(root.left)
        right_height = self.height(root.right)
        return max(left_height, right_height) + 1

# Driver code to test the BST implementation
if __name__ == "__main__":
    bst = BST()
    root = None
    elements = [20, 10, 30, 5, 15, 25, 35]
    
    for elem in elements:
        root = bst.insert(root, elem)

    print("Inorder Traversal:")
    bst.inorder(root)
    print("\nPreorder Traversal:")
    bst.preorder(root)
    print("\nPostorder Traversal:")
    bst.postorder(root)

    key = 15
    if bst.search(root, key):
        print(f"\nNode {key} found in BST")
    else:
        print(f"\nNode {key} not found in BST")

    min_node = bst.min_value_node(root)
    print(f"Minimum value in BST: {min_node.val}")

    max_node = bst.max_value_node(root)
    print(f"Maximum value in BST: {max_node.val}")

    n1, n2 = 5, 15
    lca = bst.find_lca(root, n1, n2)
    print(f"Lowest Common Ancestor of {n1} and {n2}: {lca.val}")

    print(f"Height of the BST: {bst.height(root)}")

    print("\nDeleting node 10 from BST")
    root = bst.delete_node(root, 10)
    print("Inorder Traversal after deletion:")
    bst.inorder(root)