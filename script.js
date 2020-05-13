// assignment part 1
console.log('Part 1');
// function that uses rest syntax to take unknown number of numbers into an array
const scoresArray = (...numbers) => {
    return(numbers);
};
// function with for each loop to find total & average and log to console
const getResult = (scores) => {
    let total = 0;
    let counter = 0;
    console.log(scores);
    scores.forEach(score => {
        total += score;
        counter ++;
    });
    console.log(`There are ${counter} numbers which total ${total}`);
    console.log(`The avg of those numbers is ${total/counter}`);
};
// create and update "scores" array
let scores = scoresArray(5,2,10,12,7,8,12,4);
getResult(scores);
scores = scoresArray(20,30,40,25,35);
getResult(scores);
// additional tests consolidated to one line of code each
getResult(scoresArray(1,3,5,7,9,11,13,15,17,19,21,23,25));
getResult(scoresArray(2.5,4,6,8,10,12,14,16,18,20.5));  // with decimals

// assignment part 2
console.log('');console.log('Part 2');
// function using rest syntax to take unknown number of conference attendees into an array
const attendeesArray = (...attendees) => {
    return(attendees);
};
// create 2 arrays with conference attendees and log totals to console
const session1 = attendeesArray('Jay Boyd','Ann Adams', 'Ann Smith', 'Ben Benson', 'Carl Cards', 'Daniel Dern', 'Emma Earnest', 'Frank Forrest', 'Ian McKellen');
const session2 = attendeesArray('Jay Boyd','Ann Adams', 'Greg Grant', 'Harry Heber', 'Carl Cards', 'Emma Earnest', 'Jack Jones', 'Ian McKellen', 'Mary Marks', 'Ann Smith', 'Neal Diamond');
console.log('Number of attendees at session 1:', session1.length);
console.log('Number of attendees at session 2:', session2.length);
// combine all attendees using spread syntax and log array and total to console
const allAttendees = [...session1, ...session2];
console.log(allAttendees);
console.log('Number of attendees both sessions:', allAttendees.length);
// log each attendee in combined list to console
allAttendees.forEach(attendee => {
    console.log(attendee);
});
// remove duplicates from allAttendees array using a new set and converting back to array
const uniqueAttendees = [...new Set(allAttendees)];
console.log(uniqueAttendees);
