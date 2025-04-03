<<<<<<< HEAD
import S from "./livrosDoados.module.scss"
import Livro1 from "../../assets/img/livroDoado1.png"
import axios from "axios"
import { useState, useEffect } from "react"

export default function LivrosDoados(){

    const [livros, setLivros] = useState ([])

    const getLivros = async ()=> {
        const response = await axios.get("https://projetofinal-api-r7zq.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect (()=>{
        getLivros()
},[])

    return(
        <section className={S.Geral}>
            <h2>Livros Doados</h2>
            <section className={S.Galeria}>
                <article>
                    <img src={Livro1} alt="Imagem do livro protagonista" />
                    <p>O protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                {livros.map((item)=>(
                    <article key={item.id}>
                        <img src={item.imagem_url} alt=""/>
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>
                ))}
            </section>
        </section>
    )
=======
import S from "./livrosDoados.module.scss"
import Livro1 from "../../assets/img/livroDoado1.png"
import axios from "axios"
import { useState, useEffect } from "react"

export default function LivrosDoados(){

    const [livros, setLivros] = useState ([])

    const getLivros = async ()=> {
        const response = await axios.get("https://api-desafio-4zdr.onrender.com/livrosDoados")
        setLivros(response.data)
    }

    useEffect (()=>{
        getLivros()
},[])

    return(
        <section className={S.Geral}>
            <h2>Livros Doados</h2>
            <section className={S.Galeria}>
                <article>
                    <img src={Livro1} alt="Imagem do livro protagonista" />
                    <p>O protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                {livros.map((item)=>(
                    <article key={item.id}>
                        <img src={item.imagem_url} alt=""/>
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>
                ))}
            </section>
        </section>
    )
>>>>>>> 5b424e0abdd03a37fd8d2f082d853e4f232cc913
}