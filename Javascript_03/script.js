arr = [12, 3, 8, 23, 11, 56, 83, 22, 12, 76]

function greatest(arr){
    var gr = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > gr){
            gr = arr[i];
        }
    }
    return gr;
}

console.log("Array: ", arr);
console.log("Greatest element: " + greatest(arr));