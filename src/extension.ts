import MarkdownIt = require('markdown-it');
import * as vscode from 'vscode';
import { SAMPLE_CONFIG } from './sample_config';

//import markdownItMermaid from "@liradb2000/markdown-it-mermaid";
const configSection = 'mmd';

export async function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration(configSection);
  const configurl = config.get("configurl");
  const c = vscode.commands.getCommands;
  console.log("configurl");
  console.log(configurl);
  console.log("c");
  console.log(c);

  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
    if (e.affectsConfiguration(configSection) || e.affectsConfiguration('workbench.colorTheme')) {
      vscode.commands.executeCommand('markdown.preview.refresh');
    }
  }));
  
  console.log("Promise1");
  await new Promise(f => setTimeout(f, 1000));
  console.log("Promise2");

  return {
    extendMarkdownIt(md: MarkdownIt) {
      return md
        .use(require('markdown-it-codeability'), { config: SAMPLE_CONFIG })      
        .use(require('markdown-it-emoji'))
        .use(require('markdown-it-textual-uml'))
        .use(require('markdown-it-multimd-table'), {
            multiline:  true,
            rowspan:    true,
            headerless: true,
        });
    },
  };
}

export function deactivate() {}
