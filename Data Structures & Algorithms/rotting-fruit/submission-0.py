class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        r = len(grid)
        c = len(grid[0])

        q = deque()
        fresh = 0

        # count all fresh banana
        for i in range(r):
            for j in range(c):
                if grid[i][j] == 1:
                    fresh += 1
                elif grid[i][j] == 2:
                    q.append((i,j))
        
        if fresh == 0:
            return 0
        
        def valid(rr,rc):
            return 0 <= rr < r and 0 <= rc < c
        
        timer = 0
        row = [1,-1,0,0]
        col = [0,0,1,-1] 


        while q:
            timer += 1
            curr_rotten = len(q)
            while curr_rotten:
                i, j = q.popleft()
                curr_rotten -= 1

                for k in range(4):
                    ni = i + row[k]
                    nj = j + col[k]

                    if valid(ni, nj) and grid[ni][nj] == 1:
                        grid[ni][nj] = 2
                        q.append((ni, nj))

        for i in range(r):
            for j in range(c):
                if grid[i][j] == 1:
                    return -1
        
        return timer-1






