//Objective is to tell whether a set of parentheses is valid.
//For example... '()' is valid but '())' is not valid.
//Parentheses include (), [], and {}

let parentheses = '()'


//O(n) solution where n is the length of the given string
//We use a stack to keep track of 'inner' and 'outer' parentheses

//Map out all closing and opening brackets
let map = {
    ']': '[',
    ')': '(',
    '}': '{'
}

let stack = []

for (let i = 0; i < parentheses.length; i++) {
    
    //If it's a closing bracket, check if the top of the stack has the corresponding opening bracket
    if (map[parentheses[i]]) {
        //Pop the opening bracket out to check it w/ the hashmap
        let topElement = stack.length > 0 ? stack.pop() : '#'
        //If it doesn't correspond, then it's not valid
        if (map[parentheses[i]] !== topElement) {
            return false
        }
        
    //Otherwise, if the element is an opening bracket, push it in
    } else {
        stack.push(parentheses[i])
    }
}

//If the stack still has elements by the end of the counter, 
//that means that some elements haven't been accounted for
//Therefore, it's not valid
return stack.length == 0
