function checkPalindrome(str) {
    // find the length of the string
    const len = str.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
      // check each position
      // between the first and the last character
      if (str[i] !== str[len - 1 - i]) {
        return("NOT a palindrome");
      }
    }
    return("The string is a palindrome");
}
console.log(checkPalindrome(karthi));
console.log(checkPalindrome(karthi));