//create a class called as Student with 3 properties (sid,sname,smark)

// this is my design
// class Student{
//     constructor(){
//         this.sid=100;
//         this.sname='rahul';
//         this.smarks=80;
//     }
// }

// // objcet creation 1
// let s1=new Student();
// console.log(s1.sid);
// console.log(s1.sname);
// console.log(s1.smarks);

// console.log('__________________');

// // objcet creation 2
// let s2=new Student();
// console.log(s2.sid);
// console.log(s2.sname);
// console.log(s2.smarks);

// console.log('__________________');

// // objcet creation 2
// let s3=new Student();
// console.log(s3.sid);
// console.log(s3.sname);
// console.log(s3.smarks);


//create a class called as Student with 3 properties (sid,sname,smark)
// dynamic 
class Student{
    constructor(a,b,c){
        this.sid=a;
        this.sname=b;
        this.smarks=c;
    }
}

// create objcet 1 
let s1=new Student(101,'Priyanka',67);
console.log(s1.sid);
console.log(s1.sname);
console.log(s1.smarks);

console.log("--------------");


// create objcet 2 
let s2=new Student(102,'Rahul',35);
console.log(s2.sid);
console.log(s2.sname);
console.log(s2.smarks);

console.log("--------------");

// create objcet 3 
let s3=new Student(103,'Surendra',55);
console.log(s3.sid);
console.log(s3.sname);
console.log(s3.smarks);

console.log("--------------");


