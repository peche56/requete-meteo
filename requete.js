$(document).ready(function(){

var city = $('input:text').val();
 $list = $('ul');

  $('#weather').click(function() {
    // console.log(city);

    $list.append('<li>' + (city) + '</li>');


$.get( "api.openweathermap.org/data/2.5/weather?q={city name}", function( city ) {
  $( "body" )
    $list.append( '<li>' "Weather conditions : " + weather.id '</li>') // John
    $list.append( '<li>' "Weather description: " + weather.main '</li>') //  2pm
    $list.append( '<li>' "Temperature: " + main.temp '</li>');
}, "json" );
});
});
