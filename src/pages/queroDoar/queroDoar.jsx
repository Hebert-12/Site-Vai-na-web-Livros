import S from "./queroDoar.module.scss"
import Livro from "../../assets/img/livro.png"

export default function QueroDoar(){
    return(
        <section className={S.Formulario}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div className={S.FormTitulo}>
                    <img src={Livro} alt="icone de um livro" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder="Titulo"/>
                <input type="text" placeholder="Categoria" />
                <input type="text" placeholder="Autor"/>
                <input type="text" placeholder="Link da Imagem"/>
                <input type="submit" value="Doar" className={S.Enviar}/>
            </form>
        </section>
    )
}