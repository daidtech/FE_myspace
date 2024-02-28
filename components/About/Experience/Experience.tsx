import { Container, Row, Col } from "react-bootstrap";
import styles from './Experience.module.scss';
import RowTitle from "components/share/RowTitle/RowTitle";

function WorkFor({info})  {
  return (
    <Container className="my-5">
      <Row>
        <Col lg={2}>
          <div className={styles.wrapCounter}>
            <div className={styles.counterInter}></div>
            <div className={styles.counterOuter}></div>
            <p>{info.index}</p>
          </div>
        </Col>
        <Col lg={4} className="align-self-center">
          <div className={styles.workFor}>
            <h4>March 2020 - Now</h4>
            <h4>{info.title} at {info.companyName}</h4>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.workDetail}>
            {info.responsibility}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default function Experience() {
  const workForHistory = [
    {
      index: 1,
      title: "Ruby on rails developer",
      companyName: "NUS",
      dateStart: new Date(2020, 8, 3),
      dateEnd: new Date(),
      responsibility: "Mauris dictum eros purus, vitae pharetra risus pulvinar rhoncus. Duis bibendum tristique luctus. Aliquam non urna odio morbi nec lectus tempus lorem vehicula consequat sed eu lectus. Ut maximus nulla a est placer."
    },
    {
      index: 2,
      title: "Web developer",
      companyName: "Vinetwork",
      dateStart: new Date(2019, 9, 3),
      dateEnd: new Date(2020, 1, 3),
      responsibility: "Mauris dictum"
    }
  ]

  return (
    <section className={styles.experience}>
      <RowTitle title="Experience"/>
      {
        workForHistory.map((info) => {
          return <WorkFor info={info}/>
        })
      }
    </section>
  )
}