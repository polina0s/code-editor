import { Box } from '@mui/material';

import { CodeEditor } from './widgets/CodeEditor';

function App() {
  return (
    <Box
      sx={{
        height: 'calc(100% - 32px)',
        p: 2,
      }}
    >
      <CodeEditor />
    </Box>
  );
}

export default App;
