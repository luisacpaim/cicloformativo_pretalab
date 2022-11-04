function Texto(props) {
    return (
        <p>{props.children}</p>
    )
}
/* o children é como span, permite abrir e fechar
tag incluindo o props dentro dela (não como atributo) */
export default Texto