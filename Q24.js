"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// 1• Tests for equality and inequality with strings
const string1 = "HTML";
const string2 = "CSS";
console.log(string1 === string2);
console.log(string1 !== string2);
// // 2• Tests using the lower case function
const mixedCaseString = "Web Developer.";
console.log(mixedCaseString.toLowerCase() === "Web Developer");
console.log(mixedCaseString.toLowerCase() !== "web developer");
// 3• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//  4• Tests using "and" and "or" operators
const Condition1 = true;
const Condition2 = false;
console.log(Condition1 && Condition2);
console.log(Condition1 || Condition2);
// 5• Test whether an item is in a array
// 6• Test whether an item is not in a array
const Brand = ["Alkaram", "Khaadi", "SanaSafina's", "AsimJofa", "GulAhmed"];
console.log(Brand.includes("Khaadi"));
console.log(Brand.includes("j."));
