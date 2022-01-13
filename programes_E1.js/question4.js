function reverse (word) {
    word = word.split(" ").reverse().join(" ")
    //return word
    console.log(word);

}
word = 'i like this program very much'
console.log(reverse(word))