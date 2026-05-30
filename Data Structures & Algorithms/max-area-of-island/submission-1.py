class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        # find one '1' and then dfs from there in 4 direction
        # inc count eveyr time you hit '1'

        r = len(grid)
        c = len(grid[0])

        def dfs(i, j):
            if i < 0 or j < 0 or i >= r or j >= c or grid[i][j] == 0:
                return 0
            
            grid[i][j] = 0
            area = 1

            row = [1, -1, 0, 0]
            col = [0, 0, 1, -1]

            for k in range(4):
                ni = i + row[k]
                nj = j + col[k]

                area += dfs(ni, nj)
            return area



        max_area = 0

        # find first '1'
        for i in range(r):
            for j in range(c):
                if grid[i][j] == 1:
                    area = dfs(i,j)
                    max_area = max(area, max_area)

        
        return max_area
                
