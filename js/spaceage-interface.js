import { SpaceAge } from './../js/spaceage.js';

$(document).ready(function() {

  $('#birthDate').submit(function(event) {
    event.preventDefault();
    let inputBirthDate = $("input#birthDate").val();
    let inputSex = $("input#sex").val();

    let spaceAge = new SpaceAge(inputBirthDate,inputSex);

    let earthAge = spaceAge.getEarthAge();
    let lifeExp = spaceAge.getLifeExpectancy();
    let mercuryAge = spaceAge.getMercuryAge();
    let venusAge = spaceAge.getVenusAge();
    let marsAge = spaceAge.getMarsAge();
    let jupiterAge = spaceAge.getJupiterAge();

    let earthYrRemain = spaceAge.getPlanetYearsRemaining("Earth");
    let mercuryYrRemain = spaceAge.getPlanetYearsRemaining("Mercury");
    let venusYrRemain = spaceAge.getPlanetYearsRemaining("Venus");
    let marsYrRemain = spaceAge.getPlanetYearsRemaining("Mars");
    let jupiterYrRemain = spaceAge.getPlanetYearsRemaining("Jupiter");


    console.log("DEBUG---->"+inputBirthDate);
    $("#current").text(moment().format('YYYY-MM-DD'));
    $("#inputDate").text(inputBirthDate);
    $("#lifeExp").text(`${lifeExp} years`);

    $("#earthAge").text(`${earthAge[0]} years`);
    $("#earthYrRemain").text(`    ${earthYrRemain} years remaining`);

    $("#mercuryAge").text(`${mercuryAge[0]} years`);
    $("#mercuryYrRemain").text(`    ${mercuryYrRemain} years remaining`);

    $("#venusAge").text(`${venusAge[0]} years`);
    $("#venusYrRemain").text(`    ${venusYrRemain} years remaining`);

    $("#marsAge").text(`${marsAge[0]} years`);
    $("#marsYrRemain").text(`    ${marsYrRemain} years remaining`);

    $("#jupiterAge").text(`${jupiterAge[0]} years`);
    $("#jupiterYrRemain").text(`    ${jupiterYrRemain} years remaining`);
  });
});
