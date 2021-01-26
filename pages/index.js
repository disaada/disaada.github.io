import { Fade } from '@material-ui/core';
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.landingHome}>
      <div>
        <Fade 
          in timeout={2000}
          style={{ transitionDelay: '2s' }}
        >
          <p>Hi! i'm <b>Disa</b> 🙋‍♀️</p>
        </Fade>
        <Fade
          in timeout={2000}
          style={{ transitionDelay: '4s' }}
        >
          <p>I write code 👩‍💻</p>
        </Fade>
        <Fade
          in timeout={2000}
          style={{ transitionDelay: '6s' }}
        >
          <p>I solve things 🕵️‍♀️</p>
        </Fade>
      </div>
    </div>
  );
}
