class Node {
    int key;
    Node left, right;

    public Node(int item) {
        key = item;
        left = right = null;
    }
}

class BST {
    Node root;

    public BST() {
        root = null;
    }

    // Insert a node
    Node insert(Node root, int key) {
        if (root == null) {
            return new Node(key);
        }
        if (key < root.key) {
            root.left = insert(root.left, key);
        } else {
            root.right = insert(root.right, key);
        }
        return root;
    }

    // Inorder Traversal (Left -> Root -> Right)
    void inorderTraversal(Node root) {
        if (root != null) {
            inorderTraversal(root.left);
            System.out.print(root.key + " ");
            inorderTraversal(root.right);
        }
    }

    // Preorder Traversal (Root -> Left -> Right)
    void preorderTraversal(Node root) {
        if (root != null) {
            System.out.print(root.key + " ");
            preorderTraversal(root.left);
            preorderTraversal(root.right);
        }
    }

    // Postorder Traversal (Left -> Right -> Root)
    void postorderTraversal(Node root) {
        if (root != null) {
            postorderTraversal(root.left);
            postorderTraversal(root.right);
            System.out.print(root.key + " ");
        }
    }

    // Search for a node
    boolean search(Node root, int key) {
        if (root == null) {
            return false;
        }
        if (root.key == key) {
            return true;
        }
        return key < root.key ? search(root.left, key) : search(root.right, key);
    }

    // Find Minimum Value in BST
    Node findMin(Node root) {
        while (root.left != null) {
            root = root.left;
        }
        return root;
    }

    // Find Maximum Value in BST
    Node findMax(Node root) {
        while (root.right != null) {
            root = root.right;
        }
        return root;
    }

    // Delete a node from BST
    Node delete(Node root, int key) {
        if (root == null) {
            return root;
        }
        if (key < root.key) {
            root.left = delete(root.left, key);
        } else if (key > root.key) {
            root.right = delete(root.right, key);
        } else {
            if (root.left == null) return root.right;
            else if (root.right == null) return root.left;
            Node temp = findMin(root.right);
            root.key = temp.key;
            root.right = delete(root.right, temp.key);
        }
        return root;
    }

    // Find Lowest Common Ancestor (LCA)
    Node findLCA(Node root, int n1, int n2) {
        if (root == null) return null;
        if (root.key > n1 && root.key > n2) return findLCA(root.left, n1, n2);
        if (root.key < n1 && root.key < n2) return findLCA(root.right, n1, n2);
        return root;
    }

    // Find the height of the BST
    int findHeight(Node root) {
        if (root == null) return -1;
        int leftHeight = findHeight(root.left);
        int rightHeight = findHeight(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Find the depth of a node
    int findDepth(Node root, int key, int depth) {
        if (root == null) return -1;
        if (root.key == key) return depth;
        int leftDepth = findDepth(root.left, key, depth + 1);
        if (leftDepth != -1) return leftDepth;
        return findDepth(root.right, key, depth + 1);
    }

    // Count total nodes in BST
    int countNodes(Node root) {
        if (root == null) return 0;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }

    // Find the sum of all nodes in BST
    int sumNodes(Node root) {
        if (root == null) return 0;
        return root.key + sumNodes(root.left) + sumNodes(root.right);
    }

    // Driver function
    public static void main(String[] args) {
        BST tree = new BST();
        Node root = null;
        int[] elements = {20, 10, 30, 5, 15, 25, 35};

        // Insert elements into BST
        for (int num : elements) {
            root = tree.insert(root, num);
        }

        System.out.println("Inorder Traversal:");
        tree.inorderTraversal(root);
        System.out.println("\nPreorder Traversal:");
        tree.preorderTraversal(root);
        System.out.println("\nPostorder Traversal:");
        tree.postorderTraversal(root);

        int key = 15;
        System.out.println("\nSearching for node " + key + ": " + (tree.search(root, key) ? "Found" : "Not Found"));

        System.out.println("Minimum value in BST: " + tree.findMin(root).key);
        System.out.println("Maximum value in BST: " + tree.findMax(root).key);

        int n1 = 5, n2 = 15;
        Node lca = tree.findLCA(root, n1, n2);
        System.out.println("Lowest Common Ancestor of " + n1 + " and " + n2 + ": " + lca.key);

        System.out.println("Height of the BST: " + tree.findHeight(root));

        int nodeToFindDepth = 15;
        System.out.println("Depth of node " + nodeToFindDepth + ": " + tree.findDepth(root, nodeToFindDepth, 0));

        System.out.println("Total number of nodes in BST: " + tree.countNodes(root));
        System.out.println("Sum of all nodes in BST: " + tree.sumNodes(root));

        System.out.println("\nDeleting node 10 from BST");
        root = tree.delete(root, 10);
        System.out.println("Inorder Traversal after deletion:");
        tree.inorderTraversal(root);
    }
}