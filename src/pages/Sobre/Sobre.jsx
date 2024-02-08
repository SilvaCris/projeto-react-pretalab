
import fotoPerfil from '../../assets/foto-perfil.png'
import styles from './sobre.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        
        <div>
            <img src={fotoPerfil} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Crislaine Silva</h1>
          <h2 className={styles.profissao}>Desenvolvedora Jr</h2>
          <p className={styles.sobreMim}>
          Sou uma entusiasta de tecnologia  e defensora da diversidade e inclusão.
                Decidi fazer transição de carreira para área tech em 2021, e desde então tenho mergulhado no mundo da programação.
                Com um forte desejo de aprender e crescer, estou constantemente buscando aprimorar minhas habilidades e conhecimentos.
          </p>
      </div>

      <section className={styles.formacao}>
               <div className={styles.containerSectionList}>
                   <div>
                       <h3 className={styles.topicoPrincipal} >Formação</h3>
                   </div>
                   <div className={styles.listaItem}>
                       <ul>
                        <li>
                            <p className={styles.listaTitulo}>Especialização em Gestão de Projetos e Negócios em Tecnologia da Informação</p>
                            <a href="https://portal.ifrj.edu.br/node/917" target="_blank" className={styles.listaLocal}>IFRJ- Campus Engenheiro Paulo de Frontin</a>
                            <p className={styles.listaDescricao}>Curso de Pós-Graduação Lato Sensu na Modalidade de Ensino a Distância com ênfase nas boas práticas de Gestão de Projetos e Governança de TI.</p>
                        </li>
                        <li>
                            <p className={styles.listaTitulo}>Ciclo Formativo Básico em Tecnologia Pretalab - 9ª edição</p>
                            <a href="https://www.pretalab.com/formacao" target="_blank" className={styles.listaLocal}>Pretalab</a>
                            <p className={styles.listaDescricao}>Formação básica em tecnologia com foco em HTML5, CSS3, JavaScript e React</p>
                        </li>
                           <li>
                               <p className={styles.listaTitulo}>Poder do Futuro: Formação introdutória à tecnologia - 1ª edição (presencial) </p>
                               <a href="https://www.linkedin.com/posts/olabi-makerspace_em-agosto-a-equipe-da-pretalab-passou-3-activity-7119762922871885824-SFz9?utm_source=share&utm_medium=member_desktop" target="_blank" className={styles.listaLocal}> Olabi</a>
                               <p className={styles.listaDescricao}>Formação introdutória a tecnologia com foco em lógica de programação, HTML5, CSS3 e desenvolvimento de soft skills</p>
                           </li>
                           
                           <li>
                               <p className={styles.listaTitulo}>Capacita MDT</p>
                               <a href="https://www.letsbot.com.br/capacitamdt/" target="_blank" className={styles.listaLocal}>Lets'bot</a>
                               <p className={styles.listaDescricao}>Programa de capacitação na área de tecnologia focada em desenvolvimento de chatbots e inteligência artificial. </p>
                           </li>
                       </ul>
                   </div>
               </div>
       </section>
       <section className={styles.projetos}>
           <div className={styles.containerSectionList}>
               <div>
                   <h3 className={styles.topicoPrincipal}>Meus projetos</h3>
               </div>
               <div className={styles.listaItem}>
                   <ul>
                       <li>
                           <p className={styles.listaTitulo}>Calculadora em javascript</p>
                           <a href="https://calculadora-crislaine.netlify.app/" target="_blank" className={styles.listaLocal}> Link para o projeto</a>
                           <p className={styles.listaDescricao}>
                            Projeto de uma calculadora de média estudantil desenvolvido durante o Ciclo Formativo: o Poder do futuro, da Pretalab com a finalidade de aprimorar os 
                            conhecimentos em lógica de programação e javascript.
                           </p>
                       </li>
                       <li>
                        <p className={styles.listaTitulo}>Lojinha Virtual</p>
                        <a href="https://sualojinha.netlify.app/" target="_blank" className={styles.listaLocal}> Link para o projeto</a>
                        <p className={styles.listaDescricao}>
                         Projeto que simula uma loja virtual desenvolvido durante as aulas do modulo II do Ciclo Formativo Básico em Tecnologia Pretalab com a finalidade de aprimorar os 
                         conhecimentos em HTML e CSS.
                        </p>
                    </li>
                       
                   </ul>
               </div>
            </div>
       </section>
    </>
  )
}

export default Sobre;