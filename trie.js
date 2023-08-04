class trieNode{
    constructor(){
        this.children={}
        this.endOfNode=false
    }
}

class trie{
    constructor(){
        this.root=new trieNode()
    }


    insert(word){
        let node= this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                node.children[char]=new trieNode()
            }
            node=node.children[char]
        }node.endOfNode=true
        console.log("inserted!");
    }
}

let tr=new trie

tr.insert("apple")