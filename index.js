// JavaScript Conditional Statements

// If statement 

// pseudo 

//  if (condition){
//      do something
//  } 
//  outside
    
    
const favoriteNum = 7
const kindaFavorite = 24
const notFavorite = 13

function ifStatement1(num){
    let answer = ''
    if (num === 7){
        answer = 'My Favorite'
    }
    if (num === 24){
        answer = 'Kinda My Favorite'
    }
    if (num !== 7 && num !== 24){
        answer = 'Not my Favorite'
    } 
    return answer
}

console.log(ifStatement1(favoriteNum))
console.log(ifStatement1(kindaFavorite)) 
console.log(ifStatement1(notFavorite)) 

console.log()

// Else If statement

function ifStatement2(num){
    let answer = ''
    if (num === 7){
        answer = 'My Favorite'
    }
    else if (num === 24){
        answer = 'Kinda My Favorite'
    }
    else if (num !== 7 && num !== 24){
        answer = 'Not my Favorite'
    } 
    return answer
}

console.log(ifStatement2(favoriteNum))
console.log(ifStatement2(kindaFavorite)) 
console.log(ifStatement2(notFavorite)) 

console.log()

// Else Statement

function ifStatement3(num){
    let answer = ''
    if (num === 7){
        answer = 'My Favorite'
    }
    else if (num === 24){
        answer = 'Kinda My Favorite'
    }
    else {
        answer = 'Not my Favorite'
    } 
    return answer
}

console.log(ifStatement3(favoriteNum))
console.log(ifStatement3(kindaFavorite)) 
console.log(ifStatement3(notFavorite)) 

console.log()

// Conditional Ternary Operator 

// pseudo 

//  condition ? is true : is false

function ifStatement4(num){
    let answer = 'Not my Favorite'
    num === 7 ? answer = 'My Favorite': null
    num === 24 ? answer = 'Kinda My Favorite' : null
    return answer
}

console.log(ifStatement4(favoriteNum))
console.log(ifStatement4(kindaFavorite)) 
console.log(ifStatement4(notFavorite)) 

console.log()