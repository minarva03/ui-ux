// 1st promise 
let checkElg=new Promise((resolve,reject)=>{
age=80
if(age>=23){
    resolve('U r ready for marray');
}
else{
    reject('Too Young Wait yar');
}
});


// 2nd promise 

let isGirlLikeMe=new Promise((resolve,reject)=>{
let girlChoise=true;
if(girlChoise){
    resolve('I will marray u ');
}
else{
    reject('I cant marray u sry boss');
}
});

// calling 
checkElg.then((msg)=>{
    let result=`${msg},`;
    isGirlLikeMe.then((msg)=>{
        result+=`${msg},`;
        console.log(result);
    }).catch((err)=>{
        console.error(err);
    });
}).catch((err)=>{
    console.error(err);
});


checkMark.then((msg)=>{
    let reseult=`${msg}===>`;
    checkProject.then((msg)=>{
        reseult+=`${msg}===>`;
        checkWritten.then((msg)=>{
            reseult+=`${msg}===>`;
            checkGd.then((msg)=>{
                reseult+=`${msg}===>`;
                checkHr.then((msg)=>{
                    reseult+=`${msg}===>`;
                    console.log(reseult)

                }).catch(()=>{

                });
            }).catch(()=>{

            });
        }).catch(()=>{

        });
    }).catch(()=>{

    });

}).catch(()=>{

});