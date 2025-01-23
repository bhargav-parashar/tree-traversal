//BINARY SEARCH TREE
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        //if root is null, make the new value as root
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            //If value already present in tree return undefined
            if(value === current.value) return undefined;
            if(value < current.value){
                //If value at the left is null, insert new node here
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                //move current position to left
                current = current.left;
            } else {
                //If value at the right is null, insert new node here
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                //move current position to right
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            //If value is less than current, move current position to left
            if(value < current.value){
                current = current.left;
            } 
            //If value is greater than current, move current position to right
            else if(value > current.value){
                current = current.right;
            } 
            //If value is equal to current, set found as true
            else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }


}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
    

