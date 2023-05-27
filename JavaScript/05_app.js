

//1st way
// console.log('Hy Welcome to JavaScript')
// console.log('Hy Welcome to JavaScript')
// console.log('Hy Welcome to JavaScript')
// console.log('Hy Welcome to JavaScript')
// console.log('Hy Welcome to JavaScript')


//Functional way

// function msg(){
//       console.log('Hy Welcome to JavaScript')
// }

// msg();
// msg();
// msg();
// msg();
// msg();


//Function with loop
// function msg(){
//       console.log('Hy Welcome to JavaScript')
// }

// for (var i=1;i<=100;i++){
//       msg();
// }


//Function with Argument (data)

// function wish(username){
//       console.log(`Hello ${username} Good Evening`);
// }


// wish()  //Hello undefined Good Evening
// wish('Surendra') //Hello Surendra Good Evening
// wish('Priyanka','Ritik');
// wish('ritik',)
// wish('7539053223')



//Function With Default value / Argument 
// function wish(username="Special Guest")
// {
//       console.log(`Hello ${username} Good Evening`);
// }

// wish()
// wish('priyanka')

//Function with return value 

// function square(num){
//       return num*num;
// }

// console.log(square(4))
// console.log(square(5))
// console.log(square(20))


//Function without return value 
// function square(num){
//        console.log(num*num);
// }


// square(5)


//Assignmnet : craete your fun named as markcal() 
//calculate your 10th total mark as wll as avg mark 

// create your own fun  named as myEven

// function myEven(num){
//       if (num%2==0){
//             return true;
//       }
//       else{
//             return false;
//       }
// }

// console.log(myEven(5))
// console.log(myEven(50))



// function myEven(num){
//       if (num%2==0){
//             return true;
//       }
//       else{
//             return false;
//       }
      
//       console.log('Hello Thank u ')
// }

// console.log(myEven(20))


// Craete your own fact() which will take a positive //number and calucate the  factorial 

// Scope in Javascript :
// 1. Global Scope 
// 2. Local Scope

// 1. Global Scope 
//The variable which is decaler outside the function 
//scope - access inside any function
// var a=10

// console.log(a)  // outside fun
// function myFun1(){
//       console.log(a) // inside function
// }

// function myFun2(){
//       console.log(a) // inside function
// }

// myFun1()
// myFun2()



// //Local Scope
// //The variable which is decaler inside the function 
// //scope - u cant access outside function

// function fun1(){
//       var x=90
//       console.log(x)
// }


// fun1()

// console.log(x) //x is not defined

// var x=900;

// function fun1(){
//       var x=90;
//       console.log(x)
// }


// fun1()


// function fun1()
// {
//       console.log('jay Hind')
//       console.log('i love india')
// }


// Another few way of creating function

// Anonymous Function 
// without name 
// just for one time use 

//this is not the right way using Anonymous function
// var x=function(){
//       console.log('hello i m new')
// }

// x();
// x();


//perfect way of using Anonymous function

// setInterval(function(){console.log('hello')},2000)

// Another way (ES6 )
//Fat arrow function ()

// hello=()=>{console.log('good evening')}

// hello()


// what is the diff.. between normal fun , anonumous fun , fat arrow fun



//Recursion :
//what is Recursion ?
//Ans : if a fun call itself is called as Recursion 

// function factorial(n){
//       if(n==0){
//             return 1;
//       }
//       else{
//             return  n*factorial(n-1);
//       }
// }

// console.log(factorial(4))

//how to learn multiple lang 

// learn max 2 lang 1 lang pefer