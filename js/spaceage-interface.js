import { SpaceAge } from './../js/spaceage.js';

$(document).ready(function() {

  $('#birthDate').submit(function(event) {
    event.preventDefault();
    let inputBirthDate = $("input#birthDate").val();
    let inputSex = $("input:radio[name=sex]:checked").val();

    let spaceAge = new SpaceAge(inputBirthDate,inputSex);

    let earthAge = spaceAge.getPlanetAge("earth");
    let lifeExp = spaceAge.getLifeExpectancy();

    let mercuryAge = spaceAge.getPlanetAge("mercury");
    let venusAge = spaceAge.getPlanetAge("venus");
    let marsAge = spaceAge.getPlanetAge("mars");
    let jupiterAge = spaceAge.getPlanetAge("jupiter");

    let earthYrRemain = spaceAge.getPlanetYearsRemaining("earth");
    let mercuryYrRemain = spaceAge.getPlanetYearsRemaining("mercury");
    let venusYrRemain = spaceAge.getPlanetYearsRemaining("venus");
    let marsYrRemain = spaceAge.getPlanetYearsRemaining("mars");
    let jupiterYrRemain = spaceAge.getPlanetYearsRemaining("jupiter");

    console.log("DEBUG---->"+inputBirthDate);
    $("#current").text(moment().format('YYYY-MM-DD'));
    $("#inputDate").text(inputBirthDate);
    $("#lifeExp").text(`${lifeExp} years`);

    $("#earthAge").text(`${earthAge} years`);
    $("#earthYrRemain").text(`    ${earthYrRemain} years remaining`);

    $("#mercuryAge").text(`${mercuryAge} years`);
    $("#mercuryYrRemain").text(`    ${mercuryYrRemain} years remaining`);

    $("#venusAge").text(`${venusAge} years`);
    $("#venusYrRemain").text(`    ${venusYrRemain} years remaining`);

    $("#marsAge").text(`${marsAge} years`);
    $("#marsYrRemain").text(`    ${marsYrRemain} years remaining`);

    $("#jupiterAge").text(`${jupiterAge} years`);
    $("#jupiterYrRemain").text(`    ${jupiterYrRemain} years remaining`);
  });
});
