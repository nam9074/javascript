/*
1. Let, conts
2. Template Literals
3. Multi-line String
4. Arrow function
5. Classes
6. Default parameter values
7. Destructuring
8. Rest parameters
9. Spread
10. Enhanced object literals
11. Tagged template literal
12. Modules
*/

// 1. var / let, Conts: Scope, Hosting   
// 2. Const / Var, Let: Assignment

// Code block: if else, loop, {}, ...

/*
code thuần: Var
Babel: Const, Let
- Khi định nghĩa biến và không gán lại được biến đó: Const
- Khi cần gán lại giá trị cho biến: Let
*/
    {
        let course = 'Javascript basic!';
        {
            {
                console.log(course);
            };
        }
    }

    const a ={
        name: 'Javascript'
    };

    a.name = 'PHP';

    console.log(a.name);

// 2.Template Literals
    const courseName = 'Javascript';
    const courseName2 = 'PHP';
    const description = `Course name: ${courseName} ${courseName2}`;

    console.log(description);

// 3. Multi-line String
    const line = 'Line 1\n'     // Cách 1 dùng \n để xuóng dòng
        + 'Line 2\n'
        + 'Line 3\n'

    console.log(line);

    const lines =           // Cách 2 dùng `` để xuống dòng
        `Line1  
        Line2
        Line3`;
    console.log(line);

// 4. Arrow function (Hàm mũi tên)
    const logger0 = (log) => {
        console.log(log);
    }
    logger0('Message...');

    const sum1 = (a, b) => {     // thay vì như vậy 
        return a + b;
    }
    console.log(sum1(2, 2));

    const sum2 = (a, b) => a + b;
                                // ta có thể làm như này
    console.log(sum2(2, 2));

    const sum3 = (a, b) => ({a:a, b:b});  

    console.log(sum3(2, 3));

    const course = {
        name: 'Javascript basic!',
        getName: () => {
            return this; // context
        }
    };
    console.log(course.getName());
    
// 5. Classes
    // function Course(name, price) {      // cách 1 sử dụng Constructor function 
    //     this.name = name;
    //     this.price = price;

            // this.getName = function() {
            //     return this.name;
            // }

            // const isSuccess = false;
    // }

    class Course {
        constructor(name, price) {  // cách 2  sử dụng Constructor 
            this.name = name;
            this.price = price;
        }

        getName() {
            return this.name;
        }

        getPrice() {
            return this.price;
        }

        start() {

        }

        // run() {
        //     const isSuccess = false;

        //     if (...) {
        //         isSuccess = true;
        //     }
        // }
    }

    const phpCourse = new Course('PHP', 1000);
    const jsCourse = new Course('Javascript', 1200);

    console.log(phpCourse);
    console.log(jsCourse);

// 6. Default parameter values (giá trị mắc định cho tham số)

    function logger1(log, isAlert) {
        if (isAlert) return alert(log); 
            console.log(log);
    }

    logger1('Massage...', true); 
// 10. Enhanced object literals
    /*
    1. Định nghĩa Key: value cho object
    2. Định nghĩa methor cho object
    3. Định nghĩa key cho object đưới dạng biến 
    */

    var name = 'Javascript';
    var price = 1000;

    var course2 = {
        name,
        price,

        getName() {
            return name;
        }
    }
    console.log(course2.getName());

    var fieldName = 'name';
    var fieldPrice = 'price';

    const course3 = {
        name: 'Javascript',
        [fieldName]: 'Javascript',
        [fieldPrice]: 1000 
    };

    console.log(course3);

// 7. Destructuring (Phân rã)

    var array = ['Javascript', 'PHP', 'Ruby'];

    var [d, e, f] = array;

    console.log(d, f);
// 8. Rest parameters (lấy ra phần cần lấy)
    var array = ['Javascript', 'PHP', 'Ruby'];
    var [d, e, ...rest] = array;

    console.log(d);
    console.log(rest);

    var course4 = {
        name: 'Javascript',
        price: 1000,
        image: 'image-address',
    };

    var { name, description1 = 'default description', ...rest} = course4;// thêm vào mới được lấy ra

    console.log(name, price);
    console.log(rest)
    console.log(description1);

// 9. Spread

    var array1 = ['Javascript', 'PHP', 'Ruby'];

    var array2 = ['RectJS', 'Dart'];

    //var array3 = [];    // thêm array3  là kết quả 2 cái đầu + lại
    var array3 = [...array2, ...array1]; // lấy cái nào trước thì cái đó hiện ra trước
    console.log(array3);

    var object1 = {
        name: 'Javascript'
    };

    var object2 = {
        price: 1000
    };

    var object3 = {
        ...object2,
        ...object1
    };
    console.log(object3);
// 11. Tagged template literal

    function highlight([first, ...strings], ...values) {
        return values.reduce(
            (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
            [first]
        )
        .join('');
    };

    var brand = 'F8';
    var course1 = 'Javascript'

    const htnl = highlight`Học lập trình ${course1} tại ${brand}!`;
    console.log(htnl);

// 12. Modules:  Import / Export
    import logger from './logger.js';
    import * as constants from './constants.js';
    
    console.log(constants);
    // logger('Test masage...', TYPE_WARN)

// 13. Optional chaining (?.)
    const obj = {
        name: 'Alice',
        cat: {
            name: 'Dinah',
            cat2: {
                name: 'Dinah 2',
                cat3: {
                    name: 'Dinah 3'
                }
            }
        }
    };

    if (obj?.cat?.cat2?.cat3) {
        console.log(obj.cat.cat2.cat3.name);
    }

    const obj1 = {
        // getName(value) {
        //     console.log(value);
        // }
    }
    obj.getName?.(123);

