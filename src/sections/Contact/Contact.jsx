
function Contact() {
  const email = 'reyschelleiradie@gmail.com';
  const subject = 'Hello';
  const body = 'I would like to discuss...';
  
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className='flex justify-center items-center'>
        <div className='card w-3/4 md:w-1/2 h-72 p-8 flex items-center justify-center flex-col'>
          <h3 className='text-center mb-8'>Have any project in mind ?</h3>
          <a href={mailtoLink}>
            <button>Contact Me</button>
          </a>
        </div>
    </section>
  )
}

export default Contact