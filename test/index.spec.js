var expect    = require('chai').expect;
var DateTimezones = require('../src/index.js');

describe('date-timezones', function() {  
  var currentDate,
    currentDateSeconds,
    timezones;

  before(function() {
    // note
    // - diff is a difference time if it compare with Bangkok
    timezones = [
      {
        // UTC+7
        name: 'bangkok',
        TZ: 'Asia/Bangkok',
        diff: 0,
      },
      {
        // UTC+8
        // forward 1 hr
        name: 'shanghai',
        TZ: 'Asia/Shanghai',
        diff: 3600,
      },
      {
        // UTC+1
        // behind 6 hrs
        name: 'london',
        TZ: 'Europe/London',
        diff: -21600,
      }
    ];
  });

  it('should be local', function() {
    var dateTimezones = new DateTimezones();
    dateTimezonesSeconds = Math.floor(dateTimezones.getTime() / 1000);

    currentDate = new Date();
    currentDateSeconds = Math.floor(currentDate.getTime() / 1000);

    expect(dateTimezonesSeconds).to.equal(currentDateSeconds);
  });

  it('should be timezoned', function() {
    // let currentDate equal bkk time
    currentDate = new DateTimezones('Asia/Bangkok');
    currentDateSeconds = Math.floor(currentDate.getTime() / 1000);

    for (var i = 0; i < timezones.length; i++) {
      var date = new DateTimezones(timezones[i].TZ);
      var dateSeconds = Math.floor(date.getTime() / 1000);

      expect(dateSeconds - currentDateSeconds).to.equal(timezones[i].diff)
    }
  });
});
