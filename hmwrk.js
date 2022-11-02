//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function parse(person3){
    for(let i = 0; i < Object.keys(person3).length; i++){
        console.log(Object.values(person3)[i])
    }
    return person3
}
parse(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age){
    this.name = name;
    this.age = age;
    
    this.printInfo = function(){
        console.log(`This persons name is ${this.name}, and they are ${this.age} years old.`);

        return `Returned Value`
        }
        this.age++;
        return console.log(`${this.age}`)
    }
    
let my_person = new Person(`Daniel`, 18)
console.log(my_person.printInfo())
let my_person2 = new Person(`Sully`, 7)
console.log(my_person2.printInfo())


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isBigWord = (word) => {
    return new Promise( (resolve,reject) => {
        if(word.length > 10 ){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
isBigWord('strawberry-shortcake')
//Happy resolver path
.then( (result) => {
    console.log(`Big word `)
})
//Sad Reject path
.catch( (error) => {
    console.log(`Small Number`)
})


// CODEWARS QUESTIONS
function removeChar(str){
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(i !== 0 && i !== str.length -1) {
            newStr += str[i]
        }
    }
    return newStr
}

var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}