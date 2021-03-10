import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import _ from "lodash";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      //   padding: 14,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },

    cellContainer: {
      height: "24rem",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      margin: "1rem 0",
    },
    cellTop: {
      height: "60%",
      display: "grid",
      overflow: "hidden",
    },
    cellImage: {
      width: "100%",
      objectFit: "scale-down",
    },

    cellBottom: {
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      justifyContent: "space-around",
      flex: 1,
      backgroundColor: "#262626",
      color: "#ffffff",
    },
    paragraph: {
      fontSize: 10,
    },
    largePaper: {
      height: 300,
    },

    contentBody: {
      minHeight: "100vh",
      padding: "47px 0 0 0",
      marginLeft: 0,
      backgroundColor: "#f4f4f4",
    },

    toastGlobal: {
      position: "fixed",
      bottom: "5%",
      left: "50%",
      transform: "translate(-50%, -100%)",
    },

    contentInside: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      height: 300,
      width: "100%",
    },

    bannerArea: {
      width: "100%",
      height: "12rem",
      backgroundColor: "black",
      color: "#fff",
      maxWidth: "100%",
      display: "flex",
      padding: "3rem",
      alignItems: "flex-end",
    },

    bannerFontSize: {
      height: "3rem",
    },

    [theme.breakpoints.up("md")]: {
      bannerArea: {
        padding: "2rem",
      },
    },

    [theme.breakpoints.up("md")]: {
      contentBody: {
        marginLeft: "16rem",
      },
    },
  })
);