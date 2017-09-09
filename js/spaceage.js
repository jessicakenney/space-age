import { moment } from './../node_modules/moment/moment.js';

export class SpaceAge {
  constructor (birthDate,sex) {
    this.birthDate = birthDate;
    this.birthSeconds = this.getDateDiff(birthDate);
    this.sex = sex;
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

  getPlanetYearsRemaining(planet){
    let yrsleft;
    let getAge = "get"+planet+"Age";
    console.log("   -->"+getAge);
    let foo = this[getAge]();
    console.log("  foo -->"+foo);
    // if (`this.get${planet}Age` >= this.getLifeExpectancy) {
    if ( foo >= this.getLifeExpectancy) {
      yrsleft = "exceeded";
    } else {
      //yrsleft = (this.getLifeExpectancy() - `this.get${planet}Age`()).toFixed(0);
      yrsleft = this.getLifeExpectancy() - foo;
    }
    console.log("DEBUG---getLifeExp>"+this.getLifeExpectancy());
    console.log("DEBUG---getPlanetAge    >"+foo);
    console.log("DEBUG---yrsLeft>"+yrsleft);
    return yrsleft;
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
    let marsSeconds = this.birthSeconds/1.88;
    console.log("DEBUG------MARS seconds  "+marsSeconds);
    return this.secondsToYearsDays(marsSeconds);
  }

  getJupiterAge(birthSeconds){
    let jupiterSeconds = this.birthSeconds/11.86;
    console.log("DEBUG------JUPITER seconds  "+jupiterSeconds);
    return this.secondsToYearsDays(jupiterSeconds);
  }

  secondsToYearsDays(seconds){
    let moment = require('moment');
    const daysInAYear = 365.25;
    let days = moment.duration(seconds,'seconds').asDays();
    let numYears = days/365.25;
    let y = numYears.toFixed(2);
    console.log("DEBUG------Human:yr/days  "+y);
    let yearsDays = [y];
    return yearsDays;
  }

  getLifeExpectancy(variable){
    //include region and birthyear
    let lifeEx;
    if (variable = "female"){
       lifeEx = 75;
    } else if (variable = "male"){
       lifeEx = 70;
    }
    return lifeEx;
  }

}//SpaceAge
