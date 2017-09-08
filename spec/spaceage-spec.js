import { SpaceAge } from './../js/spaceage.js';

describe('SpaceAge', function() {

  it('should return number of seconds in a year ', function() {
    let spaceAge = new SpaceAge;
    expect(spaceAge.earthYearsToSeconds(5)).toEqual(157788000);
  });

  it('should return date diff ', function() {
    let moment = require('moment');
    let spaceAge = new SpaceAge;
    let testDate = "2000-04-08";
    let date = moment(testDate);
    let now = moment();
    let expected = now.diff(testDate,'seconds');
    expect(spaceAge.getDateDiff(testDate)).toEqual(expected);
  });


});
