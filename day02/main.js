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