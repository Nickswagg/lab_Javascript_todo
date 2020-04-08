// Add New Item
function addItem() {

    $('#list').append('<li>' + $('#myInput').val() + '</li>');  // Adds a new item at the last position of the list
    $('#myInput').val(''); // Clears out the input

}
    
// Take off New Item
$('#list').click(function(event){ // defines action on click
    var target = $(event.target); 
    target.wrap('<strike>');  // wraps the element you click on  
    setTimeout (function(){  // Set time after which action is executed 
    target.remove(); // Take off element
},  1000);
});

   