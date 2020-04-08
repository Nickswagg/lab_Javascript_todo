

function addItem() {
   var todo = document.createElement('li');
   var FieldValue = document.querySelector('#myInput').value;
   var show = document.createTextNode(FieldValue);
   todo.appendChild(show);
   if (FieldValue === '') {
   alert("You must write something!");
   } else {
   document.querySelector("#list").appendChild(todo);
   myInput.value = '';
   }
}

// Remove Element from my list
var list = document.querySelector('#list');
list.addEventListener('click', function(event){
event.target.style.textDecoration = 'line-through';   
setTimeout (function(){
    event.target.remove();
}, 1000);

});
   