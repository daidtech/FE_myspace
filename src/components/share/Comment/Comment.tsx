import styles from './Comment.module.scss';

type CommentPros = {
  isSubComment?: boolean,
}

export default function Comment({isSubComment = false}: CommentPros) {
  return (
    <div className={`d-flex comment ${isSubComment ? 'subComment' : ''}`}>
      <img className={styles.image} src="https://i.pravatar.cc/" alt="" />
      <div className={styles.description}>
        <h5>Celesto Anderson</h5>
        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p><span className={styles.reply}>reply</span></p>
      </div>
    </div>
  )
}