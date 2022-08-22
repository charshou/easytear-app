import { Box } from '@mui/material';
import React, { ReactElement } from 'react';
import { styled } from '@mui/system';
import { StringMappingType } from 'typescript';
import GridCard from './GridCard';

const CustomList = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(425px, 1fr))',
  gap: '40px',
  justifyItems: 'center',
  paddingTop: '50px',
  flex: '1 1 auto',
});

export interface Card {
  onClick: () => void;
  title: string;
  image: string;
  description: string;
}

interface Props {
  cards: Card[];
}

function GridList(props: Props): JSX.Element {
  return (
    <CustomList>
      {props.cards.map((card) => (
        <GridCard
          image={card.image}
          title={card.title}
          description={card.description}
          onClick={card.onClick}
        />
      ))}
    </CustomList>
  );
}

export default GridList;
