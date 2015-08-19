var therm = new Thermostat(); 
function showTherm() {
   $("#temp").text(therm.temp);
   $("#temp").css("color", therm.colour());    
};

var weatherAPI = function(cityName) {
     $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&APPID=b0aea1fc7fa650c8be747007e4f8e609", function(cityJSON) {
       $('#name').html(cityJSON.name);
       $('#temperature').html(Math.round(cityJSON.main.temp));
       $('#degrees').removeClass();
       $('#degrees').addClass("degrees_show");
    });
  };

$(document).ready(function() {
        showTherm();
      $("#up").click(function() {
        therm.up();
        showTherm();
      });
      $("#down").click(function() {
        therm.down();
        showTherm();
      });
      $("#reset").click(function() {
        therm.restart();
        showTherm();
      });
      $("#psmbox").click(function() {
        therm.psmSwitch();
      });
      $('#get_weather').click(function() {
        var city = $('#city_choice').val();
        weatherAPI(city);
        $('#city_choice').val('');
      });
    });