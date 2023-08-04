class node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binaryTree{
    constructor(){
        this.root=null
    }

    getroot(){
        return this.root
    }

    insert(value){
        let newNode=new node(value)
        if(this.root==null){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value< root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    inorder(root){
        if(root!=null){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    preorder(root){
        if(root!=null){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    postorder(root){
        if(root!=null){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }
}

let bt=new binaryTree
bt.insert(34)
bt.insert(58)
bt.insert(23)

let root=bt.getroot()

console.log("inorder");
bt.inorder(root)
console.log("preorder");
bt.preorder(root)
console.log("postorder");
bt.postorder(root)

