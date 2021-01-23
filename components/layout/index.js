import { Container, Grid } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";
import styles from "../../styles/layout.module.css";

export default function Layout({ children, toggleEffect, theme }) {
  return (
    <div>
      <Container maxWidth="md">
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
            className={styles.contentBox}
            style={{ margin: "0 auto" }}
          >
            {children}
          </Grid>
          <Grid
            item
            xs={12}
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
