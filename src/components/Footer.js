import ownPhoto from "../images/ownPhoto.jpg";
import { BiHappyBeaming, BiPhone, BiAt } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";

function Footer() {
    return(
        <footer>
            <img alt="Portrait picture" className="footer--own-photo" src={ownPhoto} />
            <p className="footer--text">
                
                Hello! I'm a third year student from <span className="bold">TAMK</span> studying Business Information Systems.
                <span className="bold"> UI</span> and <span className="bold">UX</span> are my main interests and I'm eager to learn more about them through own projects and hopefully in the future work.
                {<BiHappyBeaming />}
            </p>
            <div className="footer--info">
                <h3 className="footer--name">Säde Sipolainen</h3>
                <p className="footer--number"><span className="footer--icon">{<BiAt />}</span>saede.sipo@gmail.com</p>
                <a href="https://github.com/SadeSipolainen" className="footer--github"><span className="footer--icon">{<GoMarkGithub />}</span>Github</a>
            </div>
        </footer>
    );
}

export default Footer;