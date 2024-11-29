import S from "./footer.module.scss"
import Instagram from "../../assets/img/instagram.png"
import Facebook from "../../assets/img/facebook.png"
import Linkedin from "../../assets/img/linkedin.png"
import Twitter from "../../assets/img/twitter.png"
import Youtube from "../../assets/img/youtube.png"

export default function Footer(){
    return(
        <footer>
            <section className={S.BoxFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href="">
                        <img src={Facebook} alt="Logo do Facebook" />
                    </a>
                    <a href="">
                        <img src={Twitter} alt="Logo do Twitter" />
                    </a>
                    <a href="">
                        <img src={Youtube} alt="Logo do Youtube" />
                    </a>
                    <a href="">
                        <img src={Linkedin} alt="Logo do Linkedin" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="Logo do Instagram" />
                    </a>
                </nav>
            </section>
            <section className={S.Borda}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}