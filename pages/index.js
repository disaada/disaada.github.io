// next helpers
// components
import { Fade } from '@material-ui/core';
// libs
// styles
import styles from '../styles/home.module.css'
// api calls

export default function Home() {
  return (
    <div className={styles.landingHome}>
      <div>
        <Fade 
          in timeout={2000}
          style={{ transitionDelay: '5s' }}
        >
          <p>Hi! i'm <b>Disa</b> 🙋‍♀️</p>
        </Fade>
        <Fade
          in timeout={2000}
          style={{ transitionDelay: '7s' }}
        >
          <p>I write code 👩‍💻</p>
        </Fade>
        <Fade
          in timeout={2000}
          style={{ transitionDelay: '9s' }}
        >
          <p>I solve things 🕵️‍♀️</p>
        </Fade>
      </div>
    </div>
  );
}
