function fizzbuzz(num1, num2){
    while (num1<=num2){
        var str = "";
        if (num1 % 3 === 0 && num1 % 5 !== 0) {
            str += " " + "Fizz";
        }
        if (num1 % 5 === 0 && num1 % 3 !== 0) {
            str += " " + "Buzz";
        }
        if (num1 % 5 === 0 && num1 % 3 === 0){
            str += " " + "FizzBuzz";
        }
            console.log(num1+ str)
        num1++
    }
}