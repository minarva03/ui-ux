

// let lunch=new Promise((resolve,reject)=>{
//       let Done=true;
//           if(Done){
//               resolve('successful');
//                }
//           else{
//              reject('Unsuccessful');
//               }
//         });
// //calling
//     lunch.then((msg)=>{
//            console.log(msg);
//        }).catch((err)=>{
//            console.log(err);
// });


//Elegibility for getting a job!

let checkMark=new Promise((resolve,reject)=>{
     let careerFirstCls=true;
        if(careerFirstCls){
            resolve('Selected for project round');
        }
        else{
            reject('sorry! you r not selected for the project round');
        }
});

let checkProject=new Promise((resolve,reject)=>{
    let ProjectDone=true;
       if(ProjectDone){
           resolve('Selected for written round');
       }
       else{
           reject('sorry! you r not selected for the written round');
       }
});

let checkWritten=new Promise((resolve,reject)=>{
    let WrittenPassed=true;
       if(WrittenPassed){
           resolve('Selected for GD round');
       }
       else{
           reject('sorry! you r not selected for the GD round');
       }
});

let checkGD=new Promise((resolve,reject)=>{
    
    let GDcleared=true;
       if(GDcleared){
           
           resolve('Selected for PI round');
       }
       else{
           
           reject('sorry! you r not selected for the PI round');
       }
});

let checkPI=new Promise((resolve,reject)=>{
    let PIcleared=false;
       if(PIcleared){
           resolve("Congrats! you're selected for this job" );
           
       }
       else{
           reject("sorry!you're disqualified ");
           
       }
});

//calling

checkMark.then((msg)=>{
   let result=`${msg}//`;
         checkProject.then((msg)=>{
             result+=`${msg}//`;
         checkWritten.then((msg)=>{
            result+=`${msg}//`;
            checkGD.then((msg)=>{
                result+=`${msg}//`;
                checkPI.then((msg)=>{
                    result+=`${msg}//`;
                    console.log(result);

                }).catch((err)=>{
                      console.log(err);
                });
            }).catch((err)=>{
                console.log(err);
            });
       }).catch((err)=>{
        console.log(err);
       });
   }).catch((err)=>{
    console.log(err);
   });
}).catch((err)=>{
    console.log(err);
});