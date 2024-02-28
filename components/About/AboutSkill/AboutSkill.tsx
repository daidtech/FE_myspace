import { Container, Row, Col } from "react-bootstrap";
import styles from './AboutSkill.module.scss';
import RowTitle from "components/share/RowTitle/RowTitle";

export default function AboutSkill() {

  return (
    <section className={styles.aboutSkill}>
      <RowTitle title="Skill" />
      <Container>
        <Row>
          <Col lg={4}>
            <div className={styles.skillBox}>
              <h2 className={styles.skillBoxTitle}>Programming languages</h2>
              <ul>
                <li> C#. NET </li>
                <li> JavaScript </li>
                <li> HTML, CSS </li>
                <li> Java </li>
              </ul>
              <h2 className={styles.skillBoxTitle}>Frameworks & platforms</h2>
              <ul>
                <li>ReactJS / AngularJS / NodeJS</li>
                <li>jQuery / Twitter Bootstrap / Materialize CSS</li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.skillBox}>
              <h2 className={styles.skillBoxTitle}>Programming languages</h2>
              <ul>
                <li> C#. NET </li>
                <li> JavaScript </li>
                <li> HTML, CSS </li>
                <li> Java </li>
              </ul>
              <h2 className={styles.skillBoxTitle}>Frameworks & platforms</h2>
              <ul>
                <li>ReactJS / AngularJS / NodeJS</li>
                <li>jQuery / Twitter Bootstrap / Materialize CSS</li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.skillBox}>
              <h2 className={styles.skillBoxTitle}>Programming languages</h2>
              <ul>
                <li> C#. NET </li>
                <li> JavaScript </li>
                <li> HTML, CSS </li>
                <li> Java </li>
              </ul>
              <h2 className={styles.skillBoxTitle}>Frameworks & platforms</h2>
              <ul>
                <li>ReactJS / AngularJS / NodeJS</li>
                <li>jQuery / Twitter Bootstrap / Materialize CSS</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}