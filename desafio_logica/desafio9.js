function nonMutating(arr, quant) {
    let novoArray = [];
    let i = 0;
    while (i < arr.length) {
        novoArray.push(arr.slice(i, i + quant));
        i += quant;
    }
    return novoArray;

}
console.log(nonMutating([1, 2, 3, 4, 5], 2)); //[[1, 2], [3, 4], [5]]
