// 1441 minutes into " 1 day and 1 minute "
// strip away any zeros i.e. no "0 days 4 hours 1 min" or " 1 day 12 hours 0 minutes"

let timeData = 1441

// divide into days
// divide into hours
// divide into minutes

// strip away any and all zeros
// interpolate integers into string

function timeIntoDays(timeData) {
  let days = timeData / 60
  console.log(days)

  if (days >= 24 && days < 48) {
    let days = 1
    console.log('1 or more days ', days)
  } else {
    let days = 0
    console.log('less than 1 day', days)
  }
  return days
  // unreachable code with current example
  // console.log(days)
}
// timeIntoDays(timeData)

function timeIntoHours(timeData) {
  let hrs = timeData / 60

  console.log(hrs)
  console.log(hrsTest)
  //   if (condition) {
  //   }
}
timeIntoHours(timeData)

function timeLeft(timeData) {
  //
}
