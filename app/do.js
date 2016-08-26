var moment = require('moment-timezone');

var now = moment().tz("Asia/Kolkata");

// Awake at 9:00 am.
var awake = moment().tz("Asia/Kolkata");
awake.hours(8).minutes(0).seconds(0);

// Asleep at 11:00 pm.
var asleep = moment().tz("Asia/Kolkata");
asleep.hours(-23).minutes(0).seconds(0);  // maybe? I don't understand time.

var isAsleep = now.isBefore(awake) && now.isAfter(asleep)? 'yes' : 'no';

document.getElementById("time").innerHTML = now.format('hh:mm a');
document.getElementById("answer").innerHTML = isAsleep;
