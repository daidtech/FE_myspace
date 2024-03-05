import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.scss';
import AboutSkill from './AboutSkill/AboutSkill';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Certification from './Certification/Certification';


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
                <p className={styles.aboutDescription}>
                  a Ruby on Rails developer with more than 4 years of experience developing websites. I have a good understanding of database design and high load balancing. I enjoy solving problems. 
                </p>
                <p className={styles.aboutDescription}>
                  I enjoy exercising and tracking my habits to improve them over time. I believe that anyone can become talented if they believe in themselves. I enjoy reading books and finding new ideas from them. My coworkers say that I am a good team player and that I help keep the team happier and less stressed when a release is coming.
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className={styles.contentBelowHero}>
        <AboutSkill />
        <Experience />
        <Certification />
        <Education />
      </div>
    </section>
  )
}