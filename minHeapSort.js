function minHeap(array){
    for(let i=Math.floor(array.length/2)-1;i>=0;i--){
        heapify(array,i,array.length)
    }

    for(let i=array.length-1;i>0;i--){
        [array[0],array[i]]=[array[i],array[0]]
        heapify(array,0,i)
    }

    return array
}



function heapify(array,i,length){
    let largest=i
    let leftchild=i*2+1
    let rightchild=i*2+2

    if(leftchild<length&&array[leftchild]>array[largest]){
        largest=leftchild
    }
    if(rightchild<length&&array[rightchild]>array[largest]){
        largest=rightchild
    }

    if(largest!==i){
        [array[i],array[largest]]=[array[largest],array[i]]
        heapify(array,largest,length)
    
    }

    
}


let array=[2,6,4,8,5,9]
let res=heap(array)
console.log(res);