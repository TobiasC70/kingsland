/*
  Task 1 : Repeating numbers
*/

var repeatNumbers = function(data) {
  // Put your solution here
  var arr = [];

  // for each array in the dataset
  for (var i = 0; i < data.length; i++) {
    var inputArray = data[i];
    var j = 0;
    var output = "";
    // repeat the first number in the array the number of times
    // set out in the second number of the array.
    while (j < inputArray[1] ){
      output = output + inputArray[0];
      j++;
    }
    // for each repeated numbers add to output array
    arr.push(output);
  }
  // return the array of repeated number sets
  return arr;
};

console.log("*** Task 1 ***");
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
  Task 2:
*/

var conditionalSum = function(values, condition) {
  // Your code here
  //return variable
  var sumVal = 0;

  function isEven(num) {
    return num % 2 === 0;
  }

  for (var i = 0; i < values.length; i++) {
    if (condition === "even" && isEven(values[i]) ){
      sumVal = sumVal + values[i];
    }
    else if (condition === "odd" && !isEven(values[i]) ) {
      sumVal = sumVal + values[i];
    }
  }

  return sumVal;
};

console.log("*** Task 2 ***");
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/*
  Task 3 : Talking Calendar
*/

var talkingCalendar = function(date) {
  // Your code here
  //constant varaibles for months and day appends
  const months = ["","January","February","March","April","May","June","July","August","September","October","November","December"];
  const append = ["","st","nd","rd","th"];

  function stripLeadZero(data){
    // remove leading "0" from single digit months
    if (data.startsWith("0") ){
      data = data.substr(1,1);
    }
    return data;
  }

  var tcYr = date.substr(0,4);
  var tcMth = stripLeadZero(date.substr(date.indexOf("/")+1,2));
  var tcDay = stripLeadZero(date.substr(date.lastIndexOf("/")+1,2));
/*  // remove leading "0" from single digit months
  if (tcMth.startsWith("0") ){
    tcMth = tcMth.substr(1,1);
  }
  // remove leading "0" from single digit days
  if (tcDay.startsWith("0") ){
    tcDay = tcDay.substr(1,1);
  }
*/
  var talkingDt = "";

  talkingDt = months[tcMth.valueOf()] + " ";

  if (tcDay.valueOf() >= 4){
    talkingDt = talkingDt + tcDay.valueOf() + append[4] + ", ";
  } else {
    talkingDt = talkingDt + tcDay.valueOf() + append[tcDay.valueOf()] + ", ";
  }

  talkingDt = talkingDt + tcYr;

  return talkingDt;

};

console.log("*** Task 3 ***");
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


var calculateChange = function(total, cash) {
  // Your code here
  const currency = [2000,1000,5000,200,100,25,10,5,1];
  const currencyNames = ["Twenty","Ten","Five","TwoDollar","Dollar","Quarter","Dime","Nickle","Penny"];

  var change = cash - total;
  var leftover = 0;

  var toCustomer = { };

  for (var i = 0; i < currency.length; i++) {
    leftover = change % currency[i];

    if (change != leftover) {
       var part = (change - leftover) / currency[i];
       toCustomer[currencyNames[i]] = part;
       change = leftover;
    }
  }

  return toCustomer;
};

console.log("*** Task 4 ***");
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
