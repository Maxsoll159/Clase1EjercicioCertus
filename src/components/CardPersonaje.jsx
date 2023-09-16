export const CardPersonaje = ({ nombre, aldea, rango, estado, imagen }) => {
    return (
        <div className="cardPersonaje">
            <img src={`/img/${imagen}`} alt="" width={300} height={300} />
            <div>
                <h2>{nombre}</h2>
                <p>{estado}</p>
                <p>{rango}</p>
                <p>{aldea}</p>
            </div>
        </div>
    )
}