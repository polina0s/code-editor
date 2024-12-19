import { Editor, OnMount } from '@monaco-editor/react';
import { Box, Button, Stack } from '@mui/material';
import { useState } from 'react';

import { Language, SNIPPETS } from '../utils';
import { LanguageSelector } from './LanguageSelector';
import { Output } from './Output';

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

  const handleRun = () => {
    
  };

  return (
    <Box>
      <Stack spacing={2} direction={'row'}>
        <Box sx={{ width: '50%' }}>
          <LanguageSelector
            language={language}
            onChange={(e) => onSelect(e.target.value as Language)}
          />
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mb: 1 }}
            onClick={handleRun}
          >
            RUN
          </Button>
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
