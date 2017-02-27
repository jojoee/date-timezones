var expect    = require('chai').expect;
var DateTimezones = require('../src/index.js');

describe('date-timezones', function() {  
  var currentDate,
    currentDateTs,
    timezones;

  before(function() {
    // note
    // - diff is a difference time if it compare with Bangkok
    timezones = [
      {
        name: 'bangkok',
        TZ: 'Asia/Bangkok',
        diff: 0,
      },
      {
        name: 'shanghai',
        TZ: 'Asia/Shanghai',
        diff: 3600, // +1hr
      },
      {
        name: 'london',
        TZ: 'Europe/London',
        diff: -25200, // -7hrs
      }
    ];
  });

  it('should be local', function() {
    var dateTimezones = new DateTimezones();
    var dateTimezonesTs = dateTimezones.getTime();

    currentDate = new Date();
    currentDateTs = currentDate.getTime();    

    expect(dateTimezonesTs).to.equal(currentDateTs);
  });

  it('should be timezoned', function() {
    // let currentDate equal bkk time
    currentDate = new DateTimezones('Asia/Bangkok');
    currentDateTs = Math.floor(currentDate.getTime() / 1000);    

    for (var i = 0; i < timezones.length; i++) {
      var date = new DateTimezones(timezones[i].TZ);
      var dateTs = Math.floor(date.getTime() / 1000); // ignore, less then second

      expect(dateTs - currentDateTs).to.equal(timezones[i].diff)
    }
  });
});
