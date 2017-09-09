import { moment } from './../node_modules/moment/moment.js';

export class SpaceAge {
  constructor (birthDate) {
    this.birthDate = birthDate;
    this.birthSeconds = this.getDateDiff(birthDate);
  }

  // earthYearsToSeconds(years){
  //   let seconds = years * 365.25 * 24 * 3600;
  //   return seconds;
  // }

  getDateDiff(birthDate){
    let moment = require('moment');
    let date = moment(birthDate);
    let now = moment();
    let diffSeconds = now.diff(date,'seconds');
    return  diffSeconds;
  }

  getEarthAge(){
    return this.secondsToYearsDays(this.birthSeconds);
  }

  getMercuryAge(){
    let mercurySeconds = this.birthSeconds/0.24;
    return this.secondsToYearsDays(mercurySeconds);
  }

  getVenusAge(){
    let venusSeconds = this.birthSeconds/0.62;
    return this.secondsToYearsDays(venusSeconds);
  }

  getMarsAge(birthSeconds){
    let marsSeconds = birthSeconds/1.88;
    return this.secondsToYearsDays(marsSeconds);
  }

  getJupiterAge(birthSeconds){
    let jupiterSeconds = birthSeconds/11.86;
    return this.secondsToYearsDays(jupiterSeconds);
  }

  secondsToYearsDays(seconds){
    let moment = require('moment');
    const daysInAYear = 365.25;
    let days = moment.duration(seconds,'seconds').asDays();
    let numYears = days/365.25;
    let numDays = days % 365.25;
    let y = numYears - (numYears % 1);
    let d = numDays.toFixed();
    console.log("DEBUG------Human:yr/days  "+y+" "+d);
    let yearsDays = [y,d];
    return yearsDays;
  }

}//SpaceAge
