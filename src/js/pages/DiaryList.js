import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import OtherDiary from "./OtherDiary";

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

const sampleImageList = [
    { title: "Skye", img: sample1 },
    { title: "Catherine", img: sample2 },
    { title: "Ozo", img: sample3 },
    { title: "Alpha", img: sample4 },
    { title: "Kestrel", img: sample5 },
    { title: "Krul", img: sample6 },
    { title: "Saw", img: sample7 },
]

const DiaryList = () =>{
    const classes = useStyles();

    const handleClick = (tile) =>{
        console.log(tile.title);
    }

    return (
        <div className={classes.root}>
          <GridList autoHeight cellHeight={300} className={classes.gridList} cols={3}>
            {sampleImageList.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title}/>
                <GridListTileBar
                  title={tile.title}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={() => {handleClick(tile)}}>
                        <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
}

export default DiaryList;