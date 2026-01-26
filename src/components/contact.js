import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">

        {/* Email */}
        <a
          href="mailto:smmethun2006@gmail.com"
          className="contact-card"
        >
          <span>📧</span>
          <p>smmethun2006@gmail.com</p>
        </a>

        {/* Phone */}
        <a
          href="tel:+917810075278"
          className="contact-card"
        >
          <span>📞</span>
          <p>+91 78100 75278</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/METHUNSM001"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span>🔗</span>
          <p>GitHub</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/s-m-methun-2a02a034a"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span>💼</span>
          <p>LinkedIn</p>
        </a>


         <a
          href="https://www.instagram.com/methun_sm_/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span>instagram</span>
          <p>Instagram</p>
        </a>

      </div>
    </section>
  );
}

export default Contact;