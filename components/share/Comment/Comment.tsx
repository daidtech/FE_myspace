import styles from './Comment.module.scss';

export default function Comment() {
  return (
    <>
      <div className="d-flex">
        <img className={styles.image} src="https://i.pravatar.cc/" alt="" />
        <div className={styles.description}>
          <h5>Celesto Anderson</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p><span>reply</span></p>
        </div>
      </div>
    </>
  )
}