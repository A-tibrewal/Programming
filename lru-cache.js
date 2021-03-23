class Node {
  constructor(val, key) {
    this.val = val;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class LRU {
  constructor(limit = 5) {
    this.limit = limit;
    this.size = 0;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }

  get(key) {
    let value;
    if (this.cache[key]) {
      value = this.cache[key].value;
    }
    this.remove(key);
    this.put(key, value);
    return value;
  }

  remove(key) {
    let node = this.cache[key];

    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    delete this.cache[key];
    this.size--;
  }

  ensureLimit() {
    if (this.size === this.limit) {
      this.tail.prev.next = null;
      delete this.cache[this.tail.key];
    }
  }

  put(key, value) {
    this.ensureLimit();
    let newNode = new Node(key, value);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.cache[key] = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.cache[key] = newNode;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

let lruCache = new LRU(3);
lruCache.put("a", 123);
lruCache.put("b", 456);
lruCache.put("c", 789);
lruCache.put("d", 1000);
lruCache.print();
