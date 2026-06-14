class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
 maxArea(heights) {
    // Idea: two pointers at both ends. Area = width × shorter wall.
    // Always move the pointer at the SHORTER bar — the short bar is
    // what limits the water, so moving the taller one can only ever
    // make things worse (width shrinks, height still capped by short bar).

    let l = 0;
    let r = heights.length - 1;
    let maxWater = 0;

    while (l < r) {
        const area = (r - l) * Math.min(heights[l], heights[r]);
        maxWater = Math.max(maxWater, area);

        if (heights[l] < heights[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxWater;
}

}
