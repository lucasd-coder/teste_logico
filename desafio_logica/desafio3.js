function nonMutatingFilter(arr) {
    let filtered = arr.filter(function (el) { return el; });
    return filtered;
}

console.log(nonMutatingFilter([1, 2, '', undefined, false, null])); //[1,2]