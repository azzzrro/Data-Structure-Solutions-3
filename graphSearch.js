class Graph {
    constructor() {
      this.vertices = []
      this.adjacencyList = {}
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex)
      this.adjacencyList[vertex] = []
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    }
  
    dfs(startingVertex) {
      const visited = {}
      const result = []
  
      const dfsHelper = (vertex) => {
        if (!vertex) {
          return null
        }
        visited[vertex] = true
        result.push(vertex)
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return dfsHelper(neighbor)
          }
        })
      }
  
      dfsHelper(startingVertex)
      return result
    }


    bfs(startingVertex) {
        const queue = [startingVertex];
        const visited = {};
        const result = [];
      
        visited[startingVertex] = true;
      
        while (queue.length) {
          const currentVertex = queue.shift();
          result.push(currentVertex);
      
          this.adjacencyList[currentVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push(neighbor);
            }
          });
        }
      
        return result;
      }
      
}
  
 
  const graph = new Graph()
  graph.addVertex("A")
  graph.addVertex("B")
  graph.addVertex("C")
  graph.addVertex("D")
  graph.addEdge("A", "B")
  graph.addEdge("A", "C")
  graph.addEdge("B", "D")
  graph.addEdge("C", "D")
  
  console.log(graph.bfs("A"))
  