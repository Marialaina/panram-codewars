let string = "ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"

// const aCount = [...new Set(string)].map(x => [x, string.filter(y => y === x).length]);
// const string2 = [...new Set(string.replace(/[^A-Za-z]/g , '').toLowerCase())];

// console.log(string2);


// var string = '123abcABC-_*(!@#$%^&*()_-={}[]:\"<>,.?/~`';
// var stripped = string.replace(/[^A-Za-z]/g , '');
// questionText = stripped.replace(/[0-9]/g, '');
// console.log(stripped)





// const isPangram = (string) => {
//     //every letter in the alphabet
//     const newArrt = ([...Array(26)].reduce(a => a + String.fromCharCode(i++), '', i = 97 )).split("");
//     //A function that removes a character if there is more than one of the same in the array
//     const unique = (value, index, self) => { return self.indexOf(value) === index}    
//     //.split turns a string into an array
//     //I looped over the array and removed all empty spaces / an empty space
//     let newString = string.toLowerCase().split("").filter(unique);
    
    
//     for (let i = 0; i < newString.length; i ++ ){ if (newString[i] === ' ' || newString[i] === "."){ newString.splice(i, 1);}}
    
    
//     // the alphabet is 26 characters, so if the sentence does not have all the letters in the alphabet
//     // then the the length won't be the same.
//     console.log(newString.length  === newArrt.length)
// }
// // isPangram(string);

const isPangram = (string) => {
    //every letter in the alphabet
    const newArrt = ([...Array(26)].reduce(a => a + String.fromCharCode(i++), '', i = 97 )).split("");
    //I created a new array that removes all duplicates and everything that is not an alphabet with .replace method
    const string2 = [...new Set(string.replace(/[^A-Za-z]/g , '').toLowerCase())];
    // the alphabet is 26 characters, so if the sentence does not have all the letters in the alphabet
    // then the the length won't be the same.
    console.log(string2.length  === newArrt.length)
}
isPangram(string);