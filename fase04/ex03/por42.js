function por42(n1, n2){
   var a = (Math.floor(n1/42)+1)*42;
    var b = (Math.floor(n1/42)+2)*42;
   if (n1 % 42===0 && a<=n2 )
    return a;
    if (n1 %42 !== 0 && b<= n2)
    return b;
else {console.log("Não encontrado");
return false}
}