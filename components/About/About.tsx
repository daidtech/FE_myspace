import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.scss';
import AboutSkill from './AboutSkill/AboutSkill';


export default function About() {
  return (
    <section className={styles.wrapAbout}>
      <section className={styles.about}>
        <Container>
          <Row>
            <Col lg={5}>
              <div className={styles.aboutImageBox}>
                <img src="/images/1.jpg" alt="" />
              </div>
            </Col>
            <Col lg={7}>
              <div className="content_box">
                <h1>Hi I'm Damas</h1>
                <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.</p>
                <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <img src='/images/breadcrumb_bg-RDlFJMFR.jpg' alt="" className={styles.aboutBackground} />
      <div className={styles.contentBelowHero}>
        <AboutSkill />
      </div>
    </section>
  )
}