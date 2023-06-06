"use strict";

var hello = 'Hello';
var getMessage = function getMessage() {
  return "".concat(hello, " World");
};
document.querySelector('.output').innerHTML = getMessage;