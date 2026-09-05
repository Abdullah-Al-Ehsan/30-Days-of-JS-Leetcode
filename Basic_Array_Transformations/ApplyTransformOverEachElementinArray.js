
var map = function(arr, fn) {
    const returnedArray = []; 
    const n = arr.length;

    for(let i=0; i<n; i++){
        returnedArray.push( fn(arr[i],i) );
    }
    return returnedArray;
};