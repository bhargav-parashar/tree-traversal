A Binary Search Tree (BST) is a hierarchical data structure in which each node has at most two children, referred to as the left and right child. It follows these properties:

The left subtree of a node contains only nodes with values less than the node's value.
The right subtree of a node contains only nodes with values greater than the node's value.
Both subtrees must themselves be binary search trees.
BSTs are commonly used for efficient searching, insertion, and deletion operations, typically having a time complexity of O(log n) in balanced cases

In bst.js, I have implemented a Binary Search Tree using class structure in JavaScript. There are two functions - 
- insert(val) : Inserts the value to the correct position in the tree. 
                Returns undefined if value is already present, otherwise returns the updated tree after value is insterd.
- find(val)   : Checks the tree for the input value and returns the value if found otherwise returns undefined.
- BFS()       : Performs BFS Traversal and returns values of visited nodes in an array.
- DFSPreOrder() : Performs pre-order DFS Traversal and returns values of visited nodes in an array.
- DFSPostOrder() : Performs post-order DFS Traversal and returns values of visited nodes in an array.

Will be adding in-order DFS traversal method in future commits.