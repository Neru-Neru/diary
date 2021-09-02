import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import sample1 from "../../img/img1.jpg";
import sample2 from "../../img/img2.jpg";
import sample3 from "../../img/img3.jpg";
import sample4 from "../../img/img4.jpg";
import sample5 from "../../img/img5.jpg";
import sample6 from "../../img/img6.jpg";
import sample7 from "../../img/img7.jpg";

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
      height:700,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const DiaryList = (props) =>{
    const classes = useStyles();
    const history = useHistory();

    const imageList = props.imageList;

    const handleClick = (tile) =>{
      history.push({
        pathname: '/mydiary',
        state: {tile}
      });
    }

    return (
        <div className={classes.root}>
          <GridList autoHeight cellHeight={300} className={classes.gridList} cols={3}>
            {imageList.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1} onClick={() => {handleClick(tile)}}>
                {/*<img src={tile.img} alt={tile.title}/>*/}
                <GridListTileBar
                  title={tile.title}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
}

export default DiaryList;