// Your tests here
import isPalindrome from "../utils";

describe("isPalindrome", () => {
    it("returns true if word is a palindrome, otherwise it returns false", () => {
        const word1 = "racecar";
        const word2 = "car";

        const reversedword1 = isPalindrome(word1);
        const reversedword2 = isPalindrome(word2);

        expect(reversedword1).toBe(true);
        expect(reversedword2).toBe(false);
    })
})