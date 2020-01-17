function tempo(data1, data2, unidade){
 var a = new Date (data1);
var c = new Date (data2);
 var b = unidade;
 var f = Math.abs(a.getTime() - c.getTime()); 
 var g = Math.ceil(f / (1000 * 60 * 60 * 24));
 var x = g.toFixed(0);
 var h = g/30;
 var y = h.toFixed(0);
 var i = (g/30)/12;
 var z = i. toFixed(0);
 if (b === "dia")
 return  Number(x);
else if (b === "mês")
    return  Number(y);
    else if (b === "ano")
    return  Number(z)
}