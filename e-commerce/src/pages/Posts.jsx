import Post from '../components/Post';
import usePosts from '../hooks/usePosts';

const Posts = () => {

    const { posts, handleAddPost, removePost } = usePosts()

    if(!posts) return <>Cargando...</>
    
    return (
        <div>
            <table border={1}>
                <tbody>
                    { posts.map(post => {
                        return (
                            <Post 
                                key={'posts-' + post.id} 
                                id={post.id} 
                                titulo={post.titulo} 
                                descripcion={post.descripcion} 
                                tipo={post.tipo}
                                removeCallback={removePost}
                            />
                        )
                    }) }
                </tbody>
            </table>

            <button onClick={handleAddPost}>Agregar Post</button>
        </div>
    )

}

export { Posts }