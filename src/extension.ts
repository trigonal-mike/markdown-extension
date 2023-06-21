import MarkdownIt = require('markdown-it');
import * as vscode from 'vscode';
//import markdownItMermaid from "@liradb2000/markdown-it-mermaid";

const configSection = 'mmd';

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration(configSection);
  //console.log(config)
  const withEmoji = config.get("withEmoji") === true;
  console.log("withEmoji");
  console.log(withEmoji);
  const array = config.get("array");
  console.log("array");
  console.log(array);
  console.log(config.inspect("array"));
  //console.log(config.inspect("qqq"));

  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
    //console.log("onDidChangeConfiguration");
    if (e.affectsConfiguration(configSection) || e.affectsConfiguration('workbench.colorTheme')) {
      vscode.commands.executeCommand('markdown.preview.refresh');
    }
  }));

  return {
    extendMarkdownIt(md: MarkdownIt) {
      //console.log("extendMarkdownIt");
      const mdc = require('markdown-it-container');
      const containerName = 'q';
      const ARG_REG = /^q\s*(.*)$/;

      md.use(mdc, containerName, {
        validate: function (params: any) {
          console.log("validate");
          return params.trim().match(ARG_REG);
        },

        render: (tokens: any, idx: number) => {
          const config = vscode.workspace.getConfiguration(configSection);
          const qqq = config.get("qqq");
          console.log(qqq);

          if (tokens[idx].nesting === 1) {
            const m = tokens[idx].info.trim().match(ARG_REG);
            const title = md.utils.escapeHtml(m[1]);
            return `<details>` + `<summary class="question">` + qqq + `-` + title + `</summary>` + `<span class="answer" style="background-color:violet;">YYY` + `\n`;
          } else {
            return '</span></details>\n';
          }
        },
      })
      .use(require('markdown-it-emoji'))
      .use(require('markdown-it-codeability'), { xxx: true, })      
      .use(require('markdown-it-textual-uml'))
      .use(require('markdown-it-multimd-table'), {
          multiline:  true,
          rowspan:    true,
          headerless: true,
      })
      ;

      return md;
    },
  };
}

export function deactivate() {}
