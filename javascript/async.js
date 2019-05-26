//function
//let key word can used to restrict the usage of variable to a particular function
function add(a, b) {
    return (a + b);
}

console.log(add(5, 10));

// callback

function addNum(a, b, callback) {
    callback(a + b);
}

// usage 1
// function print(c){
//     console.log(c);
// }
// addNum(10,6,print);

//usage 2
// addNum(10,11,(c)=>{
//     console.log(c);
// });

//usage 3
// addNum(10, 11, (c) =>
//     console.log(c));
