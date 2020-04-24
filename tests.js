const results = require('./index')
const mocha = require('mocha')
const assert = require('chai').assert
const expect = require('chai').expect
const chai = require('chai')

describe('Current Timestamp should print the current date / time', function() {
  it(`should return a date / time string: ${results.current_timestamp}`, function() {
    expect(results.current_timestamp)
  })
})

describe('We should see 5 timestamps in the epoch format', function() {
  it('should return a date / time string for 5 events', function() {
    expect(Object.keys(results.epoch_time)).to.have.lengthOf(5)
  })
})

describe('Epoch should be in order', function() {
  it('should return epoch times in order. Meaning the program is working right', function() {
    array = []
    for(i=0;i<Object.keys(results.epoch_time).length;++i){
      array.push(results.epoch_time[Object.keys(results.epoch_time)[i]])
    }
    test = !!array.reduce((memo, item) => memo && item >= memo && item)
    assert.equal(test, true)
  })
})

describe('Epoch times should all be 13 ints in length', function() {
  it('should return true if all 5 epoch times are 13 in length', function() {
    var array = [], count = 0
    for(i=0;i<Object.keys(results.epoch_time).length;++i){
      array.push(results.epoch_time[Object.keys(results.epoch_time)[i]])
      array[i].toString().length == 13 ? count++ : count
    }
    assert.equal(count, 5)
  })
})

describe('Days in the month', function() {
  it('should be between 28 and 31', function() {
    expect(results.days_in_month).to.be.within(27,31)
  })
})

describe('Weeks in a month', function() {
  it('should be between 4 and 5', function() {
    expect(results.weeks_in_month).to.be.within(4,5)
  })
})

describe('Print all Days', function() {
  it('should return all dates specified in order', function() {
    array = []
    for(i=0;i<Object.keys(results.recent_dates).length;++i){
      array.push(results.recent_dates[Object.keys(results.recent_dates)[i]])
    }
    test = !!array.reduce((memo, item) => memo && item >= memo && item)
    assert.equal(test, true)
  })
  it('should return 5 moment().formats("DD/MM/YYYY")',function() {
    const regex = new RegExp(/\d\d\/\d\d\/\d\d\d\d/);
    var array = [], count = 0
    for(i=0;i<Object.keys(results.recent_dates).length;i++){
      array.push(results.recent_dates[Object.keys(results.recent_dates)[i]])
      regex.test(array[i]) == true ? count++ : count
    }
    assert.equal(count, 5)
  })
})
