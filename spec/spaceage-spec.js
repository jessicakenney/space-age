import { SpaceAge } from './../js/spaceage.js';

describe('SpaceAge', function() {
    var moment = require('moment');
    var spaceAge ;
    var testDate ;
    var date;
    var now;

  beforeEach(function() {
    spaceAge = new SpaceAge;
    testDate = "2000-04-08";
    date = moment(testDate);
    now = moment();
  });

  it('should return number of seconds in a year ', function() {
    expect(spaceAge.earthYearsToSeconds(5)).toEqual(157788000);
  });

  it('should return date diff ', function() {
    let expected = now.diff(testDate,'seconds');
    expect(spaceAge.getDateDiff(testDate)).toEqual(expected);
  });

  it('should return mercury seconds', function() {
    let expected = now.diff(testDate,'seconds');
    expect(spaceAge.getMercuryAge(expected)).toEqual(expected * .24);
  });

  it('should return venus seconds', function() {
    let expected = now.diff(testDate,'seconds');
    expect(spaceAge.getVenusAge(expected)).toEqual(expected * .62);
  });

  it('should return mars seconds', function() {
    let expected = now.diff(testDate,'seconds');
    expect(spaceAge.getMarsAge(expected)).toEqual(expected * 1.88);
  });

  it('should return jupiter seconds', function() {
    let expected = now.diff(testDate,'seconds');
    expect(spaceAge.getJupiterAge(expected)).toEqual(expected * 11.86);
  });


});
