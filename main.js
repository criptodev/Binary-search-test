//Given a number search in on array, and if is onordered(the array), order the array first.

//array example:
var myArray = [4, 10, 15, 123, 19, 14, -15]//, 0, 61, 91, 157, 1, 8, 0.5];
//formule:
var lastNum = myArray.length - 1;
var father = Math.floor((lastNum - 1) / 2);
//cicle to find the higher number
for(var i = father; i >= 0; i--){
  //formule children
  var leftCh = 2 * i + 1;
  var rightCh = 2 * i + 2;
  //swap numbers to put the higher at first position in the array
  if (myArray[i] < myArray[leftCh]) {
    var tempFather = myArray[i]
    myArray[i] = myArray[leftCh];
    myArray[leftCh] = tempFather
  }
  if (myArray[i] < myArray[rightCh]) {
    var tempFather2 = myArray[i]
    myArray[i] = myArray[rightCh];
    myArray[rightCh] = tempFather
  }
  //swap the first number of the array with the last number
}


console.log(myArray);
