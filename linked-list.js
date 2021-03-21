class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  };

  insert(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    };

    let current = this.head;
    while (current.next) {
      current = current.next;
    };
    current.next = newNode;
  }

  print() {
    let current = this.head;
    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;
    // let after = current.next;
    while(current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.head = prev;
  }
}

let ll = new LinkedList();
// ll.insert(1);
// ll.insert(4);
// ll.insert(5);
// ll.insert(10);
// ll.insert(15);
// ll.insert(110);
console.log(ll);
ll.print();
ll.reverse();
console.log(ll);
ll.print();
console.log('end !!');