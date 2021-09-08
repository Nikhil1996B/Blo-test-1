import { useEffect } from "react";
import { pathOr } from "ramda";
import { Container, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { NavBar } from "app/components/NavBar";
import Title from "app/components/Title";
import { getProduct } from "../../../store/redux/reducers/products";
import { FooterMinimal } from "app/components/Footer";
import { useStyles } from "../../../styles/theme/styles";
import Carousel from "app/components/Carousal";
import ProductTile from "app/components/ProductTile";
import AdvancedImageList from "app/components/ProductList/CardsList";
import history from "../../../utils/history";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "./index.css";
const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  heading: {
    color: "#56FFFE",
    padding: "10px 0",
  },
}));
export function HomePage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const basicClass = useStyle();
  const products = useSelector((state) =>
    pathOr(undefined, ["products", "data", "products"])(state)
  );
  useEffect(() => {
    dispatch(getProduct());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Blocommerce App" />
        </Helmet>
        <div className={classes.menuBarWrapper}>
          <NavBar />
        </div>
        <Container className={basicClass.container} maxWidth="xl">
          <Typography variant="h5" gutterBottom className={basicClass.heading}>
            Top collections in 7 days 1
          </Typography>
          <Carousel cssClass={classes.programTileArrow}>
            {products &&
              products.map((product, index) => {
                return (
                  <ProductTile
                    title="Top 7 in list"
                    product={product}
                    key={`${product.id}`}
                    position={index + 1}
                    trayTitle={"Hello"}
                    history={history}
                  />
                );
              })}
          </Carousel>
          <Typography variant="h5" gutterBottom className={basicClass.heading}>
            Hot Bids
          </Typography>
          <AdvancedImageList products={products} />
        </Container>
        <FooterMinimal />
      </div>
    </>
  );
}
