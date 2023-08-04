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

    insertNode(value){
        let newNode=new node(value)
        if(this.root==null){
            this.root=newNode
        }else{
            this.insert(this.root,newNode)
        }
    }

    insert(root,newNode){
        if(newNode.value<root.value){

            if(root.left==null){
                root.left=newNode
            }else{
                this.insert(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insert(root.right,newNode)
            }
        }
    }

    
    inorder(root){
        
        if(root!=null){
            this.inorder(root.left)
            console.log(root.value);
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
bt.insertNode(50)
bt.insertNode(25)
bt.insertNode(65)

let root=bt.getroot()

console.log("inorder")
bt.inorder(root)
console.log("preorder")
bt.preorder(root)
console.log("postorder")
bt.postorder(root)

// console.log(bt);

