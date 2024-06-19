/*
Array methods:
    forEach()
    rvery()
    some()
    find()
    filter()
    map()               chỉnh sửa hoặc thay đổi ement của array
    reduce()

    1. dễ hiểu
    2. ngắn gọn
    3. hiệu năng
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

/*
hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.

Gợi ý: Sử dụng phương thức filter.
*/
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sports) {
    var like = sports.filter(function(like, index) {
        return like.like > 5;
    });
    return like;
}
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

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
function coursesHandler(courses, index) {
    // console.log(coursesHandler)
    return {
        id: courses.id,
        name: `khoa hoc: ${courses.name}`,
        coin: courses.coin,
        coinText: `Gia: ${courses.coin}`,
        index: index,
        originArray: courses,
    }
}
var newCourses = courses.map(coursesHandler);           // cách thức map()
console.log(newCourses);

// biến lưu trữ
// biến thực hiện
var i = 0;
function coinHandel(accumulatol, currentValue, currentIndex, originArray) {
    i++;

    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulatol
    })
    return 100;
}
var totalCoin = courses.reduce(coinHandel, 0);          // cách thức reduce()

var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin
}, 0);  // initial value
console.log(totalCoin);

    // bài tập
    // Flat - " Làm phẳng" mảng từ depth array - "Mảng sâu"
    var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
    var depthArray = depthArray.reduce(function(flatOutput, depthItem) {
        return flatOutput.concat(depthItem);    
    }, []); 
    // console.log(depthArray);

    // lấy ra các khóa học đưa vào 1 mảng
    var topics = [
        {
            topics: "Font-end",
            courses: [
                {
                id: 1,
                title: "HTML, CSS"
                },
                {
                    id: 2,
                    title: "Javascript"
                } 
            ]
        },
        {   
            topics: "back-end",
            courses: [
                {
                id: 1,
                title: "PHP"
                },
                {
                    id: 2,
                    title: "NodeJS"
                } 
            ]
        }
    ];

    var newCourses = topics.reduce(function(courses, topic) {
        return courses.concat(topic.courses);
    }, []);
    // console.log(newCourses);


    /*
    Thực hành sử dụng phương thức reduce #2

    Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.

Gợi ý:
    Dùng phương thức filter để lấy ra những bộ phim do Christopher Nolan làm đạo diễn
    Dùng phương thức reduce để tính tổng điểm IMDB
    Tính điểm IMDB trung bình
    */
    var watchList = [
        {
          "Title": "Inception",
          "Year": "2010",
          "Rated": "PG-13",
          "Released": "16 Jul 2010",
          "Runtime": "148 min",
          "Genre": "Action, Adventure, Crime",
          "Director": "Christopher Nolan",
          "Writer": "Christopher Nolan",
          "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
          "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
          "Language": "English, Japanese, French",
          "Country": "USA, UK",
          "imdbRating": "8.8",
          "imdbVotes": "1,446,708",
          "imdbID": "tt1375666",
          "Type": "movie",
        },
        {
          "Title": "Interstellar",
          "Year": "2014",
          "Rated": "PG-13",
          "Released": "07 Nov 2014",
          "Runtime": "169 min",
          "Genre": "Adventure, Drama, Sci-Fi",
          "Director": "Christopher Nolan",
          "Writer": "Jonathan Nolan, Christopher Nolan",
          "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
          "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          "Language": "English",
          "Country": "USA, UK",
          "imdbRating": "8.6",
          "imdbVotes": "910,366",
          "imdbID": "tt0816692",
          "Type": "movie",
        },
        {
          "Title": "The Dark Knight",
          "Year": "2008",
          "Rated": "PG-13",
          "Released": "18 Jul 2008",
          "Runtime": "152 min",
          "Genre": "Action, Adventure, Crime",
          "Director": "Christopher Nolan",
          "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
          "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
          "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
          "Language": "English, Mandarin",
          "Country": "USA, UK",
          "imdbRating": "9.0",
          "imdbVotes": "1,652,832",
          "imdbID": "tt0468569",
          "Type": "movie",
        },
        {
          "Title": "Batman Begins",
          "Year": "2005",
          "Rated": "PG-13",
          "Released": "15 Jun 2005",
          "Runtime": "140 min",
          "Genre": "Action, Adventure",
          "Director": "Christopher Nolan",
          "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
          "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
          "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
          "Language": "English, Urdu, Mandarin",
          "Country": "USA, UK",
          "imdbRating": "8.3",
          "imdbVotes": "972,584",
          "imdbID": "tt0372784",
          "Type": "movie",
        },
        {
          "Title": "Avatar",
          "Year": "2009",
          "Rated": "PG-13",
          "Released": "18 Dec 2009",
          "Runtime": "162 min",
          "Genre": "Action, Adventure, Fantasy",
          "Director": "James Cameron",
          "Writer": "James Cameron",
          "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
          "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          "Language": "English, Spanish",
          "Country": "USA, UK",
          "imdbRating": "7.9",
          "imdbVotes": "876,575",
          "imdbID": "tt0499549",
          "Type": "movie",
        }
      ];
      function calculateRating(watchList) {
        var IMDB = watchList.filter(function(list){
          return list.Director === 'Christopher Nolan';
        });
        var toltalIBM = IMDB.reduce(function(a, b) {
            return a + parseFloat(b.imdbRating);
        }, 0);
        return toltalIBM / IMDB.length
      }
      
      
      // Expected results
      console.log(calculateRating(watchList)); // Output: 8.675

      
 
        // Expected results: bài tập #2
        var arr = [
            ['name', 'Sơn Đặng'],
            ['age', 18],
        ];
        function arrToObj(arr) {
            return  arr.reduce((acc, [key, value])=>({...acc, [key]: value}), {})   
        }

        console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

    // includes method
    var courses = ['Javascript', 'PHP', 'Dart'];
    console.log(courses.includes('Dart', 0))

// Callback? 

// là hàm (function) được truyền qua đối số
// khi gọi hàm

// 1. là hàm
// 2. được truyền qua đối só 




      
      
      
      
      
      
      