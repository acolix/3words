var form =document.createElement('form');
form.setAttribute('id','tripleform');
//form.setAtribute('oninput')
document.body.appendChild(form);
var input1 = document.createElement('input');
var input2 = document.createElement('input');
var input3 = document.createElement('input');
var button = document.createElement('input');
var out = document.createElement('output');

input1.setAttribute('type', 'text');
input1.setAttribute('id', 'in1');
input2.setAttribute('type', 'text');
input2.setAttribute('id', 'in2');
input3.setAttribute('type', 'text');
input3.setAttribute('id', 'in3');
button.setAttribute('type','submit');
out.setAttribute('for','in1 in2 in3');

form.appendChild(input1);
form.appendChild(input1);
form.appendChild(input1);
form.appendChild(button);
form.appendChild(out);

function output (e){
  e.prevenDefault()
  out.setAttribute('value',String(input1.value+input2.value+input3.value))};
form.addEventListener('submit',output);


