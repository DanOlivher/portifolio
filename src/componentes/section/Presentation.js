import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
        <div id="presentation" className={styles.presentation}>
            <h2>Bem-vindo ao meu Portfólio</h2>
            <h1>Olá, eu sou Dannísio</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
            Como Product Manager, eu tenho o compromisso de resolver<br/>
             problemascomplexos e trazer resultados excepcionais para os negócios.<br/>
             Meus projetos já geraram milhões de reais em receita<br/> 
             anualestou sempre em busca de novos desafios para superar.
             </p>
            <ButtonA link='https://github.com/DanOlivher' text='Conecte-se comigo!! '/>   
        </div>
    )
}

export default Presentation