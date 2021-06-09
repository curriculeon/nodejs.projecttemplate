import { Robot } from "../main/Robot.mjs";
import { createRandomInteger } from "../main/utils/RandomUtils.mjs";
import { createRandomString } from "../main/utils/RandomUtils.mjs";
import { capitalizeFirstLetter } from "../main/utils/StringUtils.mjs";


export function testRobotSpeech() {
    console.log("\n\nTesting `new Robot(id,firstName,lastName).getSpeech()`")
    testGetSpeechWithDefinitiveArguments();
    testGetSpeechWithArbitraryArguments();
}


function testGetSpeechWithDefinitiveArguments() {
    // given
    const givenId = 99999999;
    const givenFirstName = "Leon";
    const givenLastName = "Hunter";
    const givenRobot = new Robot(givenId, givenFirstName, givenLastName);
    _test(givenRobot);
}

function testGetSpeechWithArbitraryArguments() {
    // given
    const givenId = createRandomInteger(0, 9999999);
    const givenFirstName = capitalizeFirstLetter(createRandomString(5, 'A', 'Z'));
    const givenLastName = capitalizeFirstLetter(createRandomString(5, 'A', 'Z'));
    const givenRobot = new Robot(givenId, givenFirstName, givenLastName);
    _test(givenRobot);
}

// given
function _test(givenRobot) {
    const expectedSpeech = "Hello, I am a Robot."
        .concat("\nMy id is ")
        .concat(givenRobot.id)
        .concat("\nMy first name is ")
        .concat(givenRobot.firstName)
        .concat("\nMy last name is ")
        .concat(givenRobot.lastName);

    // when
    const actualSpeech = givenRobot.getSpeech();

    // then
    console.log("\n\nGiven Values were\n"
        .concat(givenRobot)
        .concat("\n\nExpected Values were\n")
        .concat(expectedSpeech)
        .concat("\n\nActual Values were\n")
        .concat(actualSpeech))
}