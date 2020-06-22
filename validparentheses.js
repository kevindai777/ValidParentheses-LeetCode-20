//Objective is to tell whether a set of parentheses is valid.
//For example... '()' is valid but '())' is not valid.
//Parentheses include (), [], and {}

let parentheses = '()'


//O(n) solution using a stack

//Map out all closing and opening brackets
let map = {
    ']': '[',
    ')': '(',
    '}': '{'
}

let stack = []

//Check each element...
for (let i = 0; i < parentheses.length; i++) {
    //If it's a closing bracket, check if the top of the stack has the corresponding opening bracket
    if (map[parentheses.charAt(i)]) {
        //Pop the opening bracket out to check it w/ the hashmap
        let topElement = stack.length > 0 ? stack.pop() : '#'
        //If it doesn't correspond, then it's not valid
        if (map[parentheses.charAt(i)] !== topElement) {
            return false
        }
    //Otherwise, if the element is an opening bracket, push it in
    } else {
        stack.push(parentheses.charAt(i))
    }
}


//If the stack still has elements by the end of the counter, 
//that means that some elements haven't been accounted for
//Therefore, it's not valid
return stack.length === 0