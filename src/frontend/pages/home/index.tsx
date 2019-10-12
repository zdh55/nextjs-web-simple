import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    item: {
      height: "30rem",
      backgroundSize: "cover"
    },
    itemContent: {
      maxWidth: "75rem",
      margin: "0 auto",
      padding: "5.0rem",
      textAlign: "left"
    },
    title: {
      color: "#31485e",
      fontWeight: "bold",
      lineHeight: 1.8
    },
    subtitle: {
      marginTop: "1.6rem",
      color: "#666666"
    }
  })
);

function Home() {
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.item}
        style={{
          backgroundImage:
            "url(https://static.runoob.com/images/demo/demo4.jpg)"
        }}
      >
        <div className={classes.itemContent}>
          <Typography variant={"h3"} className={classes.title}>
            233模式
            <br />
            被套路了吧233..
          </Typography>
          <Typography variant={"h4"} className={classes.subtitle}>
            看我这蛇皮般走位，我是绝对不会被打死的
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Home;
