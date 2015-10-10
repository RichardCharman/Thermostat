describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it("starts with temperature at 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });
  it("can be increased", function () {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });
  it("can be decreased", function () {
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
  });
  it("will not go below 10", function () {
    while(thermostat.temp > 10) {
      thermostat.down();
    };
    thermostat.down();
    expect(thermostat.temp).toEqual(10);
  });
  it("can be reset to 20", function () {
    thermostat.up();
    thermostat.restart();
    expect(thermostat.temp).toEqual(20);
  });
  describe("Power saving mode", function () {
    it("starts in power saving mode", function () {
      expect(thermostat.psm).toBe(true);
    });
    it("has a maximum temperature of 25", function () {
      while(thermostat.temp < 25) {
        thermostat.up();
      };
      thermostat.up();
      expect(thermostat.temp).toEqual(25);
    });
    it("can be turned off", function () {
     thermostat.psmSwitch();
     expect(thermostat.psm).toBe(false);
    });
    it("can be turned on", function () {
     thermostat.psmSwitch();
     thermostat.psmSwitch();
     expect(thermostat.psm).toBe(true);
    });
    it("has a maximum temperature of 32 with psm off", function () {
      thermostat.psmSwitch();
      while(thermostat.temp < 32) {
        thermostat.up();
      };
      thermostat.up();
      expect(thermostat.temp).toEqual(32);
    });
  });
  describe("temperature colour is", function () {
    it("green if temp less than 18", function () {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.colour()).toEqual("green");
    });
    it("yellow if temp more than 17 less than 25", function () {
      expect(thermostat.colour()).toEqual("orange");
    });
    it("red if temp is 25 or more", function () {
      while(thermostat.temp < 25) {
        thermostat.up();
      };
      expect(thermostat.colour()).toEqual("red");
    });
  });
});