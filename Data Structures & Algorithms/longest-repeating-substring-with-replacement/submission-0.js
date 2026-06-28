class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    const count = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count.set(char, (count.get(char) || 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(char));

        // chars to replace = windowLength - maxFreq; shrink if > k
        while ((right - left + 1) - maxFreq > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
}