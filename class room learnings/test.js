// Callbacks
getTotal = numbers => numbers.reduce((sum, num) => sum + num, 0);

getAverage = (numbers, totalCallback) => totalCallback(numbers) / numbers.length;

getResult = average => {
   if (average >= 90) return "A";
    else if (average >= 80) return "B";
    else if (average >= 70) return "C";
    else if (average >= 60) return "D";
    else return "F";
};
//--------------------------------------------------------------------------
calcStatsRest = (totalCb, averageCb, resultCb, ...marks) => {
    if (marks.length === 0) {
        console.log("Please provide your marks.");
        return;
    }

    let total = totalCb(marks);
    let average = averageCb(marks, totalCb);
    let result = resultCb(average);

    console.log(`Total: ${total}`);
    console.log(`Average: ${average}`); // .toFixed(2)
    console.log(`Grade: ${result}`);
};


calcStatsRest(getTotal, getAverage, getResult, 85, 78, 92,100);
console.log("-----------------------------------------");
calcStatsRest(getTotal, getAverage, getResult, 60, 50, 40);
console.log("-----------------------------------------");
calcStatsRest();
