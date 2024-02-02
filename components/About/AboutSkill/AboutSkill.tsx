import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import styles from './AboutSkil.module.scss';

export default function AboutSkill() {
  const skill1 = 60
  const skill2 = 90
  const skill3 = 80
  return (
    <section className={styles.aboutSkill}>
      <Container>
        <Row>
          <Col lg={7}>
            <h3>
              Let Know Our Expert Skills
            </h3>
            <p>
              Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo. Sed ut nibh feugiat, auctor enim quis, hendrerit ipsum. Aenean blandit lacinia suscipit. Nunc ut tincidunt massa, eu semper lacus.
            </p>
            <div className="progres-bar">
              <h5>UI/UX Design</h5>
              <ProgressBar now={skill1} label={`${skill1}%`} />
            </div>
            <div className="progres-bar">
              <h5>Web Design</h5>
              <ProgressBar now={skill2} label={`${skill2}%`} />
            </div>
            <div className="progres-bar">
              <h5>HTML/CSS</h5>
              <ProgressBar now={skill3} label={`${skill3}%`} />
            </div>
          </Col>
          <Col lg={5}>
            <div className={styles.wrapAboutBackground}>
              <img src='/images/1.jpg' alt="" className={styles.aboutBackground} />
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}