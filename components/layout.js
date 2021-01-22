// next helpers
import Link from "next/link";
import { useState } from "react";
// components
import { Container, Grid, Fade, Tooltip, Snackbar } from "@material-ui/core";
import {
  AlternateEmail,
  LinkedIn,
  GitHub,
  Twitter,
} from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
// libs
// styles
import styles from "../styles/layout.module.css";
// api calls

export const siteTitle = `Disa Ada's Blog`;

export default function Layout({ children }) {
  const [snackbar, setSnackbar] = useState(false);
  const handleCopyEmail = () => {
    const email = "disaada@gmail.com";
    navigator.clipboard.writeText(email).then(() => setSnackbar(true));
  };

  return (
    <div>
      <Container maxWidth="md">
        <Grid
          container
          className={styles.gridContainer}
          alignItems="center"
          justify="center"
        >
          <Fade in timeout={5000} style={{ transitionDelay: "11s" }}>
            <div className={styles.header}>
              <Grid item xs={4}>
                <Link href="/about">
                  <h2>🧕 About</h2>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link href="/">
                  <a>
                    <img
                      src="/images/profile.png"
                      className={`${styles.headerImage}`}
                      alt={siteTitle}
                      onClick={() => location.assign('https://disaada.github.io/')}
                    />
                  </a>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link href="/posts">
                  <h2>📓 Blog</h2>
                </Link>
              </Grid>
            </div>
          </Fade>
          <Grid item xs={12} className={styles.contentBox}>
            {children}
          </Grid>
          <Grid
            item
            xs={12}
            className={styles.footer}
            style={{ marginTop: "5vh" }}
          >
            <Fade in timeout={5000} style={{ transitionDelay: "11s" }}>
              <div>
                <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  open={snackbar}
                  autoHideDuration={2000}
                  onClose={() => setSnackbar(false)}
                >
                  <Alert
                    elevation={6}
                    variant="filled"
                    severity="success"
                    onClose={() => setSnackbar(false)}
                  >
                    Copied !
                  </Alert>
                </Snackbar>
                <Tooltip title="Click for copy the email" placement="top">
                  <AlternateEmail
                    onClick={() => handleCopyEmail()}
                    style={{ cursor: "pointer" }}
                  />
                </Tooltip>
                <LinkedIn
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/disaada/")
                  }
                  style={{ cursor: "pointer" }}
                />
                <GitHub
                  onClick={() => window.open("https://github.com/disaada")}
                  style={{ cursor: "pointer" }}
                />
                <Twitter
                  onClick={() => window.open("https://twitter.com/disaada")}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
