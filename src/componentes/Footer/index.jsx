import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
            <ul className={styles.listaFooter}>
                <li>
                <FontAwesomeIcon icon={faEnvelopeSquare} className={styles.estiloIcon}/><a href="mailto:crislaine.silva@live.com" target="_blank"className={styles.links}>crislaine.silva@live.com</a>
                </li>
                <li>
                 <FontAwesomeIcon icon={faLinkedin} className={styles.estiloIcon}/><a href="https://www.linkedin.com/in/crislainessilva/"  target="_blank" className={styles.links}>Crislaine Silva</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faGithubSquare} className={styles.estiloIcon}/><a href="https://github.com/SilvaCris" target="_blank" className={styles.links}>SilvaCris </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer