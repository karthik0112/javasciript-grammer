function reverse (word) {
    word = word.split(" ").reverse().join(" ")
    return word

}
word = 'i like this program very much'
console.log(reverse(word))