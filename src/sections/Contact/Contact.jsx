import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <div>
          <h3>Have any project in mind?</h3>
          <button className='hover'>Contact Me</button>
        </div>
    </section>
  )
}

export default Contact