import { SpaceAge } from './../js/spaceage.js';

describe('SpaceAge', function() {
    var moment = require('moment');
    var spaceAge ;
    var testDate ;
    var date;
    var now;
    let sex;

  beforeEach(function() {
    testDate = "2000-09-08";
    sex = "female";
    spaceAge = new SpaceAge(testDate,sex);
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
    let exp = spaceAge.secondsToYears(expected/0.24);
    expect(spaceAge.getPlanetAge("mercury")).toEqual(exp);
  });

  it('should return venus seconds', function() {
    let expected = now.diff(testDate,'seconds');
    let exp = spaceAge.secondsToYears(expected/0.62);
    expect(spaceAge.getPlanetAge("venus")).toEqual(exp);
  });

  it('should return mars seconds', function() {
    let expected = now.diff(testDate,'seconds');
    let exp = spaceAge.secondsToYears(expected/1.88);
    expect(spaceAge.getPlanetAge("mars")).toEqual(exp);
  });

  it('should return jupiter seconds', function() {
    let expected = now.diff(testDate,'seconds');
    let exp = spaceAge.secondsToYears(expected/11.86);
    expect(spaceAge.getPlanetAge("jupiter")).toEqual(exp);
  });

  it('should return life expectancy female', function() {
    expect(spaceAge.getLifeExpectancy()).toEqual(84);
  });

  it('should return correct planet years remaining female', function() {
    let expected = now.diff(testDate,'seconds');
    let exp = spaceAge.secondsToYears(expected);
    expect(spaceAge.getPlanetYearsRemaining("earth")).toEqual('67');
  });

  it('should return life expectancy male', function() {
    spaceAge = new SpaceAge("1973-05-08","male");
    expect(spaceAge.getLifeExpectancy()).toEqual(70);
    expect(spaceAge.getPlanetYearsRemaining("earth")).toEqual('26');
  });

  it('should return exceeds planet years remaining', function() {
    let testDate2 = "1935-5-14";
    let spaceAge = new SpaceAge(testDate2,"female");
    expect(spaceAge.getPlanetYearsRemaining("earth")).toEqual("Exceeded! ");
  });



});
