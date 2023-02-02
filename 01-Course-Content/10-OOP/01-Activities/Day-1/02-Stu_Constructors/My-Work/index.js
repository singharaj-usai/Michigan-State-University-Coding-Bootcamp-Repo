// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
}
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
Developer.prototype.introduction = function() {
    console.log(`Hi, my name is ${this.name} and my favorite tech is ${this.tech}.`);
};
// TODO: Create a new object using the 'Developer' constructor
const developer = new Developer('John', 'JavaScript');
// TODO: Call the 'introduction()' method on the new object
developer.introduction();