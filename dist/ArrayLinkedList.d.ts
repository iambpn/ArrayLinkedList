export declare class ArrayLinkedList<T> {
    private nodeLength;
    private initialCapacity;
    private head?;
    private tail?;
    constructor(capacity?: number);
    /**
     * If the tail node is full, add a new node to the end of the list and add the item to the
     * tail node
     * @param {T} item - The item to be inserted.
     */
    insert(item: T): void;
    /**
     * We get the node at the index, and then we set the item at the index in the node's array
     * @param {number} idx - The index at which you want to insert the item.
     * @param {T} item - The item to be inserted.
     */
    insertAt(idx: number, item: T): void;
    /**
     * "Get the node at the given index, and return the value at that index in the node's array."
     * @param {number} idx - The index of the element to get.
     * @returns The value at the index.
     */
    get(idx: number): T | undefined;
    /**
     * It takes an index and returns the node at that array index
     * @param {number} idx - the index of the element you want to get
     * @returns The node at the given index.
     */
    private getNodeAtArrayIdx;
    /**
     * If there is no tail, then the head and tail are the same node, otherwise new node is added to tail.
     * @returns The value of the node at the given index.
     */
    private addNode;
    /**
     * "Get the node at the given index, or undefined if it doesn't exist."
     * @param {number} nodeIdx - The index of the node we want to get.
     * @returns The node at the given index.
     */
    private getNodeAt;
    /**
     * It returns the number of elements in array linked list.
     * @returns The size of the list.
     */
    size(): number;
    /**
     * Start at the head, and for each node, print the value and move to the next node.
     */
    print(): void;
}
//# sourceMappingURL=ArrayLinkedList.d.ts.map