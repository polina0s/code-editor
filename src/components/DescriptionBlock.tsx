import { Box, Typography } from '@mui/material';

export const DescriptionBlock = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h5" sx={{ height: '51px', mb: 2 }}>
        Description
      </Typography>
      <Box sx={{ p: 2, border: '1px solid #333', flex: 1 }}>
        <Typography>Print &quot;Hello world&quot; to the console.</Typography>
      </Box>
    </Box>
  );
};
