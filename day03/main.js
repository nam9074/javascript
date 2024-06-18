/*
Array methods:
    forEach()
    rvery()
    some()
    find()
    filter()
    map()
    reduce()
*/
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    }, 
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10
    }
];

courses.forEach(function(courses, index) {
    console.log(courses, index);                      // cách thức forEach()
});

var isFree = courses.every(function(courses, index) {
    console.log(index);
    return courses.coin === 0;                      // cách thức every()
});
console.log(isFree);

var isFree = courses.some(function(courses, index) {
    return courses.coin === 0;                          // Cách thức some()
});
console.log(isFree);

// var courses = courses.find(function(courses, index) {
//     return courses.name === 'Ruby';                          // Cách thức find()
// });
// console.log(courses);

var listCourses = courses.filter(function(courses, index) {
    return courses.name === 'Ruby';                          // Cách thức filter()
});
console.log(listCourses);



