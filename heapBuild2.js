class minHeap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        let currentvalue=this.heap[index]
        let parentindex=Math.floor((index-1)/2)
        let parentvalue=this.heap[parentindex]

        if(index>0&&currentvalue>parentvalue){
            this.heap[parentindex]=currentvalue
            this.heap[index]=parentvalue
            this.shiftUp(parentindex)

        }
    }

    display(){
       
            console.log(this.heap);
        
    }
}

let  hh=new minHeap
hh.insert(10)


hh.insert(35)
hh.insert(45)

hh.insert(20)
hh.insert(64)
hh.insert(30)

hh.display()