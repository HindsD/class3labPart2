function pizzaMath(){
    let totalPizza = parseFloat( prompt("How many Pizza's will you order"));
    let totalToppings = parseFloat(prompt("What is the amount of total toppings?"));
    let totalPeople = parseFloat(prompt("How many of you are there total?"));
    let totalCost = (totalPizza * 15) + (totalToppings * 1.25);
    let costPerPerson = totalCost / totalPeople;
    let displayCPP = costPerPerson.toFixed(2);
    alert(`The cost will be $${displayCPP} per person.`)
}