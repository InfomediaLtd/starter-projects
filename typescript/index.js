/**
 *
 * This is a node script to create an SystemJS+TypeScript starter project
 *
 */
console.log("Creating a starter project for SystemJS and TypeScript...");

var packageJSON = '' +
'{\n' +
'  "devDependencies": {\n' +
'    "systemjs": "^0.19.29",\n' +
'    "typescript": "^1.8.10"\n' +
'  }\n' +
'}\n' +
'';

console.log("Creating a starter project for SystemJS and TypeScript...");

var indexHTML = '' +
'<html>\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'</head>\n' +
'<body>\n' +
'TypeScript Starter\n' +
'<script src="node_modules/systemjs/dist/system.js"></script>\n' +
'<script src="node_modules/typescript/lib/typescript.js"></script>\n' +
'<script>\n' +
'    System.config({transpiler: "typescript"});\n' +
'    System.import("index.ts");\n' +
'</script>\n' +
'</body>\n' +
'</html>\n' +
'';

var main = 'console.log("TypeScript is working");\n';

var fs = require('fs');
console.log("\npackage.json:\n" + packageJSON);
fs.writeFile("package.json", packageJSON);
console.log("\nindex.html:\n" + indexHTML);
fs.writeFile("index.html", indexHTML);
console.log("\nindex.ts:\n" + main);
fs.writeFile("index.ts", main);

console.log("\nAll done. You can now run 'npm install' to install all dependencies.\n");
