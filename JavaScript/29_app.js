let taskFoprmBox=document.querySelector('#task-form');
taskFoprmBox.addEventListener('submit',function(event){
    event.preventDefault();

    let taskDataBox=document.querySelector('#task-data');
    let task=taskDataBox.value;
    
    let taskList=[];
    
    //check is there data is present in local storage with having task key
    if(localStorage.getItem('task')){
    taskList=JSON.parse(localStorage.getItem('task'));
    }

    taskList.unshift(task);
    localStorage.setItem('task',JSON.stringify(taskList))

    console.log(taskList);

    displayData();

});

//getting  data and display in UI 
let displayData=()=>{
    let taskAllItemBox=document.querySelector('#task-all-item');
    //get local stotrage data 
    
    let taskListOuPut=[];

    if(localStorage.getItem('task')){
        taskListOuPut= JSON.parse(localStorage.getItem('task'));
    }

    let everyTask='';
    for(let i=0;i<taskListOuPut.length;i++){
        everyTask=everyTask+`<li>${taskListOuPut[i]}</li>`;
    }
    taskAllItemBox.innerHTML=everyTask;
    
};

displayData();