/*
Requirements
Create a function named longestString that receives an array of strings as an argument.
The function should return the longest string out of the array of provided strings.
If the array contains more than one string of the same length, the first found longest string should be returned.

Sample Input/Output:
input: ['ana', 'ivan', 'jan', 'nick']
output: 'ivan'

input: ['apple', 'pear', 'strawberries', 'mango']
output: 'strawberries'

input: ['foo', 'bar', 'baz']
output: 'foo'

*/

function longestString(arrayOfStrings) {
  // check all the strings

  // we need a variable to store the longest string
  let longestString = "";

  for (let index = 0; index < arrayOfStrings.length; index++) {
    // now we are going to repeat this as many times as the length of the array
    if (arrayOfStrings[index].length > longestString.length) {
      longestString = arrayOfStrings[index];
    }
  }

  // I have to return something
  return longestString;
}

// console.log(longestString(['elephant', 'dog', 'cat', 'hippo', 'giraffe', 'lion']));

/*
Requirements
Create a function named getFullName that receives an object as an argument.
The function should return the concatenated string containing the firstName and lastName property values from the object.
More specifically, the returned string should represent a person's full name based on the provided object that contains the first and last name as its properties. Example object { firstName: 'Tony', lastName: 'Stark'}.

Sample Input/Output:
Example 1:

const webStudent = {
  firstName: 'Ana', 
  lastName: 'Alonso'
}
input: webStudent
output: 'Ana Alonso'
*/

function getFullName(object) {
  // should return something
  let concatenatedString = "";

  concatenatedString = `${object.firstName} ${object.lastName}`;

  return concatenatedString;

  // only in one line:  return `${object.firstName} ${object.lastName}`;
}
const webStudent = {
  firstName: "Ana",
  lastName: "Alonso",
};

// console.log(getFullName(webStudent));

/*
Requirements
Create a function named findUnique that receives an array of words as an argument.
The function should return the first found unique (non-repeating) word.

Sample Input/Output:
input: ['ana', 'ivan', 'jan', 'ana', 'jan']
output: 'ivan'

input: ['fizz', 'foo', 'bar', 'bazz', 'fizz', 'bazz']
output: 'foo'

input: ['apple', 'pear', 'strawberries', 'pineapple']
output: 'apple'

*/

function findUnique1(arrayOfWords) {
  let uniqueWord;
  // inside the array we need to find if the word is repeated more than one time
  for (let index = 0; index < arrayOfWords.length; index++) {
    const wordToCheck = arrayOfWords[index];
    console.log(wordToCheck);

    let isUnique = true;
    for (let innerIndex = 0; innerIndex < arrayOfWords.length; innerIndex++) {
      if (wordToCheck !== arrayOfWords[innerIndex]) {
        console.log(wordToCheck, "is not equal to:", arrayOfWords[innerIndex]);

        isUnique = false;
        break;
      }
    }
    if (!isUnique) {
      console.log(wordToCheck);

      uniqueWord = wordToCheck;
      return uniqueWord;
    }
  }
  return null;
}

function findUnique(wordsArr) {
  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    let isUnique = true;
    for (let j = 0; j < wordsArr.length; j++) {
      if (i !== j && word === wordsArr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return word;
    }
  }
  return null;
}

function danisApproach(wordsArr) {
  let uniqueWord = "";
  let nonRepeatedArray = [];

  nonRepeatedArray = wordsArr.filter((word) => {
    return wordsArr.indexOf(word) === wordsArr.lastIndexOf(word);
  });

  uniqueWord = nonRepeatedArray[0];

  return uniqueWord;
}

console.log(
  danisApproach(["apple", "banana", "hello",  "apple", "orange", "banana", "grape"])
);
