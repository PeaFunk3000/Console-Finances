// Mock Data - to work with smaller, easy-to-check dataset
var mockFinances = [
    ['Jan-2010', 800],
    ['Feb-2010', 900],
    ['Mar-2010', 700],
    ['Apr-2010', 1000]
]

var total = 0
var least = ["", 99999999]
var greatest = ["", 0]
var change = []

// console.log((mockFinances[0][1]) + (mockFinances[1][1]) + (mockFinances[2][1]))

for (let index = 0; index < mockFinances.length; index++) {
    // total = total + mockFinances[index][1] IS THE BELOW:
    total += mockFinances[index][1];
    if (index >= 1) {
        change.push([mockFinances[index][0], mockFinances[index][1] - mockFinances[index - 1][1]])
    }
}



// change.forEach(element => {
//     if (greatest[1] < element[1]) {
//         greatest[0] = element[0], greatest[1] = element [1];
//     }
// });

function getGreatest(element) {
    if (greatest[1] < element[1]) {
        greatest[0] = element[0], greatest[1] = element[1];
    }
}

function getLeast(element) {
    if (least[1] > element[1]) {
        least[0] = element[0], least[1] = element[1];
    }
}

change.forEach(getGreatest)
change.forEach(getLeast)


function averageChange(changeArray) {
    var totalChange = 0;
    changeArray.forEach(element => {
        totalChange += element[1];
    })
    var AVGchange = totalChange / changeArray.length;
    return AVGchange;
}


var changeAVG = averageChange(change)

const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };


// for (let index = 0; index < change.length; index++) {
//     element = change[index]
//     console.log(element[0] + element[1]);
//     if (greatest[1] < element[1]) {
//         greatest[0] = element[0];
//         greatest[1] = element[1];
//     }


console.log (total)
console.log (greatest)
console.log (least)
console.log (changeAVG)



console.log ("Financial Analysis" + "\n Total Months: " + mockFinances.length + "\n Total: $" + total + "\n Average Change: $" + (roundToHundredth(changeAVG)) + "\n Greatest Increase in Profits: " + greatest[0] + "($" + greatest[1] + ")" + "\n Greatest Decrease in Profits: " + least[0] + "($" + least[1] + ")")