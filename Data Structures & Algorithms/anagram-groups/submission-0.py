class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        output = [] # unique char -> actual words
        seen = {} # sorted_str -> index in output

        for x in strs:
            key = "".join(sorted(x))
            if key in seen:
                output[seen[key]].append(x)
            else:
                seen[key] = len(output)
                output.append([x])
                
        return output