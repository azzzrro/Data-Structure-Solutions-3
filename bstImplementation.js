class binaryTree{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binary{
    constructor(){
        this.root=null
    }


    insert(value){
        let newNode= new binaryTree(value)

        if(!this.root){
            this.root= newNode
        }
        else{
            let current=this.root

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

    inorder(current){
        if(current){
            this.inorder(current.left)
            console.log(current.value);
            this.inorder(current.right)
        }
    }
}


let bt=new binary

bt.insert(20)
bt.insert(15)
bt.insert(30)
bt.insert(18)
bt.insert(25)
bt.insert(35)
bt.insert(28)

bt.inorder(bt.root)

