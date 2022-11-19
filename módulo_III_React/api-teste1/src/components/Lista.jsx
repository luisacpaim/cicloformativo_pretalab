import advices from "./data";


export const Lista = () => {
    return(
        <>
            {advices.map(advice => {
                return(
                    <h1 key={advice.slip_id}>{advice.advice}</h1>
                )
            })}
        </>
    );
};