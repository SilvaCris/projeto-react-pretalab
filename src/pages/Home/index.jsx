import styles from './home.module.css'
import homeImg from '../../assets/programmer.svg'
import htmlCssImg from '../../assets/html-css.svg'
import timelineImg from '../../assets/timeline.svg'
import reactImg from '../../assets/react.svg'



const Home = () => {
    return (
        <>
            <div className={styles.header}>

                <h1 >
                    Projeto Final Ciclo Formativo Básico em Tecnologia Pretalab
                </h1>
                <img src={homeImg} />
            </div>
            <div className={styles.subtitulo}>
                <p>
                    Bem-vindas ao Projeto Final do Ciclo Formativo Básico em Tecnologia PretaLab! <br></br>
                    Esse projeto é fruto do aprendizado e da dedicação durante este formação online.
                    Foram 16 semanas de imersão nos fundamentos essenciais da programação, explorando HTML5, CSS3, JavaScript e React e desenvolvendo o autoconhecimento.

                </p>
            </div>
            <div className={styles.beneficios}>
                <section className={styles.content}>
                    <div className={styles.cardsContainer}>
                        <h2 className={styles.tituloCards}>Jornada de aprendizado</h2>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                
                                <div className={styles.textos}>
                                    
                                <p className={styles.texto}>
    Modulo 1 - GITHUB <br />
    Conteudos: Versionamento de código, colaboração em projetos, controle de branches. <br /><br />
    Modulo 2 - HTML5 e CSS3 <br />
    Conteudos: Estruturação de páginas web com HTML5, estilização de páginas com CSS3, responsividade. <br /><br />
    Modulo 3 - JavaScript <br />
    Conteudos: Fundamentos de JavaScript, manipulação do DOM, eventos, funções, estruturas de controle. <br /><br />
    Modulo 4 - React <br />
    Conteudos: Componentes, estado e props, ciclo de vida, roteamento, integração com APIs. <br /><br />
    Modulo - Auto-conhecimento <br />
    Conteudos: Inteligência emocional, gestão do tempo, auto-reflexão, definição de metas pessoais. <br /><br />
</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                            <img className={styles.imagemCard} src={htmlCssImg} />
                            <img className={styles.imagemCard} src={timelineImg} />
                            <img className={styles.imagemCard} src={reactImg} />
                                
                            </div>
                        </div>
                    </div>

                </section>

                <div className={styles.subtitulo}>
                    <h2 className={styles.tituloCards}>Relato de experiência</h2>
                    <p> Com essa formação não apenas adquiri habilidades técnicas essenciais, mas também desenvolvi uma mentalidade de autogestão e resiliência que serão valiosas em qualquer área da minha vida.<br />
                    Este site é mais do que apenas um projeto final; é o reflexo tangível de todo o esforço, dedicação e aprendizado que experimentei durante o Ciclo PretaLab. Espero que ele inspire outras mulheres a se aventurarem no mundo da tecnologia e acreditarem no seu potencial para alcançarem seus sonhos, assim como eu fiz.<br />
                    Agradeço imensamente à equipe do PretaLab por tornar essa jornada possível e por criar um ambiente acolhedor e inclusivo onde todas nós pudemos prosperar. Estou ansiosa para ver para onde essa nova habilidade me levará e para continuar crescendo e contribuindo para a comunidade de tecnologia.</p>
                   
                </div>
            </div>
        </>
    )
}

export default Home