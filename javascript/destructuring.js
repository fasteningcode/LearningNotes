let student = {
    firstname : "Aadhi",
    lastname : "Bose",
    age : 35,
    hobbies : ['reading', 'automation', 'riding'],
    email : 'aadhi@fasteningcode.com',
    website : 'fasteningcode.com'
};

// let firstname = student.firstname;
// let lastname = student.lastname;

// console.log(firstname);
// console.log(lastname);

// destructing
let{firstname,lastname:lName,nickname :nn = 'not provided',...details} = student;
console.log(firstname);
console.log(lName);
console.log(nn);
console.log(details);

// array destructuring
let arr =[10,20,30,40,50,60,70,80,90,100];
let [num1, num2,,num4,,num5=0,...numbers] = arr;
console.log(num1);
console.log(num2);
console.log(num4);
console.log(num5);
console.log(numbers);

