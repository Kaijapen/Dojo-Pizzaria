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
        crustType: ["deep-dish", "stuffed-crust", "hand tossed", "thin", "gluten free"],
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
        random_pizza.cheeses.splice(j, 1);
        cheese_amount--;
    }
    
    // adds a random topping until the amount is reached
    for (var i = 0; i < toppings_amount; i++){
        var j = Math.floor(Math.random() * random_pizza["toppings"].length);
        random_toppings.push(random_pizza.toppings[j]);
        random_pizza.toppings.splice(j, 1);
        toppings_amount--;
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

