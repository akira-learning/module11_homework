function printNumber(num1, num2) {
    let number = num1;

    let twoNumbersInterval = setInterval(function () {
        console.log(number);
        if (number == num2) {
            clearInterval(twoNumbersInterval);
        }
        number++;
    }, 1000);
}

printNumber(1, 9);
