const arr = [4,1, 5, 3, 6, 2];

function bubbleSort(arr) {
    // loop to access each array element
    for (let i = 0; i < arr.length; i++) {
        // loop to compare array elements
        for (let j = 0; j < arr.length - i - 1 ; j++) {
            // compare two adjacent elements
            // change > to < to sort in descending order
            if(arr[j] > arr[j+1]) {
                // swapping elements if elements
                // are not in the intended order
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSortOptimized(arr) {
    // loop to access each array element
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        // loop to compare array elements
        for (let j = 0; j < arr.length - i - 1 ; j++) {
            // compare two adjacent elements
            // change > to < to sort in descending order
            if(arr[j] > arr[j+1]) {
                // swapping elements if elements
                // are not in the intended order
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log('original array', arr)
console.log(bubbleSortOptimized(arr));
