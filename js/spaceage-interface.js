import { SpaceAge } from './../js/spaceage.js';

$(document).ready(function() {

  $('#birthDate').submit(function(event) {
    event.preventDefault();
    let inputBirthDate = $("input#birthDate").val();
    let spaceAge = new SpaceAge(inputBirthDate);
    let earthAge = spaceAge.getEarthAge();
    let mercuryAge = spaceAge.getMercuryAge();
    let venusAge = spaceAge.getVenusAge();
    let marsAge = spaceAge.getMarsAge();
    let jupiterAge = spaceAge.getJupiterAge();


    console.log("DEBUG---->"+inputBirthDate);
    $("#current").text(moment().format('YYYY-MM-DD'));
    $("#inputDate").text(inputBirthDate);
    $("#earthAge").text(`${earthAge[0]} years and ${earthAge[1]} days.`);
    $("#mercuryAge").text(`${mercuryAge[0]} years and ${mercuryAge[1]} days.`);
    $("#venusAge").text(`${venusAge[0]} years and ${venusAge[1]} days.`);
    $("#marsAge").text(`${marsAge[0]} years and ${marsAge[1]} days.`);
    $("#jupiterAge").text(`${jupiterAge[0]} years and ${jupiterAge[1]} days.`);
  });
});
