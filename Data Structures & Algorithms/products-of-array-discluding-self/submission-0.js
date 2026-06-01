class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        let left = new Array(len).fill(0);
        let right = new Array(len).fill(0);
        let output = new Array(len).fill(0);

        // 1. stroll for left
        
        left[0] = 1
        for (let i = 1; i < len; i++) {
            left[i] = left[i-1] * nums[i-1];
        }

        right[len - 1] = 1
        for (let i = len - 2; i >= 0; i--) {
            right[i] = right[i+1] * nums[i+1];
        }

        for (let i = 0; i < len; i++ ) {
            output[i] = left[i] * right[i];
        }

        return output;


    }
}
