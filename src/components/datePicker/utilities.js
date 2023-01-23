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
export {daysInMonth,getMonthStartDay}