type node<T> = {
  next?:node<T>;
  value:T[],
  usedIdx: number;
}

export class ArrayLinkedList<T> {
  private nodeLength: number;
  private initialCapacity: number;

  private head?: node<T>;
  private tail?: node<T>;

  constructor(capacity: number = 10) {
    this.nodeLength = 0;
    this.addNode();
    this.initialCapacity = capacity;
  }

  /**
   * If the tail node is full, add a new node to the end of the list and add the item to the
   * tail node
   * @param {T} item - The item to be inserted.
   */
  insert(item: T) {
    if (!this.tail) {
      throw Error("Invalid tail for insertion.");
    }

    // if node is full
    if (this.tail.usedIdx >= this.initialCapacity) {
      this.addNode();
    }

    this.tail.value[this.tail.usedIdx] = item;
    this.tail.usedIdx++;
  }

  /**
   * We get the node at the index, and then we set the item at the index in the node's array
   * @param {number} idx - The index at which you want to insert the item.
   * @param {T} item - The item to be inserted.
   */
  insertAt(idx: number, item: T) {
    const node = this.getNodeAtArrayIdx(idx);
    if (!node) {
      throw Error("Node not found.");
    }

    // idx % initialCapacity will give the number between initial capacity
    node.value[idx % this.initialCapacity] = item;
  }

  /**
   * "Get the node at the given index, and return the value at that index in the node's array."
   * @param {number} idx - The index of the element to get.
   * @returns The value at the index.
   */
  get(idx: number): T | undefined {
    const node = this.getNodeAtArrayIdx(idx);
    return node?.value[idx % this.initialCapacity];
  }

  /**
   * It takes an index and returns the node at that array index
   * @param {number} idx - the index of the element you want to get
   * @returns The node at the given index.
   */
  private getNodeAtArrayIdx(idx: number): node<T> | undefined {
    if (idx > this.size() - 1) {
      throw new Error("Array Index Out of Bound");
    }

    const approxIdx = idx / this.initialCapacity;
    const nodeIdx = Math.trunc(approxIdx);
    const node = this.getNodeAt(nodeIdx);
    return node;
  }

  /**
   * If there is no tail, then the head and tail are the same node, otherwise new node is added to tail.
   * @returns The value of the node at the given index.
   */
  private addNode() {
    const node = { value: [], usedIdx: 0 } as node<T>;
    this.nodeLength++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  /**
   * "Get the node at the given index, or undefined if it doesn't exist."
   * @param {number} nodeIdx - The index of the node we want to get.
   * @returns The node at the given index.
   */
  private getNodeAt(nodeIdx: number): node<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < nodeIdx; ++i) {
      curr = curr.next;
    }
    return curr;
  }

  /**
   * It returns the number of elements in array linked list.
   * @returns The size of the list.
   */
  size(): number {
    return (this.nodeLength - 1) * this.initialCapacity + this.tail!.usedIdx;
  }

  /**
   * Start at the head, and for each node, print the value and move to the next node.
   */
  print() {
    let curr = this.head;
    for (let i = 0; curr && i < this.nodeLength; ++i) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}