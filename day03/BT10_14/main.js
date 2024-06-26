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

    function myFunction(param){
        if (typeof param === 'function') {
        param('Học lập trình');
        }
    }
    function myCallback(value) {
        console.log('value: ', value);
    }
    myFunction(myCallback);

    // Callback 2?

    Array.prototype.map2 = function(callback) {
        var output = [], arrayLength = this.length;
        for (var i = 0; i< arrayLength; i++) {
            var result = callback(this[i], i);
            output.push(result);
        }
        return output;
        }
        var courses = [
            'Javascript',
            'PHP',
            'ruby'
        ];
        
        var htmls = courses.map2(function(course) {
            return `<h2>${course}</h2>`
        });
        console.log(htmls);

    /*
    Ở bài trước chúng ta đã được học cách tạo phương thức map2 hoạt động giống với phương thức map của Array.
    Bây giờ, các bạn hãy tạo ra phương thức myMap hoạt động tương tự phương thức map2 và map nhé.
    */
    // Array.prototype.myMap = function(cb) {
    //     var result = [], l = this.length;
    //     for (var i = 0; i < l; i++) {
    //         result[i] = cb(this[i], i);
    //     }
    //     return result;
    // }
    // Expected results
    // const numbers = [1, 2, 3];
    
    // console.log(numbers.myMap(function (number) {
    //     return number * 2;
    // })) // Output: [2, 4, 6]
    
    // console.log(numbers.myMap(function (number, index) {
    //     return number * index;
    // })) // Output: [0, 2, 6]
    

    // Bài tập forEach2, find2, filter2, some2, every2, reduc2 sử dụng callback 

    // foreach2()

        Array.prototype.forEach2 = function(callback) {
            for (var index in this) {
                if (this.hasOwnProperty(index)) {
                    callback(this[index], index, this);
                }
            }
        }

        var courses = new Array(100);
        courses.push('Javascript', 'Ruby');

        // var courses = [
        //     'Javascript',
        //     'PHP',
        //     'Dart'
        // ];


        courses.forEach2(function(courses, index, array) {
            // console.log(courses, index, array);
        });
      
        // filetr2()

        Array.prototype.filter2 = function(callback) {
            var Output = [];
            for (var index in this) {
                if (this.hasOwnProperty(index)) {
                    var result =  callback(this[index], index, this);
                    if (result) {
                    Output.push(this[index])
                    }
                }
            }
            return Output;
        }
        var courses = [
            {
                name: 'Javascript',
                coin: 600
            },
            {
                name: 'PHP',
                coin: 860
            },
            {
                name: 'Ruby',
                coin: 960
            }
        ];
        var fliterCourses = courses.filter2(function(courses, index, array) {
            console.log(courses, index, array);
            return courses.coin > 700; 
        });
        console.log(fliterCourses);
      
        // Some2()
        Array.prototype.some2 = function(callback) {
            var Output = false;
            for (var index in this) {
                if (this.hasOwnProperty(index)){
                    if (callback(this[index], index, this)) {
                        Output =  true;
                        break;
                    };
                }
            }
            return Output;
        }

        var courses = [
            {
                name: 'Javascript',
                coin: 680,
                isFinish: true
            },
            {
                name: 'PHP',
                coin: 860,
                isFinish: false
            },
            {
                name: 'Ruby',
                coin: 980,
                isFinish: false
            }
        ];
        
        var resurlt = courses.some2(function(courses, index) {
            return courses.isFinish;
        });
        console.log(resurlt);

        // every2();
        Array.prototype.every2 = function(callback) {
            var Output = true;
            for (var index in this) {
                if (this.hasOwnProperty(index)){
                    var resurlt = callback(this[index], index, this) 
                        if (!resurlt) {
                            Output =  false;
                            break;
                        };
                }
            }
            return Output;
        }

        var courses = [
            {
                name: 'Javascript',
                coin: 680,
                isFinish: true
            },
            {
                name: 'PHP',
                coin: 860,
                isFinish: false
            },
            {
                name: 'Ruby',
                coin: 980,
                isFinish: false
            }
        ];
        
        var resurlt = courses.every2(function(courses, index) {
            return courses.isFinish;
        });
        console.log(resurlt);


    /*
    HTML DOM

    1. Element : ID, Class, tag,CSS selector, HTML collection
    2. Attribute
    3. Text

    ___________________

    Javascript : Browser | Sever (NodeJS)

    Browser : HTML -> DOM -> WEB API
    */

    // get element method
    console.log(document);          //
    document.write('Hellow Guys!'); // ghi vào sau phần tử cuối cùng của body

    var headingNode = document.getElementById('heading')    // dạng số ít

    console.log({
        element: headingNode
    });
    var headingNode = document.getElementsByClassName('heading')    // dạng số nhiều
    console.log(headingNode);

    var headingNode = document.getElementsByTagName('h1')           // dạng số nhiều gọi tên thẻ h1, h2, p,...
    console.log(headingNode);

    //SCC clector
    var headingNode = document.querySelector('.heading')            //
    console.log(headingNode);

        /* Bài tập:
        productsListElement: thẻ div có class là products-list.
        firstProductElement: thẻ div đầu tiên có class là product.
        buttonElements: tất cả các thẻ button.
        */
        /**
         * Sử dụng các biến đã cho sẵn dưới đây
         

        var productsListElement = document.querySelector('div.products-list')

        var firstProductElement = document.querySelector('div.product')

        var buttonElements = document.getElementsByTagName('button') 
        */
    // get element methods -2
        var boxNode = 
        document.querySelector('.box-1');

        // công việc 1: sử dụng 'boxNode'
        console.log(boxNode);
        // công việc 2: sử dụng tới các li elements là con của '.box-1'
        console.log(boxNode.getElementsByTagName('li'));
        console.log(boxNode.querySelector('p')); 
    // get element methods -3
        /*
            1. getElementById                   trả trực tiếp về element (số ít)
            2. getElementsByClassName           get nhiều element class
            3. getElementsByTagName             get nhiều element tag (div, h1, p,...)
            4. querySelector                    trả trực tiếp về element (số ít)
            5. querySelectorAll                 sử dụng câu truy vấn để trả về tất cả

            6. HTML collection
            7. document.wite
        */

    // DOM trribute (thêm sửa xóa)
        var headingElement = 
            document.querySelector('h1');

        headingElement.title = 'Title test';
        headingElement.setAttribute('data', 'test data');
        

        console.log(headingElement.getAttribute('class'));
        console.log(headingElement.getAttribute('title'));      // có thể get ra được cả html và js
        console.log(headingElement.getAttribute('data'));
        // alert(headingElement.getAttribute('class'));         

    //innerText, textContent
    //geter 
    //seter
        var headingElement = document.querySelector('.heading');

        console.log(headingElement.innerText)           // ko trả về nội dung trong thẻ span, body,..
        console.log(headingElement.textContent)         // trả về tất cả nội dung bên html
        // chỉnh sữa trong thẻ
        headingElement.innerText = 'New heading';       // Toán tử gán
        headingElement.textContent = 'Neww heading';    //
    
    // InnerHTML(ghi đè bên trong), outerHTML(ghi đè bên ngoài) Property 
    var boxElement = document.querySelector('.box');

    console.log(boxElement);

    boxElement.innerHTML = '<h1 title="Heading">Heading-text</h1>';
    console.log(boxElement.innerHTML);                  //lấy element ở trong html ra
    
    // console.log(boxElement.querySelector('h1').innerText)

    boxElement.outerHTML = '<span>Test</span>';
    console.log(boxElement.outerHTML);

// DOM CSS

    var boxElement = document.querySelector('.box-3');
    // cách 1:
        // boxElement.style.width = '100px';
        // boxElement.style.height = '100px';
        // boxElement.style.background = 'red';
    // cách 2:
    Object.assign(boxElement.style, {
        width: '200px',
        height: '100px',
        backgroundColor: 'green',
    });
    console.log(boxElement.style.width);        // lấy ra thuộc tính css


    /*
    ClassList property

    add             // thêm 1 class
    contains        // là 1 hàm, nhận đối số là class và kt xem trong mảng có tồn tại ko.
    remove          // xóa class trong
    toggle          // kiểm tra element có class cần tìm ko, có thì gỡ bỏ, nếu ko có thì thêm vào
    */

    var boxElement = document.querySelector('.box');
    // console.log(boxElement.classList.length);       // kiểm tra element có số lượn class
    // console.log(boxElement.classList.value);        // trả về chuỗi nằm trong class

    boxElement.classList.add('red');
    console.log(boxElement.classList.contains('red'));
    // boxElement.classList.remove('red');
    // setTimeout(() => {
    //     boxElement.classList.remove('red');
    // }, 3000);

    setInterval(() => {
        boxElement.classList.toggle('red');
    }, 1000);

    /*DOM events        sự kiện được in ra trong người dùng tương tác
        1. Attribute events
        2. Asign event using the element node
    */
    var h1Element = document.querySelectorAll('h2');

    for (var i = 0; i < h1Element.length; ++i) {
        h1Element[i].onclick = function(e) {
            console.log(e.target);
        }
     }

     // DOM events
     // 1. Imput / Select
     // 2. Key up / down

     var imputElement = document.querySelector('input[type="text"]');

     imputElement.onchange = function(e) {
        console.log(e.target.value);
     };

     var imputElement = document.querySelector('input[type="checkbox"]');

     imputElement.onchange = function(e) {
        console.log(e.target.checkbox);
     };

     var imputElement = document.querySelector('select');

     imputElement.onchange = function(e) {
        console.log(e.target.value);
     };

     // 2.
     var imputElement = document.querySelector('input[type="text"]');

     imputElement.onkeyup = function(e) {
        console.log(e);
     };

     /*
     DOM events
     1. preventDefault
     2. stopPropagation
     */
    var aElement = document.links;

    for(var i = 0; i < aElement.length; ++i) {
        aElement[i].onclick = function(e) {
            console.log(e.target.href);
        }
    }

    //1. preventDefault         ngăn chặn mọi hành vi mặc định xảy ra trong trang 
    var ulElement = document.querySelector('ul');

    ulElement.onmousedown = function(e) {
        e.preventDefault();
    }
    ulElement.onclick = function(e) {
        console.log(e.target);
    }

    // 2. stopPropagation
    document.querySelector('div').onclick = 
    function() {
        console.log('DIV')
    }

    document.querySelector('button').onclick = 
    function(e) {
        e.stopPropagation();
        console.log('click me!')
    }

    /*
    1. Event Listener
    2. JSON
     . Promise
    3. Fetch
    4. DOM location
    5. Local storage
    6. Session storage
    7. Coding convention
    8. Best Practices
    9. Mistakes
    10. Performance

        1. xử lý nhiều việc khi 1 event xảy ra
        2. Lắng nghe/ hủy bỏ lắng nghe
    */
   var btn = document.getElementById('btn');
    
   function viec1() {
    console.log('viec 1');
   }
   function viec2() {
    console.log('viec 2');
   }
   btn.addEventListener('click', viec1);
   btn.addEventListener('click', viec2);

   setTimeout(function() {
    btn.removeEventListener('click', viec1);
   }, 3000);
/* JSON  
    1. Là 1 định dạng dữ liệu (chuỗi)
    2. JavaScript Object Notation
    3. JSON: Number, Boolean, String, Null, Aray, Object

        Mã hóa / Giãi mã
        Encode / Decode
        Stringify / Parse
*/
   // Stringify: Từ JavaScript types -> JSON
   // Parse: từ JSON -> JavaScript types

    // var json = '["JavaScript", "PHP"]';

    console.log(JSON.stringify([        // String
        'JavaScript',
        'PHP'
    ]));

    console.log(JSON.stringify({        //Object
        name: 'Truong Nam',
        age: 20
    }));

    /*3. Promise
            - Sync
            - Async
            - Nỗi đau
            - Lý thuyết, cách hoạt động
            - thực hành, ví dụ 
        */
        // Sync / Async

        //Callback

        //Sleep
        setTimeout(function() {
            console.log(1);
        }, 1000);
        console.log(2);

        //3. Promise (pain) nỗi đau
            // Callback hell
            //pyramid of doom

            setTimeout(function() {
                console.log(1) // Việc 1
                setTimeout(function() {
                    console.log(2) // Việc 2
                    setTimeout(function() {
                        console.log(3) // Việc 3
                        setTimeout(function() {
                            console.log(4) // Việc 4
                            setTimeout(function() {
                                console.log(5) // Việc 5
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);

            //Promise (concept) Lý thuyết cách họat động
            // 1. new Promise
            // 2. Executor

            /* có 3 trạng thái
            1. Pendding
            2. Fulfilled
            3. Rejected
            */

            var promise = new Promise (
                // Executor
                function(resolve, reject) {
                    // Logic
                    // thành công: resolve();
                    // thất bại: reject();
                    //Fake call API

                    resolve([
                        {
                        id: 1,
                        name: 'JavaScript',
                        }
                    ]);
                }
            );

            promise
                .then(function(course) {
                    console.log(course);
                })
                .catch(function(error) {
                    console.log(error);
                })
                .finally(function() {
                    console.log('Done!');
                });

                /* Câu hỏi lý thuyết phóng vấn thường gặp
                    khái niệm Promise:
                        nó sinh ra để sử lý quy tắc bất đồng bộ, trước khi có promise thì thường sử dụng Callback 
                        callback nó sẽ xảy ra 1 lỗi đó là callback hell, code sẽ bị dời dạc khó nhìn và khó hiểu
                        thế nên promise được sinh ra ở phiên bản mới hơn và chúng ta có thể sử dụng nó để khác phục tình trạng callback hell giúp viết code dế hiểu hơn

                    để tạo ra promise: 
                        sử dụng từ khóa new Promise và trong đó chúng ta truyền vào 1 Executor function( trong đó nhận dc 2 tham số thành công: resolve()  thất bại: reject()
                            và khi sử dụng promise sẽ tạo ra và sử dụng phương thức (.then) được nhận callback khi chúng ta được resolve và (.catch) khi chung ta được reject
                    */
            // Promies (chain)
            var promise = new Promise (
                // Executor
                function(resolve, reject) {
                    // Logic
                    // thành công: resolve();
                    // thất bại: reject();
                    //Fake call API

                    resolve();
                }
            );

            promise
                .then(function() {
                    return new Promise(function(resolve) {
                        setTimeout(function() {
                            resolve([1,2,3]);
                        }, 3000);
                    });
                })
                .then(function(data) {
                    console.log(data);
                })
                .catch(function(error) {
                    console.log(error);
                })
                .finally(function() {
                    console.log('Done!');
                });

            function sleep(ms) {
                return new Promise(function(resolve) {
                    setTimeout(resolve, ms);
                });
            }
            sleep(1000)
                .then(function() {
                    console.log(1);
                    return sleep(1000);
                })
                .then(function() {
                    console.log(2);
                    return new Promise(function(resolve, reject) {
                        reject('Có lỗi!');
                    });
                })
                .then(function() {
                    console.log(3);
                    return sleep(1000);
                })
                .then(function() {
                    console.log(4);
                    return sleep(1000); 
                })
                .catch(function(err) {
                    console.log(err);
                });

            // Promies
            // 1. Promies.resolve
            // 2. Promies.reject
            // 3. Promies.all

            // Thư viện: Output luôn luôn là mổt Promies

            // 1.
            var promies = Promise.resolve('Success!');
            // 2.
            var promies = Promise.reject('Error!');
            promies 
                .then(function (result) {
                    console.log('result: ', result);
                })
                .catch(function (err) {
                    console.log('err: ', err);
                }); 

            // 3. 
            var promise1 = new Promise(function (resolve) {
                setTimeout(function() {
                    resolve([1]);
                }, 2000);
            });
            var promise2 = new Promise(function (resolve) {
                setTimeout(function() {
                    resolve([2, 3]);
                }, 5000);
            });

            Promise.all([promise1, promise2])
                .then(function(result) {
                    var result1 = result[0];
                    var result2 = result[1];

                    console.log(result1.concat(result2))
                });
    // Fetch

    var postApi = 'https://jsonplaceholder.typicode.com/posts';

    // Strem
    fetch(postApi)
        .then(function(response) {
            return response.json();
            //  JSON.pares: JSON -> JavaScript types 
        })
        .then(function(posts) {
            var htmls = posts.map(function(post) {
                return `<li>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </li>`;
            });
            var html = htmls.join('');document.getElementById('post-lock').innerHTML = html;

        })
        .catch(function(err) {
            alert('Có lỗi!')
        });
        /*4. Fetch
              - JSON server: API server (fake) / Mock API
              - CRUD 
                    - Create: Tạo mới -> POST
                    - Read: Lấy dữ liệu -> GET
                    - Update: Chỉnh sửa -> PUT / PATCH
                    - Delete: Xóa / DELETE
              - Postman
        */
       var listCoursesBlock = document.querySelector('#list-courses');

       var courseApi = '';

       function start() {
            getCourses(renderCouses);
            handleCreateForm();
       }
       start();

       //Functions
       function getCourses(callback) {
        fetch(courseApi)
            .then(function(response) {
                return response.json();
            })
            .then(callback);
       }
       function hendDeleteCourse(id) {
        var options = {
            method: 'POST',
            body: JSON.stringify(data)
        }
        fetch(courseApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(function() {

        });
       };

       function renderCouses(courses) {
        var listCourses = document.querySelector('#list-courses');
        var htmls = courses.map(function(course) {
            return `
            <li>
            <h4>${courses.name}</h4>
            <p>${courses.description}</p>
            <button onclick="deleteCourse(${course.id})">Xóa</button>
            </li>
            `;
        });
       }

       function createCourse(data, callback) {
        var options = {
            method: 'POST',
            body: JSON.stringify(data)
        }
        fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
    }

       function handleCreateForm() {
        var createBtn = document.querySelector('#create');
        createBtn.onclick = function() {
             var name = document.querySelector('input[name="name"]').value;
             var description = document.querySelector('input[name="description"]').value;

             var formData = {
                name: name,
                description: description
             };
             createCourse(formData, function() {
                getCourses(renderCouses);
             });
        }
       }
                


