import React from 'react';
import styles from './Hero.module.scss';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';

export default function Hero() {
  return (
    <section>
      <div className={styles.wrapImage}>
        <Container className={styles.titleBlock}>
          <Row className='align-items-center h-100'>
            <Col>
              <h1>Fitness Mantra To Live Fit Life</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">HOME</Breadcrumb.Item>
                <Breadcrumb.Item active>
                  FITNESS MANTRA TO LIVE FIT LIFE
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
        <img className={styles.imageHero} src='/images/pexels-life-of-pix-7974.jpg' alt={'background'}/>
      </div>
    </section>
  );
}