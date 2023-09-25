// https://leetcode.com/problems/binary-search/

function binarySearch(sortedList, key){
    let start = 0;
    let end = sortedList.length-1;

    while(start <= end){
        let middle = Math.floor((start+end)/2);

        if(key == sortedList[middle]){
            return middle;
        }
        if(key < sortedList[middle]){
            end = middle-1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
}

listSorted = [5, 10, 25, 27, 30, 36];

/**
 * need to remember left index is 0 and right index is arr.length-1 because array starts at 0
 * condition for while loop is start<=end because we continue until empty
 * if we have an even number of index then math.floor needs to be use because we want a whole number
 */
//think of space complexity as how much is stacking up in the call stack
// runtime O(logn)
// space complexity O(1) The space complexity of the binary search algorithm is O(1), which means it uses a constant amount of additional space.