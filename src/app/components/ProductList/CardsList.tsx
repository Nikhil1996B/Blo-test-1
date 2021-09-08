import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import itemData from "./itemData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "#12161A",
      padding: "10px",
      [theme.breakpoints.only("lg")]: {
        minHeight: "40vh",
      },
      [theme.breakpoints.only("md")]: {
        minHeight: "40vh",
      },
    },
    imageList: {
      width: "100%",
      height: 250,
      [theme.breakpoints.only("sm")]: {
        height: 150,
      },
      [theme.breakpoints.only("lg")]: {
        minHeight: "60vh",
      },
      transform: "translateZ(0)",
    },
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    icon: {
      color: "white",
    },
  })
);

export default function AdvancedImageList({ products }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={400} gap={8} cols={4} className={classes.imageList}>
        {products &&
          products.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    aria-label={`star ${item.title}`}
                    className={classes.icon}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}
