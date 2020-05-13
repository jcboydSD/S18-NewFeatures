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
const session1 = attendeesArray('Ann Adams', 'Ann Smith', 'Ben Benson', 'Carl Cards', 'Daniel Dern', 'Emma Earnest', 'Frank Forrest');
const session2 = attendeesArray('Ann Adams', 'Greg Grant', 'Harry Heber', 'Carl Cards', 'Emma Earnest', 'Jack Jones', 'Mary Marks', 'Ann Smith');
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

// ********************** Lecture Notes **********************

// rest parameter ("rest" of the arguments)
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num * 2);
}

const result = double(1,3,5,7,9,2,4,6,8);
console.log(result);


// spread syntax (arrays)
const people = ['shaun', 'ryu', 'crystal'];
console.log(...people);
const members = ['mario', 'chun-li', ...people];
console.log(members);


// spread syntax (objects)
const person = { name: 'shaun', age: 30, job: 'net ninja' };
console.log(person);
const personClone = {...person, location: 'Manchester'};
console.log(personClone);


// sets (reference type, store list of "unique" values)
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);
const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
const namesSet2 = new Set(namesArray);
console.log(namesSet);
console.log(namesSet2);
// ...then spread set back into array (after eliminating duplicates)
const uniqueNames = [...namesSet];
console.log(uniqueNames);
// single-line approach
const uniqueNames2 =[...new Set(namesArray)];
console.log(uniqueNames2);
// set methods and properties
const ages = new Set();
ages.add(20);  // add
ages.add(25).add(30).add(20); //chainable, but won't add duplicate
console.log(ages);
ages.delete(30); // delete
console.log(ages);
console.log(ages.size); // size
console.log(ages.has(25), ages.has(30)); // returns boolean
ages.clear(); // empty out the set
console.log(ages);
// iterate or cycle through a set
const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age: 32}
]);
ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age)
});

// symbols (no two symbols can ever be the same)
// symbols can be used as keys or property names in objects
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');
console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';
console.log(ninja);

