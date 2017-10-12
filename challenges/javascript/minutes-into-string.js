// 1441 minutes into " 1 day and 1 minute "
// strip away any zeros i.e. no "0 days 4 hours 1 min" or " 1 day 12 hours 0 minutes"

let findTime = (t) => {
  let display = [];
  let totalHours = Math.floor(t / 60);
  let totalDays = Math.floor(totalHours / 24);
  let hoursRemain = totalHours - totalDays * 24;
  let minRemain = t % 60 === 0 ? t : t % 60; // log at end
  if (totalHours >= 24) {
    let label = totalDays > 1 ? 'Days' : "Day"
    display.push(totalDays, label)
  }
  if (hoursRemain >= 1) {
    let label = totalHours > 1 ? 'Hours' : "Hour"
    display.push(hoursRemain, label)
  }
  if (minRemain >= 1) {
    let label = minRemain > 1 ? 'Minutes' : "Minute"
    display.push(minRemain, label)
  }
  display = display.join(' ')
  console.log(display)
};

//works 👍
// findTime(5020)

// interpolation issues
findTime(1441)
findTime(3299)