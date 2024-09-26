"use strict";
const greet = (name) => {
    console.log("hello" + " " + name);
};
function loginUser(name, email, isPaid) {
    console.log(`hey ${name} you are logged in succefully`);
}
function genrateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}
const state = ["indor", "nagput", "mumbai"];
state.map((city) => {
    return city;
});
function fail() {
    throw new Error("something went wrong");
}
greet("chand");
