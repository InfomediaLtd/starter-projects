/**
 *
 * This is a node script to create an Angular2+JSPM+TypeScript starter project
 *
 */
console.log("Creating a starter project for Angular2 with JSPM and TypeScript...");

var packageJSON = '' +
'{\n' +
'  "jspm": {\n' +
'    "dependencies": {\n' +
'      "@angular/common": "npm:@angular/common@^2.0.0-rc.1",\n' +
'      "@angular/compiler": "npm:@angular/compiler@^2.0.0-rc.1",\n' +
'      "@angular/core": "npm:@angular/core@^2.0.0-rc.1",\n' +
'      "@angular/platform-browser": "npm:@angular/platform-browser@^2.0.0-rc.1",\n' +
'      "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@^2.0.0-rc.1",\n' +
'      "crypto": "github:jspm/nodelibs-crypto@^0.1.0",\n' +
'      "reflect-metadata": "npm:reflect-metadata@^0.1.3",\n' +
'      "rxjs": "npm:rxjs@^5.0.0-beta.7",\n' +
'      "zone.js": "npm:zone.js@^0.6.12"\n' +
'    },\n' +
'    "devDependencies": {\n' +
'      "typescript": "npm:typescript@^1.8.9"\n' +
'    }\n' +
'  }\n' +
'}\n' +
'';

var configJS = '' +
'System.config({\n' +
'  baseURL: "/",\n' +
'  defaultJSExtensions: true,\n' +
'  transpiler: "typescript",\n' +
'  typescriptOptions: {\n' +
'    "module": "commonjs",\n' +
'    "emitDecoratorMetadata": true\n' +
'  },\n' +
'  paths: {\n' +
'    "npm:*": "jspm_packages/npm/*",\n' +
'    "github:*": "jspm_packages/github/*"\n' +
'  },\n' +
'  packages: {\n' +
'    "app": {\n' +
'      "main": "main",\n' +
'      "defaultExtension": "ts"\n' +
'    }\n' +
'  }\n' +
'});\n' +
'';

var indexHTML = '' +
'<html>\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'</head>\n' +
'<body>\n' +
'<my-app>Loading...</my-app>\n' +
'<script src="jspm_packages/system.js"></script>\n' +
'<script src="config.js"></script>\n' +
'<script>\n' +
'    System.import("app");\n' +
'</script>\n' +
'</body>\n' +
'</html>\n' +
'';

var main = '' +
'import "zone.js";\n' +
'import "reflect-metadata";\n' +
'import {bootstrap} from "@angular/platform-browser-dynamic";\n' +
'import {AppComponent} from "./app-component";\n' +
'bootstrap(AppComponent);\n' +
'';

var app = '' +
'import {Component} from "@angular/core"\n' +
'@Component({\n' +
'    selector: "my-app",\n' +
'    template: `Hello World`\n' +
'})\n' +
'export class AppComponent { }\n' +
'';

var fs = require('fs');
console.log("\npackage.json:\n" + packageJSON);
fs.writeFile("package.json", packageJSON);
console.log("\nconfig.js:\n" + configJS);
fs.writeFile("config.js", configJS);
console.log("\nindex.html:\n" + indexHTML);
fs.writeFile("index.html", indexHTML);
try {
  fs.mkdirSync("app");
} catch(e) {
  if ( e.code != 'EEXIST' ) throw e;
}
console.log("\nmain.ts:\n" + main);
fs.writeFile("app/main.ts", main);
console.log("\napp.ts:\n" + app);
fs.writeFile("app/app-component.ts", app);

console.log("\nAll done. You can now run 'jspm install' to install all dependencies.\n");
