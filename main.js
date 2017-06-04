//Given a number search in on array, and if is onordered(the array), order the array first.
//array example:
var myArray = [5, 8, 3, 2, 4, 100, 1500, 1, 0, 18];
console.log(myArray);
var newArray = [];
//formule in j
for (var j = myArray.length - 1; j > 0; j--) {
  //cicle to find the higher number, "i" start with the father formule
  for(var i = Math.floor((j - 1) / 2); i >= 0; i--){
    //formule children
    var leftCh = 2 * i + 1;
    var rightCh = 2 * i + 2;
    //swap numbers to put the higher at first position in the array
    if (myArray[i] < myArray[leftCh]) {
      var tempFather = myArray[i];
          myArray[i] = myArray[leftCh];
          myArray[leftCh] = tempFather;
    }
    if (myArray[i] < myArray[rightCh]) {
      var tempFather2 = myArray[i];
          myArray[i] = myArray[rightCh];
          myArray[rightCh] = tempFather2;
    }
  }
  /*swap the first number of the array with the last number, for this method I use a new array
  and delete the first array*/
  newArray.unshift(myArray[0]);
  myArray.shift();
}
console.log(newArray);
