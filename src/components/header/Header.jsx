import Logo from "../../assets/img/logo.png"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Busca from "../../assets/img/busca.png"
import Home from "../../pages/home/home"
import LivrosDoados from "../../pages/livrosDoados/livrosDoados"
import QueroDoar from "../../pages/queroDoar/QueroDoar"
import S from "./header.module.scss"

export default function Header (){
    return(
        <BrowserRouter>
            <header>
                <section className={S.Logo}>
                    <img src={Logo} alt="" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={S.BoxLink}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/livrosDoados">Livros Doados</Link></li>
                        <li><Link to="/queroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={S.Button}>
                    <input type="search" placeholder="O que você procura?" />
                    <button>
                        <img src={Busca} alt="" />
                    </button>
                </section>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/livrosDoados" element={<LivrosDoados/>}/>
                <Route path="/queroDoar" element={<QueroDoar/>}/>
            </Routes>
    </BrowserRouter>
    )
}