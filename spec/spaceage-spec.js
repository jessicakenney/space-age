import { SpaceAge } from './../js/spaceage.js';

describe('SpaceAge', function() {
    var moment = require('moment');
    var spaceAge ;
    var testDate ;
    var date;
    var now;

  beforeEach(function() {
    testDate = "2000-04-08";
    spaceAge = new SpaceAge(testDate);
    date = moment(testDate);
    now = moment();
  });

  // it('should return number of seconds in a year ', function() {
  //   expect(spaceAge.earthYearsToSeconds(5)).toEqual(157788000);
  // });

  it('should return date diff ', function() {
    let expected = now.diff(testDate,'seconds');
    expect(spaceAge.getDateDiff(testDate)).toEqual(expected);
  });

  it('should return mercury seconds', function() {
    let expected = now.diff(testDate,'seconds');
    let exp = spaceAge.secondsToYearsDays(expected * 0.24);
    expect(spaceAge.getMercuryAge(expected)).toEqual(exp);
  });

  it('should return venus seconds', function() {
    let expected = now.diff(testDate,'seconds');
    let exp = spaceAge.secondsToYearsDays(expected * 0.62);
    expect(spaceAge.getVenusAge(expected)).toEqual(exp);
  });

  it('should return mars seconds', function() {
    let expected = now.diff(testDate,'seconds');
    let exp = spaceAge.secondsToYearsDays(expected * 1.88);
    expect(spaceAge.getMarsAge(expected)).toEqual(exp);
  });

  it('should return jupiter seconds', function() {
    let expected = now.diff(testDate,'seconds');
    let exp = spaceAge.secondsToYearsDays(expected * 11.86);
    expect(spaceAge.getJupiterAge(expected)).toEqual(exp);
  });


});
