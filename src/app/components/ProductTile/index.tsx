import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "180px",
      height: "auto",
      width: "min-content",
      padding: "10px",
      [theme.breakpoints.up("lg")]: {
        maxWidth: "234px",
      },
      "& .MuiCard-root": {
        backgroundColor: "#12161A",
        padding: "0px 14px 0px 0px",
      },
      "& .MuiContainer-maxWidthLg": {
        maxWidth: "90%",
      },
      "& .MuiPaper-elevation1": {
        boxShadow: "none",
      },
      "& .MuiPaper-root": {
        boxShadow: "none",
        outline: "none",
      },
      "& .MuiCardMedia-root": {
        height: "182px",
        width: "auto",
        borderRadius: "6px",
        minHeight: "182px",
        boxShadow: "0 0 6px 0 #050606",
      },
      "& .MuiCardContent-root": {
        padding: "8px 0px",
        color: "#FFFFFF",
        fontFamily: "Proxima-Nova-Regular, Helvetica, Arial, sans-serif",
      },
      "& .MuiSvgIcon-root": {
        margin: "8px",
      },
    },
    head: {
      color: "#FFFFFF",
      fontFamily: "ProximaNova-Semibold, Helvetica, Arial, sans-serif",
      fontSize: "13px",
      lineHeight: "22px",
      textDecoration: "none",
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      "-webkit-line-clamp": "1",
      "-webkit-box-orient": "vertical",
      [theme.breakpoints.up("xl")]: {
        fontSize: "16px",
        lineHeight: "18px",
        margin: "10px 0 6px",
        marginBottom: "3px",
      },
    },
    title: {
      color: "#CDD3D8",
      fontFamily: "Proxima-Nova-Regular, Helvetica, Arial, sans-serif",
      fontSize: "12px",
      lineHeight: "18px",
      maxWidth: "162.65px",
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      "-webkit-line-clamp": "1",
      "-webkit-box-orient": "vertical",
      [theme.breakpoints.up("xl")]: {
        fontSize: "15px",
        lineHeight: "16px",
        margin: "0 0 6px",
        marginBottom: "3px",
      },
    },
    subHead: {
      color: "#CDD3D8",
      fontFamily: "Proxima-Nova-Regular, Helvetica, Arial, sans-serif",
      fontSize: "12px",
      lineHeight: "18px",
      [theme.breakpoints.up("xl")]: {
        fontSize: "15px",
        lineHeight: "16px",
      },
    },
  })
);

function ProductTile({
  product,
  history,
  position = 0,
  trayTitle = "",
  title = "",
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="a"
            href={""}
            onClick={() => {}}
            image={
              product && product.img
                ? product.img
                : require("../../../images/1_1 Image Placeholder.svg")
            }
            title={product.title}
          />
        </CardActionArea>
        <CardContent>
          <Typography
            component="a"
            href={"/"}
            onClick={() => {}}
            classes={{ root: classes.head }}
          >
            {product.author}
          </Typography>
          <div className={classes.title}>{product.author}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductTile;
