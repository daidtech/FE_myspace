import styles from './Education.module.scss';
import KnowledgeBlock from "../KnowledgeBlock/KnowledgeBlock";
import RowTitle from "components/share/RowTitle/RowTitle";

export default function Education() {
  return (
    <section className={styles.education}>
      <RowTitle title='Education' />
      <KnowledgeBlock />
    </section>

  )

}