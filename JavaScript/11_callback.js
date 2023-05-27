// let students=[
//                 {id:100,name:'Priyanka',age:23,addr:'Bbsr'},
//                 {id:101,name:'Jacklin',age:33,addr:'Srilanka'},
//                 {id:102,name:'Don',age:35,addr:'Taliban'}
//              ];

// // push the data into the array 

// let insertData=(data)=>{
//     setTimeout(()=>{
//         students.push(data);
//     },3000)
// };

// // get the data from an array  and display in webapage throguh html table 

// let displayData=()=>{
//     setTimeout(()=>{
//         let studentsRows='';

//         // Read the data from ana array 
//         students.forEach((std)=>{
//             studentsRows +=`<tr> 
//                                  <td>${std.id}</td>
//                                  <td>${std.name}</td>
//                                  <td>${std.age}</td>
//                                  <td>${std.addr}</td>
//                            </tr>`
//         });

//         document.querySelector('#table_data').innerHTML=studentsRows;
//     },1000);
// };

// // function calling 
// insertData({id:999,name:'Sanu',age:20,addr:'Ctc'});
// displayData();










//...
let btn=document.querySelector('#button');
btn.addEventListener('click',function(){

    table_data.style.display="block";
    table_head.style.display="block";

    let students=[
        {id:100,name:'Priyanka',age:23,addr:'Bbsr'},
        {id:101,name:'Jacklin',age:33,addr:'Srilanka'},
        {id:102,name:'Don',age:35,addr:'Taliban'}
     ];
    
    // push the data into the array 
    
    let insertData=(data,callback)=>{
    setTimeout(()=>{
    students.push(data);
    callback();
    },3000)
    };
    
    // get the data from an array  and display in webapage throguh html table 
    
    let displayData=()=>{
    setTimeout(()=>{
    let studentsRows='';
   
    // Read the data from ana array 
    students.forEach((std)=>{
    studentsRows +=`<tr> 
                         <td>${std.id}</td>
                         <td>${std.name}</td>
                         <td>${std.age}</td>
                         <td>${std.addr}</td>
                   </tr>`
    });
    
    document.querySelector('#table_data').innerHTML=studentsRows;
    },1000);
    };
    
    // function calling 
    insertData({id:999,name:'Sanu',age:20,addr:'Ctc'},displayData);
    

})
