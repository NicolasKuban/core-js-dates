/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 *
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(date) {
  return Date.parse(date);
}
// a = '01 Jan 1970 00:00:00 UTC' // => 0
// a = '04 Dec 1995 00:12:00 UTC' // => 818035920000
// console.log(dateToTimestamp(a))

/**
 * Returns the time in hh:mm:ss format from the received date.
 *
 * @param {Date} date - date.
 * @return {string} time in hh:mm:ss format.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
// console.log(getTime(new Date(2023, 5, 1, 8, 20, 55))) //  => '08:20:55'
// console.log(getTime(new Date(2015, 10, 20, 23, 15, 1))) // => '23:15:01'

/**
 * Returns the name of the day of the week for a given date string.
 *
 * @param {string} date - date and time.
 * @return {string} the name of the day of the week
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(date) {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][new Date(date).getDay()];
}

// console.log(getDayName('01 Jan 1970 00:00:00 UTC')) // => 'Thursday'
// console.log(getDayName('03 Dec 1995 00:12:00 UTC')) // => 'Sunday'
// console.log(getDayName('2024-01-30T00:00:00.000Z')) // => 'Tuesday'

/**
 * Returns the date of the next Friday from a given date.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  date.setDate(date.getDate() + ((5 + 7 - date.getDay()) % 7 || 7));
  return date;
}
// console.log(getNextFriday(new Date('2024-02-03T00:00:00Z'))) //  => Date('2024-02-09T00:00:00Z') + 6
// console.log(getNextFriday(new Date('2024-02-13T00:00:00Z'))) //  => Date('2024-02-16T00:00:00Z') + 3
// console.log(getNextFriday(new Date('2024-02-16T00:00:00Z'))) //  => Date('2024-02-23T00:00:00Z') + 7

/**
 * Returns the number of days in a specified month and year.
 *
 * @param {number} month - The month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The year as a four-digit number.
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */
function getCountDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  return date.getDate();
}

/**
 * Returns the total number of days between two dates, including both the start and end dates.
 *
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  return 1 + (end - start) / (24 * 60 * 60 * 1000);
}
// console.log(getCountDaysOnPeriod('2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z')) //  => 2
// console.log(getCountDaysOnPeriod('2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z')) //  => 12

/**
 * Returns true if a given date is within a specified range, including both the start and end dates.
 *
 * @typedef {{
 * start: string, // The start date in ISO 8601 format (e.g., 'YYYY-MM-DD').
 * end: string    // The end date in ISO 8601 format.
 * }} DatePeriod
 *
 * @param {string} date - The date to check, in ISO 8601 format.
 * @param {DatePeriod} period - The period to check against.
 * @return {boolean} - True if the date is within the range, false otherwise.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(date, period) {
  function getDateISO(str) {
    return new Date(Date.parse(str));
  }
  return (
    getDateISO(date) >= getDateISO(period.start) &&
    getDateISO(date) <= getDateISO(period.end)
  );
}
// console.log(isDateInPeriod('2024-02-01', { start: '2024-02-02', end: '2024-03-02' })) // => false
// console.log(isDateInPeriod('2024-02-02', { start: '2024-02-02', end: '2024-03-02' })) // => true
// console.log(isDateInPeriod('2024-02-10', { start: '2024-02-02', end: '2024-03-02' })) // => true

/**
 * Returns the date formatted in 'M/D/YYYY, hh:mm:ss a'.
 *
 * @param {string} date - The date to be formatted, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ss.sssZ').
 * @return {string} - The date formatted in 'Month/Day/Year, Hour:Minute:Second AM/PM'.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
// function formatDate(date) {
//   const d = new Date(Date.parse(date));
//   return d.toLocaleString('en-US', { timeZone: 'UTC' });
// }
// function formatDate(date) {
//   const shift = new Date().getTimezoneOffset();
//   return new Date(new Date(date).setMinutes(shift)).toLocaleString('en-US');
// }
function formatDate(date) {
  const current = new Date(date);
  const m = current.getUTCMonth() + 1;
  const d = current.getUTCDate();
  const yyyy = current.getUTCFullYear();
  const hh = current.getUTCHours();
  const mm = String(current.getUTCMinutes()).padStart(2, '0');
  const ss = String(current.getUTCSeconds()).padStart(2, '0');
  const halfDay = hh > 11 ? 'PM' : 'AM';
  return `${m}/${d}/${yyyy}, ${hh % 13}:${mm}:${ss} ${halfDay}`;
}
// console.log(formatDate('2024-02-01T15:00:00.000Z')) // => '2/1/2024, 3:00:00 PM'
// console.log(formatDate('1999-01-05T02:20:00.000Z')) // => '1/5/1999, 2:20:00 AM'
// console.log(formatDate('2010-12-15T22:59:00.000Z')) // => '12/15/2010, 10:59:00 PM'

/**
 * Returns the total number of weekend days (Saturdays and Sundays) in a specified month and year.
 *
 * @param {number} month - The source month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The source year as a four-digit number.
 * @return {number} - The total count of weekend days in the month.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(month, year) {
  const a = (new Date(year, month - 1).getDay() + 6) % 7;
  const c = new Date(year, month, 0).getDate();
  let result = 8;
  result += (a > 2 && c > 30) || (a > 3 && c > 29) ? 1 : 0;
  result += a === 4 && c === 31 ? 1 : 0;
  result += a === 5 && c > 29 ? 1 : 0;
  return result;
}
// console.log(getCountWeekendsInMonth(5, 2022)) // => 9
// console.log(getCountWeekendsInMonth(12, 2023)) // => 10
// console.log(getCountWeekendsInMonth(1, 2024)) // => 8
// console.log(getCountWeekendsInMonth(7, 2023)) // => 10
// console.log(getCountWeekendsInMonth(6, 2023)) // => 8

/**
 * Returns the week number of the year for a given date.
 * The first week is the one that falls on January 1.
 *
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const days = (date - start) / (24 * 60 * 60 * 1000);
  let result = 1 + Math.floor(days / 7);
  result += start.getDay() > 4 || start.getDay() === 0 ? 1 : 0;
  return result;
}

// console.log(getWeekNumberByDate(new Date(2024, 0, 3))) // => 1
// console.log(getWeekNumberByDate(new Date(2024, 0, 31))) // => 5
// console.log(getWeekNumberByDate(new Date(2024, 1, 23))) // => 8
// console.log(getWeekNumberByDate(new Date(2023, 1, 23))) // => 9
// console.log(getWeekNumberByDate(new Date(2022, 2, 22))) //, 13
// console.log(getWeekNumberByDate(new Date(2021, 3, 21))) //, 17);
// console.log(getWeekNumberByDate(new Date(2020, 4, 20))) //, 21);
// console.log(getWeekNumberByDate(new Date(2019, 5, 23))) //, 25);
// console.log(getWeekNumberByDate(new Date(2018, 6, 22))) //, 29);
// console.log(getWeekNumberByDate(new Date(2017, 7, 21))) //, 35);
// console.log(getWeekNumberByDate(new Date(2016, 8, 20))) //, 39);
// console.log(getWeekNumberByDate(new Date(2015, 9, 23))) //, 43);
// console.log(getWeekNumberByDate(new Date(1950, 10, 22))) //, 48);

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 *
 * @param {Date} date - The starting date to search from.
 * @return {Date} - The date of the next Friday the 13th.
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(date) {
  let result =
    date.getDate() < 13
      ? new Date(date.getFullYear(), date.getMonth(), 13)
      : date;
  while (!(result.getDay() === 5 && result.getDate() === 13)) {
    result = new Date(result.getFullYear(), result.getMonth() + 1, 13);
  }
  return result;
}

// console.log(getNextFridayThe13th(new Date(2024, 0, 13))) // => Date(2024, 8, 13)
// console.log(getNextFridayThe13th(new Date(2023, 1, 1))) // => Date(2023, 9, 13)
// console.log(getNextFridayThe13th(new Date(2024, 0, 1))) // new Date(2024, 8, 13)
// console.log(getNextFridayThe13th(new Date(2023, 0, 1))) // new Date(2023, 0, 13)
// console.log(getNextFridayThe13th(new Date(2022, 0, 1))) // new Date(2022, 4, 13)
// console.log(getNextFridayThe13th(new Date(2021, 0, 1))) // new Date(2021, 7, 13)

/**
 * Returns the quarter of the year for a given date.
 *
 * @param {Date} date - The date for which to find the quarter.
 * @return {number} - The quarter of the year (1-4).
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(date) {
  return Math.floor(date.getMonth() / 3) + 1;
}

// console.log(getQuarter(new Date(2024, 1, 13))) // => 1
// console.log(getQuarter(new Date(2024, 5, 1))) // => 2
// console.log(getQuarter(new Date(2024, 11, 10))) // => 4

/**
 * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
 * The start and end dates of the period are inclusive.
 *
 * @typedef {{
 * start: string, // The start date in 'DD-MM-YYYY' format.
 * end: string    // The end date in 'DD-MM-YYYY' format.
 * }} DatePeriod
 *
 * @param {DatePeriod} period - The start and end dates of the period.
 * @param {number} countWorkDays - The number of consecutive working days.
 * @param {number} countOffDays - The number of consecutive days off.
 * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */
function getWorkSchedule(period, countWorkDays, countOffDays) {
  function getDate(str) {
    const arr = str.split('-');
    return new Date(arr[2], arr[1] - 1, arr[0]);
  }
  function getString(date) {
    return date.toLocaleDateString().replace(/\./g, '-');
  }
  let current = getDate(period.start);
  const end = getDate(period.end);
  let workDay = countWorkDays;
  let offDay = countOffDays;
  const schedule = [];
  while (end >= current) {
    if (workDay) {
      workDay -= 1;
      schedule.push(current);
    } else {
      offDay -= 1;
    }
    if (!workDay && !offDay) {
      workDay = countWorkDays;
      offDay = countOffDays;
    }
    current = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate() + 1
    );
  }
  return schedule.map((value) => getString(value));
}
// console.log(getWorkSchedule({ start: '01-01-2024', end: '15-01-2024' }, 1, 3))
// //  => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
// console.log(getWorkSchedule({ start: '01-01-2024', end: '10-01-2024' }, 1, 1))
// //  => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
// console.log(getWorkSchedule({ start: '01-01-2024', end: '29-02-2024' }, 2, 2)),
// console.log(getWorkSchedule({ start: '01-01-2024', end: '31-03-2024' }, 3, 2)),

/**
 * Determines whether the year in the provided date is a leap year.
 * A leap year is a year divisible by 4, but not by 100, unless it is also divisible by 400.
 *
 * @param {Date} date - The date from which the year will be checked.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
// console.log(isLeapYear(new Date(2024, 2, 1))) // => true
// console.log(isLeapYear(new Date(2022, 2, 1))) // => false
// console.log(isLeapYear(new Date(1900, 0, 1))) // => false

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
