function maxHeap(array){
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
    let left=i*2+1
    let right=i*2+2

    if(left<length&&array[left]<array[largest]){
        largest=left
    }
    if(right<length&&array[right]<array[largest]){
        largest=right
    }

    if(largest!==i){
        [array[i],array[largest]]=[array[largest],array[i]]
        heapify(array,largest,length)
        console.log(array);
    }
}


let array=[6,3,8,1,21,4]
let res=maxHeap(array)
console.log(res);