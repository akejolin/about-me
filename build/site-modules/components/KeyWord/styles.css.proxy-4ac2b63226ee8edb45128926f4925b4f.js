
const code = ".key-word {\n  background-color: #ffe7e0;\n  color: #654A4E;\n  font-size: 0.9em;\n  padding: 1px 3px 2px 3px;\n  margin: 0px;\n  white-space: nowrap;\n  border-radius: .4rem;\n}\n\narticle .key-word {\n  background-color: #F8C3B3;\n  color: #654A4E;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);