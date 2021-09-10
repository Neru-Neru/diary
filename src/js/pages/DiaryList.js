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
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);

const DiaryList = (props) => {
  const classes = useStyles();
  const imageList = props.imageList;

  const handleClick = (tile) => {
    props.clickTile(tile);
  };

  const getThumbnail = (username, date) => {
    let url = 'https://terminal-8c860.web.app/send-thumbnail?username=' + username + '&date=' + date;
    return fetch(url, {
      mode: 'cors',
    })
      .then(function (data) {
        console.log(data);
        return data;
      })
      .then(function (json) {
        return json;
      })
      .catch(function (e) {
        console.log(e); // エラーをキャッチし表示
      });
  };

  return (
    <div className={classes.root} class="m-2">
      <GridList autoHeight cellHeight={360} className={classes.gridList} cols={2}>
        {imageList.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
            onClick={() => {
              handleClick(tile);
            }}
          >
            {/*<img src={getThumbnail(tile.date, tile.username)} alt={tile.title} />*/}
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default DiaryList;
