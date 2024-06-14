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
    console.log('đây là log chạy nhiều lần' +Math.random())
},1000);


