function Card({ title, description, imgPath}) {
    return(
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            <img width="300" src={imgPath} />
        </>
    );
}

export default Card;