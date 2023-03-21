// What does the following code return?
new Set([1,1,2,2,3,4])
//{1,2,3,4}

// What does the following code return?
[new Set("referee")].join("") 
// "ref"


// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//   0: {Array(2) => true}
//   1: {Array(2) => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(str) {
    let vowelMap = new Map();
    
    let chars = str.toLowerCase().split("");
    
    let vowels = "aeiou";
  
    for (let char of chars) {
      // If the character is a vowel
      if (vowels.includes(char)) {
        if (vowelMap.has(char)) {
          vowelMap.set(char, vowelMap.get(char) + 1);
        }
        else {
          vowelMap.set(char, 1);
        }
      }
    }
  
    return vowelMap;
  }
