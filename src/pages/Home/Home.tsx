import {
  Box, Button, Typography, Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText, TextField,
} from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import GridCard from '../../components/GridCard';
import VideoThumbnail from '../../constants/assets/ezgif-frame-009.jpg';
import GridList, { Card } from '../../components/GridList';

function Home(): JSX.Element {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Card[]>([]);

  const [openUpload, setOpenUpload] = useState(false);
  const [newUploadTitle, setNewUploadTitle] = useState('');
  const [newUploadDescription, setNewUploadDescription] = useState('');

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
            setOpenUpload(true);
          }}
        >
          Upload
        </Button>
      </Box>
      <GridList cards={videos} />
      <Dialog open={openUpload} onClose={() => setOpenUpload(false)}>
        <DialogTitle>Upload</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a title and description for your video.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={newUploadTitle}
            onChange={(event) => {
              setNewUploadTitle(event.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={newUploadDescription}
            onChange={(event) => {
              setNewUploadDescription(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setOpenUpload(false);
            setNewUploadTitle('');
            setNewUploadDescription('');
          }}
          >
            Cancel
          </Button>
          <Button onClick={() => {
            setOpenUpload(false);
            const newCard = {
              title: newUploadTitle,
              description: newUploadDescription,
              onClick: () => { navigate(`/videos/${newUploadTitle}`); },
              image: VideoThumbnail,
            };
            setVideos([...videos, newCard]);
            setNewUploadTitle('');
            setNewUploadDescription('');
          }}
          >
            Upload
          </Button>
        </DialogActions>

      </Dialog>
    </Box>
  );
}

export default Home;
