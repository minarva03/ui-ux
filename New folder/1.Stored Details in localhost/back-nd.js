
let cname = document.getElementById('make');
let model = document.getElementById('model');
let color = document.getElementById('color');
let price = document.getElementById('price')
let carForm = document.getElementById('car-form');
let reseltTable = document.querySelector('.result');
let editSvBtn = document.querySelector('.saveedit');

editSvBtn.style.display = 'none'


let arr = [];
carForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let obj = {
        carname: cname.value,
        carmodel: model.value,
        carcolor: color.value,
        carprice: price.value
    };

    // console.log(arr)  
    if (localStorage.getItem('cardetails')) {
        arr = JSON.parse(localStorage.getItem('cardetails'))

    }
    if(obj.carname==""){
      obj.carname="Not Mentation";
    }
     if(obj.carmodel==""){
     obj.carmodel='Not Mentation'
    }
   
     if(obj.carcolor==""){
        obj.carcolor='Not Mentation'
    }
     if(obj.carprice==""){
        obj.carprice='Not Mentation'
        
    }

    arr.unshift(obj)
    localStorage.setItem('cardetails', JSON.stringify(arr))
    cname.value = '';
    model.value = '';
    color.value = '';
    price.value = '';
    display();

    // delet();
});

// Clear all

carForm.addEventListener('reset', function (x) {
    x.preventDefault();
    window.localStorage.clear();
    window.location.reload(true)
})

// Display Images
function display() {

    if (localStorage.getItem('cardetails')) {
        arr = JSON.parse(localStorage.getItem('cardetails'))

    }


    let everyTask = "";
    for (let i = 0; i < arr.length; i++) {
        // const element = arr[i];
        everyTask = everyTask + ` <tr>
    <th scope="row">${i + 1}</th>
    <td>${arr[i].carname}</td>
    <td>${arr[i].carmodel}</td>
    <td>${arr[i].carcolor}</td>
    <td>${arr[i].carprice}</td>
    <td><button type="button" class="btn btn-success edit">Edit</button>
      <button type="button" class="btn btn-danger delet">Delete</button></td>
  </tr>
  <tr>`

    }
   
    reseltTable.innerHTML = everyTask;

    delet();
    edit();

}

display()


// .........................................................................

function edit() {
    let editBtn = document.getElementsByClassName('edit');

    if (localStorage.getItem('cardetails')) {
        arr = JSON.parse(localStorage.getItem('cardetails'))

    }

    for (let i = 0; i < editBtn.length; i++) {
        const element = editBtn[i].addEventListener('click', function () {

            editSvBtn.style.display = 'block'
            editSvBtn.addEventListener('click', function () {

                let obj = {
                    carname: cname.value,
                    carmodel: model.value,
                    carcolor: color.value,
                    carprice: price.value
                };

                if(obj.carname==""){
                    obj.carname="Not Updated";
                  }
                   if(obj.carmodel==""){
                   obj.carmodel='Not Updated'
                  }
                 
                   if(obj.carcolor==""){
                      obj.carcolor='Not Updated'
                  }
                   if(obj.carprice==""){
                      obj.carprice='Not Updated'
                      
                  }



                arr[i] = obj;

                localStorage.setItem('cardetails', JSON.stringify(arr))
                window.location.reload(true);
            })



        })

    }
}

// ..................................................................alert...
function delet() {
    let deletBtn = document.getElementsByClassName('delet')
    // document.getElementsByClassName()
    if (localStorage.getItem('cardetails')) {
        arr = JSON.parse(localStorage.getItem('cardetails'))

    }
    for (let i = 0; i < deletBtn.length; i++) {
        deletBtn[i].addEventListener('click', function () {
            arr.splice(i, 1)
            localStorage.setItem('cardetails', JSON.stringify(arr))
            window.location.reload(true)
        })

    }

}

