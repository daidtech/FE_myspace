import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section className={styles.experience}>
      <Container>
        <Row>
          <Col>
            <div className={styles.title}>
              <h1>Our Work Experience</h1>
              <p>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <div className={styles.wrapCounter}>
              <div className={styles.counterInter + ' ' + styles.hoverCounter}></div>
              <div className={styles.counterOuter}></div>
              <p>1</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.workFor}>
              <h4>March 2020 - Now</h4>
              <h4>Web developer tại NUS</h4>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.workDetail}>
              Mauris dictum eros purus, vitae pharetra risus pulvinar rhoncus. Duis bibendum tristique luctus. Aliquam non urna odio morbi nec lectus tempus lorem vehicula consequat sed eu lectus. Ut maximus nulla a est placer.
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}