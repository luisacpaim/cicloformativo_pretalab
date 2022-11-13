import { perfil } from "../data/profile-data";

const Bio = () => {
    return(
        <>
            <h2>{perfil.nome}</h2>
            <h3>{perfil.apelido}</h3>
            <p>{perfil.descricao}</p>
            <img width='200' src={perfil.foto}/>
        </>
    );
};

export default Bio;








// const Bio = () => {
//     return(

//     );
// };

// export default Bio;

