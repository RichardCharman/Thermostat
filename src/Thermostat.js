var Thermostat = function() {
  this.temp = 20;
  this.psm = true;
};

Thermostat.prototype.up = function() {
  if(this.psm) {
    if(this.temp < 25) {
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