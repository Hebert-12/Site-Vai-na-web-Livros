<<<<<<< HEAD
import S from "./queroDoar.module.scss"
import Livro from "../../assets/img/livro.png"
import { useState } from "react"
import axios from "axios"

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviaODados = async()=>{

        const urlApi = "https://projetofinal-api-r7zq.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar)

        alert("Livro cadastrado!!")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImagem_url(e.target.value)
    }

    return(
        <section className={S.Formulario}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div className={S.FormTitulo}>
                    <img src={Livro} alt="icone de um livro" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder="Titulo" onChange={capturaTitulo} value = {titulo}/>
                <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria} />
                <input type="text" placeholder="Autor" onChange={capturaAutor} value={autor}/>
                <input type="text" placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url} />
                <input type="submit" value="Doar" className={S.Enviar} onClick={enviaODados}/>
            </form>
        </section>
    )
=======
import S from "./queroDoar.module.scss"
import Livro from "../../assets/img/livro.png"
import { useState } from "react"
import axios from "axios"

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviaODados = async()=>{

        const urlApi = "https://api-desafio-4zdr.onrender.com/queroDoar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar)

        alert("Livro cadastrado!!")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
        console.log(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImagem_url(e.target.value)
    }

    return(
        <section className={S.Formulario}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div className={S.FormTitulo}>
                    <img src={Livro} alt="icone de um livro" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder="Titulo" onChange={capturaTitulo} value = {titulo}/>
                <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria} />
                <input type="text" placeholder="Autor" onChange={capturaAutor} value={autor}/>
                <input type="text" placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url} />
                <input type="submit" value="Doar" className={S.Enviar} onClick={enviaODados}/>
            </form>
        </section>
    )
>>>>>>> 5b424e0abdd03a37fd8d2f082d853e4f232cc913
}