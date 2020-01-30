function animais (x){
for (i=0;i<x.length;i++) {
    delete(x[i].altura)
    x[i].idade=5+i
}
return x
}