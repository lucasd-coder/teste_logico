function nonMutating(arr, arr2) {
    if (arr.sort().join(',') === arr2.sort().join(',')) {
        return true;
    }
    return false;
}

console.log(nonMutating([1, 2, 3, 4], [1, 2, 3, 4]));// true
