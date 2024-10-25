setInterval(
    () => console.log(`This function will be executed every 2 second. `),
    2000
);

// setTimeout 
setTimeout(function () {
    console.log(`This function will be executed ofter 3 second`)
}, 3000);

// Stop the interval after 10 second
const intervalId = setInterval(function () {
    console.log(`ThiS function is being executed at the in interval`)
}, 1000)

// Stop the interval after to 10 second
setTimeout(function () {
    clearInterval(intervalId)
    console.log(`Interval Stopped`)
}, 10000)