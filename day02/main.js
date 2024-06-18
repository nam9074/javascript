/* Kiểu dữ liệu số (number)
Ví dụ là: 1000000 (một triệu)
Thay vì sử dụng 
var million = 1000000;
Ta có thể sử dụng
var million = 1e6;

Đối tượng Number

Phương thức	                Vai trò

Number.isFinite()	        Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	        Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()	        Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	        Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
*/
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'

/*  Kiểu só Number trong javasacript
    1. Tạo giá trị number
        - Các cách tạo
        - Nên dùng cách nào? tại sao?
        - Kiểm tra data type
    2. Lam việc với Number
        - To string                    (chuyển dạng Number thành String)
        - To Fixed                     (làm trong chữ số thập phân)
                                            Keyword : Javascript number methods 
*/                 
// 2 cách tạo 
        var age = 18;                     // cách 1  nên xài cách này
        var PI = 3.14; 

        var otherNumber = new Number(9); // cách 2
    // To string 
    var myString = age.toString();
    console.log(myString);

    console.log(PI.toFixed());
/* 
Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
Hàm isNumber có 1 tham số, hãy đặt tên nó là value
Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
*/
        function isNumber(value) {
            if(typeof value === typeof(2)) {
                return true;
            }else{
                return false;
        }
        }
        
        // Expected results:
        console.log(isNumber(999)); // true
        console.log(isNumber('abc')); // false
        console.log(isNumber('100')); // false
/* 
    Tạo hàm isNumber
    Hàm isNumber có 1 tham số đặt tên là value
    isNumber(value) trả về true khi value có kiểu số, ngược lại trả về false
    isNumber(NaN) cần trả về false
*/
        function isNumber(value) {
            if(typeof value === typeof(1) && isNaN(value) !== true) {
                return true;
            } else {
                return false;
            }
        }
        // Expected results:
        console.log(isNumber(999)); // true
        console.log(isNumber('abc')); // false
        console.log(isNumber('100')); // false

        console.log(isNumber(NaN)); // false
        console.log(isNumber(100 / 'abc')); // false

/* Mảng trong Javascript - Array
    1. Tạo mảng
        - Cách tạo 
        - Sử dụng cách nào? tại sao?
        - Kiểm tra data type 
    2. Truy xuất mảng
        - Độ dài mảng
        - Lấy phânf tử theo index           
            console.log(laguages[1]); //PHP
*/

        var laguages = [
            'Javascrip',
            'PHP',
            'Ruby',
            'Dart'
        ];
        console.log(laguages);

/* Làm việc với Array
    1. To String
    2. Join                 chèn kí tự vào giữa các element
    3. Pop                  Xóa element cuối mảng và trả về phần tữ đã xóa
    4. Push                 Thêm 1 hoặc nhiều element cuối mảng
    5. Shift                Xóa element đầu mảng và trả về phần tữ đã xóa
    6. Unshift              Thêm 1 hoặc nhiều element đầu mảng
    7. Splicing             Xóa 1 phần tử bất kì trong Array
    8. Concat               Hợp 2 Array lại thành 1
    9. Sclcing              Cắt từ vị trí .. đến vị trí ..
*/          
        var laguages = [
            'Javascrip',
            'PHP',
            'Ruby'
        ];
        var laguages2 = [
            'Javascrip',
            'PHP',
            'Ruby'
        ];
        laguages.toString();
        laguages.join(', ');
        laguages.pop();            // Xóa element cuối mảng và trả về phần tữ đã xóa
        laguages.push('Dart');     // Thêm phần tử cuối mảng
        laguages.shift();
        laguages.unshift('Dart');
        laguages.splice(1, 1, 'Dart',); // (vị trí cần xóa, vị trí xóa, 'vị trí chèn')

        console.log(laguages);

        console.log(laguages.concat(laguages2));
        console.log(laguages.slice(1, 1));

    //getLastElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử cuối cùng trong mảng.

            // Viết hàm tại đây
            function getLastElement(array) {
                result = array.slice(array.length-1);
                return result

            }
            // Ví dụ sử dụng
            var animals = ['Monkey', 'Tiger', 'Elephant'];
            var result = getLastElement(animals);

            console.log(result); // Expected: "Elephant"
            console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

    //getFirstElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử đầu tiên trong mảng.
            // Viết hàm tại đây
            function getFirstElement(array) {
                return array[0];
            }
            // Ví dụ sử dụng
            var animals = ['Monkey', 'Tiger', 'Elephant'];
            var result = getFirstElement(animals);

            console.log(result); // Expected: "Monkey"
            console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// Object trong javascript

    var emailKey = 'email';

    var myInfo = {
        name : 'Truong Nam',
        age : 20,
        address: 'Quang Binh, VN',
        [emailKey]: 'truongnam@gmail.com',          //Thêm key vào
        getName: function() {
            return this.name;                       // this cũng có nghĩa là myInfo
        }
        //Function --> phương thức / method         name: function() {
        //                                          }
        // Other   --> Thuộc tính  / propety        name: 'truong nam',
    }
    console.log(myInfo.getName());

    myInfo.email = 'truongnam@gmail.com',           //thêm key vào cách 1
    myInfo['my-email'] = 'truongnam@gmail.com';     //thêm key vào  cách 2
    
    console.log(myInfo.address);                       // lấy key ra cách 1
    console.log(myInfo['address']);                     // lấy key ra cách 2 về dạng string

    // Object constructor   : xây dụng đối tượng

        function User(fistName, lastName, avatar) {
            this.fistName = fistName;
            this.lastName = lastName;
            this.avatar = avatar;

            this.getName = function() {
                return `${fistName} ${lastName}`
            }
        }
        var author = new User('Truong', 'Nam', 'Avatar');
        var user = new User('Hoai', 'Nam', 'Avatar');

        author.title = 'Học tập code';
        user.comment = 'Hơi khó đó nha!';

        console.log(author.getName());
        console.log(user.getName());

    /* Object prototype - Basic
        1. Prototype là gì?         thêm 1 thuộc tính ở bên ngoài hàm tạo 
        2. sử dụng khi nào?
    */

    function User(fistName, lastName, avatar) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function() {
            return `${this.fistName} ${this.lastName}`
        }
    }
    User.prototype.className = 'B8';
    User.prototype.getClassName = function() {
        return this.className;
    }

    var user = new User('Truong', 'Nam', 'Avatar 1');
    var user2 = new User('Hoai', 'Nam', 'Avatar 2');

    console.log(user.className);
    console.log(user2.getClassName());

// Đối tượng Data
var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

console.log(`${day}/${month}/${year}`);

/* Đối tượng Manth
    Manth # Oject

    - Math.PI           PI
    - Math.round();     Làm trong số
    - Math.abs();       Giá trị tuyệt đối
    - Math.celi();      Làm tròn trên
    - Math.floor();     Làm tròn dưới
    - Math.random();    Số thập phân ngẩu nhiên
    - Math.min();       Trả về số nhỏ nhất
    - Math.max();       Trả về số lớn nhất
*/

var random = Math.floor(Math.random() * 100);

if (random < 5) {
    console.log('Cường Hóa thành công')     // tỉ lệ ra đồ 5%
}
console.log(Math.max(-100, 20, 40, 90, 10)); // tương tự min

    // Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.

    function getRandomItem(arr = []) {      // phải trả về array
        var item = Math.floor(Math.random() * arr.length);
        return arr[item];
    }
    getRandomItem(['javascript', 'ruby', 'PHP']);

// Câu lệch rẻ nhánh if else

var date = 3;

if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else if (date === 3) {
    console.log('Hôm nay là ngày thứ 3')
} else if(date === 4) {
    console.log('Hôm nay là ngày thứ 44')
} else (
    console.log('Không biết')
)
    /*
    Khi a chia hết cho 3 thì return về 1
    Khi a chia hết cho 5 thì return về 2
    Khi a chia hết cho 15 thì return về 
    */
    function run(a) {
        if(a % 3 == 0 && a % 15 !== 0) {
            return 1;
        } else if(a % 5 == 0 && a % 15 !==0){
            return 2;
        } else if(a% 15 ==0){
            return 3;
        }
    
        
    }
    // Kỳ vọng
    console.log(run(3)) // 1
    console.log(run(5)) // 2
    console.log(run(15)) // 3


// Lệnh rẽ nhánh Switch
var date = 2;
switch(date) {
    case 2:
        console.log("Hôm nay là thứ 2");
        break;
    case 3:
        console.log("Hôm nay là thứ 3");
        break;
    default:
        console.log("Hôm nay là thứ 4");
        break;
}

// Toán tử 3 ngôi - ternary operator
var course = {
    name: 'Javascript',
    coin: 0
}
var result = course.coin > 0 ? `${course.coin} Coins ` : 'Miễn phí';
console.log(result); 

var a = 1;
var b = 2;

var c = a < 0 ? a : b;
    /*getCanVoteMessage, hàm này có 1 tham số là age. 
    Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, 
    ngược lại hàm trả về Bạn chưa được bỏ phiếu.
    */
    // Làm bài
        function getCanVoteMessage(age) {
            return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
        }
        // Kỳ vọng
        console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
        console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

/* 
        Vòng lặp - Loop 
    
    1. for          - Lặp với điều kiện đúng
    2. for/in       - Lặp qua Key của đôi tượng
    3. for/of       - Lặp qua Value của đối tượng
    4. while        - Lặp khi điều kiện đúng
    5. do/while     - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

        for (var i = 1; i <= 10; i++) {
            // console.log(i);
            //code
        }
        /* Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

        Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
        */
            // Làm bài
            function getRandNumbers (min, max, length) {
                var arr = [] ;
                for ( var i = 0; i < length; i++) {
                arr.push(Math.random() * (max - min) + min)
                }
                return arr; 
            }
            /**
             * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
             * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
             * nếu vòng lặp không có điểm dừng.
             * 
             * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
             * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
             * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
             * 
             * => Treo trình duyệt!!!
             */

        // For Loop
        var myArray = [
            'Javasctipr',
            'PHP',
            'Ruby',
            'Python',
            'Dart'
        ];
        var arrayLength = myArray.length;

        for (var i = 0; i < arrayLength; i++) {
            console.log(myArray[i])
        }
            
        // for-in loop

        var myInfo = {
            name : 'Nam',
            age : 20
        }
        for (var key in myInfo) {
            console.log(key);
        }

        var languages = 'Javascript';

        for (var key in laguages) {
            // console.log(laguages[key]);
        }

        // for/off loop

        var myArray = [
            'Javasctipr',
            'PHP',
            'Ruby',
            'Python',
            'Dart'
        ];
        for (var value of myArray) {
            // console.log(value);
        }

        var languages = {
            name : 'Nam',
            age : 20
        }
        // console.log(Object.keys(laguages))          //cách 1

        for (var key in Object.keys(laguages)){        //cách 2
            // console.log(value)
        }
            // console.log(Object.values(laguages))       // cách 3
        
        for (var key in Object.values(laguages)){        //cách 2
                // console.log(value)
        }

        // white loop
        var i = 1;
        while (i < 1000) {
            i++;
            // console.log(i);
        }
        var myArray = [
            'Javasctipr',
            'PHP'
        ]

        var i = 0;
        while (i < myArray.length) {
            // console.log(myArray[i]);
            i++;
        }

        // do white
        var i = 0;
        do {
            i++;
            // console.log(i);

        } while (i < 10);

        var i = 0;
        var isSucess = false;

        do {
            i++;
            console.log('Nạp thẻ lần' + i);
            // thành công
            if (false) {
                isSucess = true;
            }

        } while (!isSucess && i <= 3);

    //Break & Continue in loop

        for (var i = 0; i < 10; i++){
        
            
            if (i%2 !==0) {
                continue;
            }
            // if (i >= 5) {    // giói hạn 5 chữ số
            //     break;
            // }
            console.log(i);
        }
        
// Vòng lặp giống nhau - Nested loop
        var myArray = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];
        for (var i = 0; i < myArray.length; i++) {
            for (var j = 0; j < myArray[i].length; j++){
                // console.log(myArray[i][j]);
            }
            
        }

        // Bài tập : in dãy số thứ thự từ 100 về 1
        for (var i = 100; i > 0; i--) {
            // console.log(i);
        }

        // in ra giá trị +5 lần
        for (var i = 0; i <= 100; i+= 5) {
            // console.log(i);
        }
// Đệ quy là gì học về đệ quy trong javascript 

var arr = ['a', 'b', 'c', 'd', 'e'];
    // console.log(new Set(arr));

// Đệ quy..
/*  Mục tiêu
        1. Xác định được diểm dừng
        2. Logic handle => Tạo ra điểm dừng
*/
function deQuy(num) {
    if(num < 0) {
        // dừng
        //....
        return;
    }
    deQuy();
}
// deQuy();


function loop(start, end, cb) {
    if(start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}
var array = ['Javascrip', 'PHP', 'Ruby']; 

loop(0, array.length , function(index) {
    console.log(array[index]);
})

// 3 * 2 * 1 = 6
// 6 * 5 * 4 * ... * 1 = 720
function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number -1 )
    }
    return 1;
}
console.log(giaiThua(6));
