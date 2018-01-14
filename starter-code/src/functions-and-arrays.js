// Find the maximum

function maxOfTwoNumbers (item1, item2) {
  if (item1>item2) {
     return item1;
   }
   else {
     return item2;
   }
 }



 // Finding Longest Word

 var words = [
   'mystery',
   'brother',
   'aviator',
   'crocodile',
   'pearl',
   'orchard',
   'crackpot'
 ];

 function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0) {
    return;
  }
  else {
    var longest = "";
    for (var i=0; i < arrayOfWords.length; i++) {
      if (arrayOfWords[i].length > longest.length) {
        longest = arrayOfWords[i];
      }
    }
    return longest;
  }
}

findLongestWord(words);


 // Calculating a Sum

 var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

 function sumArray(nums) {
   if (nums.length === 0) {
     return 0;
   }
   var total = 0;
   for ( i= 0; i <nums.length; i++) {
     total = total + nums[i];
   }
   return total;
 }

// or ...

function sumArray(nums) {
  var total = nums.reduce(function(a,b) {
    return a + b;
  }, 0)
  return total;
}

sumArray(numbers);


 // Calculate the Average
 var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

 function averageNumbers(arr) {
  var total = arr.reduce(function (a,b) {
    return a + b;
  }, 0)
  var average = total / arr.length;
  return average;
}

averageNumbers(numbersAvg);


 // Array of Strings

 var wordsArr = [
   'seat',
   'correspond',
   'linen',
   'motif',
   'hole',
   'smell',
   'smart',
   'chaos',
   'fuel',
   'palace'
 ];

 function averageWordLength(arrayOfWords) {
   if (arrayOfWords.length === 0) {
     return undefined;
   }
   function averageWordLength(arr) {
    var sumWordLength = 0;
    for (i=0; i < arr.length; i++) {
      sumWordLength += arr[i].length;
      return sumWordLength;
    }
    return sumWordLength;
  }
  
  averageWordLength(wordsArr);


 // Unique Arrays
 var wordsUnique = [
   'crab',
   'poison',
   'contagious',
   'simple',
   'bring',
   'sharp',
   'playground',
   'poison',
   'communion',
   'simple',
   'bring'
 ];
 function uniquifyArray(arrayOfWords) {
   if (arrayOfWords.length === 0) {
     return undefined;
   }
   var newArray = [];
   for (i = 0; i < arrayOfWords.length; i++) {
     if (newArray.indexOf(arrayOfWords[i]) === -1) {
       newArray.push(arrayOfWords[i]);
     }
   }
   return newArray;
 }
 // Finding Elements

 var wordsFind = [
   'machine',
   'subset',
   'trouble',
   'starting',
   'matter',
   'eating',
   'truth',
   'disobedience'
 ];

 function doesWordExist(arrayOfWords,item) {
  return arrayOfWords.includes(item);
}

doesWordExist(wordsFind, 'trouble');


 // Counting Repetion

 var wordsCount = [
   'machine',
   'matter',
   'subset',
   'trouble',
   'starting',
   'matter',
   'eating',
   'matter',
   'truth',
   'disobedience',
   'matter'
 ];

 function howManyTimes(arrayOfWords,item) {
   if (arrayOfWords.length === 0) {
     return false;
   }
   var nTimes = []
     for (i=0; i < arrayOfWords.length; i++) {
     if (arrayOfWords[i] === item) {
       nTimes.push(item);
     }
   }
   return nTimes.length;
 }
 