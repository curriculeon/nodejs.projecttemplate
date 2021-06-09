import { Robot } from "../main/Robot.mjs";
import { createRandomInteger } from "../main/utils/RandomUtils.mjs";
import { createRandomString } from "../main/utils/RandomUtils.mjs";
import { capitalizeFirstLetter } from "../main/utils/StringUtils.mjs";



export function testRobotConstructor() {
    console.log("\n\nTesting `new Robot(id,firstName,lastName)`")
    testConstructorWithDefinitiveArguments();
    testConstructorWithArbitraryArguments();
}


function testConstructorWithDefinitiveArguments() {
    // given
    const expectedId = 99999999;
    const expectedFirstName = "Leon";
    const expectedLastName = "Hunter";
    _test(expectedId, expectedFirstName, expectedLastName);
}

function testConstructorWithArbitraryArguments() {
    // given
    const expectedId = createRandomInteger(0, 99999999);
    const expectedFirstName = capitalizeFirstLetter(createRandomString(5, 'A', 'Z'));
    const expectedLastName = capitalizeFirstLetter(createRandomString(5, 'A', 'Z'));
    _test(expectedId, expectedFirstName, expectedLastName);
}

// given
function _test(expectedId, expectedFirstName, expectedLastName) {
    const robot = new Robot(expectedId, expectedFirstName, expectedLastName);

    // when
    const actualId = robot.id;
    const acutalFirstName = robot.firstName;
    const actualLastName = robot.lastName;

    // then
    console.log("Expected Values were\n\t"
        .concat(JSON.stringify({
            "id":expectedId,
            "firstName":expectedFirstName,
            "lastName":expectedLastName
        }))
        .concat("\nActual Values were\n\t")
        .concat(robot))   
}