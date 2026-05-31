class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Count the frequency of each element
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // 2. Create buckets based on frequency
        const buckets = [...Array(nums.length + 1)].map(() => []);
        for (const [num, freq] of count.entries()) {
            buckets[freq].push(num);
        }

        // 3. Collect the top k frequent elements
        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            result.push(...buckets[i]);
        }

        return result;
    }
}
