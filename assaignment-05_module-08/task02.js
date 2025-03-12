// Task 2: Implement a Queue using Two Stacks

class QueueUsingTwoStacks {
  constructor() {
    this.stack1 = []; 
    this.stack2 = []; 
  }

 
  enqueue(x) {
    this.stack1.push(x);
  }


  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      return -1;
    }

    return this.stack2.pop();
  }


  front() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      return -1;
    }

    return this.stack2[this.stack2.length - 1];
  }
}

function queueOperations(operations) {
  let queue = new QueueUsingTwoStacks();
  let result = [];

  operations.forEach((operation) => {
    let parts = operation.split(" ");

    if (parts[0] === "1") {

      queue.enqueue(parseInt(parts[1]));

    } else if (parts[0] === "2") {

      result.push(queue.dequeue());

    } else if (parts[0] === "3") {

      result.push(queue.front());

    }
  });

  console.log(result.join("\n"));
}

// Example Input
let operations = [
  "1 10", // Enqueue 10
  "1 20", // Enqueue 20
  "3", // Front (10)
  "2", // Dequeue (10)
  "3", // Front (20)
  "2", // Dequeue (20)
];


queueOperations(operations);
