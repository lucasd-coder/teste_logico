function nonMutatingFilter(arr) {

    return Array.from(new Set(arr));
}

console.log(nonMutatingFilter([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])); //[1,2,3,4,5,7]

