"use strict";
const tlou = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plage Tale, Metro`);
    }
};
console.log(tlou.title);
tlou.getSimilars(tlou.title);
