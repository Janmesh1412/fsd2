path=require("path")
path1='D:/FSD2/node/addon.txt'
console.log(path.dirname(path1))    // D:/FSD2/node
console.log(path.extname(path1))   //
console.log(path.basename(path1)) //addon.txt (file name with ext )
console.log(path.parse(path1))   // {root: 'D:/', dir: 'D:/FSD2/node', base: 'addon.txt', ext: '.txt', name: 'addon'}

