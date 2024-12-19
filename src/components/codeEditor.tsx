import { Editor, OnMount } from '@monaco-editor/react';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';

import { Language, SNIPPETS } from '../utils/snippets';
import { LanguageSelector } from './languageSelector';
import { Output } from './output';

export const CodeEditor = () => {
  const [value, setValue] = useState<string | undefined>('');
  const [language, setLanguage] = useState<Language>('javascript');

  const onEditorMount: OnMount = (editor) => {
    editor.focus();
  };

  const onSelect = (language: 'javascript' | 'python') => {
    setLanguage(language);
    setValue(SNIPPETS[language]);
  };

  return (
    <Box>
      <Stack spacing={2} direction={'row'}>
        <Box sx={{ width: '50%' }}>
          <LanguageSelector
            language={language}
            onChange={(e) => onSelect(e.target.value as Language)}
          />
          <Editor
            height="80vh"
            theme="vs-dark"
            language={language}
            defaultValue="// some comment"
            value={value}
            onMount={onEditorMount}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output />
      </Stack>
    </Box>
  );
};
