class graph{
    constructor(){
        this.adjacenyList={}
    }

    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacenyList[vertex]= new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.addVertex[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.addVertex[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacenyList[vertex1].add(vertex2)
        this.adjacenyList[vertex2].add(vertex1)
    }

}

let gr=new graph()
gr.addVertex("A")
gr.addVertex("B")
gr.addVertex("C")

gr.addEdge("A","B")
gr.addEdge("B","C")

