export class Robot {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getSpeech() {
        return "Hello, I am a Robot."
                .concat("\nMy id is ")
                .concat(this.id)
                .concat("\nMy first name is ")
                .concat(this.firstName)
                .concat("\nMy last name is ")
                .concat(this.lastName);
    }

    speak() {
        console.log(getSpeech())
    }

    toString() {
        return JSON.stringify(this);
    }
}