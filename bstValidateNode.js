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
        let current=this.root
        while(true){

            if(value===current.value){
                return
            }
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

    min(current){
        if(current.left==null){
            return current.value
        }else{
            return this.min(current.left)
            
        }
    }

    max(current){
        if(current.right==null){
            return current.value
        }else{
            this.max(current.right)
        }
    }

    validate(current){
        if(current==null){
            return true
        }

        if(current.left !=null && this.max(current.left)>current.data){
            return false
        }

        if(current.right!=null && this.min(current.right)<current.data){
            return false
        }
        if(!this.validate(current.left)||this.validate(current.right)){
            return false
        }

        return true
    }
}


let bt=new binaryTree

bt.insert(4)
bt.insert(2)
bt.insert(5)
bt.insert(1)
bt.insert(3)

console.log(bt.validate(bt.root));

console.log(bt.root);