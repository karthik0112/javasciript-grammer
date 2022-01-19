function checkPalindrome(str) {
    const length = str.length;
    for (let i = 0; i < length; i++) {
      if (str[i] !== str[length - 1 - i]) {
        return("NOT a palindrome");
      }
    }
    return("The string is a palindrome");
}
console.log(checkPalindrome("redivider"));
console.log(checkPalindrome("karthi"));