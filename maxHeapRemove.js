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
        let parentindex=Math.floor((index-1)/2)
        let parentvalue=this.heap[parentindex]

        if(index>0&&currentvalue>parentvalue){
            this.heap[index]=parentvalue
            this.heap[parentindex]=currentvalue
            this.shiftUp(parentindex)
        }
    }

    remove(){
        let minValue=this.heap[0]
        let lastValue=this.heap.pop()

        if(this.heap.length>0){
            this.heap[0]=lastValue
            this.shiftDown(0)
        }
        return minValue
    }

    shiftDown(index){
        let currentvalue=this.heap[index]
        let leftchildIndex=index*1+1
        let rightchildIndex=index*1+2

        let maxChildIndex

        if(rightchildIndex>=this.heap.length){
            if(leftchildIndex>=this.heap.length){
                return
            }else{
                maxChildIndex=leftchildIndex
            }
        }else{
            if(this.heap[leftchildIndex]>=this.heap[rightchildIndex]){
                maxChildIndex=leftchildIndex
            }else{
                maxChildIndex=rightchildIndex
            }
        }
        let maxChildValue=this.heap[maxChildIndex]
        if(maxChildValue>currentvalue){
            this.heap[index]=maxChildValue
            this.heap[maxChildIndex]=currentvalue
            this.shiftDown(maxChildIndex)
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

heap.remove()

heap.display()



