import MarkdownIt = require('markdown-it');
import * as vscode from 'vscode';
//import markdownItMermaid from "@liradb2000/markdown-it-mermaid";

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('mmd');
  //console.log(config)
  const y = config.get("yyy");
  const x = config.get("xxx");
  console.log("###########");
  console.log(x);
  console.log(y);
  //console.log(config.inspect("mmd"));
  console.log(config.inspect("qqq"));

  return {
    extendMarkdownIt(md: MarkdownIt) {
      const mdc = require('markdown-it-container');
      const containerName = 'q';
      const ARG_REG = /^q\s*(.*)$/;

      md.use(mdc, containerName, {
        validate: function (params: any) {
          return params.trim().match(ARG_REG);
        },

        render: (tokens: any, idx: number) => {
          if (tokens[idx].nesting === 1) {
            const m = tokens[idx].info.trim().match(ARG_REG);
            const title = md.utils.escapeHtml(m[1]);
            return `<details>` + `<summary class="question">XXX` + title + `</summary>` + `<span class="answer" style="background-color:violet;">YYY` + `\n`;
          } else {
            return '</span></details>\n';
          }
        },
      })
      //.use(require('markdown-it-katex'))
      .use(require('markdown-it-emoji'))
      .use(require('markdown-it-textual-uml'))
      //.use(markdownItMermaid)
      .use(require('markdown-it-multimd-table'), {
          multiline:  true,
          rowspan:    true,
          headerless: true,
      });


      return md;
    },
  };
}

export function deactivate() {}
