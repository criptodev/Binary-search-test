/*
/Given a number search in on array, and if is onordered(the array), order the array first.
//array example:
var myArray = [4, 10, 15, 123, 19, 14, 16]//, 0, 61, 91, 157, 1, 8, 0.5];
//formule:
var lastNum = myArray.length - 1;

//The cicle start whith the array length and every cicle the array need to be reduced by 1, finish when the array have only one nomber
for (var j = lastNum; j > 0; j--) {
  //father formule:
  var father = Math.floor((j - 1) / 2);
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
    var tempHigh = myArray[0];
        myArray[0] = myArray[j];
        myArray[j] = tempHigh;
  }
}
*/
//Given a number search in on array, and if is onordered(the array), order the array first.
//array example:
var myArray = [4, 10, 15, 91, 61, 19, 157];//, 8, 0.5];
//formule:
var lastNum = myArray.length - 1;
for (var j = lastNum; j > 0; j--) {
  console.log(j);
  //cicle to find the higher number
  for(var i = Math.floor((j - 1) / 2); i >= 0; i--){
    //formule children
    var leftCh = 2 * i + 1;
    var rightCh = 2 * i + 2;
    //swap numbers to put the higher at first position in the array
    if (myArray[i] < myArray[leftCh]) {
      var tempFather = myArray[i]
          myArray[i] = myArray[leftCh];
          myArray[leftCh] = tempFather;
    }
    if (myArray[i] < myArray[rightCh]) {
      var tempFather2 = myArray[i]
          myArray[i] = myArray[rightCh];
          myArray[rightCh] = tempFather2;
    }
  }
  //swap the first number of the array with the last number
  var tempHigh = myArray[0];
      myArray[0] = myArray[j];
      myArray[j] = tempHigh;
}
