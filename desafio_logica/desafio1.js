function novoArray(repita, z) {
    const array = [];
    for (let i = 0; i < repita; i++) {
        array.push(z);
    }
    return array;
}
//console.log(novoArray(10, a)); // ReferenceError: a is not defined
console.log(novoArray(3, 'a')); // [ 'a', 'a', 'a' ]
//console.log(novoArray(5, 'a')); // [ 'a', 'a', 'a', 'a', 'a']
