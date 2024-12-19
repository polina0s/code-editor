import { Box } from '@mui/material';

import { CodeEditor } from './components';

function App() {
  return (
    <Box
      sx={{
        height: '100%',
        p: 2,
      }}
    >
      <CodeEditor />
    </Box>
  );
}

export default App;
