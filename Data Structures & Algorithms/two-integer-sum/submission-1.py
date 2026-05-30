class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {} # value -> index

        for i, x in enumerate(nums):
            diff = target - x
            if diff in seen:
                return [seen[diff], i]
            seen[x] = i
        