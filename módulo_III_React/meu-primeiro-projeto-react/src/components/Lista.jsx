import albuns from "../service/dados";

function Lista() {
    return (
        <div>
            {albuns.map(item => {
                return(
                    <div key={item.id}>
                        <h2>{item.nome}</h2>
                        <h3>{item.artista}</h3>
                        <p>{item.lançamento}</p>
                        <img width="200" src={item.capa} />
                    </div>
                );
            })}
        </div>
    );
}

export default Lista;