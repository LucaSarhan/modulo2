function getInput() {
    var input = document.getElementById("input").value;
    var numericArray = [input]
    
    numericArray.sort(function (a, b) {
        return a - b;
    });
    
    console.log('a,', numericArray);
    
    function binarySearch(arr, i) {
        var mid = Math.floor(arr.length / 2);
        console.log(arr[mid], i);
    
        if (arr[mid] === i) {
            console.log('match', arr[mid], i);
            return arr[mid];
        } else if (arr[mid] < i && arr.length > 1) {
            console.log('mid lower', arr[mid], i);
            binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
        } else if (arr[mid] > i && arr.length > 1) {
            console.log('mid higher', arr[mid], i);
            binarySearch(arr.splice(0, mid), i);
        } else {
            console.log('not here', i);
            return -1;
        }
    
    }
    var result = binarySearch(a, 100);
    console.log(result);
    function bubbleSort () {
        for (let i = 0; i < numericArray.length; i++) {
            if (numericArray[i] > numericArray[i +1]) {
                let v1 = numericArray[i]
                let v2 = numericArray[i +1] 
                numericArray[i] = v2
                numericArray[i +1] = v1
            }
        }
    }
    
    for (let j = 0; j < numericArray.length ; j++) {
        bubbleSort();
    }
    
    console.log(numericArray)
}