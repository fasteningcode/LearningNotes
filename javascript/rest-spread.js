function add(a,...b) {
    console.log(a);
    console.log(b);
    let sum = 0;
    b.forEach(num => sum += num);
    return sum;
}

console.log(add(2, 3, 54, 6, 4));

//spreading the Array
let arr = [2,5,6,6,5,];
console.log(add(...arr));

// let arr2 = [...arr];
let arr2 = [1,...arr,3]; //output [ 1, 2, 5, 6, 6, 5, 3 ]

console.log(arr2);
