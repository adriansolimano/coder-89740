import { useState } from "react"

const Counter = (props) => {

    const [num, setNum] = useState(props.num)

    const restar = () => {
        setNum(num - 1)
    }

    const sumar = () => {
        setNum(num + 1)
    }

    console.log(props.initValue);

    return(
        <div>
            <button onClick={restar}>Restar</button>
            Counter {num} - initValue {props.initValue}
            <button onClick={sumar}>Sumar</button>
        </div>
    )

}

export default Counter