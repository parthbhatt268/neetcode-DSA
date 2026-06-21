class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
         const charMap = new Map();
    let left = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (charMap.has(char)) {
            left = Math.max(left, charMap.get(char) + 1);
        }

        charMap.set(char, i);
        const currentLen = i - left + 1;
        maxLen = Math.max(maxLen, currentLen);
    }

    return maxLen;
    }
}
