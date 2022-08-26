//given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.
//hashset approach

/*
* ex1 :
* input: nums = [1,2,3,1]   output: true
*
* ex2: input: nums = [1,2,3,4]   output: false
*
* constraints:
* 1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
*
approach 1: brute force. compare el 1 to 2, 3, 4 etc. then el 2 to 3, 4 etc.
* time complexity: O(n^2)   space complexity: O(1)
*
* approach 2: sort the array and compare adjacent elements for equality. slightly better than 1.
* time complexity: O(nlogn) - because sort takes extra time     space complexity: O(1)
*
* approach 3: use a hashset to store the elements one after another. if the element is already in the set, return true.
* time complexity: O(n)   space complexity: O(n) - could use as much space as the array itself
*
*

* */
let containsDuplicate = function (nums) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        //if the element is not in the set, add it. if it is, return true.
        set.add(nums[i]);
    }
    return false; //if the loop completes, return false because no duplicates were found.
};

//sort approach
containsDuplicate = function (nums) {

    nums.sort((a, b) => a - b); //sort the array in ascending order

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true; //if the current element is equal to the next element, early return true.
    }
    return false; //if the loop completes, return false because no duplicates were found.
};

//brute force approach
containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) { //start j at i+1 so that we don't compare the same element to itself.
            if (nums[i] === nums[j]) return true; //if the current element is equal to the next element(?), early return true.
        }
    }
    return false; //if the loop completes, return false because no duplicates were found.
}


//Method using Set() (exit early if true)
containsDuplicate = function (nums) {
    const numsSet = new Set();
    for (const i of nums) {
        if (numsSet.has(i)) {
            return true;
        }
        numsSet.add(i);
    }
    return false;
};


//3rd method using Map() (Has to map entire array but code is more readable)
containsDuplicate = function (nums) {
    //create a new hashmap with all the items in the array. Any duplicates will be removed.
    const totalWithoutDuplicates = new Map(nums.map((i) => [i]));

    //check if the size of the initial array is larger than the new hashmap.
    return totalWithoutDuplicates.size !== nums.length;
};

//Third method using Set() (Fastest runtime at 91.95% and very readable code)
containsDuplicate = function (nums) {
    //Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
    return new Set(nums).size !== nums.length;
};