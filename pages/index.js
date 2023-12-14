import Head from 'next/head';
import styles from '../styles/Home.module.css';
import UserHeader from '/components/UserHeader'
export default function Home() {
  return (
    <div className={styles.container}>
      <UserHeader></UserHeader>
    </div>
  );
}
