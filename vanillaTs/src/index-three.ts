//tupels

let data:[boolean, string, string[]] ;

data = [false, "", [""]]

let rgb: [number, number, number];
rgb = [255, 255, 255]



// enums

enum seatChoise {
    AISLE = 53,
    MIDDLE,
    WINDOW
}
const Myseat = seatChoise.AISLE

interface Video {
    id : string,
    duration: number,
    file : string
    uploadedAt : string
}

const vodeo1:Video = {
    id : "1242",
    duration : 43,
    file : "",
    uploadedAt : ""
}

interface user {
  id :  string,
  name : string,
  email : string,
  watchHistory: Video[] 
}

interface subscription {
    id : string, 
    subscriber: user
    channel : user
}
