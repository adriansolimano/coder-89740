import { useEffect } from "react"
import { Link } from 'react-router'

const Post = (props) => {

    const { id, titulo, descripcion, tipo, removeCallback } = props

    const handleRemove = () => {
        removeCallback(id)
    }

    useEffect(() => {
        console.log(id);

        // const interval = setInterval(() => {
        //     console.log('interval');
        // }, 1000)

        document.addEventListener('click', () => {
            console.log('click');
        })

        return () => {
            console.log('unmount'); 
            // clearInterval(interval)
            document.removeEventListener('click', () => {
                console.log('click');
            })
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