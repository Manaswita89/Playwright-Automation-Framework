function isPalindrome(str) {

    const reversedStr=str.split('').reverse('').join('');
    return reversedStr==str;


}

console.log(isPalindrome("level"));
