var Thermostat = function() {
  this.temp = 20;
};

Thermostat.prototype.up = function() {
  this.temp += 1;
};
Thermostat.prototype.down = function() {
  this.temp -= 1;
};