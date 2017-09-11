import { moment } from './../node_modules/moment/moment.js';

export class SpaceAge {
  constructor (birthDate,sex) {
    this.birthDate = birthDate;
    this.sex = sex;
    this.birthSeconds = this.getDateDiff(birthDate);
  }

  getDateDiff(){
    let moment = require('moment');
    let date = moment(this.birthDate);
    let now = moment();
    let diffSeconds = now.diff(date,'seconds');
    return  diffSeconds;
  }

  getPlanetYearsRemaining(planet){
    let yrsleft;
    let planetAge = this.getPlanetAge(planet);
    console.log("  planetAge -->"+planetAge+" "+planet);
    if ( planetAge >= this.getLifeExpectancy()) {
      yrsleft = "Exceeded! ";
    } else {
      yrsleft = (this.getLifeExpectancy() - planetAge).toFixed(0);
    }
    console.log("DEBUG---getLifeExp>"+this.getLifeExpectancy());
    console.log("DEBUG---getPlanetAge    >"+planetAge);
    console.log("DEBUG---yrsLeft>"+yrsleft);
    return yrsleft;
  }

  getPlanetConst(planet) {
    const planetMap = {};
    planetMap["earth"] = 1;
    planetMap["mercury"] = 0.24;
    planetMap["venus"] = 0.62;
    planetMap["mars"] = 1.88;
    planetMap["jupiter"] = 11.86;
    planetMap["daysInAYear"] = 365.25;
    return planetMap[planet];
  }

  getPlanetAge(planet){
    console.log("PLANET AGE:  "+planet+" "+this.birthSeconds);
    let planetConst  = this.getPlanetConst(planet);
    return this.secondsToYears(this.birthSeconds/planetConst);
  }

  secondsToYears(seconds){
    let moment = require('moment');
    const daysInAYear = 365.25;
    let days = moment.duration(seconds,'seconds').asDays();
    let years = (days/this.getPlanetConst("daysInAYear")).toFixed(2);
    return years;
  }

  getLifeExpectancy(){
    // Based on decade born and sex
    // Resource:
    //https://www.elderweb.com/book/appendix/1900-2000-changes-life-expectancy-united-states/
    let moment = require('moment');
    let birthYear = moment(this.birthDate).format('YYYY');
    console.log("DEBUG____>LE YEAR"+birthYear);
    console.log("DEBUG____>LE SEX"+this.sex);
    let lifeEx;
    let isFemale = 0;
    let isMale = 0;
    if (this.sex === "female") {
      isFemale = 1;
    } else if (this.sex === "male") {
      isMale = 1;
    }
     switch (true){
       case (1900 <= birthYear && birthYear < 1940):
        lifeEx = (isFemale * 61)  + (isMale * 54);
        break;
       case (1940 <= birthYear && birthYear < 1950):
        lifeEx = (isFemale * 70)  + (isMale * 65);
        break;
       case (1950 <= birthYear && birthYear < 1960):
        lifeEx = (isFemale * 73)  + (isMale * 67 );
        break;
       case (1960 <= birthYear && birthYear < 1970):
        lifeEx = (isFemale * 75)  + (isMale * 68 );
        break;
       case (1970 <= birthYear && birthYear < 1980):
        lifeEx = (isFemale * 77 )  + (isMale * 70 );
        break;
       case (1980 <= birthYear && birthYear < 1990):
        lifeEx = (isFemale * 79 )  + (isMale * 72 );
        break;
       case (1990 <= birthYear && birthYear < 2000):
        lifeEx = (isFemale * 80 )  + (isMale * 74 );
        break;
       case (2000 <= birthYear && birthYear < 2010):
        lifeEx = (isFemale * 84 )  + (isMale * 79 );
        break;
       case (2010 <= birthYear && birthYear < 2020):
        lifeEx = (isFemale * 87 )  + (isMale * 84 );
        break;
       default:
        lifeEx = 72;
     }
    return lifeEx;
  }

}//SpaceAge
