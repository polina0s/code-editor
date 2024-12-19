export type Language = 'javascript' | 'python';

type CodeSnippets = {
  [key in Language]: string;
};

export const SNIPPETS: CodeSnippets = {
  javascript: `function hello(name) {
  return '';
  }`,
  python: `def hello(name):
    pass`,
};
