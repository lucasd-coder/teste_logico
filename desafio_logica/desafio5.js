function nonMutating(arr, ...rest) {
    return arr.filter(el => !rest.includes(el));
}
console.log(nonMutating([5, 4, 3, 2, 5], 5, 3));

// const nonMutating = (arr, ...rest) => arr.filter(el => !rest.includes(el))
// console.log(nonMutating([5, 4, 3, 2, 5], 5, 3)); // [4,2]
