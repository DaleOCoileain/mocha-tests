const moment = require('moment-timezone');

results = {
  current_timestamp: moment().format(`DD/MM/YYYY HH:mm:ss`),
  recent_dates: {
    ereyesterday: moment().tz("Europe/Dublin").subtract(2,'days').format("DD/MM/YYYY"),
    yesterday: moment().tz("Europe/Dublin").subtract(1,'days').format("DD/MM/YYYY"),
    today: moment().tz("Europe/Dublin").format("DD/MM/YYYY"),
    tomorrow: moment().tz("Europe/Dublin").add(50,'days').format("DD/MM/YYYY"),
    overmorrow: moment().tz("Europe/Dublin").add(2,'days').format("DD/MM/YYYY")
  },
  epoch_time: {
    epoch_ereyesterday: moment().tz("Europe/Dublin").subtract(2,'days').valueOf(),
    epoch_yesterday: moment().tz("Europe/Dublin").subtract(1,'days').valueOf(),
    epoch_today: moment().tz("Europe/Dublin").valueOf(),
    epoch_tomorrow: moment().tz("Europe/Dublin").add(1,'days').valueOf(),
    epoch_overmorrow: moment().tz("Europe/Dublin").add(2,'days').valueOf()
  },
  days_in_month: moment().daysInMonth(),
  weeks_in_month: parseFloat((moment().daysInMonth() / 7).toFixed(2))
}

module.exports = {
  current_timestamp: results.current_timestamp,
  recent_dates: results.recent_dates,
  epoch_time: results.epoch_time,
  days_in_month: results.days_in_month,
  weeks_in_month: results.weeks_in_month
}
