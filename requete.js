$(document).ready(function(){

var city = $('input:text').val();


  $('#weather').click(function() {
    console.log(city);


  });
});





$.get( "test.php", function( data ) {
alert( "Data Loaded: " + data );
});
