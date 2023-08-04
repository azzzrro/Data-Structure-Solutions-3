class trienode{
    constructor(){
        this.children={}
        this.endOfWord=false
    }
}

class  trie{
    constructor(){
        this.root=new trienode()
    }

    insert(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                node.children[char]=new trienode
            }
            node=node.children[char]
            
        }node.endOfWord=true
        console.log(`"${word}" inserted`);
    }

    search(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                return false
            }node=node.children[char]
        } return node.endOfWord
    }
}


let tr=new trie

tr.insert("apple")
console.log(tr.search("apple"));