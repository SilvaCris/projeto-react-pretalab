import styles from './footer.module.css'


import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
            <ul className={styles.listaFooter}>
                <li>
                
                <MdEmail className={styles.estiloIcon}/><a href="mailto:crislaine.silva@live.com" target="_blank"className={styles.links}>crislaine.silva@live.com</a>
                </li>
                <li>
                
                <FaLinkedin className={styles.estiloIcon} /><a href="https://www.linkedin.com/in/crislainessilva/"  target="_blank" className={styles.links}>Crislaine Silva</a>
                </li>
                <li>
               
                <FaGithub className={styles.estiloIcon}/><a href="https://github.com/SilvaCris" target="_blank" className={styles.links}>SilvaCris </a>
                </li>
            </ul>

           <p>© Copyright | 2024| Todos os direitos autorais reservados</p>
        </div>
    </footer>
  )
}

export default Footer