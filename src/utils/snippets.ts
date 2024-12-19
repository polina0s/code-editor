export type Language = 'javascript' | 'python';

type CodeSnippets = {
  [key in Language]: string;
};

export const SNIPPETS: CodeSnippets = {
  javascript: 'console.log("Hello World")',
  python: 'print("Hello World!")',
};
