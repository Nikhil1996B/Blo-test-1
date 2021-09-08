import {
  AppBar,
  Avatar,
  Badge,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  icons: {
    alignItems: "center",
    display: "flex",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Blocommerce
        </Typography>
        <div className={classes.icons}>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <AddShoppingCart />
          </Badge>
          <Avatar alt="Remy Sharp" src="">
            N
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};
