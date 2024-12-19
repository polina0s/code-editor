import { Box, Typography } from '@mui/material';

export const Output = ({ children }: React.PropsWithChildren) => {
  return (
    <Box
      sx={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Output
      </Typography>
      <Box sx={{ p: 2, border: '1px solid #333', flex: 1 }}>{children}</Box>
    </Box>
  );
};
