let inputValue = +prompt("Введите значение (не более 1 000): ");
let valueToNumber = +inputValue;
let minValue = 0;
let maxValue = 1000;
let isSimple = true;

if (typeof valueToNumber == "number" && valueToNumber <= maxValue && valueToNumber >= minValue && valueToNumber != 1 && inputValue != "" && inputValue != null) {

  function simpleNumber() {
    for (let i = 2; i < valueToNumber; i++) {
      if (valueToNumber % i == 0) {
        isSimple = false;
        break; // выйдем из цикла
      } else {
        isSimple = true;
        break;
      }
    }
    return isSimple;
  }
  simpleNumber();

  if (isSimple) {
    alert(valueToNumber + " - простое число");
  } else {
    alert(valueToNumber + " - не является простым числом");
  }

} else if (inputValue == "") {
  alert("Вы ничего не ввели");
} else if (valueToNumber === 1 || valueToNumber === 0) {
  alert("Число не является ни простым, ни составным");
} else {
  alert("Данные неверны. Введите числовое значение от 0 до 1000");
}