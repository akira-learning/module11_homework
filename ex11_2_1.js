let renArr = [null, 0, 1, 22, 32, 1, 4, "a", "text", "", 19, NaN, NaN];
let renArr2 = [null, 0, 1, 22, 22, 66, 32, 1, 4, "a", "привет", "text", "", 19, NaN, NaN];
let evenEl = 0;
let oddEl = 0;
let zeroEl = 0;
let notNum = 0;

function someArray(arr){
    for (let i = 0; i < arr.length; i++) {
        if(typeof (arr[i]) == "number" && isNaN(arr[i]) == false && arr[i] != 0){
            
            if(arr[i] % 2 == 0){
                evenEl++;
            } else {
                oddEl++;
            }
        } else if(arr[i] == 0){
            zeroEl++;
        } else {
            notNum++;
        }
      
    }
    console.log (arr);
    console.log("Количество чётных элементов в массиве: " + evenEl + "\nКоличество нечётных элементов в массиве: " + oddEl + 
    "\nКоличество нулей в массиве: " + zeroEl + "\nКоличество элементов, не являющихся числом: " + notNum);
}

someArray(renArr);