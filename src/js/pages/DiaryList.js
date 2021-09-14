/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: 700,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.23)',
    },
  })
);

const DiaryList = (props) => {
  const classes = useStyles();
  const imageList = props.imageList;

  const handleClick = (tile) => {
    props.clickTile(tile);
  };

  console.log(imageList);

  return (
    <div className={classes.root} class="mx-2 my-5">
      <GridList autoHeight cellHeight={250} className={classes.gridList} cols={2}>
        {imageList.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
            onClick={() => {
              handleClick(tile);
            }}
            style={{ cursor: 'pointer' }}
          >
            {
              <img
                src={'https://terminal-8c860.web.app/send-thumbnail?username=' + tile.username + '&date=' + tile.date}
                alt={tile.title}
              />
            }
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const Background = css`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #8ac7de;
  padding: 0 10%;
`;

export default DiaryList;
