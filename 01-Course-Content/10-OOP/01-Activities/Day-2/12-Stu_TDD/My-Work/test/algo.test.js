const Algo = require("../algo");

describe("Algo", () => {
    describe("reverse", () => {
        // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
        test("should take a string as an argument and return a new reversed version of the string", () => {
            expect(Algo.reverse("hello")).toEqual("olleh");
            expect(Algo.reverse("foo bar")).toEqual("rab oof");
            expect(Algo.reverse("")).toEqual("");
        });
    });

    describe("isPalindrome", () => {
        // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
        test("should take a string as an argument and return the boolean `true` if the provided string is a palindrome", () => {
            expect(Algo.isPalindrome("racecar")).toBe(true);
            expect(Algo.isPalindrome("hello")).toBe(false);
            expect(Algo.isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
        });
    });

    describe("capitalize", () => {
        // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
        test("should take a string as an argument and return a new string with the first letter of each word capitalized", () => {
            expect(Algo.capitalize("hello world")).toEqual("Hello World");
            expect(Algo.capitalize("foo bar")).toEqual("Foo Bar");
            expect(Algo.capitalize("")).toEqual("");
        });
    });
});
