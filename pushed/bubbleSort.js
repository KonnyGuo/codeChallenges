function bubbleSort (arr) {
    for (let i = 0; i < arr.length-1 ;i++){
        for(let j = 0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = temp;
            }
        }

    }
};

//Runtime O(n^2)
//Space Complexity O(1) The space complexity of Bubble Sort is O(1) because it uses only a constant amount of additional space. The algorithm performs the sorting in-place, meaning it doesn't require any extra data structures proportional to the input size. It only uses a few variables for temporary swaps, resulting in constant space usage regardless of the input size.
