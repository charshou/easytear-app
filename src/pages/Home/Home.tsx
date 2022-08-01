import { Box, Button, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

function Home(): JSX.Element {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#e2e2e2',
          height: '20%',
          width: 'auto',
          boxShadow: 3,
        }}
      >
        <Typography
          sx={{
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Upload video to start tear film analysis
        </Typography>
        <Button
          sx={{
            marginTop: '20px',
            width: '90px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          variant="contained"
          color="primary"
        >
          Upload
        </Button>

      </Box>
    </Box>
  );
}

export default Home;
