function sort(sortBy, list) {
    return list.sort((a, b) => b[sortBy] - a[sortBy]); 
 }
 
 const lista = [
    { a: 1, b: 3 }, 
    { a: 3, b: 2 },
    { a: 2, b: 40 } 
];
console.log(JSON.stringify(sort("a", lista), null, 2));
 module.exports = sort;