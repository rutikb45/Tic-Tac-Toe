from collections import defaultdict
def build_gear_graph(gears):
  graph = defaultdict(list)
  for i, (x,y,rr) in enumerate(gears):
    for j, (x2,y2,rr2) in enumerate(gears):
      if i != j:
        distance = ((x-x2)**2+(y-y2)**2)**0.5
        if distance == rr+rr2:
          graph[i].append(j)
  return graph
def depth_first_search(graph,start,visited,gear_chain):
  visited[start] = True
  gear_chain.append(start)
  for neighbor in graph[start]:
    if not visited[neighbor]:
      depth_first_search(graph,neighbor,visited,gear_chain)
def calculate_rotation(gears,start_gear,target_gear):
  graph = build_gear_graph(gears)
  visited = [False]* len(gears)
  gear_chain = []
  depth_first_search(graph,start_gear,visited,gear_chain)
  if target_gear not in gear_chain:
    return "Could Not Process"
  rotations = 1.0;
  direction = 1;
  for i in range(len(gear_chain) - 1):
    node1 = gear_chain[i]
    node2 = gear_chain[i+1]
    rr1 = gears[node1][2]
    rr2 = gears[node2][2]
    rotations *= (rr1/rr2)
    direction *= -1;
  return f"{rotations:.2f}" if direction == 1 else f"-{rotations:.2f}"
num_gears = int(input("Enter the number of gears: "))

gear_info = [list(map(int,input().split())) for _ in range(num_gears)]

result = calculate_rotation(gear_info,0,num_gears-1)
print(result)