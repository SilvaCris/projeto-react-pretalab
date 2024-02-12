import styles from './home.module.css'
import homeImg from '../../assets/programmer.svg'
import jornada from '../../assets/jornada.png'




const Home = () => {
    return (
        <>
            <div className={styles.header}>

                <h1 >
                    Projeto Final Ciclo Formativo Básico em Tecnologia Pretalab
                </h1>
                <img src={homeImg} />
            </div>
            <div className={styles.resumo}>
                <p>
                    Bem-vindas ao Projeto Final do Ciclo Formativo Básico em Tecnologia PretaLab! <br/><br />
                    Este é o resultado de uma jornada que incluiu não apenas o conhecimento técnico, mas também o desenvolvimento de soft skills. Com uma metodologia, baseada em três pilares - conhecimento técnico, autoconhecimento e autogestão - a formação oferecida pela Pretalab permitiu que mulheres mergulhassem em tecnologia, em um percurso que durou 16 semanas e abordou desde conceitos básicos até tópicos avançados de desenvolvimento web e contou com apoio e dedicação de professoras e mentoras.<br /><br />
                    Este projeto foi desenvolvido com o React e utiliza os principais recursos desse framework com uma estrutura de paginas que incluem:  visão geral da formação e relato de experiência, portfólio da aluna desenvolvedora, espaço para comentários e um formulário de contato. Além disso, uma página de notícias que apresenta notícias atuais de tecnologia no Brasil. 
                                       

                </p>
            </div>
            <div className={styles.beneficios}>
                <section className={styles.content}>
                    <div className={styles.cardsContainer}>
                        <h2 className={styles.tituloCards}>Jornada de aprendizado</h2>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                
                                
                            </div>
                            <div className={styles.card}>
                            <img className={styles.imagemCard} src={jornada} />
                            
                                
                            </div>
                        </div>
                    </div>

                </section>

                <div className={styles.subtitulo}>
                    <h2 className={styles.tituloCards}>Relato de experiência</h2>
                    <p > <i>"Com essa formação não apenas adquiri habilidades técnicas essenciais, mas também desenvolvi uma mentalidade de autogestão e resiliência que serão valiosas em qualquer área da minha vida.<br />
                    Este site é mais do que apenas um projeto final; é o reflexo tangível de todo o esforço, dedicação e aprendizado que experimentei durante o Ciclo PretaLab. <br />
                    Agradeço imensamente à equipe do PretaLab por tornar essa jornada possível e por criar um ambiente acolhedor e inclusivo onde todas nós pudemos prosperar. Estou ansiosa para ver para onde essa nova habilidade me levará e para continuar crescendo e contribuindo para a comunidade de tecnologia."</i></p>
                   
                </div>
            </div>
        </>
    )
}

export default Home