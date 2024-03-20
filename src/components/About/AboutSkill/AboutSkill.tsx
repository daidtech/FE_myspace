import { Container, Row, Col } from "react-bootstrap";
import styles from './AboutSkill.module.scss';
import RowTitle from "src/components/share/RowTitle/RowTitle";

function BlockSkill({ title, skills }: Readonly<{title: string, skills: string[]}>) {
  return (
    <>
      <h2 className={styles.skillBoxTitle}>{title}</h2>
      <ul>
        {skills.map((skill, index) => {
          return (<li key={index}>{skill}</li>)
        })}
      </ul>
    </>
  )
}

export default function AboutSkill() {

  return (
    <section className={styles.aboutSkill}>
      <RowTitle title="Skill" />
      <Container>
        <Row>
          <Col lg={4}>
            <div className={styles.skillBox}>
              <BlockSkill
                title="Programming languages"
                skills={[
                  "Ruby", "HTML/CSS", "JavaScript"
                ]}
              />
              <BlockSkill
                title="Frameworks & platforms"
                skills={[
                  "Ruby on Rails",
                  "Reactjs, Vuejs",
                  "jQuery / Twitter Bootstrap"
                ]}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.skillBox}>

              <BlockSkill
                title="Databases"
                skills={[
                  "PostgreSQL"
                ]}
              />
              <BlockSkill
                title="Version Control/Deployment"
                skills={[
                  "Git", "GitHub", "AWS"
                ]}
              />
              <BlockSkill
                title="FOREIGN LANGUAGE"
                skills={[
                  "IELTS: 5.5"
                ]}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.skillBox}>

              <BlockSkill
                title="KNOWLEDGE"
                skills={[
                  "Deep understanding about OOP, Design Pattern, SOLID principles, Dependency Injection, ...",
                  "Good understanding about the Agile and Scrum process",
                  "Good understanding software design, database design, RestfulAPI, ...",
                  "Good time management, presentation and teamwork skills ...",
                ]}
              />
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}