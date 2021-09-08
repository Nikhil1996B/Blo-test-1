import * as React from "react";
import Slider from "react-slick";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CustomIcons from "./CustomIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // width: 'calc(100vw)',
      background: "#12161A",
      // borderBottom: '2px solid black',
      // maxWidth: '1180px',
      width: "100%",
      margin: "auto",
      "& .slick-arrow > svg": {
        color: "#fff",
      },
      "& .slick-arrow:before": {
        content: "none",
      },
      "& .slick-disabled": {
        opacity: "0",
        zIndex: "-1 !important",
      },
      "& .slick-prev": {
        left: "20px",
        zIndex: 2,
        border: "2px solid",
        padding: "20px",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        width: "50px",
        height: "50px",
        justifyContent: "center",
        backgroundColor: "rgba(34,42,49,0.9)",
        // -ms-transform: 'rotate(90deg)', /* IE 9 */
        // -webkit-transform: 'rotate(90deg)', /* Safari 3-8 */
        transform: "rotate(180deg)",
        top: "74px",
      },
      "& .slick-next": {
        right: "20px",
        zIndex: 3,
        border: "2px solid",
        padding: "20px",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        width: "50px",
        height: "50px",
        justifyContent: "center",
        backgroundColor: "rgba(34,42,49,0.9)",
        webkitTransform: "none",
        transform: "none",
        top: "74px",
      },
    },
    slickSlide: {
      "& .img": {
        margin: "auto",
      },
    },
  })
);

function Carousel({ children, cssClass }) {
  const settings = {
    infinite: false,
    speed: 2000,
    initialSlide: 0,
    variableWidth: true,
    slidesToScroll: 4,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const classes = useStyles();
  return (
    <div className={`${classes.container} ${cssClass}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <CustomIcons iconName="arrow-pager" className="slick-arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <CustomIcons iconName="arrow-pager" className="slick-arrow" />
    </div>
  );
}

export default React.memo(Carousel);
