
const code = "body {\n  background-color: saddlebrown;\n  color: white;\n}\n\na, a:link, a:visited, a:hover, a:active {\n  color: white;\n  text-decoration: underline;\n}\n\n#root {\n  height: 100vh;\n  width: 100vw;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);