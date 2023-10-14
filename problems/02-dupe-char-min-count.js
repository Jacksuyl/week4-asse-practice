/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	// Your code here
	let charcount = {};

	for (let char of string){
		if(charcount[char]){
			charcount[char]++;
		}else {
			charcount[char] = 1;
		}
	}
	return charcount;
}

function duplicateCharMinCount(string, minCount) {
	// Your code here
	let charcount = countCharacters(string);
	let arr = [];

	for (let char in charcount){
		if(charcount[char] >= minCount){
			arr.push(char);
		}
	}
	return arr;
}


duplicateCharMinCount("apple", 2) // ["p"]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
