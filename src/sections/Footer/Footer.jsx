import styles from './FooterStyles.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer" className={styles.container}>
      <p>
        All rights reserved &copy; {year}
      </p>
    </section>
  );
}

export default Footer;