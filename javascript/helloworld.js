"use strict"
// use of object
var student = {};
student.firstname = 'aa';
student.lastname = 'bb';
console.log('student ' + student);
console.log(student);

var teacher = {
    firstname : 'Kal',
    lastname : 'bos'
};

console.log(teacher);

console.log('hello world');

var  x = 'helo';
var y = 'aad\nhi';
console.log(x+y);

// undefined
var z;
console.log(z);

// var can take any value
var a =10;
var a= 'something';
console.log(a);
//to avoid assigning value to a const.
const con = 'constan';
//con = 'erro'; will throw - assignment to constant variable  error
console.log(con);

// strict 
var a = 10; 
var b =5;
console.log(a + b);