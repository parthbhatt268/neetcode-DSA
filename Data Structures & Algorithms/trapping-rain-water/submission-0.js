class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
      trap(height) {
        // Idea: two pointers from both ends, track maxLeft and maxRight.
        // The smaller of the two walls bounds the water, so process that
        // side: add (thatMax - height) and move that pointer inward.

        if (height.length === 0) {
            return 0;
        }

        let l = 0;
        let r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];
        let water = 0;

        while (l < r) {
            // by below if we know that there will be atelaest one right which is biger then leftmax, hence we can atlest have leftmax amoutn of value with certainlty
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                water += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                water += rightMax - height[r];
            }
        }

        return water;
    }
}
