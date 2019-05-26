var a = [10, 'aadhi', 20];
console.log(a);
console.log(a.length);

// to add elements to array, use push
a.push('bose', 45);
console.log(a);

//use pop to remove elements from array
a.pop();
console.log(a);
console.log(a.length);

//conditions
// if - syntax as same as c#

//Loops
//while - same as c#
//do -while - same as c#
//for - same


//foreach loop
console.log('foreach loop');
var a = [10, 20, 'aa', 30];
a.forEach(function (item) {
    console.log(item);
});

//foreach loop
console.log('for loops');
var a = [10, 20, 'aa', 30];
for(var i of a){
    console.log(i);
}
