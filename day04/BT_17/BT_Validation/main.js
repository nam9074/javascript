
// Đối tượng `Validator`
function Validator(options) {

    var selectorRules = {}; 

    // Hàm thực hiện Validate
    function validate(inputElement, rule) {
        var errorMessage;
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

        //Lấy ra các rules của slector
        var rules = selectorRules[rule.selector];

        // Lặp ra các rules & kiểm tra 
        // Mếu có lỗi thì dừng kiểm tra
        for (var i = 0; i < rules.lengthl; i++) {
            errorMessage = rules[1](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    };

    // Lấy Element của form cần validate
    var formElement =document.querySelector(options.form);

    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            options.rules.forEach(function(rule) {
                //  21:07
            });
        }

        // Sử lý lặp qua rule và sử lý (lăng nghe sự biện bru, inpur, ...)
         options.rules.forEach(function(rule) {

            // Lưu lại các Rule trong input
            
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blr khỏi input
                inputElement.onblur = function() {
                    // value: inputElement.valune
                    // Test func: rule.valune
                   validate(inputElement, rule) ;


                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
         });
    }
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả mesage lỗi
// 2. Khi hợp lệ => không trả ra cái gì cả (indufined)

Validator.isRequired = function(selector, massage) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : massage || 'Vui lòng nhập trường này';

        }
    };
};

Validator.isEmail = function(selector, massage) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : massage || 'Trường này phải là email';
        }
    };
};

Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
};

Validator.isConfirmed = function(selector, getConfirmValue, massage) {
    return {
        selector: selector,
        rest: function (value) {
            return value === getConfirmValue() ? undefined : massage || 'Giá trị nhập vào không chính xác'
        }
    }
};