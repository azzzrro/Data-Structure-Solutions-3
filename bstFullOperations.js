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
        let newNode= new node(value)
        if(!this.root){
            this.root=newNode
            return
        }
        else{
            let current= this.root
            while(true){
                if(value<current.value){
                    if(!current.left){
                    current.left=newNode
                    return
                }current=current.left
            }else if(value>current.value){
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
        if(current.value===null){
            return current
        }

        if(value<current.value){
            current.left=this.removeNode(current.left,value)
        }else if(value>current.value){
            current.right= this.removeNode(current.right,value)
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
            this.minimum(current.left)
        }
    }

    maximum(current){
        if(!current.right){
            return current.value
        }
        this.maximum(current.right)
    }

    contains(current,value){
        if(current==null){
            return false
        }else{
            
        if(current.value===value){
            return true
        }
        else if(value<current.value){
            return this.contains(current.left,value)
        }else
        {
            return this.contains(current.right,value)
        }
        }

        
    }

    nearest(target){
        let closest=Infinity
        let current=this.root

        while(current){
            if(Math.abs(target-current.value)<Math.abs(target-closest)){
                closest=current.value
            }

            if(target<current.value){
                current=current.left
            }else if(target>current.value){
                current=current.right
            }
            else{
                return closest
            }
            
        }   
        return closest
    }

    inorder(current){
        if(current){
            this.inorder(current.left)
            console.log(current.value);
            this.inorder(current.right)
        }
    }

    preorder(current){
        if(current){
            console.log(current.value);
            this.preorder(current.left)
            this.preorder(current.right)
        }
    }


}

let bt=new binaryTree

bt.insert(20)
bt.insert(15)
bt.insert(25)

bt.remove(25)
console.log(bt.contains(bt.root,45));
console.log(bt.nearest(19));

bt.inorder(bt.root)