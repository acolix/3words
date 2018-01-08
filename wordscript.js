var form =document.createElement('form');
form.setAttribute('id','tripleform');
//form.setAttribute('oninput','out.value=in1.value+in2.value+in3.value');
//form.setAtribute('oninput')
document.body.appendChild(form);
var input1 = document.createElement('input');
var input2 = document.createElement('input');
var input3 = document.createElement('input');
var button = document.createElement('input');
var out = document.createElement('output');

//input1.setAttribute('type', 'text');
input1.type='number'
input1.setAttribute('id', 'in1');
input2.setAttribute('type', 'number');
input2.setAttribute('id', 'in2');
input3.setAttribute('type', 'number');
input3.setAttribute('id', 'in3');
button.setAttribute('type','submit');
out.setAttribute('for','in1 in2 in3');
out.name='out';

form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);
form.appendChild(button);
form.appendChild(out);

function isvalidtriang(l1,l2,l3){
  var valid = l1+l2>l3 && Math.abs(l1-l2)<l3;
  console.log(Math.abs(l1-l2),l1+l2,l1,l2);
  console.log(valid);
  if (valid){return("isvalid")} else{return("not valid")};
}

function output (e){
  e.preventDefault()
  console.log(input1.value);
  out.value=isvalidtriang(+(input1.value),+(input2.value),+(input3.value));
 };
form.addEventListener('submit',output);


