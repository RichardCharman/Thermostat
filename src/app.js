var therm = new Thermostat();
  document.getElementById("temp").innerHTML = therm.temp;
  document.getElementById("temp").style.color = therm.colour();
  function upClick() {
    therm.up();
    document.getElementById("temp").innerHTML = therm.temp;
    document.getElementById("temp").style.color = therm.colour();
  };
  function downClick() {
    therm.down();
    document.getElementById("temp").innerHTML = therm.temp;
    document.getElementById("temp").style.color = therm.colour();
  };
  function resetClick() {
    therm.restart();
    document.getElementById("temp").innerHTML = therm.temp;
    document.getElementById("temp").style.color = therm.colour();
  };
  function psmCheck() {
    therm.psmSwitch();
  };