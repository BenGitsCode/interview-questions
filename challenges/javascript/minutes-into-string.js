// 1441 minutes into " 1 day and 1 minute "
// strip away any zeros i.e. no "0 days 4 hours 1 min" or " 1 day 12 hours 0 minutes"

let findTime = (t) => {
  // 5020 test case
  const times = ['day', 'hour', 'minute']
  let totalHours = Math.floor(t / 60)
  //totalHours = 83
  let minRemain = t % 60 === 0 ? t : t % 60 // log at end
  // minRemain = 40
  if (totalHours > 24) {
    let totalDays = Math.floor(totalHours / 24) // log at end
    // totalDays = 3
    let hoursRemain = totalHours - totalDays * 24
    // hoursRemain = 11
    console.log(`${totalDays} ${times[0]}${totalDays > 1 ? 's' : ''} ${hoursRemain} ${times[1]}${hoursRemain > 1 ? 's' : ''} ${minRemain} ${times[2]} ${minRemain > 1 ? 's' : ''}`)
  } else {
    console.log(`${totalHours} ${times[1]} ${totalHours > 1 ? 's' : ''}${times[2]}${minRemain > 1 ? 's' : ''}`)
  }
}

//works 👍
// findTime(5020)

// interpolation issue
findTime(1441)
findTime(3299)