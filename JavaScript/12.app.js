// lunch 

let myLunch=new Promise((resolve,reject)=>{
    let isDone=false;
    if(isDone){
        resolve('Lunch is done');
    }
    else{
        reject('Lunch is not done');
    }
});

//calling
myLunch.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.error(err);
});