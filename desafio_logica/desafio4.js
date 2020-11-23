function nonMutatingFilter(arr) {
    return Object.fromEntries(arr);
}

console.log(nonMutatingFilter([["c", 2], ["d", 4]])); //{c:2, d:4}

// const teste = [["c", 2], ["d", 4]];

