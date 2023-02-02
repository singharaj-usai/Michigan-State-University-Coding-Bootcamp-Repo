//WRITE YOUR CODE BELOW

let customerDrink = {
    name: "coffee",
    sugar: 3,
    isReady: true
};

const usersChoice = prompt("What drink would you like?");

if (!!usersChoice) {
    customerDrink.name = usersChoice;
};

console.log("Drink name is " + customerDrink.name + " Number of sugar " + customerDrink.sugar);