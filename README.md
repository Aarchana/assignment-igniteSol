# typescript-xc6uk1

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-xc6uk1)

/* (Q_N0.1)
  @function shiftArrayElements rtates an array by N positions.
  @param Input Array (arr) whose elements needs to be shifted
  @param positionsToShift indicates number of positions to be shifted
  @return An array with elements shifted as per the input param
*/
function shiftArrayElements(arr, positionsToShift=0) {
  let toBeshiftedElements = arr.splice(-positionsToShift);
  arr.unshift(...toBeshiftedElements);
  return arr;
}

console.log(shiftArrayElements([1,2,3,4,5,6], 2));
//------------------------------------- -----------------------------------------------------
// (Q_N0.2)
//When double equals is used, if the operands are of different types, js converts either of the operands to similar type as the other one.
//In short with == only values are compared but not types.

"0"==0 
// returns true because "0" (a string of type Object) will be converted to numeric 0 by js and then strict comparision will be carried out.

""==0
// returns true Empty string (a string of type Object) will be converted to primitive type in this case number i.e, 0 and then comparision is carried out.

"" == "0"
// returns false Since both are of type string so no conversion takes place the contents will be directly compared which would result in false.

//------------------------------------- -----------------------------------------------------
// (Q_N0.3)
function weird(x) {
var tmp = 3;
return function(y) {
return x + y + ++tmp;
}
}
var funny = weird(2);
var final_answer = funny(10);

// The final answer would be 16. This is a nested function where in calling weird(2) returns the fn(y) and this inner fn(y) has access to the variables in its outer scope variables(concept of closure).
//when finally funny(10) is called the value is evaluated (2+10+4) =16.

//------------------------------------- -----------------------------------------------------
// (Q_N0.4)
function Person(name) {
this.name = name;
}
Person.prototype.intro = function () {
console.log("Hello I am " + this.name);
}
var person = new Person("John");

person.intro();
// Here since person is already instantiated by paasing the name property calling intro on Person would return
// Hello I am John 

person.intro.apply();
//apply method can take diffenent objects and execute the function called on it, since the object is not passed it will print
// Hello I am

person.intro.apply({'name' : 'Jack'});
//It will log Hello I am Jack, Since we are paasing different object to it


var name = "Jim";
person.intro.apply(null);
//It will log Hello I am Jim,
// Since we are specifying the object to be null when the js engine sees that it cannot find name in function scope it seaches name in the global scope and finds it, thus logs `Hello I am Jim`
 
var intro = person.intro;intro();
//It will log Hello I am Jim
// -------------------------------------- -------------------------------------------------------
/* (Q_N0.5)
  @function takes in an encoded string and splits the encoded string into characters
  and checks if each character code is either an upper or lower case letter, if so applies decoding logic and returns decoded char code,
  else returns the same char code and finally the decode char code is converted to appropriate char and joined to return the final decoded ouput string.

  @param string which is encoded
  @return string which is decoded
*/
function decodeString(encodedString: String) {
  let decodedString = 
      encodedString.split('')
      .map((char,index) => { 
        let charCode = encodedString.charCodeAt(index);
        if(isUpperOrLowerCaseLetter(charCode)) {
          let decodedCharCode = charCode-3;
          if(isUpperOrLowerCaseLetter(decodedCharCode))
          return decodedCharCode;
          else
          return decodedCharCode+26;
        }
        return char;
      })
      .map(code =>  {
        if(typeof(code) == "number") {
          return String.fromCharCode(code);
        }
        return code;
      })
      .join('');
  console.log(decodedString)
}
/* 
@function isUpperOrLowerCaseLetter is returns true if the input char code is either an upper or lower case letter code
  @param character code(ASCII)
  @return true/false (Boolean)
*/
function isUpperOrLowerCaseLetter(charCode) {
  let isUpperCaseLetter = charCode>=65 && charCode<=90;
  let isLowerCaseLetter = charCode>=97 && charCode<=122;
  return isUpperCaseLetter||isLowerCaseLetter;
}

// -------------------------------------------- ----------------------------------------------



'Write ​a ​program ​(in ​Python, ​JavaScript ​or ​Ruby) ​to ​populate ​and ​then ​sort ​arandomly ​distributed ​list ​of ​1 ​million ​integers, ​each ​integer ​having ​a ​value ​>= ​1 ​and ​<=100 ​without ​using ​any ​builtin/external ​library/function ​for ​sorting.Your ​program ​should ​carefully ​consider ​the ​input ​and ​come ​up ​with ​the ​most ​efficientsorting ​solution ​you ​can ​think ​of. ​Provide ​the ​space ​and ​time ​complexity ​of ​your ​algorithm'
/* (Q_N0.6) - Using divide and conquer approach
  @function sort takes in an input array and  recursively calls itself to split the array till the each element of an array represents an array of itself
  for ex: [34,45,76,8,12] => [[34],[45],[76],[8],[12]] and then uses merge method written below to sort and merge.
  @param arr Array to be sorted
  @return an array which is sorted.
*/
  function sort(arr) {
    if(arr.length===1) {
      return arr;
    }
    const midIndex = Math.floor(arr.length/2);
    const leftHalfArr = arr.slice(0, midIndex);
    const rightHalfArr = arr.slice(midIndex);
    return merge(sort(leftHalfArr),sort(rightHalfArr));
  }

/*
  @function merge takes two sorted arrays and checks each element of both the arrays whichever is small that array element would be copied to
  the result and iteration repeats till either of the two arrays end. Later since the input arrays were already sorted, the remaing elements of either of the arrays would be simply copied to the resultant array.
  @param two sorted arrays
  @return an array which is again sorted based on the input.
*/
  function merge(sortedArr1, sortedArr2 ) {
    let resultantArr = [];
    while(sortedArr1.length && sortedArr2.length) {
      if(sortedArr1[0] <= sortedArr2[0]) {
        resultantArr.push(sortedArr1.shift());
      } else {
        resultantArr.push(sortedArr2.shift());
      }
    }
    
    return [...resultantArr,...sortedArr1,...sortedArr2];
  }

  console.log(sort([12, 11, 13, 5, 6, 7]));

  // Time Complexity - O(NlogN)
  // Space complexity - O(N)

//------------------------------------- ---------------------------------------
// (Q_N0.7)
// box-sizing border box

// Element's renedered width = padding+ width + border
// Element's renedered height = padding + height + border

// For box-sizing border box If you specify padding, height, width or border, it is all included in the element's rendered height or width .
// It is useful when it used in responsive web design i.e Width of the parent is properly utilized by child elemnets.
// The child elements content do not overflow of the parents rendering area.

// ------------------------------------------------ -------------------------------------------------
// (Q_N0.8)
// ​issues ​you ​must ​be ​wary ​of ​when ​building ​a ​multilingual ​website:

// 1.should not hardcode any text in your code [ex: Product title or descrition or similar]
// 2.Make sure even while concatinating static and dynamic string's the static string is not directly used.
// 3.The word length or characters could vary in each language so be cautious while specifying the width of an element 
// for ex: button, instead of specifying the width , we can specify min-width and padding so that content donot break or overflow.
// 4.Make sure the language settings are specified on a very catchy place, so that user does not have to search for it a lot.
// 5. Addtional css support might be required while supporting for languages like Arabic where the text is read from right to left.

// ----------------------------------------------------------- ---------------------------------------------
// (Q_N0.9)
 Why ​is ​it ​generally ​a ​good ​idea ​to ​position ​CSS ​‘<link>’s ​between ​‘<head></head>’ ​and ​JS
 ‘<script>’s ​just ​before ​‘</body>’? ​Do ​you ​know ​any ​exceptions? ​Please ​explain ​‘async’, ​‘defer’
 attributes ​of ​script ​tags.

 In general scripts take longer time to get loaded and executed so this extends the display time, to aviod slow page loading it's sugested that script tags should be placed right before the body ending tag(</body)
 So that DOM is evaluated first and page is displayed faster.
 And css styles should be in the head tags so that the styling applied to element is available as soon as the page loads.  

 By adding async or defer attribute we can speed up loading of the page.But both of them are effective when added in head tag.

 By async the scripts are loaded asynchronusly, the order of the scripts execution does not depend on the order in which script tags are inserted.
 Ex:  <script async src="./random.js"></script>
 The HTML parsing will be paused while exceuting the script and once the script is executed the HTML parsing will be resumed.

 By defer the scripts are loaded asynchronusly, the order of the scripts follows in the way that's written in head tag.
 Ex:  <script defer src="./random.js"></script>
 The script execution will be carried out only after HTML is completely parsed.

// --------------------------------------    -----------------------------------------------------------------------------------
// (Q_N0.10)
Basically Resetting and Normalizing are used to have similar styling and behaviour across different platforms and browsers.
Resetting — Resetting is meant to reset or strip off all default browser styling on elements. 
For e.g. margins, paddings, font-sizes of all elements are reset, so all elements would look alike. You will have to redeclare styling for all the elements that you use.
Normalizing — Normalizing preserves useful default styles rather than unstyling everything. 
It also corrects bugs for common browser dependencies.

If the website needs to be totally customized with respect to styles then resetting would be better
I would prefer Normalizing over reset because most of the times,
it is desirable to preserve basic css styling rather than specifying everything on our own. If you choose to reset and if all the styles are not properly handled then this could mess up the HTML elements apperance.


