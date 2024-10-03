"use strict";
//tupels
let data;
data = [false, "", [""]];
let rgb;
rgb = [255, 255, 255];
// enums
var seatChoise;
(function (seatChoise) {
    seatChoise[seatChoise["AISLE"] = 53] = "AISLE";
    seatChoise[seatChoise["MIDDLE"] = 54] = "MIDDLE";
    seatChoise[seatChoise["WINDOW"] = 55] = "WINDOW";
})(seatChoise || (seatChoise = {}));
const Myseat = seatChoise.AISLE;
const vodeo1 = {
    id: "1242",
    duration: 43,
    file: "",
    uploadedAt: ""
};
