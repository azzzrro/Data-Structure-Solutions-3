class trienode{
    constructor(){
        this.children={}
        this.end=false
    }
}

class trie{
    constructor(){
        this.root=new trie
    }


    insert(word){
        let node=this.root

        for(let i=0;i<word.length-1;i++){
            let char=word[i]
            if(!node.children[char]){
                node.children[char]=new trie
            }node=node.children[char]
        }node.end=true   
     }

     check(word){
        let node= this.root

        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                return false
            }
        }return node.end
     }
}

;console.log("hello");