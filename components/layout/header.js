import { useRouter } from "next/router";
import Link from "next/link";
import { Grid, Fade, Switch } from "@material-ui/core";
import styles from "../../styles/layout.module.css";

const content = (theme, siteTitle, toggleEffect) => (
  <div className={styles.header}>
    <Grid item xs={4}>
      <Link href="/about">
        <h2>🧕 About</h2>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link href="/posts">
        <h2>📓 Blog</h2>
      </Link>
    </Grid>
    <Grid item xs={4}>
      <Link href="/">
        <a>
          <img
            src={`/images/${theme === "light" ? 'profile-light.png' : 'profile-dark.png'}`}
            className={`${styles.headerImage}`}
            alt={siteTitle}
            onClick={() => location.assign("https://disaada.github.io/")}
          />
        </a>
      </Link>
    </Grid>
    <Grid item xs={4}>
      <b>🌞 Light </b><Switch checked={theme === "dark"} onChange={() => toggleEffect()} /> <b>Dark 🌙</b>
    </Grid>
  </div>
);

export default function Header({ toggleEffect, theme }) {
  const router = useRouter();
  const siteTitle = `Disa Ada's Blog`;
  const path = router.pathname;


  return (
    <>
      {path === "/" ? (
        <Fade in timeout={5000} style={{ transitionDelay: "9s" }}>
          {content(theme, siteTitle, toggleEffect)}
        </Fade>
      ) : content(theme, siteTitle, toggleEffect)}
    </>
  );
}
