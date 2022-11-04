function Info(props) { 
    return (
        <div>
            <p>{props.quantidade}</p>              
            <p>{props.tipo}</p>
        </div>
    )
}
 /*props é como se fosse o parâmetro da função, mas que permite 
 criar nossa própria tag e essas props são os atributos*/
export default Info