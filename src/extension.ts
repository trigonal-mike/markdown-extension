import MarkdownIt = require('markdown-it');
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
  // const userConfig = vscode.workspace.getConfiguration('markdown-it-container-question');

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
      });

      return md;
    },
  };
}

export function deactivate() {}
