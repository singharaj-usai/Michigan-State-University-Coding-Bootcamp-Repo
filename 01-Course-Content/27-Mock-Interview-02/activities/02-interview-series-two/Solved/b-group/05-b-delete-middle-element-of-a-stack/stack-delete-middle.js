function Stack() {

  this.data = [];

  this.add = function (record) {
    this.data.push(record)
  }

  this.remove = function () {
    return this.data.pop();
  }

  this.peek = function () {
    return this.data[this.data.length - 1];
  }
  this.empty = function () {
    this.data = [];
  }
  this.deleteMid = function () {
    // If stack is empty or all items 
    // are traversed 
    if (this.data.length === 0) {
      return "Nothing in your Stack";
    }

    // This method works `in place` by defining a midpoint and then shifting the midpoint through the stack until it's at the top (the last index in data); then, it removes it.

    var midPoint = Math.floor(this.data.length / 2);
    for (var i = midPoint; i < this.data.length - 1; i++) {
      this.data[midPoint] = this.data[midPoint + 1]
    }
    this.remove();


    // var temp = [];
    // var midPoint = Math.floor(this.data.length / 2);
    // for (var i = 0; i < this.data.length; i++) {
    //   if (i !== midPoint) {
    //     temp.push(temp.push(this.data.length))
    //   }
    // }
    // this.data = temp;

  }

}

// Testing

var stack = new Stack();
stack.add("bottom");
stack.add("middle");
stack.add("top");

console.log("Before", stack.data);

stack.deleteMid();

console.log("After", stack.data);
