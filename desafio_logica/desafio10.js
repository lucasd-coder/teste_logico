function nonMutating(arr, arr2) {
    return arr.filter(item => arr2.includes(item));
}

console.log(nonMutating([6, 8], [8, 9])); // [8]
//console.log(nonMutating([6, 8, 2], [8, 9, 2])); // [8, 2]


