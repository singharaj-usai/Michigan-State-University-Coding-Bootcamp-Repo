// TODO: Refactor the class to a factory function.
// To refactor the Lesson class to a factory function, you can define a function with the same name as the class and move the content of the constructor inside it.
// Then, you can use the factory function to return an object containing the properties and methods of the Lesson class.
class Lesson {
    constructor() {
        this.title = 'Module 17 - Computer Science';
        this.description = 'CS for JS';
    }

    information() {
        console.log(this.title, this.description);
    }
}

const csForJS = new Lesson();
csForJS.information();

// Here's how the refactored code looks like:
//function Lesson() {
//  const lesson = {};
//  lesson.title = 'Module 17 - Computer Science';
//  lesson.description = 'CS for JS';
//  lesson.information = function() {
//    console.log(this.title, this.description);
//  }
//  return lesson;
//}

//const csForJS = Lesson();
//csForJS.information();
// This should output the same result as the original code.