import { Box, Button, Typography } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import GridCard from '../../components/GridCard';
import GridList, { Card } from '../../components/GridList';

function Home(): JSX.Element {
  const [videos, setVideos] = useState<Card[]>([]);

  return (
    <Box
      sx={{
        backgroundColor: '#eeecf1',
        height: '100vh',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          height: '20%',
          width: 'auto',
          boxShadow: 3,
        }}
      >
        <Typography
          sx={{
            marginTop: '30px',
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
            borderRadius: 0,
          }}
          variant="outlined"
          color="primary"
          onClick={() => {
            const newCard = {
              title: 'Example',
              description: 'This is a description',
              onClick: () => { console.log('clicked'); },
            };
            setVideos([...videos, newCard]);
          }}
        >
          Upload
        </Button>
      </Box>
      <GridList cards={videos} />
    </Box>
  );
}

export default Home;
