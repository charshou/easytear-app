import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Button,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ImageList,
  ImageListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import EyeVideoTracking from '../../constants/assets/video-tracked.mp4';
import EyeVideoOriginal from '../../constants/assets/video-original.mp4';
import YDisplacement from '../../constants/assets/y.png';
import XDisplacement from '../../constants/assets/x.png';
import YDisplacementFitted from '../../constants/assets/yfitted.png';
import Thickness from '../../constants/assets/thickness.png';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

interface Dataset {
  yDisplacement: string;
  yDisplacementFitted: string;
  xDisplacement: string;
  thickness: string;
  video: string;
}

interface TrackingGroup {
  none: string;
  opt: Dataset;
  ssd: Dataset;
}

type Enhancement = 'sharpened' | 'laplacian' | 'original';

type Tracking = 'none' | 'opt' | 'ssd';

interface EnhancementGroup {
  sharpened: TrackingGroup;
  laplacian: TrackingGroup;
  averaged: TrackingGroup;
  original: TrackingGroup;
}

const blinks: EnhancementGroup[] = [
  {
    sharpened: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    laplacian: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    averaged: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    original: {
      none: EyeVideoOriginal,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
  }, {
    sharpened: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    laplacian: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    averaged: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    original: {
      none: EyeVideoOriginal,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
  },
  {
    sharpened: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    laplacian: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    averaged: {
      none: EyeVideoTracking,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
    original: {
      none: EyeVideoOriginal,
      opt: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
      ssd: {
        yDisplacement: YDisplacement,
        yDisplacementFitted: YDisplacementFitted,
        xDisplacement: XDisplacement,
        thickness: Thickness,
        video: EyeVideoTracking,
      },
    },
  },
];

function Video(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();

  const trackingMap = {
    none: '',
    opt: '_OPT',
    ssd: '_FARNEBACK',
  };

  const enhancementMap = {
    sharpened: '_sharpen',
    laplacian: '_laplacian',
    original: '',
  };

  const [open, setOpen] = useState(false);
  const [tracking, setTracking] = useState<Tracking>('none');
  const [enhancement, setEnhancement] = useState<Enhancement>('original');

  const [blink, setBlink] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: '#eeecf1',
        height: '100vh',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          boxShadow: 3,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => navigate('/')}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, marginLeft: '20px' }} component="div">{`${id} - Blink ${blink + 1}`}</Typography>
          <ToggleButtonGroup value={tracking} exclusive onChange={(event, newTracking) => setTracking(newTracking)} size="small">
            <ToggleButton value="none">No Tracking</ToggleButton>
            <ToggleButton value="opt">Optical Flow</ToggleButton>
            <ToggleButton value="ssd">Sum Squared Difference</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            value={enhancement}
            exclusive
            onChange={(event, newEnhancement) => setEnhancement(newEnhancement)}
            sx={{ marginLeft: '20px', merginRight: '50px' }}
            size="small"
          >
            <ToggleButton value="sharpened">Sharpen</ToggleButton>
            <ToggleButton value="laplacian">Laplacian</ToggleButton>
            <ToggleButton value="original">Original</ToggleButton>
          </ToggleButtonGroup>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => { setOpen(true); }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {`https://d263h71p4msg7r.cloudfront.net/blinks/${id}_blink${blink}${enhancementMap[enhancement] + trackingMap[tracking]}.mp4`}
      <video key={`https://d263h71p4msg7r.cloudfront.net/blinks/${id}_blink${blink}${enhancementMap[enhancement] + trackingMap[tracking]}.mp4`} controls>
        <source src={`https://d263h71p4msg7r.cloudfront.net/blinks/${id}_blink${blink}${enhancementMap[enhancement] + trackingMap[tracking]}.mp4`} type="video/mp4" />
      </video>
      {/* <video src={tracking === 'none' ? blinks[blink][enhancement][tracking] : blinks[blink][enhancement][tracking].video} width="100%" height={tracking === 'none' ? '100%' : '70%'} controls /> */}
      {tracking !== 'none'
        && (
        <ImageList sx={{ width: '100%' }} cols={Object.entries(blinks[blink][enhancement][tracking]).length - 1}>
          {Object.entries(blinks[blink][enhancement][tracking]).filter((item) => item[0] !== 'video').map((item) => (
            <ImageListItem>
              <img
                src={item[1]}
                alt="thing"
              />
            </ImageListItem>
          ))}
          GRAPHS ARE PLACEHOLDERS
        </ImageList>
        )}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
          },
        }}
        anchor="right"
        variant="persistent"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {blinks.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton onClick={() => setBlink(index)}>
                <ListItemText primary={`Blink ${index + 1}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Video;
