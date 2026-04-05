import { useEffect } from "react"
import { Link } from 'react-router'

const Post = (props) => {

    const { id, titulo, descripcion, tipo, removeCallback } = props

    const handleRemove = () => {
        removeCallback(id)
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
            <td><Link to={`/posts/${id}`}>Ver</Link></td>
        </tr>
    )

}

export default Post