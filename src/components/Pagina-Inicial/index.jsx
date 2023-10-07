import Card from "../Cards";
import PrimeiraLetra from "../Busca-Primeira-Letra";
import BuscaIngredientes from "../Busca-Ingredientes";
import { useState, useEffect } from "react";

import "./PaginaInicial.css";

const PaginaInicial = () => {
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [receitas, setReceitas] = useState();
    const [mostraReceitas, setMostraReceitas] = useState(false);
    const [pesquisaReceitas, setPesquisaReceitas] = useState("");
    const [pesquisaIngredientes, setPesquisaIngredientes] = useState("");
    

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setReceitas(data.meals);
            setMostraReceitas(true);
        })
    }, [url])

    const buscaPorLetra = (letra) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`);
    }

    const buscaPorNome = (e) => {
        if (e.key == "Enter") {
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${pesquisaReceitas}`);
        }

    }

    const buscaPorIngredientes = (e) => {
        setUrl(`https:www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.value}`); 
    }

    return (
        <div className="container_principal">
            <header className="cabecalho">
                <h1>Encontre suas receitas favoritas</h1>
                <p>As receitas são obtidas da API TheMealDB.</p>
                <input
                    className="campo_busca-nome" type="search" placeholder="busque aqui"
                    onChange={e => setPesquisaReceitas(e.target.value)} onKeyDown={buscaPorNome}
                />
            </header>
            <hr id="linha-um" />
            <section className="secao_cards">
                {
                    mostraReceitas ? <Card receita={receitas} /> : "Receitas ainda não obtidas!"
                }

            </section>
            <section className="secao_busca-letra">
                <PrimeiraLetra letraAtual={(letra) => buscaPorLetra(letra)} />
            </section>
            <section className="secao_busca-ingredientes">
                <BuscaIngredientes evento={buscaPorIngredientes}/>
            </section>
        </div>
    )
    
};

export default PaginaInicial;