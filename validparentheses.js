//Objective is to tell whether a set of parentheses is valid.
//For example... () is valid but ()) is not valid.
//Parentheses include (), [], and {}

let parentheses = '()'



//O(n) solution using a stack

let map = {
    ']': '[',
    ')': '(',
    '}': '{'
}

let stack = []

//Check each element...
//If the element is an opening bracket, push it in
//Otherwise, if it's a closing bracket, check if the top of the stack has the corresponding opening bracket
//Pop the opening bracket out since it's been checked and move on
//If it doesn't correspond, then it's not valid
//If the stack still has elements by the end of the counter, it's not valid
for (let i = 0; i < parentheses.length; i++) {
    if (map[parentheses.charAt(i)]) {
        let topElement = stack.length > 0 ? stack.pop() : '#'
        if (map[parentheses.charAt(i)] !== topElement) {
            return false
        }
    } else {
        stack.push(parentheses.charAt(i))
    }
}

return stack.length === 0