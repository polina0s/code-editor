import { Box, Typography } from '@mui/material';

export const Output = () => {
  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" sx={{ mb: 1, height: 55 }}>
        Description
      </Typography>
      <Box sx={{ height: '20vh', p: 2, border: '1px solid #333' }}>
        <Typography>
          Define a method hello that returns &quot;Hello, Name!&quot; to a given
          name, or says Hello, World! if name is not given (or passed as an
          empty String). Assuming that name is a String and it checks for user
          typos to return a name with a first capital letter (Xxxx)
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Output
      </Typography>
      <Box sx={{ height: '40vh', p: 2, border: '1px solid #333' }}></Box>
    </Box>
  );
};
