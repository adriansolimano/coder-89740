import { useEffect } from "react"

const Post = (props) => {

    const { id, titulo, descripcion, tipo, callback } = props

    const handleRemove = () => {
        callback(id)
    }

    useEffect(() => {
        console.log(id);

        return () => {
            console.log('unmount');     
        }
    }, [])
 
    return (
        <tr>
            <td>{id}</td>
            <td>{titulo}</td>
            <td>{descripcion}</td>
            <td>{tipo}</td>
            <td><button onClick={handleRemove}>Eliminar</button></td>
        </tr>
    )

}

export default Post