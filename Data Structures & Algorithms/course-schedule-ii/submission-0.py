class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        
        adj = [[] for _ in range(numCourses)]
        in_degree = [0] * numCourses

        for dest, src in prerequisites:
            adj[src].append(dest)
            in_degree[dest] += 1
        
        q = deque()

        for i in range(numCourses):
            if in_degree[i] == 0:
                q.append(i)
            
        result=[]
        while q:
            curr = q.popleft()
            result.append(curr)

            for neighbour in adj[curr]:
                in_degree[neighbour] -=1
                if in_degree[neighbour] == 0:
                    q.append(neighbour)
                
            
        if len(result) == numCourses:
            return result
        else:
            return []