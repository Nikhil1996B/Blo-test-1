import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#222A31",
      alignItems: "center",
      flexDirection: "column",
      display: "flex",
      justifyContent: "space-between",
      minHeight: "100vh",
    },
    backIcon: {
      width: "13px",
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("xl")]: {
        width: "15px",
      },
    },
    content: {
      flex: 1,
      margin: "auto",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        paddingLeft: "30px",
        paddingRight: "30px",
      },
    },
    programTileArrow: {
      width: "100%",
      marginBottom: "14px",
    },
    relatedPrograms: {
      width: "100%",
      borderTop: "2px solid #050606",
      padding: "20px 16px",
      "& .MuiTypography-body1": {
        marginBottom: "14px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "24px",
      },
      [theme.breakpoints.only("lg")]: {
        padding: "32px",
      },
      [theme.breakpoints.only("xl")]: {
        padding: "32px",
        // maxWidth: '1200px',
        // margin: 'auto',
      },
    },
    slider: {
      borderBottom: "1px solid #222A31",
      padding: "0 16px",
      boxSizing: "border-box",
      paddingBottom: "25px",
      [theme.breakpoints.up("md")]: {
        borderBottom: "none",
        padding: "0",
      },
    },
    likeBody: {
      maxWidth: "1200px",
      margin: "auto",
    },
    footerStyle: {
      background: "#080B0D",
    },
    menuBarWrapper: {
      borderBottom: "1px solid #35414A",
      width: "100%",
    },
    menuBar: {
      height: 44,
      maxWidth: "1200px",
      margin: "auto",
      padding: "0px 16px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        paddingLeft: "30px",
        paddingRight: "30px",
        height: 56,
      },
      [theme.breakpoints.up("xl")]: {
        height: 78,
      },
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "rgba(255,255,255,0.5)",
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);
