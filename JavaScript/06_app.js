
//var gflist=['priyanka','rosy','malika','jacklin',100]
// // console.log(gflist[1])
// // console.log(gflist[2])
// // console.log(gflist[4])
// // console.log(gflist[40]) //undefined


// //update an element of ana rray 

// gflist[2]="jini"
// // console.log(gflist[2])
// console.log(gflist)


//add an elmenet at the end of the array 
// gflist[5]="chinu"
// console.log(gflist[5])

// add an elmenet at the end of the array 
// gflist[50]="pinky"

// console.log(gflist)
// console.log(gflist[50])



//How to create an empty aaray
// 1st way
// var gflist=[]
// console.log(gflist) //[]

//other way
// var gflist=new Array();
// console.log(gflist)

// print lengtrh of array 

// var gflist=['priyanka','rosy','malika','jacklin',100]
// console.log(gflist.length)



//Important function present inside array :
// push() function 
// var num=[10,20,30,40]
// console.log(num)
// num.push(50)
// console.log(num)

// pop() function 
// var num=[10,20,30,40]
// // console.log(num.pop())
// console.log(num.pop())
// console.log(num.pop())
// console.log(num)


//unshift()
// oppsitive of push()
// var num=[10,20,30,40]
// num.unshift(50)
// console.log(num)

//shift()
// oppositive pop()
// var num=[10,20,30,40]
// num.shift()
// console.log(num)

//indexOf()
// var num=[10,20,30,40]
// console.log(num.indexOf(30)) //2
// console.log(num.indexOf(80)) //-1


//sclice() 
// var num=[10,20,30,40,50,60,70,80]
// var num1=num.slice(1,4)
// console.log(num)
// console.log(num1)

// var num1=num.slice()
// console.log(num1)

// var num1=num.slice(1)
// console.log(num1)

// var num1=num.slice(5)
// console.log(num1)

// var num1=num.slice([])
// console.log(num1)  

// var num1=num.slice(-1)
// console.log(num1)


// var num1=num.slice(1,7,2)
// console.log(num1)




//Gf Add and Display System 

// var gflist=[]

// var input=prompt("Tell me which operation You want to Perfor [add] [list] [exit]")

// while(input!="exit"){

//       if(input=="add"){
//             var newgf=prompt("Enter Your Gf Name");
//             gflist.push(newgf);
//       }
//       else if(input=="list"){
//             console.log("--------------This is Your Girl Friend Lis-----------");
//             console.log(gflist)
//       }
//       else{
//             console.log("Invalid Option Try to enter valid option")
//       }
//       input=prompt("Tell me which operation You want to Perfor [add] [list] [exit]")
      
// }
// console.log("Thank You")