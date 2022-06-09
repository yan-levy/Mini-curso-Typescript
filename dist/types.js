"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number 
let total;
total = 0xff0;
//array (type[])
let items;
items = ["foo", "bar"];
let values;
values = [1, 2, 3];
// tuple
let title;
title = [1, "foo", "bar"];
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (anything)
let coisa;
coisa = [1];
// void 
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error("error");
}
// object
let cart;
cart = {
    key: "fi"
};
// Type Inference
let message2 = "mensagem definida";
message2 = "string nova";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
