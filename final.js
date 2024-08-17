//Q1

function reverseInteger(x) {
    return parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
}

console.log('Q1:');
console.log(reverseInteger(123));
console.log(reverseInteger(-456));
console.log('');



//Q2

function searchInsertLinear(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;  //if target is greater than all elements.
}

console.log('Q2:');
console.log(searchInsertLinear([1, 3, 5, 6], 5));
console.log(searchInsertLinear([1, 3, 5, 6], 2));
console.log('');



//Q3



//Q4

function findSmallestDuplicate(nums) {
    const seen = new Set();
    let smallestDuplicate = Infinity;

    for (const num of nums) {
        if (seen.has(num)) {
            smallestDuplicate = Math.min(smallestDuplicate, num);
        }
        seen.add(num);
    }
    return smallestDuplicate === Infinity ? -1 : smallestDuplicate;
}

console.log('Q4:');
console.log(findSmallestDuplicate([4, 10, 5, 1, 11, 5, 1, 4, 1]));  // Expected Output: 1
console.log(findSmallestDuplicate([1, 10, 1, -1, 10, -1]));  // Expected Output: -1
console.log('');



//Multiple choice:
/*

Which type of search is efficient on a sorted array?
Answer: B) Binary Search

What is the time complexity of inserting a new node at the beginning of a singly linked list?
Answer: A) O(1)

In a binary search tree (BST), the left child of a node is always:
Answer: B) Smaller than the node

Which traversal of a BST visits nodes in ascending order?
Answer: C) In-order

*/