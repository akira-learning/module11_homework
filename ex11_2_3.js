function getNum1(number1){
    return function getNum2(number2){
        console.log(number1 + number2);
    }
}

let result = getNum1(2); //сохраняем результат работы первой функции - getNum1
result(55);

//getNum1(2)(55); аналог записи выше, без создания переменной; Первое число (2) передается в первую функцию, т.е. getNum1, а второе число (55) - в ту функцию, что вернет в качестве результата первая.