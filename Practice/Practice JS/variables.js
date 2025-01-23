// Function to count words in a sentence
function countWords(sentence) {
    let words = sentence.trim().split(/\s+/);
    return words.length;
}

// Example usage
let sentence = "JavaScript is a versatile language.";
console.log(`Word count: ${countWords(sentence)}`);
