import { ArrayLinkedList } from  "../ArrayLinkedList";

const arr = new ArrayLinkedList<number>(5);
arr.insert(1);
arr.insert(2);
arr.insert(3);
arr.insert(4);
arr.insert(5);

arr.insert(6);
arr.insert(7);
arr.insert(8);
arr.insert(9);
arr.insert(10);

console.log(arr.get(9), "get")
console.log(arr.size())

arr.print()
