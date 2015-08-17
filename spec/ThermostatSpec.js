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
});