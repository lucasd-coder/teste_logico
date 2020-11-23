function nonMutatingSort(arr) {
    let length = arr.length;
    let left = null;
    let right = null;
    for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
        let temporary = arr[left];
        arr[left] = arr[right];
        arr[right] = temporary;
    }
    return arr;
}
console.log(nonMutatingSort([1, 2, 3, 4])); // [ 4, 3, 2, 1 ]

