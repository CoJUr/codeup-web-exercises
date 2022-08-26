// given two strings s and t, return true if t is an anagram of s, and false otherwise.

// ex1: input: s = "anagram", t = "nagaram"   output: true

// ex2: input: s = "rat", t = "car"   output: false

// constraints: s and t consist of lowercase English letters.  1 <= s.length, t.length <= 5 * 10^4

//will have 2 hashmaps, one for each string. the keys will be the letters,
// and the values will be the number of times that letter appears in the respective string.
//if the counts of the letters in the 2 strings are the same, return true. otherwise, return false.

//time complexity: O(n) - because we iterate through the strings once
//space complexity: O(n) - because we create a hashmap for each string

//use 2 hashmaps to store the counts of each letter in each string. compare the counts of each letter in the 2 hashmaps.
let isAnagram = function (s, t) {
    if (s.length !== t.length) return false; //if the strings are not the same length, they can't be anagrams.

    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], sMap.get(s[i]) + 1 || 1); //if the letter is not in the map, add it with a count of 1. if it is, increment the count.
        tMap.set(t[i], tMap.get(t[i]) + 1 || 1);
    }

    for (let [key, value] of sMap) {
        if (value !== tMap.get(key)) return false; //if the counts of the letters in the 2 strings are not the same, return false.
    }
    return true; //if the loop completes, return true because the counts of the letters in the 2 strings are the same.
}