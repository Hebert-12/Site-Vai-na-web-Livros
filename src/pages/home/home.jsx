import S from "./home.module.scss"
import Article1 from "../../assets/img/article1.png"
import Article2 from "../../assets/img/article2.png"
import Article3 from "../../assets/img/article3.png"
import Article4 from "../../assets/img/article4.png"

export default function Home(){
    return(
        <main>
            <section className={S.Topo}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <div>
                <h2 className={S.PorqueDoar}>Por que devo doar?</h2>
                <section className={S.BoxCards}>
                    <article>
                        <img src={Article1} alt="Icone que remete a um circulo social" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={Article2}  alt="Icone que remete a uma pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={Article3}  alt="Icone que remete a varias pessoas conectadas a um unico icone de um punho que remete a uma inspiração" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={Article4}  alt="Icone de uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </div>
        </main>
    )
}