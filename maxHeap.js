class maxheap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        let currentvalue=this.heap[index]
        let parentindex=Math.floor(index-1/2)
        let parentvalue=this.heap[parentindex]

        if(index>0&&currentvalue>parentvalue){
            this.heap[index]=parentvalue
            this.heap[parentindex]=currentvalue
            this.shiftUp(parentindex)
        }
    }

    display(){
        console.log(this.heap);
    }
}

let heap=new maxheap

heap.insert(20)
heap.insert(15)
heap.insert(10)
heap.insert(5)

heap.display()