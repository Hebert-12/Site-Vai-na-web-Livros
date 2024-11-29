import S from "./livrosDoados.module.scss"
import Livro1 from "../../assets/img/livroDoado1.png"

export default function LivrosDoados(){
    return(
        <section className={S.Geral}>
            <h2>Livros Doados</h2>
            <section className={S.Galeria}>
                <article>
                    <img src={Livro1} alt="Imagem do livro protagonista" />
                    <div>
                        <p>O protagonista</p>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </article>
            </section>
        </section>
    )
}