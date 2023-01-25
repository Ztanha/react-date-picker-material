function daysInMonth(timestamp){
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

function hexToRGB(hex){
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}
function monthName(number) {
    const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[number]
}
function getTimestampWithoutTime(timestamp) {
    let date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
export {daysInMonth,getMonthStartDay,range,hexToRGB,monthName,getTimestampWithoutTime}