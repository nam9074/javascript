alert('HI javascript basic');

// biến và sử dụng biến
var fullName = 'Truong Hoai Nam';
var age = 26;

alert('fullName');
alert('age');

// cú pháp comments 
//  /** */      (comments dài)
    //          (comment 1 dòng)
//    ctrl + /

// thuật ngữ Built-in 
var fullName = 'Truong Hoai Nam';
console.log(fullName);

console.log('Day la dong load');
console.warn('in ra cảnh báo ! màu vàng');
console.error('in ra xấu x màu đỏ báo lỗi');

confirm('Xac nhan bang du tuoi');
prompt('Xác nhận bảng đủ tuổi có dòng input để nhập');

setTimeout(function() {
    alert('thong bao')
}, 1000);

setInterval(function() {
    // console.log('đây là log chạy nhiều lần' +Math.random())
},1000);

// Các dạng toán tử trong Javascript 
// toán sử số học
var a = 1 + 2;
    console.log(a)

var a = 1;
var b = 2;

var c = a + b; // tương tự -, *, /, **, %,
console.log(c);

    // tăng 1 giá trị ++
    var a = 5;
    a++;
    console.log(a);
    // giảm 1 giá trị --
    var a = 5;
    a--;
    console.log(a);
    /** 
    x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
    ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
    x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
    --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
    */
     
    // toán tử tiền tố và hậu tố prefix & postfix
    var number = 6;
    var output = number++ + --number;
    //  6 + 6 = 12 
    console.log('output: ', output);

    var number = 6;
    var output = ++number * 2  - number-- * 2;
    //  7 *2 - 7 *2 = 0
    console.log('output: ', output);
    // tiền tố cộng hoặc trừ liền , hậu tố là chưa tính.....



// Bài tập Vượt qua thử thách này bằng cách tạo biến nextAge để lưu số tuổi tiếp theo được tính từ giá trị của biến age. Ví dụ: age = 35 thì nextAge sẽ là 36. Không sử dụng toán tử ++ trong bài này, vì sẽ không đạt kết quả như ý. Trả lời cho câu hỏi, "Tại sao age++ không đúng với bài này, các bạn vui lòng học tại các bài sau nhé.

    var age = 20;

    var nextAge = age + 1;
    console.log(nextAge)

// toán tử gán
var fullName = 'Truong Hoai Nam';
console.log(fullName);
    /** Toán tử gán
     *  Toán tử         ví dụ       Tương đương
     *     =           x = y        x = y
     *     +=          x += y      x = x + y
     *     -=          x -= y      x = x - y
     *     *=          x *= y      x = x * y
     *     /=          x /= y      x = x / y
     *     **=         x **= y     x = x ** y
     */     
var a = 5;
a -= 2;
console.log(a);

// toán tử so sánh
var a = 1;
var b = 2;

if (a < b) {
    alert('Dung');
}
    /** Toán tử so sánh phần 1
     *  Toán tử
     *    ==        --> Bằng
     *    !=        --> không bằng
     *    >         --> lớn hơn
     *    <         --> bé hơn
     *    >=        --> lớn hơn hoặc bằng
     *    <=        --> bé hơn hoặc bằng
     */
    var a = 1;
    var b = 2;

    if (a != b) {
        console.log('Điều kiện đúng!')  //đúng
    } else {
        console.log('Điều kiện sai!')
    }
    
    if (a == b) {
        console.log('Điều kiện đúng!')
    } else {
        console.log('Điều kiện sai!')   //Sai
    }
    /** Toán tử so sánh bằng phần 2 (so sánh tuyệt đối các kiểu dữ liệu như Number và String)
     *      ===     (bằng)
     *      !==     (Khác)
     */
    var a = 1;
    var b = '1';

    console.log(a === b);


// toán tử logic
var a = 1;
var b = 2;

if (a > 0 && b > 0) {
    alert('a & b lớn hơn 0')
} 
/** Toán tử logic
 *  1. && -And      ( tất cả vế đều phải đúng)
 *  2. || - Or      ( chỉ cần 1 vế đúng)
 *  3. ! - Not      ( Phủ định lại điều kiện của câu lệnh)
 */
var a = 1;
var b = 2;
var c = 3;
// 1
if (a > 0 && b > 0 && c > 0) {
    console.log('DIEU KIEN DUNG')
}
// 2
if (a > 0 || b < 0 || c < 0) {
    console.log('DIEU KIEN DUNG')
}

// 3
if (!(a > 0)) {
    console.log('DIEU KIEN DUNG')
}

// toán tử chuỗi (String operato)

var firstName = 'Truong';
var lastName = 'Nam';

console.log(firstName + lastName); // TruongNam
console.log(firstName + ' ' + lastName); // Truong Nam

var ten = 'Truong'; //ko được sữa học thêm ở dòng này =>
ten += ' Nam';      // thêm biến gán vào

console.log(ten);

// kiểu dữ liệu Boolean 
var isSuccess = true;

console.log(isSuccess); // true
    /**
     Để vượt qua thử thách này, hãy tạo biến canBuyAlcohol để thể hiện xem giá trị của biến age có 
    đủ tuổi mua rượu hay không(?).
    Theo luật, người từ 18 tuổi trở lên mới được phép mua rượu.
    */

    var age = 16;
    var canBuyAlcohol = age >= 18;

    if(canBuyAlcohol) {
        console.log('được phép mua');
    } else{
        console.log('Không được phép mua');
    }

// câu lệnh điều kiện if-else 
/**    các giá trị conver sang boolean thành dạng false
 *      0
 *      false
 *      '' - ""
 *      undefined
 *      NaN
 *      null
 */
    var fullName = 'Truong Nam';
    if (fullName) {
        console.log('Điều kiện Đúng');
    } else {
        console.log('Điều kiện Sai');
    }

/*
Kiểu dữ liệu trong javascrip

1. Kiểu dữ liệu nguyên thủy - Primitive Data
        - Number        (số)                           ví dụ: var a = 1;
        - String        (Chuỗi, kí tự)                 ví dụ: var fullName = 'Truong Nam';
        - Boolean       (lưu giá trị đúng hay sai)     ví dụ: var isSuccess = True;
        - Undefined     (khai báo mà ko gán giá trị)   ví dụ: var age;
        - Null          (không có gì nothing)          ví dụ: var isNull = Null;
        - Symbol        (duy nhất unique)              ví dụ: var id = Symbol('id');   

2. Dữ liệu phức tạp - Complex Data
        - Function      (gọi và viết được 1 số thứ)    ví dụ: var myFubction = function() {
                                                            alert('Hi. xin chào!');
                                                        }
        - Object        (gồm 2 phần tử myObject và myArray)
                                                        ví dụ object:   var myObject = {
                                                            name: 'Truong Nam',
                                                            age: 20,
                                                            adress: 'Quang Binh',
                                                            myFunction: function () {
                                                                alert('có thể để function vào object')
                                                            }
                                                        };

                                                        ví dụ về array: var myArray = [
                                                            'Javascript',
                                                            'PHP',
                                                            'Ruby'
                                                        ];
*/








