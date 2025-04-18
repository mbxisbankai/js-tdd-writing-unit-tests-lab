// Your code here
function isPalindrome(word){
    return word === word.split("").reverse().join("") ? true : false;
}

export default isPalindrome;
