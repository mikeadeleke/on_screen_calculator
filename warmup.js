// 1. 

var x = [1, 2, 3, 4, 5]

function mymax(x) {
  console.log(Math.max.apply(Math, x));
}

// 2. 

function vowel_count(str) {
  vowels = 0;
  var is_vowel = function(x) {
    if (x === "a" || x === "b" || x === "c" || x === "d" || x === "e") {
      return true;
    } else {
      return false;
    };

    for (var i = 0; i < str.length; i++) {
      if (is_vowel(str[i])) {
        vowels++;
      }
    }
    return vowels;
  }
}

// 3. 

function reverse(str) {
  return str.split("").reverse().join(""); 
}