import { useEffect, useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";
import styles from "../../styles/layout.module.css";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
  },
});

export default function Layout({ children, toggleEffect, theme }) {
  const [maxWidth, setMaxWidth] = useState('md');
  const [screenWidth, setScreenWidth] = useState(600);
  const classes = useStyles();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    
    (screenWidth > 0 && screenWidth < 600) ? setMaxWidth('xs')
    : (screenWidth >= 600 && screenWidth < 960) ? setMaxWidth('sm') 
    : (screenWidth >= 960 && screenWidth < 1280) ? setMaxWidth('md') 
    : (screenWidth >= 1280 && screenWidth < 1920) ? setMaxWidth('lg') 
    : setMaxWidth('xl');
  }, [screenWidth])

  return (
    <div>
      <Container maxWidth={maxWidth}>
        <Grid
          container
          className={styles.gridContainer}
          alignItems="center"
          justify="center"
        >
          <Header toggleEffect={toggleEffect} theme={theme} />
          <Grid
            item
            xs={12}
            sm={12}
            xl={12}
            className={styles.contentBox}
            classes={{ root: classes.root }}
            style={{ margin: "0 auto", marginTop: "5vh" }}
          >
            {children}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            xl={12}
            className={styles.footer}
            style={{ marginTop: "5vh" }}
          >
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
