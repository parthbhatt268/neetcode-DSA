class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        if len(s) != len(t):
            return False

        freq = {}

        for i in s:
            freq[i] = freq.get(i, 0) + 1
        
        for i in t:
            if i in freq:
                freq[i] -= 1
                if freq[i] == 0:
                    freq.pop(i)
            
        if len(freq) == 0:
            return True
        else:
            return False