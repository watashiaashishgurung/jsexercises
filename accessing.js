// accessing characters in a string

const str = "Hello, World!";

// accessing the first character
const firstCharacter = str[0];

// accessing the last character
const lastCharacter = str[str.length - 1];

console.log(`First character: ${firstCharacter}`);
console.log(`Last character: ${lastCharacter}`);

// Define the sentence variable
const sentence = "The quick brown fox jumps over the lazy dog";

sentence.length; // 44
console.log(sentence.length);

// Check if the sentence includes the word "fox"
const hasFox = sentence.includes("fox");
console.log(hasFox); // true

// Find the index of the word "fox"
const indexFox = sentence.indexOf("fox");
console.log(indexFox); // 16

// Find the index of the word "fox" starting from the end of the sentence
const subText1 = sentence.substring(4, 9);
console.log(subText1); // quick

// Extract the word "dog" from the sentence
const subText2 = sentence.substring(43-4);
console.log(subText2); // dog

// Extract the word "other" from the sentence
const text = 'Hello from the other side';
const updatedText = text.replace('other', 'this');
console.log(updatedText); // Hello from the this side

// Replace the word "Hello" with "Hi"
const updatedText2 = text.replace('Hello', 'Hi');
console.log(updatedText2); // Hello from the this side


// Splitting a string into an array
const csvData = "Alice, 25, New York;Bob, 30, Los Angeles;Charlie, 35, Chicago";
const peopleArray = csvData.split(';');
console.log(peopleArray);


// trimming a string
const Text5 = "   Trim me!   ";
console.log(Text5.length);

const trimmedText = Text5.trim();
console.log(trimmedText.length);
