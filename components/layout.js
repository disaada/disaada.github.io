// next helpers
import Link from "next/link";
// components
import {
  Container,
  Grid,
  Avatar,
} from "@material-ui/core";
import {
  AlternateEmail,
  Public,
  LinkedIn,
  GitHub,
  Twitter,
} from "@material-ui/icons";
// libs
// styles
import styles from "../styles/layout.module.css";
// api calls

export const siteTitle = `Disa Ada's Blog`;

export default function Layout({ children }) {
  return (
    <div>
      <Container maxWidth="md">
        <Grid container className={styles.gridContainer} alignItems="center" justify="center">
          <div className={styles.header}>
            <Grid item xs={4}>
              <Link href="/">
                <h2>
                  🧕 <br /> About
                </h2>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.png"
                    className={`${styles.headerImage}`}
                    alt={siteTitle}
                  />
                </a>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href="/posts">
                <h2>
                  📓 <br /> Blog
                </h2>
              </Link>
            </Grid>
          </div>
          <Grid item xs={12} className={styles.contentBox}>
            {children}
          </Grid>
          <Grid item xs={12} className={styles.footer} style={{ marginTop: '10px' }}>
            <AlternateEmail />
            <Public />
            <LinkedIn />
            <GitHub />
            <Twitter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
