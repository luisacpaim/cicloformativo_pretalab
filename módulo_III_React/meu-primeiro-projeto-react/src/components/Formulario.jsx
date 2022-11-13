function Formulario() {
    function ligaClick() {
        console.log('Cliquei no botão!')
    };

    function pegaInput(event) {
        console.log(event.target.value)
    }

    return(
        <>
            <input type="text" placeholder="Digite seu nome" onChange={pegaInput} />
            <button onClick={ligaClick}>Enviar</button>
        </>
    );
};

export default Formulario;