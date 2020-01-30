function animais (array){
for (i=0;i<array.length;i++) {
    delete(array[i].altura)
    array[i].idade=5+i
}
return array}