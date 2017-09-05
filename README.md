# date-timezones

[![Travis](https://img.shields.io/travis/jojoee/date-timezones.svg)](https://travis-ci.org/jojoee/date-timezones)
[![Codecov](https://img.shields.io/codecov/c/github/jojoee/date-timezones.svg)](https://codecov.io/github/jojoee/date-timezones)
[![Download - Github All Releases](https://img.shields.io/github/downloads/jojoee/date-timezones/total.svg)]()
[![Download - npm](https://img.shields.io/npm/dt/date-timezones.svg)](http://npm-stat.com/charts.html?package=date-timezones)
[![Version - npm](https://img.shields.io/npm/v/date-timezones.svg)](https://www.npmjs.com/package/date-timezones)
[![Version - Bower](https://img.shields.io/bower/v/date-timezones.svg)](https://bower.io/search/?q=date-timezones)
[![License - Bower](https://img.shields.io/bower/l/date-timezones.svg)](http://opensource.org/licenses/MIT)
[![License - npm](https://img.shields.io/npm/l/date-timezones.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Return native "Date" object with specific timezone (e.g. new DateTimezones('Australia/Sydney'))

## Installation

```
// npm
npm install date-timezones

// Bower
bower install date-timezones
// then see this example file
// https://github.com/jojoee/date-timezones/blob/master/index.html
```

## Example usage

```javascript
// Tue Feb 28 2017 00:20:47 GMT+0700 (SE Asia Standard Time)
var local = DateTimezones();

// Tue Feb 28 2017 00:20:47 GMT+0700 (SE Asia Standard Time)
var bangkok = DateTimezones('Asia/Bangkok');

// Tue Feb 28 2017 01:20:47 GMT+0700 (SE Asia Standard Time)
var shanghai = DateTimezones('Asia/Shanghai');

// Mon Feb 27 2017 17:20:47 GMT+0700 (SE Asia Standard Time)
var london = DateTimezones('Europe/London');
```

## Future update
- [x] Test
- [x] Code coverage
- [ ] Demo page
- [ ] Screenshot
- [x] Commit by `npm run commit` only
- [ ] Increase code coverage percentage
- [x] ESLint

## Contribute for owner

```
$ npm install -g semantic-release-cli
$ semantic-release-cli setup

Using above command to setup "semantic-release"
```

## Reference
- [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
- [The World Clock](https://www.timeanddate.com/worldclock/)
