/** product: calculate the product of an array of numbers. */

function product(nums) {
  return nums.reduce((acc, num) => acc * num, 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  return words.reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  return str.split('').filter((char,index) => index % 2 === 0).join('');
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  return arr.indexOf(val);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return str.split('').reverse().join('');
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  function gather(obj) {
    for (let key in obj) {
      if (typeof obj[key] ==='string') {
        result.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        gather(obj[key]);
      }
    }
  }

  gather(obj);
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] ===val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
