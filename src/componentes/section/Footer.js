import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import style from './Footer.module.css'

function Footer(){
    return(
        <div className={style.footer}>
            <ul>
                <li><FaInstagram size={30}/></li>
                <li><a href='https://github.com/DanOlivher'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/dannisio-oliveira-092889263/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>Oliveiradannisio@gmail.com</p>
            <p>Dannisio Oliveira © 2023</p>
        </div>
    )
}

export default Footer