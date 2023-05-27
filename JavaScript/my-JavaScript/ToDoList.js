let input=document.querySelector(".input_value");
let container=document.querySelector(".container");
let add=document.querySelector(".addButton");
let todo=document.querySelector(".item_todo");
let doItem=document.querySelector(".item-div");
let edit=document.querySelector(".edit");
let remove=document.querySelector(".remove");
let items=document.querySelector(".items");

// add.addEventListener('click',function(){
//    let para=document.createElement('p');
//    para.innerText=input.value;
//    doItem.appendChild(para)
// })

add.addEventListener('click',function(){
    let value1=input.value;
     input.innerText=value1;
     todo.innerText=value1;
     //value1.style.display="none";
   edit.innerHTML="EDIT";
   edit.style.color="green";
   remove.innerHTML="REMOVE";
   remove.style.color="red";
   edit.addEventListener('click',function(){
       todo.contentEditable=true;
   })
   remove.addEventListener('click',function(){
    todo.remove();
})
   todo.style.display="inline";
   doItem.style.display="inline";
   items.style.marginBottm="1.5rem";
items.style.borderBottom= "4px solid white";
  

});

//let para=document.getElementsByClassName('edit');
// class item{
//     constructor(itemName){
//     this.createDiv(itemName);
// }
 
// createDiv(itemName){
//     let input=document.createElement('input_value');
//     input.value=itemName;
//     input.disabled=true;
//     input.classList.add('item_todo');
//     input.type="text";

//     let itemBox=document.createElement('div');
//     itemBox.classList.add('items');

//     let edit=document.createElement('button')
//     edit.classList.add('edit');
//     edit.innerHTML="EDIT";

//      let remove=document.createElement('button')
//      remove.classList.add('remove');
//      remove.innerHTML="REMOVE";
//      remove.style.color="red";

//     container.appendchild(itemBox);
//     itemBox.appendChild(input);
//     itemBox.appendChild(edit);
//     itemBox.appendChild(remove);


//    }
// }
// new item("sport");



