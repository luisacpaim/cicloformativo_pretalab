import { informacoes } from "../data/content";

export const Cards = () => {
    return (
        <>
        {informacoes.map(item => {
            return (                
                <div key={item.id}>
                    <h1>{item.titulo}</h1>
                    <img width='100' src={item.imgPath} />
                    <p>{item.descricao}</p>
                    <a href={item.linkDetalhes} target='_blanket' />
                </div>
            );
        })};      
        </>
    );
};