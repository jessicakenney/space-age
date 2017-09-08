import { SpaceAge } from './../js/spaceage.js';

describe('SpaceAge', function() {

  it('should return number of seconds in a year ', function() {
    var spaceAge = new SpaceAge;
    expect(spaceAge.earthYearsToSeconds(5)).toEqual(157788000);
  });

});
