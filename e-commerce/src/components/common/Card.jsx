const Card = (props) => {

    return (
        <>
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-content">
                {props.children}
            </div>
            <div className="card-footer">
                <ul>
                    <li>Fecha: {props.date}</li>
                    <li>Autor: {props.author}</li>
                </ul>
            </div>
        </>
    )

}

export default Card