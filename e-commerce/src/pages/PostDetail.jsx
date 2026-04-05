import { useParams } from "react-router"
import { getPost } from "../services/json/posts"
import { useEffect, useState } from "react"

const PostDetail = () => {

    const [detail, setDetail] = useState()

    const params = useParams()

    useEffect(() => {
        getPost(params.postId).then(response => {            
            setDetail(response.data)
        })
    }, [params.postId])

    return (
        <>
            <div>Post detail </div>

            {!detail ? (
                <>
                    Cargando datos...
                </>
            ) : (
                <ul>
                    <li>
                        ID: {detail.id}
                    </li>
                    <li>
                        Título: {detail.titulo}
                    </li>
                    <li>
                        Descripción: {detail.descripcion}
                    </li>
                </ul>
            )}
        </>
    )
}

export default PostDetail