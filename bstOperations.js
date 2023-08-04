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

        }else{
            let current=this.root

            while(true){
                if(value===current.value){
                    return
                }
                if(value<current.value){
                    if(!current.left){
                        current.left=newNode
                        return
                    }
                    current=current.left
                }
                if(value>current.value){
                    if(!current.right){
                        current.right=newNode
                        return
                    }
                    current=current.right
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

            current.value=this.minimum(current.right)
            current.right=this.removeNode(current.right,current.value)
        }
        return current
    }

    minimum(current){
        if(!this.left){
            return current.value
        }else{
            return this.minimum(current.left)
        }
    }

    maximum(current){
        if(!this.right){
            return current.value
        }else{
            return this.maximum(current.right)
        }
    }


    contains(current,value){
        if(!current){
            return false
        }else{
            if(value===current.value){
                return true
            }

            else if(value<current.value){
                return this.contains(current.left,value)
            }
            else{
                return this.contains(current.right,value)
            }
        }
    }




    inorder(current) {
        
        if(current!=null){
            this.inorder(current.left)
            console.log(current.value)
            this.inorder(current.right)
        }
    }

    preorder(current){
        if(current!=null){
            console.log(current.value)
            this.preorder(current.left)
            this.preorder(current.right)
        }
    }

    postorder(current){
        if(current!=null){
            this.postorder(current.left)
            this.postorder(current.right)
            console.log(current.value)
        }
    }




}

let bt=new binaryTree



bt.insert(50)
bt.insert(25)
bt.insert(35)
bt.insert(75)


// console.log(bt.contains(bt.root,55));


bt.remove(25)


console.log("inorder");
bt.inorder(bt.root)
// console.log("preorder");
// bt.preorder(bt.root)
// console.log("postorder");
// bt.postorder(bt.root)

