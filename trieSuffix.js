class trieNode{
    constructor(){
        this.children={}
        this.end=false
    }
}

class trie{
    constructor(word){
        this.root=new trieNode
        for(let i=0;i<word.length;i++){
            this.insert(word.substring(i))
        }
    }

    insert(text){
        let node=this.root

        for(let i=0;i<text.length;i++){
            let char=text[i]
            if(!node.children[char]){
                node.children[char]=new trieNode
            }node=node.children[char]
        }node.end=true
    }

    suffix(pattern){
        let node=this.root
        for(let i=0;i<pattern.length;i++){
            let char=pattern[i]
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }return true
    }
}

let tr=new trie("azhar")

console.log(tr.suffix("zha"));