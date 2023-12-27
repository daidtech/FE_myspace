import React from 'react';
import styles from './Hero.module.scss';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <section>
      <div className={'background-image ' + styles.wrapImage}>
        <Container>
          <h1>Fitness Mantra To Live Fit Life</h1>
          <div className='breadcrumb_content'>
            HOME {'>'}  FITNESS MANTRA TO LIVE FIT LIFE
          </div>
        </Container>
        <img className={styles.imageHero} src='/images/breadcrumb_bg-RDlFJMFR.jpg' alt='hero image'/>
      </div>
    </section>
  );
}

export default Hero;