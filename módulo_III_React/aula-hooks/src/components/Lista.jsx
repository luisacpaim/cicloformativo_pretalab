import { useEffect, useState  } from 'react';
import Axios from 'axios';


export const Lista = () => {
    const [pokemons, setPokemons] = useState([]);
    const [oculto, setOculto] = useState(false); //estado inicial como false
    const [statusDaLista, setStatusDaLista] = useState(
        "A lista de Pokemons está visível!"
      );

    useEffect(() => {
        async function pegaDados() {
            const resposta = await Axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(resposta.data.results);
        }
        pegaDados();    

        /* return()=> {
            o que estiver aqui dentro será executado ao recarregar a página ("desmontado");
        } */
    }, []); //, [] -> indica que só é pra executar uma vez

    useEffect(() => {
        // if (oculto) {   //muda titulo
        //     setStatusDaLista("A lista de Pokemons está oculta!");
        // } else { 
        //     setStatusDaLista("A lista de Pokemons está visível!");
        // }

        oculto ? setStatusDaLista("A lista de Pokemons está oculta!") : setStatusDaLista("A lista de Pokemons está visível!");

    }, [oculto]); //,[sempre que oculto for alterado]


    function ocultarLista() {  //se oculto true -> esconde; se oculto false -> mostra
        setOculto((valor) => !valor);   //nega o valor de oculto (se false, true; se true, false)
    }

    return(
        <>
        <h1>Pokemons</h1>
        <input type="checkbox" onChange={ocultarLista} />
        <label>Ocultar Lista</label>
        <br />
        <h2>{statusDaLista}</h2>
        <br />
        {oculto         //se oculto true -> renderiza nada: null; se oculto false -> mostra lista de pokemons
            ? null
            : pokemons.map((pokemon) => {
                return <p key={pokemon.name}>{pokemon.name}</p>;
            })}
        </>
    );
};

