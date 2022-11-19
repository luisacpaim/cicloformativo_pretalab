import { useEffect, useState  } from 'react';
import Axios from 'axios';


export const Lista = () => {
    const [pokemons, setPokemons] = useState([]);
    const [oculto, setOculto] = useState(false);
    const [statusDaLista, setStatusDaLista] = useState(
        "A lista de Pokemons está visível!"
      );
    useEffect(() => {
        async function pegaDados() {
            const resposta = await Axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(resposta.data.results);
        }
        pegaDados();    
    }, []);

    useEffect(() => {
        if (oculto) {
            setStatusDaLista("A lista de Pokemons está oculta!");
        } else {
            setStatusDaLista("A lista de Pokemons está visível!");
        }
    }, [oculto]);


    function ocultarLista() {
        setOculto((valor) => !valor);
    }

    return(
        <>
        <h1>Pokemons</h1>
        <input type="checkbox" onChange={ocultarLista} />
        <label>Ocultar Lista</label>
        <br />
        <h2>{statusDaLista}</h2>
        <br />
        {oculto
            ? null
            : pokemons.map((pokemon) => {
                return <p key={pokemon.name}>{pokemon.name}</p>;
            })}
        </>
    );
};

