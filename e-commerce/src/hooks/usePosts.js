import { useEffect, useState } from "react"
import { getPosts } from "../services/json/posts"

const usePosts = () => {

    const [ posts, setPosts ] = useState(undefined)
    const [ page, setPage ] = useState(1)

    useEffect(() => {

        getPosts(page).then(resp => {
            setPosts(resp.data)
        }).catch(error => {
            console.log(error); 
        })

        console.log('se ejecutó el useEffect');
        // Esto se ejecuta al menos una vez al montarse el componente
    }, [posts])
    

    const handleAddPost = () => {

        const newPost = {
            id: 11,
            titulo: "Lorem Ipsum",
            descripcion: "Lorem Ipsum descripcion",
            tipo: "promocional"
        }

        setPosts([...posts, newPost])

    }

    const removePost = (id) => {

        const filteredPost = posts.filter(post => post.id !== id)

        setPosts(filteredPost)

    }

    return { posts, page, setPage, handleAddPost, removePost }

}

export default usePosts