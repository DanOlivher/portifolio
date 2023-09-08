import styles from './Projects.module.css'
import Cards from '../elements/Cards'
import lpArquitetura from '../../image/projects/lpArquitetura.png'
import portifolio from '../../image/projects/portifolio.png'
import ButtonB from '../elements/ButtonB'

function Projects(){
    return(
        <div className={styles.proj} id="projects">
            <h1>Projetos</h1>
            <Cards 
            img={lpArquitetura}
            title='LP-DNC do Projeto de Tecnologia'
            tech='HTML, CSS & JS'
            description='Desenvolvimento de uma Landing Page para o lançamento da formaação em tecnologia'
            repo='https://github.com/DanOlivher/Projeto-Landing-Page'
            site='https://novaarquitetura.netlify.app/' 
            />
            <Cards
            img={portifolio}
            title='Projeto de um Portifolio'
            tech='React.js'
            description='Desenvolvimento de um Potifólio só com React.js'
            repo='https://github.com/DanOlivher/Projeto-Landing-Page'
            site='https://novaarquitetura.netlify.app/'
            />
            <bip>
            <ButtonB text='Ver repositório Completo'/>
            </bip>
            
        </div>
    )
}

export default Projects