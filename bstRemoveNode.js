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


     insert(value){
        let newNode=new node(value)
        if(!this.root){
            this.root=newNode
            return
        }else{
            let current=this.root
            while(true){
                if(value<current.value){
                    
                    if(!current.left){
                        current.left=newNode
                        return
                    }current=current.left

                }if(value>current.value){
                    if(!current.right){
                        current.right=newNode
                        return
                    }current=current.right
                }
            }
        }
    }

    remove(value){
        this.root=this.removeNode(this.root,value)
    }

    removeNode(current,value){
        if(current===null){
            return current
        }
        if(value<current.value){
            current.left=this.removeNode(current.left,value)
        }else if(value>current.value){
            current.right=this.removeNode(current.right,value)
        }

        else{

            if(!current.left&&!current.right){
                return null
            }
            if(!current.left){
                return current.right
            }
            if(!current.right){
                return current.left
            }
    
            root.value=this.minimum(current.right)
            current.right=this.removeNode(current.right,current.value)
        }
        return current

    }


    minimum(current){
        if(!current.left){
            return current.value
        }else{
            return this.minimum(current.left)
        }
    }


    inorder(current){
        if(current!==null){
            this.inorder(current.left)
            console.log(current.value);
            this.inorder(current.right)
        }
    }

}


let bt=new binaryTree

bt.insert(20)
bt.insert(15)
bt.insert(25)

console.log("inorder")
bt.inorder(bt.root)

bt.remove(25)

console.log(bt.root);