import { moment } from './../node_modules/moment/moment.js';

export class SpaceAge {
  constructor () {
    this.todayDate = moment;
  }

  earthYearsToSeconds(years){
    let seconds = years * 365.25 * 24 * 3600;
    return seconds;
  }

  getDateDiff(birthDate){
    let moment = require('moment');

    let date = moment(birthDate);
    let now = moment();
    let diffSeconds = now.diff(date,'seconds');
    return  diffSeconds;
  }

  getMercuryAge(birthSeconds){
    this.secondsToHuman(birthSeconds);
    return birthSeconds * .24;
  }

  getVenusAge(birthSeconds){
    return birthSeconds * .62;
  }

  getMarsAge(birthSeconds){
    return birthSeconds * 1.88;
  }
  getJupiterAge(birthSeconds){
    return birthSeconds * 11.86;
  }

  secondsToHuman(seconds){
    let moment = require('moment');
    const daysInAYear = 365.25;

    let days = moment.duration(seconds,'seconds').asDays();
    let numYears = days/365.25;
    let numDays = days % 365.25;

    let y = numYears.toFixed();
    let d = numDays.toFixed();
    console.log("DEBUG------Human:yr/days  "+y+" "+d);
    return y;
  }

}//SpaceAge
