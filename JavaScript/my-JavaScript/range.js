
let min=document.querySelector("#minValue");
let max=document.querySelector("#maxValue");

let range=document.querySelector('#rangebar');
let amountX=document.querySelector('#rangeValue');

range.addEventListener('input',function(){
      let valueMin=min.value;
      let valueMax=max.value;
      range.setAttribute('min',valueMin);
      range.setAttribute('max',valueMax);
      let vai=range.value;
      amountX.innerText=vai;
});