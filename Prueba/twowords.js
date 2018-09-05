var ladderLength = function(beginWord, endWord, wordList) {
	let dic = new Set(wordList);
	if (!dic.has(endWord)) return 0;
	let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let visited = new Set();
	visited.add(beginWord);
	let bfs = [beginWord, null];
	let res = 0;
	
	while (bfs.length) {
	  let n = bfs.shift();
	  if (n === endWord) {
		return res + 1;
	  }
	  if (n === null) {
		if (!bfs.length) return 0;
		bfs.push(null);
		res++;
	  } else {
		for (let i = 0; i < n.length; i++) {
		  for (let j = 0; j < alphabets.length; j++) {
			let temp = n.substring(0, i) + alphabets[j] + n.substring(i + 1, n.length);
			if (dic.has(temp) && !visited.has(temp)) {
			  bfs.push(temp);
			  visited.add(temp);
			}
		  }
		}
	  }
	}
	return 0;
  };

  console.log(ladderLength("hit","cog", ["hot", "dot", "lot", "log", "cog"]));