class binaryTree{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

let root = new binaryTree(1)
let leftchild=new binaryTree(2)
let rightchild=new binaryTree(3)
let leftchildleft=new binaryTree(4)
let leftchildright=new binaryTree(5)
let rightchildleft=new binaryTree(6)
let rightchildright=new binaryTree(7)


root.left=leftchild
root.right=rightchild

leftchild.left=leftchildleft
leftchild.right=leftchildright

rightchild.left=rightchildleft
rightchild.right=rightchildright

console.log(root)