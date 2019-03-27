let fullName = 'Tan';

let age = 10;

const info = `Hello ${fullName} 
Age is ${age}`

console.log(info);

//Object
const user ={
    username: 'hello',
    image: 'hello.jpg',
}

let data = user.username
 data = user["image"]


console.log(data);

// Arrow funtion 
const f1 = function () {
    return "Hello"
}

const f2 = () => 'Hello Arrow'
const f3 = (a,b) => {return a+b}

console.log(f3(10,5))

//Destructuring Assignment
let obj = {b:2,c:3,d:4}
let {a,b,c} = obj;
console.log(b);
b = 20;
console.log(b);
console.log(obj.b);


const n1  = {a:10,b:5}
let f4 = ({a,b}) => a+b
console.log(f4(n1))

//Spread operator

let myFunction = (x,y,z) => x+y+z
var args =[0,1,2] // Array
console.log(myFunction(...args))

console.log(`result = ${myFunction(...args)}`)

//Rest Parameters
