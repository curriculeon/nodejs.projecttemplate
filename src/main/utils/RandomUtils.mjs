export function createRandomDouble(min, max) {
    return Math.random() * (max - min) + min;
}

export function createRandomInteger(min, max) {
    return Math.round(createRandomDouble(min, max));
}

export function createRandomCharacter(min, max) {
    return String.fromCharCode(createRandomInteger(min, max));
}

export function createRandomString(length, min, max) {
    let result = "";
    for(let i=0; i<length;i++) {
        result += (createRandomCharacter(min.charCodeAt(0), max.charCodeAt(0)))
    }
    return result;
}

