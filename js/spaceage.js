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
    //let dateStr = moment(birthDate).format('YYYY-MM-DD');
    //let nowStr = moment().format('YYYY-MM-DD');
    //let diffYear = now.diff(date,'years');
    //let diffMos = now.diff(date,'months');
    //let diffDays = now.diff(date,'days');
    let diffSeconds = now.diff(date,'seconds');
    //console.log("DEBUG------YEAR:  "+diffYear);
    //console.log("DEBUG------MOS:   "+diffMos);
    //console.log("DEBUG------Days:  "+diffDays);
    //console.log("DEBUG------Seconds:  "+diffSeconds);

    return  diffSeconds;
  }

}//SpaceAge
