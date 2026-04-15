import { useContext, useMemo } from 'react';
import Post from '../components/common/Post';
import usePosts from '../hooks/usePosts';
import { AuthContext } from '../contexts/auth';

const Posts = () => {

    const { posts, setPage, handleAddPost, removePost } = usePosts()

    const { user, login } = useContext(AuthContext)

    const changePage = (page) => {
        setPage(page);
    }

    console.log(user)

    if(!posts) return <>Cargando...</>
    
    return (
        <div>
            <button onClick={login}>Login</button>
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

            <div>
                <ul>
                    <li>
                        <button onClick={() => changePage(1)}>1</button>
                    </li>
                    <li>
                        <button onClick={() => changePage(2)}>2</button>
                    </li>
                    <li>
                        <button onClick={() => changePage(3)}>3</button>
                    </li>
                </ul>
            </div>

            <button onClick={handleAddPost}>Agregar Post</button>
        </div>
    )

}

export { Posts }