import { Avatar, Grid } from "@material-ui/core";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.content}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Grid item 
        xs={5} 
        style={{ 
          display: 'flex',
  position: 'fixed',
  top: '20vh',
  left: 0,
  right: 0,
          }}>
          <Avatar
            alt="about-me"
            src="/images/about.png"
            className={styles.profileImage}
            style={{
              width: "15rem",
              height: "15rem",
              top: 0
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <h1>Disa A. Syuhada</h1>
          <ul>
            <li>
              Web Engineer at{" "}
              <a onClick={() => window.open("https://doterb.com/")}>dotERB</a>
            </li>
          </ul>
          <br />
          <ul>
            <li>
              This site is build by <a href="https://nextjs.org/">Next.js</a>
            </li>
            <li>
              This site is deployed to{" "}
              <a href="https://travis-ci.org/">Travis CI</a> and statically to{" "}
              <a href="https://pages.github.com/">Github Pages</a>
            </li>
            <li>
              This site uses <a href="https://material-ui.com/">Material UI</a>{" "}
              and <a href="https://emojipedia.org/">Emojipedia</a>
            </li>
            <li>
              The source code is available on{" "}
              <a href="https://github.com/disaada/disaada.github.io">Github</a>
            </li>
            <li>License for the posts: ©2020 Disa Ada. All Rights Reserved.</li>
            <li>
              Some of my posts may differ from my current thoughts due to the
              life experiences and journeys.
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
