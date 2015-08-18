var Thermostat = function() {
  this.temp = 20;
  this.psm = true;
};
Thermostat.prototype.up = function() {
  if(this.psm) {
    if(this.temp < 25) {
      this.temp += 1;
    };
  } else {
    if(this.temp < 32){
      this.temp += 1;
    };   
  };
};
Thermostat.prototype.down = function() {
  if(this.temp > 10) {
    this.temp -= 1;
  };
};
Thermostat.prototype.psmSwitch = function() {
  if (this.psm) {
    this.psm = false;
  } else {
    this.psm = true;
  };
};
Thermostat.prototype.restart = function() {
  this.temp = 20;
};
Thermostat.prototype.colour = function() {
  if (this.temp < 18) {
    return "green"
  } else if (this.temp < 25) {
    return "orange"
  } else {
    return "red"
  };
};