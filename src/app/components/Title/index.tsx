import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Title = ({ user }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {`Welcome, ${user.name}`}
    </Container>
  );
};

export default Title;
