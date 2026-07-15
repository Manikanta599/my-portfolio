import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import './Contact.css';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm currently open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
        </div>

        <div className={`contact__grid ${inView ? 'visible' : ''}`}>
          <div className={`contact__info ${inView ? 'reveal visible' : 'reveal'}`}>
            <div className="contact__info-card">
              <FiMail className="contact__info-icon" />
              <div>
                <p className="contact__info-label">Email</p>
                <a href="mailto:manikantamutyala854@gmail.com" className="contact__info-value">
                  manikantamutyala854@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <FiPhone className="contact__info-icon" />
              <div>
                <p className="contact__info-label">Phone</p>
                <a href="tel:+917893955734" className="contact__info-value">
                  +91-7893955734
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <FiMapPin className="contact__info-icon" />
              <div>
                <p className="contact__info-label">Location</p>
                <p className="contact__info-value contact__info-value--static">
                  Visakhapatnam, Andhra Pradesh
                </p>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/Manikanta599" target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="GitHub">
                <FiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/manikantamutyala/" target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="LinkedIn">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="https://www.hackerrank.com/profile/manikantamutyal1" target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="HackerRank">
                <SiHackerrank /> HackerRank
              </a>
            </div>
          </div>

          <form className={`contact__form ${inView ? 'reveal visible' : 'reveal'}`} onSubmit={(e) => e.preventDefault()}>
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__label">Name</label>
              <input type="text" id="contact-name" className="contact__input" placeholder="Your name" />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input type="email" id="contact-email" className="contact__input" placeholder="your@email.com" />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-subject" className="contact__label">Subject</label>
              <input type="text" id="contact-subject" className="contact__input" placeholder="What's this about?" />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea id="contact-message" className="contact__textarea" rows={5} placeholder="Your message..." />
            </div>
            <button type="submit" className="contact__submit">
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
