let addToButton=document.getElementById('addToDo');
let toDocontainer=document.getElementById('toDocontainer');
let inputField=document.getElementById('inputField');


addToButton.addEventListener('click',function(){
       let paragraph=document.createElement('p');
       let edit=document.createElement('editBtn');
       let remove=document.createElement('removeBtn');
       paragraph.innerText= inputField.value;
       toDocontainer.style.borderBottom= "4px solid white";
       edit.innerHTML="EDIT";
       edit.style.color="green";
       edit.style.paddingLeft="230px";
      
       remove.innerHTML="REMOVE";
       remove.style.paddingLeft="20px";
       remove.style.color="red";
       edit.addEventListener('click',function(){
        paragraph.contentEditable=true;
    })
    remove.addEventListener('click',function(){
     paragraph.remove();
     edit.remove(1);
     remove.remove();
     toDocontainer.remove();
 })
       paragraph.classList.add('paragraph-styling');
       toDocontainer.appendChild(paragraph);
       toDocontainer.appendChild(edit);
       toDocontainer.appendChild(remove);
    });