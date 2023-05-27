let TaskForm=document.querySelector('#task-form');

TaskForm.addEventListener('submit',function(event){

    // event.preventDefault();
   let  inputBox=document.querySelector('#task-data');
   let  inputData=inputBox.value;
//    let edit=document.createElement('editBtn');
//         edit.innerHTML="EDIT";
//         edit1= edit.innerHTML;
//    let remove=document.createElement('removeBtn');
//          remove.innerHTML="REMOVE";
//          remove1=remove.innerHTML;
//    let edit=document.querySelector('#edit');
//    edit.innerHTML="EDIT";
//    edit1=edit.innerHTML
//    let dlt=document.querySelector('#dlt');
//    dlt.innerHTML="DELETE";
//    dlt1=dlt.innerHTML
                   
    let AddList=[];

    if(localStorage.getItem('inputData') ){
        AddList=JSON.parse(localStorage.getItem('inputData'));
        }
    
        AddList.unshift(inputData);
        localStorage.setItem('inputData',JSON.stringify(AddList))

        displayData();
    
    });
    
 let displayData=()=>{
                 let TodoItems=document.querySelector('#ToDo_list');
                 let edit=document.createElement('editBtn');
                     edit.innerHTML="EDIT";
                  let   edit1= edit.innerHTML;
                    
                 let remove=document.createElement('removeBtn');
                      remove.innerHTML="REMOVE";
                    //   button.style.backgroundColor="red"; 
                    let  remove1=remove.innerHTML;
                     // remove1.style.backgroundColor="red";
                 let outputList=[];
                 if(localStorage.getItem('inputData')){
                    outputList=JSON.parse(localStorage.getItem('inputData'));
                   
                    }   

                    let DoLists='';
                   
                  for(let i=0;i<outputList.length;i++){
                 DoLists=DoLists+`<li>${outputList[i]} </li>`;
                 DoLists=DoLists+`<button class="btn1";>${edit1} </button>`;
                 DoLists=DoLists+`<button class="btn2";>${remove1} </button>`;
                 }
                  TodoItems.innerHTML=DoLists;
                  edit1.value=DoLists;
                  remove1.value=DoLists;

                //   edit1.addEventListener('click',function(){
                //     inputData.contentEditable=true;
                // })
                let clear=document.querySelector('#clear');
                clear.addEventListener('click',function(index){
                   localStorage.clear('');
                   TodoItems.remove();
                })
    
};

displayData();
