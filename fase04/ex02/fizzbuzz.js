function fizzbuzz(n1, n2){
    while (n1<=n2){
        var str = " ";
        if (n1 % 3 === 0) {
            str += "Fizz";
        }
        if (n1 % 5 === 0) {
            str += "Buzz";
        }
            console.log(n1+ str)
        n1++
    }
}