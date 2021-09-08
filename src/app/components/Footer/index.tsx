/**
 *
 * Footer
 *
 */
import React from "react";
import GooglePlay from "../../../images/googleplay.svg";
import AppStore from "../../../images/app_store.svg";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  FooterContainer: {
    width: "100%",
    padding: "12px 25px 24px",
    paddingBottom: "72px",
    "@media (min-width: 499px) and (max-width: 554px)": {
      padding: "12px 98px 24px",
    },
    "@media (min-width: 450px) and (max-width: 499px)": {
      padding: " 12px 74px 24px",
    },
    "@media (min-width: 392px) and (max-width: 449px)": {
      padding: "12px 45px 24px",
    },
    "@media (min-width: 334px) and (max-width: 391px)": {
      padding: "12px 16px 24px",
    },
    "@media (min-width: 1580px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "26px 0px",
      maxWidth: "1483px",
      margin: "auto",
    },
    "@media (max-width: 333px)": {
      padding: "12px 7px 24px",
    },
  },
  FooterBG: {
    width: "100%",
    background: "#080b0d",
    borderTop: "2px solid #35414a",
    marginTop: "10px",
  },
  DefaultFooterBg: {
    width: "100%",
    borderTop: "2px solid #050606",
    marginTop: "10px",
  },
  DocLinksWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  DocLinks: {
    padding: "0px 12px",
    fontFamily: "Proxima-Nova-Regular",
    color: "#8b949b",
    textTransform: "uppercase",
    fontSize: "9px",
    letterSpacing: "0.6px",
    lineHeight: "40px",
  },
  PlatformLink: {
    padding: "12px 4px",
    "&:nth-child(2)": {
      "& ::after": {
        border: "1px solid #222a31",
      },
    },
    "@media (min-width: 767px) and (max-width: 1580px)": {
      "&:nth-child(3)": {
        paddingLeft: "21.7px",
      },
      "&:nth-child(2)": {
        paddingRight: "21.7px",
        "& ::after": {
          border: "1px solid #222a31",
          height: "1px !important",
          width: "40px !important",
          //-ms-transform: rotate(90deg),
          transform: "rotate(90deg)",
          position: "absolute",
          content: "' '",
          left: "48%",
          marginTop: "1.2em",
        },
      },
    },
    "@media (min-width: 1580px)": {
      "&:nth-child(3)": {
        paddingLeft: "14.7px",
      },
      "&:nth-child(2)": {
        paddingRight: "14.7px",
        "& ::after": {
          border: "1px solid #222a31",
          height: "1px !important",
          width: "40px !important",
          //-ms-transform: rotate(90deg),
          transform: "rotate(90deg)",
          position: "absolute",
          content: "' '",
          left: "49%",
          marginTop: "1.2em",
        },
      },
    },
  },
  CopyRightText: {
    textTransform: "uppercase",
    color: "#8b949b",
    fontSize: "9px",
    fontFamily: "Proxima-Nova-Regular",
    letterSpacing: "0.56px",
    paddingRight: "10px",
    " &::after": {
      textTransform: "uppercase",
      content: "' '",
      background: "#8b949b",
      position: "absolute",
      width: "2px",
      height: "2px",
      borderRadius: "50%",
      margin: "6px 4px",
    },
  },
  CopyRight: {
    textTransform: "uppercase",
    color: "#8b949b",
    fontSize: "9px",
    fontFamily: "Proxima-Nova-Regular",
    letterSpacing: "0.56px",
    paddingRight: "8px",
  },
  textCenter: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

interface Props {}

export function FooterContainer(props) {
  const styles = useStyles();
  return <div className={styles.FooterContainer}>{props.children}</div>;
}

export function FooterBg(props) {
  const styles = useStyles();
  return <div className={styles.FooterBG}>{props.children}</div>;
}

export function DefaultFooterBg(props) {
  const styles = useStyles();
  return <div className={styles.DefaultFooterBg}>{props.children}</div>;
}

export function DocLinksWrapper(props) {
  const styles = useStyles();
  return <div className={styles.DocLinksWrapper}>{props.children}</div>;
}

export function DocLinks(props) {
  const styles = useStyles();
  return <span className={styles.DocLinks}>{props.children}</span>;
}

export function PlatformLink(props) {
  const styles = useStyles();
  return <a className={styles.PlatformLink}>{props.children}</a>;
}

export function CopyRightText(props) {
  const styles = useStyles();
  return <span className={styles.CopyRightText}>{props.children}</span>;
}
export function CopyRight(props) {
  const styles = useStyles();
  return <span className={styles.CopyRight}>{props.children}</span>;
}
export function TextCenter(props) {
  const styles = useStyles();
  return <div className={styles.textCenter}>{props.children}</div>;
}


function FooterMinimal(props: Props) {
  const docs = [
    {
      linkName: "About Blocommerce",
      link: "about",
    },
    {
      linkName: "Terms of Service",
      link: "terms-of-services",
    },
    {
      linkName: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      linkName: "Help Center",
      link: "/",
    },
  ];

  const platformLinks = [
    {
      alt: "Neou App Store Link",
      imgSrc: AppStore,
      link: "/",
    },
    {
      alt: "Blocommerce Google Play Link",
      imgSrc: GooglePlay,
      link: "/",
    },
  ];
  return (
    <FooterBg>
      <FooterContainer>
        <DocLinksWrapper>
          {docs.map((doc, index) => (
            <DocLinks key={index}>
              <NavLink
                to={`neou/${doc.link}`}
                style={{ color: "#8b949b", textDecoration: "none" }}
              >
                {doc.linkName}
              </NavLink>
            </DocLinks>
          ))}
        </DocLinksWrapper>
        <TextCenter>
          {platformLinks.map((platform, index) => (
            <PlatformLink key={index} href={platform.link} target="_blank">
              <img
                src={platform.imgSrc}
                alt={platform.alt}
                width="100%"
                height="100%"
              />
            </PlatformLink>
          ))}
        </TextCenter>
        <TextCenter>
          <CopyRightText>420 5th 1,Eynsham, Oxford OX8 1JJ, U </CopyRightText>
          <CopyRight> COPYRIGHT © 2021 BLOCOMMERCE</CopyRight>
        </TextCenter>
      </FooterContainer>
    </FooterBg>
  );
}


export { FooterMinimal };
