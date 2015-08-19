  var therm = new Thermostat(); 
   function showTherm() {
     $("#temp").text(therm.temp);
     $("#temp").css("color", therm.colour());    
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
    });