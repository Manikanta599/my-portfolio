import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            <span className="footer__logo-name">Manikanta Mutyala</span>
            <span className="footer__logo-bracket"> /&gt;</span>
          </a>

          <div className="footer__socials">
            <a href="https://github.com/Manikanta599" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/manikantamutyala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.hackerrank.com/profile/manikantamutyal1" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
              <SiHackerrank />
            </a>
            <a href="mailto:manikantamutyala854@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer__divider" />

        <p className="footer__copy">
          Designed & Built with <FiHeart className="footer__heart" /> by Manikanta Mutyala
          <span className="footer__year"> · © {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
