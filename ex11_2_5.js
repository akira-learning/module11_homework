const degree = (num1, num2) => {
    let result = num1;

    for (let i = 1; i < num2; i++) {
        result *= num1;
    }
    console.log(result);
    return result;
}

degree(2, 5);
