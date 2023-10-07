import "./Ingredientes.css";

const BuscaIngredientes = ({evento}) => {
    return(
        <div className="principal">
            <h3 className="titulo_busca-ingredientes">Procurar por ingredientes</h3>
            <input 
                className="campo_busca-ingredientes" type="search" placeholder="busque aqui"
                onChange={(e) => evento(e)}  
            />
        </div>
        
    )
};

export default BuscaIngredientes;