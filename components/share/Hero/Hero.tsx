import React from 'react';
import styles from './Hero.module.scss';
import { Col, Container, Row } from 'react-bootstrap';

function Hero() {
  return (
    <section>
      <div className={'background-image ' + styles.wrapImage}>
        <Container className={styles.titleBlock}>
          <Row className='align-items-center h-100'>
            <Col>
              <h1>Fitness Mantra To Live Fit Life</h1>
              <div className='breadcrumb_content'>
                HOME {'>'}  FITNESS MANTRA TO LIVE FIT LIFE
              </div>
            </Col>
          </Row>
        </Container>
        <img className={styles.imageHero} src='/images/breadcrumb_bg-RDlFJMFR.jpg' alt='hero image'/>
      </div>
    </section>
  );
}

export default Hero;