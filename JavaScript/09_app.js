//objcet creation
// let student={
//       slno:01,
//       name:"Priyanka",
//       age:22,
//       course:'Btech'
// };

//print all data using for in loop

// for(key in student){
//       // console.log(key)
//       // console.log(student[key])
//       // console.log(`${key} : ${student[key]}`)
  
// }


//(object and Array) :

// let bike=[
//       {
//             name:'fz-s',
//             price:110000,
//             color:'mat blue'
//       },
//       {
//             name:'MT-5',
//             price:164000,
//             color:'white orange'
//       },
//       {
//             name:'R15',
//             price:140000,
//             color:'gray red'
//       }
// ]

// console.log(bike[0]["name"])
// console.log(bike[1]["name"])
// console.log(bike[2]["name"])
// console.log(bike[2])
// console.log(bike)


//method inside object

// let kidsLearn={
//       A:'Apple',
//       B:'Bat',
//       C:'Cat',
//       D:'Dog',

//       m1:function(){
//             console.log('i m a method ');
//             console.log('Hy myself Don ');
//       }
// }

// // console.log(kidsLearn)
// kidsLearn.m1()

//this keyword 
//if we want to access current objcet properties inside an method then we will use this keyword

// let myDetails={
//       name:"surendra panda",
//       age:23,
//       color:'black',
//       qlf:'MCA-MTECH',

//       myInfo:function(){
//             console.log("My name is :"+this.name);
//             console.log("My name is :"+this.age);
//             console.log("My name is :"+this.color);
//             console.log("My name is :"+this.qlf);
//       }
// };

// myDetails.myInfo()



// Provide FUNCTION BODY PART outside objcet

// function myInfo(){
//             console.log("outside objcet");
// }
// let myDetails={
//       name:"surendra panda",
//       age:23,
//       color:'black',
//       qlf:'MCA-MTECH',

//       getInfo:myInfo()
// };

// myDetails.myInfo()


// simple way of providing function inside objcet 

// let myDetails={
//       name:"surendra panda",
//       age:23,
//       color:'black',
//       qlf:'MCA-MTECH',

//       myInfo(){
//             console.log('Hi i m Don');
//       }
//       //function keyword is not reqired 
// };

// myDetails.myInfo()


//how to pass argumnet to function
// let myDetails={
//       name:"surendra panda",
//       age:23,
//       color:'black',
//       qlf:'MCA-MTECH',

//       myInfo(value){
//             console.log('Hi i m '+value);
//       }
//       //function keyword is not reqired 
// };

// let a="DON"
// myDetails.myInfo(a)

// let b="good boy"
// myDetails.myInfo(b)