const readline = require("readline");

function meterToKilometer(meter) {
  return meter / 1000;
}
function kilometerToMeter(kilometer) {
  return kilometer * 1000;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter your distance:", function (distanceInput) {
  const distance = parseFloat(distanceInput);
  rl.question("Enter your unit (M or K):", function (unitInput) {
    const unit = unitInput.trim().toLocaleUpperCase();
    let result;
    if (unit === "M") {
      result = meterToKilometer(distance);
      console.log(`${distance}M is ${result.toFixed(2)}K`);
    } else if (unit === "K") {
      result = kilometerToMeter(distance);
      console.log(`${distance}K is ${result.toFixed(2)}M`);
    } else {
      console.log(`Invalid unit! Please enter M or K`);
    }
    rl.close();
  });
});
