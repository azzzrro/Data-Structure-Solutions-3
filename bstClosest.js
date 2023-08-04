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
            return this
        }
            let current=this.root
            while(true){
                if(value===current.value){
                    return this
                }
                else if(value<current.value){
                    if(!current.left){
                        current.left=newNode
                        return this
                    }
                    current=current.left
                }else{
                    if(!current.right){
                        current.right=newNode
                        return this
                    }
                    current=current.right
                }
            }
        
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
            }else if(target>current.value){
                current=current.right
            }else{
                return close
            }
        }
        return close
    }

    inorder(current){
        if(current!=null){
            this.inorder(current.left)
            console.log(current.value)
            this.inorder(current.right)
        }
    }
}


let bt=new binaryTree

bt.insert(50)
bt.insert(25)
bt.insert(75)
bt.insert(15)
bt.insert(35)
bt.insert(45)


console.log(bt.closest(70));

bt.inorder(bt.root)

