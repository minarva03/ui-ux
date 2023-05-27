//store your name inside local storage 
// let myname='Ritik';
// let gfname='priyanka';
// // localStorage.setItem('name',myname);
//  localStorage.setItem('gfname',gfname);

// // //getting data 
// // console.log(localStorage.getItem('name'));

// //update data 

// // let myname="priyanka"
// // localStorage.setItem('name',myname);

// //delete a  data  ( priyanka - gf name)

// // localStorage.removeItem('gfname');

// // claer all localstorage data 

// // localStorage.clear();


// work with array of objcet data 

let student=[
              {id:1,name:'priyanka'},
              {id:2,name:'jack'},
              {id:3,name:'ritik'},
              {id:4,name:'radhe'}
            ];

// covvert array of object to string by using JSON.stringfy()



// set data 
localStorage.setItem('studentdata',JSON.stringify(student));

// // get the data 
// // console.log(typeof localStorage.getItem('studentdata'))  //string

// // i want to disaply my data in  origal format

stdBox=JSON.parse(localStorage.getItem('studentdata'));
console.log(stdBox)


//session storage 

// let stdname='priyanka';
// sessionStorage.setItem('name',stdname)

//remove
sessionStorage.removeItem('name')

// use array of objcet 