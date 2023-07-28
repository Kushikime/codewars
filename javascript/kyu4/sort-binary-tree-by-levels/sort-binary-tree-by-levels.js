function treeByLevels(root) {
  // After some research decided to use BFS Algorithm

  let res = [];

  let queue = [];
  queue.push(root);

  while (queue.length) {
    let currentNode = queue.shift();

    if (currentNode?.value || currentNode?.value === 0) {
      res.push(currentNode.value);
    }
    if (currentNode?.left) {
      queue.push(currentNode.left);
    }
    if (currentNode?.right) {
      queue.push(currentNode.right);
    }
  }
  return res;
}