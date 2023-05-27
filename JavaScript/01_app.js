// let x=function(name,wish){
//     if(wish==undefined){
//         wish="Good Morning";
//     }

// let msg=`Hi ${name} - ${wish}`;
// console.log(msg);

// };

// x('surendra');
// x('Pryanka');
// x('Zini');
// x('Ritik');
// x('Jank');


// let x=function(name,wish='Good Morning'){
// let msg=`Hi ${name} - ${wish}`;
// console.log(msg);
// };
// x('surendra');
// x('Pryanka');
// x('Zini');
// x('Ritik');
// x('Jank','Good Afternoon');


//for loop with array 

// let frinedsName=['surendra','priyanka','rahul','Zini']
// // console.log(frinedsName[0]);
// // console.log(frinedsName[1]);
// // console.log(frinedsName[2]);
// // console.log(frinedsName[3]);

// //with for loop 

// for (let i=0;i<frinedsName.length;i++){
//     console.log(frinedsName[i])
// }


// forEcah Loop 
// let frinedsName=['surendra','priyanka','rahul','Zini']
// frinedsName.forEach(function(a){
//     console.log(a);
// });


// forOf loop
// let frinedsName=['surendra','priyanka','rahul'];
// for(x of frinedsName){
//     console.log(x)
// }

//For In loop 


// let frinedsName=['surendra','priyanka','rahul'];
// for(x in frinedsName){
//     console.log(x+"  "+frinedsName[x]);
// }





//template string 

// let student={
// 	name:"priyanka",
//     age:23,
//     mob:7539053223,
//     email:'priyanka@gmail.com'
// };

// // print this objcet value in console without template string

// let data="name is "+student.name+"age is "+student.age+"mob is "+student.mob+"email is "+student.email;
// console.log(data); 

// // print this objcet value in console with using template string

// let data1=`name is ${student.name} age is ${student.age} mob is ${student.mob} email is ${student.email}`;
// console.log(data1)


// // generate  html dynamic template 

// let student={
// 	name:"priyanka",
//     age:23,
//     mob:7539053223,
//     email:'prghiyanka@gmail.com'
// };

// // let htmlTemplate="<ul>"+"<li>"+student.name+"</li>"+"<li>"+student.age+"</li>"+"<li>"+student.mob+"</li>"+"<li>"+student.email+"</li>"+"</ul>";
// // console.log(htmlTemplate);

// // with using template string 

// let htmlTemplate1=`<ul><li>${student.name}</li><li>${student.age}</li><li>${student.mob}</li><li>${student.email}</li></ul>`;
// console.log(htmlTemplate1);


// multiline string 
// let msg=`hello i m surendra
// how r u 
// where r u 
// .....
// ......
// `;

// console.log(msg);


//11. Destructing :
// let gflist=['priyanka','zini','smruti','jacklin'];  // structing 

// // access data from gflist array 

// // console.log(gflist[2]);

// //destructuring

// let[name1,name2,name3,name4]=gflist;
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name4);


// let gflist=['priyanka','zini','smruti','jacklin','katina','kriti'];
// // destructring 
// let[name1,name2,name3]=gflist;
// console.log(name1);
// console.log(name2);
// console.log(name3);



let gflist=['priyanka','zini','smruti','jacklin','katina','kriti'];
// destructring 
let[name1,name2,...rest]=gflist;
console.log(name1);
console.log(name2);
console.log(rest);






// real time uses of destructing with nested objcet 
// let student={
//     uname:'priyanka',
//     age:23,
//     mob:7539053223,
//     email:'priyanka@gmail.com',
//     address:{
//         plot:'A-1024/23',
//         lane:'Lane-2',
//         city:'BBSR',
//         state:'Odisha'
//     },

//     bflist:{
//         perbf:{
//             listofpbf:['Ritesh','Ritik','Biswa']
//         },
//         tempbf:{
//             listoftbf:['Ayush','Subhranshu','Suvam']
//         }
//     }
// };


// access tempbf list 
// console.log(student.bflist.tempbf.listoftbf);
// console.log(student.bflist.tempbf.listoftbf);

// destructuring 
// let{listoftbf}=student.bflist.tempbf;
// console.log(listoftbf[0]);
// console.log(listoftbf[1]);
// console.log(listoftbf[2]);


// destructing 

// let {plot,lane,city,state}=student.address; 
// console.log(plot);
// console.log(lane);
// console.log(city);
// console.log(state);



