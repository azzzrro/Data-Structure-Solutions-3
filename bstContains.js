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
        }
        else{
            let current=this.root
            while(true){
                if(value<current.value){
                    if(!current.left){
                        current.left=newNode
                        return
                    }current=current.left
                }else if(value<current.value){
                    if(!this.right){
                        this.right=newNode
                        return
                    }current=current.right
                }
            }
        }
    } 

    contains(current,value){
        if(current==null){
            return false
        }else{

            if(current.value===value){
                return true
            }
            else if(value<current.value){
                this.contains(current.left,value)
            }
            else{
                this.contains(current.right,value)
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
            this.removeNode(current.left,value)
        }else if(value>current.value){
            this.removeNode(current.right,value)
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

    closest(target){
        let close=Infinity
        let current=this.root

        while(current){

            if(Math.abs(target-current.value)<Math.abs(target-close)){
                close=current.value
            }

            
            if(target<current.value){
                current=current.left
            }
            else if(target>current.value){
                current=current.right
            }else{
                return close
            }    
        }return close
    }


}