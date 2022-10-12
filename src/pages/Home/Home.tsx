import {
  Box, Button, Typography, Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText, TextField, CircularProgress,
} from '@mui/material';
import React, { ReactElement, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import GridCard from '../../components/GridCard';
import VideoThumbnail from '../../constants/assets/ezgif-frame-009.jpg';
import GridList, { Card } from '../../components/GridList';
import { getVideos, uploadVideo } from '../../api/videos';

function Home(): JSX.Element {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Card[]>([]);

  const refresh = () => {
    getVideos()
      .then((data) => setVideos(data.videos.map((video) => ({
        title: video.name,
        image: `data:image/jpeg;base64,${video.image}`,
        onClick: () => { navigate(`/videos/${video.name.split('.')[0]}`); },
        description: video.description,
      }))))
      .catch((error) => {
        setVideos(
          [{
            title: 'OS4-427_3221-OD2-TLL-06222022',
            image: 'none',
            onClick: () => { navigate('/videos/OS4-427_3221-OD2-TLL-06222022'); },
            description: 'sample video',
          }],
        );
        console.log(error);
      });
  };

  useEffect(() => {
    refresh();
  }, []);

  const [openUpload, setOpenUpload] = useState(false);
  const [newUploadTitle, setNewUploadTitle] = useState('');
  const [newUploadDescription, setNewUploadDescription] = useState('');
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);

  const [uploadPending, setUploadPending] = useState(false);

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
          <Button
            sx={{
              marginTop: '30px',
            }}
            fullWidth
            variant="outlined"
            component="label"
          >
            Upload File
            <input
              type="file"
              hidden
              onChange={(e) => {
                if (e.target && e.target.files) {
                  setNewUploadFile(e.target.files[0]);
                }
              }}
            />
          </Button>
          {newUploadFile !== null
            ? (
              <Typography
                sx={{
                  marginTop: '30px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {newUploadFile.name}
              </Typography>
            )
            : null}
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
            if (newUploadTitle.length > 0 && newUploadDescription.length > 0 && newUploadFile != null) {
              setUploadPending(true);
              uploadVideo(newUploadFile)
                .catch((error) => console.log(error))
                .finally(() => {
                  setUploadPending(false);
                  setOpenUpload(false);
                  refresh();
                  setNewUploadTitle('');
                  setNewUploadDescription('');
                  setNewUploadFile(null);
                });
            }
          }}
          >
            {uploadPending ? <CircularProgress size={20} /> : 'Upload'}
          </Button>
        </DialogActions>

      </Dialog>
    </Box>
  );
}

export default Home;
