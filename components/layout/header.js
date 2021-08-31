import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  makeStyles,
  Grid,
  Fade,
  Switch,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import styles from "../../styles/layout.module.css";

const useStyles = makeStyles({
  list: {
    width: 250,
    margin: "0 auto",
  },
});

const content = (
  theme,
  siteTitle,
  toggleEffect,
  openDrawer,
  setOpenDrawer,
  classes
) => (
  <div className={styles.header}>
    <Grid container style={{ textAlign: "center" }}>
      <Grid item xs={4}>
        <Hidden only={["xl", "lg"]}>
          <h2 onClick={() => setOpenDrawer(true)}> 📜 Menu </h2>
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <div className={classes.list}>
              <br />
              <h2 style={{ marginLeft: "90px" }}>Menu</h2>
              <Divider />
              <List>
                <ListItem button key="1">
                  <ListItemIcon>🧕</ListItemIcon>
                  <Link href="/about">
                    <ListItemText primary="About" />
                  </Link>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button key="2">
                  <ListItemIcon>📓</ListItemIcon>
                  <Link href="/posts">
                    <ListItemText primary="Blog" />
                  </Link>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </Grid>
      <Grid item xs={4} style={{ display: "flex", flexDirection: "row" }}>
        <Hidden only={["xs", "sm", "md"]}>
          <Link href="/about">
            <h2>🧕 About</h2>
          </Link>
        </Hidden>
        <Link href="/">
          <img
            src={`/images/${
              theme === "light" ? "profile-light.png" : "profile-dark.png"
            }`}
            className={`${styles.headerImage}`}
            alt={siteTitle}
          />
        </Link>
        <Hidden only={["xs", "sm", "md"]}>
          <Link href="/posts">
            <h2>📓 Blog</h2>
          </Link>
        </Hidden>
      </Grid>
      <Grid item xs={4}>
        <b>🌞</b>
        <Switch checked={theme === "dark"} onChange={toggleEffect} />
        <b>🌙</b>
      </Grid>
    </Grid>
  </div>
);

export default function Header({ toggleEffect, theme }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  const siteTitle = `Disa Ada's Blog`;
  const path = router.pathname;
  const classes = useStyles();

  return (
    <>
      {path === "/" ? (
        <Fade in timeout={5000} style={{ transitionDelay: "8s" }}>
          {content(
            theme,
            siteTitle,
            toggleEffect,
            openDrawer,
            setOpenDrawer,
            classes
          )}
        </Fade>
      ) : (
        content(
          theme,
          siteTitle,
          toggleEffect,
          openDrawer,
          setOpenDrawer,
          classes
        )
      )}
    </>
  );
}
