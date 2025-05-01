let regex= /naveed/g
let text="My name is naveed naveed"
// Regex will replace it globally
console.log(text.replace(regex,"sarim"))

// Website For Cheatsheet
// https://regexr.com/

// For Email Validation
function validateEmail(email) {
    let regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(validateEmail("naveed@gmail.com")); // true (sahi email)
console.log(validateEmail("naveed@com")); // false (domain ghalat hai)
console.log(validateEmail("naveedgmail.com")); // false (`@` nahi hai)

// ^ → shuru se check karo

// [\w.-]+ → kuch bhi ho sakta hai (letter, number, dot, dash) @ se pehle

// @ → @ ka hona zaroori hai

// [a-zA-Z\d.-]+ → @ ke baad domain name ho (letters, numbers, dot)

// \. → dot lagna zaroori hai (example .com)

// [a-zA-Z]{2,} → dot ke baad kam se kam 2 letter (jaise com, pk, org)

// $ → end tak check karo

