import "./Card.css";

const Card = ({receita}) => {
    let chaveCards = 0;
    return (
        <>
            { 

                (receita) ? receita.map(data => {
                    return (
                        <div key={chaveCards++} className="card">
                            <img src={data.strMealThumb} alt="card" />
                            <h3 id="nome-receita">{data.strMeal}</h3>
                        </div>
                    )
                }) : "Não obtivemos as receitas!"
                
            }
        </>
    )
};

export default Card;