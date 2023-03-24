
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
        console.log("el inside filterExample's filter: ", el)
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    let results;
    results=dishes.filter(function(el){
        if(el.cuisine ==="Vegetarian"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let vegetarianFood= problemOne();
console.log('vegetarianFood from problemOne:',vegetarianFood);
//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter
function problemTwo(){
    let input=false;
    while(input==false){
        let cuisineTypes=dishes.map(function(el){
            return dishes.cuisine
        })
        let userInput;
        // this as it is appears as ..... as it is instead of the individual types
        userInput=prompt(`Choose one of these cuisine types: ${cuisineTypes}`);
        let results;
        results=dishes.filter(function(el){
            if(el.cuisine === userInput){
                input=true;
                return true;
            }
            else{
                return false;
            }
        })
        return results;
    }
}
let cuisineChoices=problemTwo();
console.log('cuisineChoices from problemTwo:',cuisineChoices);



//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function problemThree(){
    let results;
    results=dishes.filter(function(el){
        if(el.cuisine ==="Italian" && el.servings>5){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let ItalianFood= problemThree();
console.log('ItalianFood from problemThree:',ItalianFood);



//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter
function problemFour(){
    let results;
    results=dishes.filter(function(el){
        if(el.id===el.servings){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let idServings= problemFour();
console.log('idServings from problemFour:',idServings);



//5. Create a function that will return only dishes whose serving count is even.
//Filter
function problemFive(){
    let results;
    results=dishes.filter(function(el){
        if(el.servings%2==0){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let seven= problemFive();
console.log('seven from problemFour:',seven);


//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter
function problemSix(){
    let results;
    results=dishes.filter(function(el){
        if(el.ingredients.includes("chickpea")==true){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let ingreadients= problemSix();
console.log('ingreadients from problemSix:',ingreadients);


//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter
function problemSeven(){
    let userInput;
    // this as it is appears as ..... as it is instead of the individual types
    userInput=prompt(`What ingredient are you looking for? `);
    let results;
    results=dishes.filter(function(el){
        if(el.ingredients.includes(userInput)==true){
            return true
        }
        else{
            return false
        }
    })
    return results;
}
let selectedIngredient=problemSeven();
console.log('selectedIngredientfrom problemSeven:',selectedIngredient);



//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map
function problemEight(){
    let results;
    results=dishes.map(function(el){
        return el.cuisine;
    })
    let cuisine=[];
    let noDuplicates;
    noDuplicates=results.filter(function(el){
        if(cuisine.includes(el)==false){
            cuisine.push(el);
            return true
        }
        else{
            return false
        }
    })
    return noDuplicates;
}
let cuisineOptions=problemEight();
console.log('cuisineOptions from problemSeven:',cuisineOptions);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 
function problemNine(){
    let results;
    results=dishes.map(function(el){
        return el.cuisine+" "+el.name;
    })
    return results;
}
let concatinated=problemNine();
console.log('concatinated from problemNine:',concatinated);


//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]
function problemTen(){
    let result=[]
    let results;
    results=dishes.map(function(el){
        if(el.cuisine=="Vegetarian"){
            result.push(el.cuisine+" "+el.name)
            return true
        }
        else{
            return false
        }
    })
    return result ;
}
let vegiDish=problemTen();
console.log('vegiDish from problemTen:',vegiDish);




//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function problem11(){
    let result;
    result=dishes.filter(function(el){
        if(el.ingredients.includes("tomato")||el.ingredients.includes("cheese")){
            return true
        }
    })
    return result;
}
let specificDish=problem11();
console.log('speificDish from problem11',specificDish);

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
function servingsPerDish() {
    let result;
    result=dishes.map(function(el){
        return el.servings
    })
    return result
}
function problem12(){
    let servingsPer;
    servingsPer =servingsPerDish();
    let result;
    result=servingsPer.reduce(function(total,count){
        return total+count;
    })
    return result
}
let totalDishes=problem12();
console.log('totalDishes from problem12',totalDishes);
//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
debugger
function problem13(){
    let results=[]
    let mult=[]
    let single=[]
    let first;
    first=dishes.map(function(el){
        if(mult.includes(el.cuisine)){
            if(single.includes(el.cuisine)){
                single.pop(el.cuisine)
                return false
            }
            return false
        }
        else{
            mult.push(el.cuisine)
            single.push(el.cuisine)
            results.push(el)
            return true
        }
    })
    let result;
    result=results.filter(function(el){
        if(single.includes(el.cuisine)){
            return el
        }
    })

    return result
}
let uniqueDishes=problem13();
console.log('uniqueDishes from problem13', uniqueDishes);