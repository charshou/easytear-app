import {
  Box, Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {
  title: string;
  description: string;
  onClick: () => void;
}

function GridCard(props: Props): JSX.Element {
  return (
    <Card sx={{ width: '400px' }}>
      <CardActionArea onClick={props.onClick}>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/400/300"
          alt="eye image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GridCard;
