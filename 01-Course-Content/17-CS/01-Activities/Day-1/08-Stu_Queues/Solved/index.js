class Queue {
  // default value allows queue to instantiate without an argument
  constructor(container = []) {
    this.container = container;
  }

  // adds an element to the back of the queue
  addToQueue(el) {
    return this.container.push(el);
  }

  // removes an element from the front of the queue
  removeFromQueue() {
    return this.container.shift();
  }
}

module.exports = Queue;
