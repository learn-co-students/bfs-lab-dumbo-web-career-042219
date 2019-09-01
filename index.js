function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let visited = [rootNode];
  while(queue.length > 0){
    let adjacentNodes = findAdjacent(queue[0].name, vertices, edges);
    visited = visited.concat(adjacentNodes)
    markDistanceAndPredecessor(queue[0], adjacentNodes)
    queue = queue.concat(adjacentNodes);
    queue.shift()
  }

  return visited;
}

function findAdjacent(node, vertices, edges){
  let adjacent = edges.filter(edge => edge.includes(node)).flat().filter(edge => edge !== node)
  return vertices.filter(vertex => adjacent.includes(vertex.name) && vertex.distance === null)
}

function markDistanceAndPredecessor(node, adjacentNodes){
  return adjacentNodes.map(adjacent_node => {
    adjacent_node.predecessor = node;
    adjacent_node.distance = node.distance + 1;
  })
}