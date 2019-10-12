import React from "react";
import { makeStyles } from "@material-ui/styles";

import Link from "next/link";

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";

import { Image } from "@material-ui/icons";

const drawerWidth = 224;

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: {
    height: drawerWidth / 4,
    boxSizing: "border-box",
    paddingTop: ".5rem",
    textAlign: "center",
    "@global": {
      img: {
        height: `calc(${drawerWidth / 4}px - 0.5rem)`
      }
    }
  },
  content: {
    flexGrow: 1,
    padding: "1.5rem 1.0rem"
  }
});

interface InterfaceMenu {
  label?: string;
  link?: string | null;
  children?: null | Array<InterfaceMenu>;
}

const menus: InterfaceMenu[] = [
  {
    label: "Step One",
    children: null,
    link: "/step1"
  },
  {
    label: "Step Two",
    children: null,
    link: "/step2"
  },
  {
    label: "Step Three",
    children: null,
    link: "/step3"
  },
  {
    label: "Step Four",
    children: null,
    link: "/step4"
  },
  {
    label: "Step Five",
    children: null,
    link: "/step5"
  },
  {
    label: "Step Six",
    children: null,
    link: "/step6"
  },
  {
    label: "Step Seven",
    children: null,
    link: "/step7"
  },
  {
    label: "Step Eight",
    children: null,
    link: "/step8"
  }
];

interface InterfaceProps {
  children?: any;
}

function Wrapper(props: InterfaceProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            图片画廊
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={"permanent"}
        classes={{
          paper: classes.drawerPaper
        }}
        anchor={"left"}
      >
        <div className={classes.toolbar}>
          <Link href={"/"}>
            <img src="/static/images/1237117.png" alt="" />
          </Link>
        </div>
        <List>
          {menus.length > 0 &&
            menus.map((value: InterfaceMenu, index: number) => (
              <>
                {index % 5 === 0 && <Divider />}
                <Link href={value.link || ""} key={index}>
                  <ListItem button key={index}>
                    <ListItemIcon>
                      <Image />
                    </ListItemIcon>
                    <ListItemText primary={value.label} />
                  </ListItem>
                </Link>
              </>
            ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Wrapper;
