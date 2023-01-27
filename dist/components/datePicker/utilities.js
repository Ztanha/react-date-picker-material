"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysInMonth = daysInMonth;
exports.getMonthStartDay = getMonthStartDay;
exports.getTimestampWithoutTime = getTimestampWithoutTime;
exports.hexToRGB = hexToRGB;
exports.monthName = monthName;
exports.range = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.parse-int.js");
function daysInMonth(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth();
  const year = date.getFullYear();
  const lastDay = new Date(year, month + 1, 0);
  // Get the last day of the month (28-31)
  return lastDay.getDate();
}
function getMonthStartDay(timestamp) {
  let date = new Date(timestamp);
  date.setDate(1);
  return date.getUTCDay(); // get the day of the week (0-6, where 0 is Sunday)
}

const range = (start, end) => [...Array(end - start + 1).keys()].map(x => x + start);
exports.range = range;
function hexToRGB(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16)) : null;
}
function monthName(number) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[number];
}
function getTimestampWithoutTime(timestamp) {
  let date = new Date(timestamp);
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}