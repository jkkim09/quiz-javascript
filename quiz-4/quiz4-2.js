const Node = function() { 
    this.keys = new Map();
    this.end = false; 
    this.setEnd = function() {
        this.end = true; 
    }
    this.isEnd = function() {
        return this.end; 
    } 
}

const Trie = function() { 
    this.root = new Node();

    this.add = function(input, node = this.root) {
         // 들어온 값이 없다면
         if (input.length == 0) {
            node.setEnd();
            return;
        } 
        // keys가 들어온 첫 번째 글자를 가지고 있지 않다면 
        if (!node.keys.has(input[0])) { 
            node.keys.set(input[0], new Node()) // input[0]을 key에 추가하고, new Node을 value에 추가 
            return this.add(input.substr(1), node.keys.get(input[0])) // 재귀
        } 
        return this.add(input.substr(1), node.keys.get(input[0])) 
    }

    this.isWord = function(word) {
        let node = this.root; // 들어온 값이 있다면 
        while (word.length > 1) { 
            if (!node.keys.has(word[0])) { 
                // 들어온 첫번째 값이 node에 없다면 
                return false 
            } // 들어온 첫번째 값이 node에 있다면
            node = node.keys.get(word[0]);
            word = word.substr(1) 
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false 
    }
    
    this.print = function() { 
        const words = new Array();
        const search = function(node, string) { 
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) { 
                    search(node.keys.get(letter),
                    string.concat(letter)); 
                }
                if (node.isEnd()) { 
                    words.push(string) 
                }
            } else { 
                string.length > 0 ? words.push(string) : undefined; return 
            } 
        } 
        search(this.root, new String()) 
        return words.length > 0 ? words : null; 
    }
}
const trie = new Trie();
trie.add('any'); 
trie.add('color');
trie.add('yellow');

console.log(trie.isWord('any')) // true 
console.log(trie.isWord('color')) // true 
console.log(trie.isWord('blue')) // false 
console.log(trie.print()) // [ 'any', 'color', 'yellow' ]
