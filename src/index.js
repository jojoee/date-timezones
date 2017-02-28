// prefix: dtm

var dtmIsES6 = (typeof module !== 'undefined' && module.exports != null) ? true : false;
var dtmMoment;

if (dtmIsES6) {
  dtmMoment = require('moment-timezone');
} else {
  /* eslint-disable */
  dtmMoment = moment;
}

/** @type {Object} Simple date model */
var DtmDate = function(year, month, date, hours, mins, secs, mils) {
  return {
    year: year,
    month: month,
    date: date,
    hours: hours,
    mins: mins,
    secs: secs,
    mils: mils,
  }
};

/**
 * DateTimezones
 *
 * @param {string} timezoneStr
 */
var DateTimezones = function(timezoneStr) {
  if (typeof timezoneStr === 'undefined') timezoneStr = '';
  var current = new Date(),
    currentWithTimezone,
    datem;

  if (timezoneStr !== '') {
    var currentIso = new Date();
    currentIso = currentIso.toISOString();
    currentIso = currentIso.split('.')[0] + 'Z';
    var currentMoment = dtmMoment(currentIso);
    var currentMomentWithTimezone = currentMoment.tz(timezoneStr);

    datem = new DtmDate(
      currentMomentWithTimezone.year(),
      currentMomentWithTimezone.month(),
      currentMomentWithTimezone.date(),
      currentMomentWithTimezone.hours(),
      currentMomentWithTimezone.minutes(),
      currentMomentWithTimezone.seconds(),
      current.getMilliseconds()
    );
  } else {
    datem = new DtmDate(
      current.getFullYear(),
      current.getMonth(),
      current.getDate(),
      current.getHours(),
      current.getMinutes(),
      current.getSeconds(),
      current.getMilliseconds()
    );
  }

  currentWithTimezone = new Date(
    datem.year,
    datem.month,
    datem.date,
    datem.hours,
    datem.mins,
    datem.secs,
    datem.mils
  );

  return currentWithTimezone;
};

if (dtmIsES6) {
  module.exports = DateTimezones;
}
