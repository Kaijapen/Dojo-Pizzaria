function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}


function randomPizza(){
    // invar for all of the things a pizza could have on it
    var random_pizza = {
        crustType: ["deep-dish", "stuffed-crust", "hand tossed", "thin"],
        sauceType: ["traditional", "marinara", "barbecue", "white-sauce"],
        cheeses: ["mozzarella", "cheddar", "feta"],
        toppings: ["sausages", "pepperonis", "grilled chicken", "sauteed onions", "anchovies", "mushrooms", "olives", "basil"]
    };


    // invars for important variables
    var random_cheeses = [];
    var random_toppings = [];
    // random amount of cheese / toppings based on their array lengths
    var cheese_amount = Math.floor((Math.random() * random_pizza["cheeses"].length) + 1);
    var toppings_amount = Math.floor((Math.random() * random_pizza["toppings"].length) + 1);

    // random crust option and sauce option
    var random_crustType = random_pizza.crustType[Math.floor(Math.random() * random_pizza["crustType"].length)];
    var random_sauceType = random_pizza.sauceType[Math.floor(Math.random() * random_pizza["sauceType"].length)];

    // adds a random cheeses until the amount is reached
    for (var i = 0; i < cheese_amount; i++){
        var j = Math.floor(Math.random() * random_pizza["cheeses"].length);
        random_cheeses.push(random_pizza.cheeses[j]);
    }
    
    // adds a random topping until the amount is reached
    for (var i = 0; i < toppings_amount; i++){
        var j = Math.floor(Math.random() * random_pizza["toppings"].length);
        random_toppings.push(random_pizza.toppings[j]);
    }


    // loops through the random_cheeses array to check if there are duplicates
    // then removes duplicate cheeses
    for (var i = 0; i < random_cheeses.length; i++){
        for (var j = 1; j < random_cheeses.length; j++){
            // if the same index is reached, continue to the next loop
            if (i == j){
                continue;
            // if the cheese is the same at these 2 indexes
            // remove the duplicate cheese
            }else if(random_cheeses[i] == random_cheeses[j]){
                random_cheeses.splice(j);
            }
        }
    }

    // loops through the toppings array to find duplicates and remove them
    for (var i = 0; i < random_toppings.length; i++){
        for (var j = 1; j < random_toppings.length; j++){
            // if the same index is reached by both for loops, continue the loop
            if (i == j){
                continue;
            // if the toppings at these 2 indexes are the same
            // remove the duplicate topping
            } else if (random_toppings[i] == random_toppings[j]){
                random_toppings.splice(j, 1);
            }
        }
    }
    
    // creates a variable calling the pizzaOven function, assigning the random variables to it.
    var newPizza = pizzaOven(random_crustType, random_sauceType, random_cheeses, random_toppings);

    // returns the variable from above
    return newPizza;
}





// pizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

// console.log(pizza);

// pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);


// console.log(pizza2);

// pizza3 = pizzaOven("stuffed-crust", "barbecue", ["mozzerella", "cheddar"], ["grilled chicken", "sauteed onions", "basil"]);

// console.log(pizza3);

// pizza4 = pizzaOven("stuffed-crust", "traditional", ["mozzerella"], ["pepperoni", "sauteed onions", "anchovies"]);

// console.log(pizza4);

pizza5 = randomPizza();
console.log(pizza5)

