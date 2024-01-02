from collections import defaultdict

def find_connected_gears(gears):
    graph = defaultdict(list)
    
    for i, (x, y, rr) in enumerate(gears):
        for j, (x2, y2, rr2) in enumerate(gears):
            if i != j:
                distance = ((x - x2)  ** 2 + (y - y2)  **2) ** 0.5
                if distance == rr + rr2:
                    graph[i].append(j)
    
    return graph

def dfs_and_calculate_rotations(graph, start_node, end_node, gears):
    visited = [False] * len(gears)
    gear_chain = []

    def dfs(node):
        visited[node] = True
        gear_chain.append(node)

        for neighbor in graph[node]:
            if not visited[neighbor]:
                dfs(neighbor)
    
    dfs(start_node)
    
    if end_node not in gear_chain:
        return "Could Not Process"
    
    rotations = 1.0
    direction = 1

    for i in range(len(gear_chain) - 1):
        node1 = gear_chain[i]
        node2 = gear_chain[i + 1]

        rr1 = gears[node1][2]
        rr2 = gears[node2][2]

        rotations *= (rr1 / rr2)
        direction *= -1
        
    return f"{rotations:.2f}" if direction == 1 else f"-{rotations:.2f}"


N = int(input())
gears = [list(map(int, input().split())) for _ in range(N)]


connections = find_connected_gears(gears)
result = dfs_and_calculate_rotations(connections, 0, N - 1, gears)
print(result)