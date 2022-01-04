function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return("NOT a palindrome");
      }
    }
    return("The string is a palindrome");
}
console.log(checkPalindrome("redivider"));
console.log(checkPalindrome("karthi"));