function nonMutating(arr) {
    return arr.flat();
}
console.log(nonMutating([1, 2, [3], [4, 5]])); //[1, 2, 3, 4, 5]

