import "./PrimeiraLetra.css";

const PrimeiraLetra = ({letraAtual}) => {
    const letras = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U",
        "V", "W", "X", "Y", "Z"
    ];
    let chaveLetras = 0;

    return(
        
        <>
            {
                letras.map(letra => {
                    return <button key={chaveLetras++} id="botao-letra" onClick={() => letraAtual(letra)}>{letra}</button>
                })
            }
        </>
    )
};

export default PrimeiraLetra;