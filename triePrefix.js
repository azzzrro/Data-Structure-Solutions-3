class trieNode{
    constructor(){
        this.children={}
        this.endOfWord=false
    }
}

class trie{
    constructor(){
        this.root=new trieNode()
    }

    insert(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                node.children[char]=new trieNode
            }node=node.children[char]
        }node.endOfWord=true
    }

    search(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                return false
            }node=node.children[char]
        }return node.endOfWord
    }

    preffix(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if (!node.children[char]){
                return false
            }node=node.children[char]
        }return true
    }
}

let tr=new trie

tr.insert("azhar")
tr.insert("hello")

console.log(tr.preffix("har"))