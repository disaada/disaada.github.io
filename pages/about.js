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
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ textAlign: 'center' }}
        >
          <Avatar
            alt="about-me"
            src="/images/about.png"
            style={{ width: "15rem", height: "15rem", top: "5vh", margin: '0 auto 60px' }}
          />
          <h1>Disa A. Syuhada</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ul>
            <li>
              Web Engineer at{" "}
              <a onClick={() => window.open("https://doterb.com/")}>dotERB</a>
            </li>
          </ul>
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
              , <a href="https://styled-components.com/">styled-components</a>{" "}
              💅, and <a href="https://emojipedia.org/">Emojipedia</a>
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
