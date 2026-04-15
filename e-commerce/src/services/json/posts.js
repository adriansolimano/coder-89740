import posts from '../../data/posts.json'

const error = false

const getPosts = (page) => {

    return new Promise((resolve, reject) => {

        if(error) {
            reject({
                success: false,
                message: "Hubo un error"
            })
        }

        setTimeout(() => {
            resolve({
                success: true,
                data: posts
            })
        }, 2000)

    })

}

const updatePost = () => {}

const removePost = () => {}

const getPost = (id) => {

    return new Promise((resolve, reject) => {

        if(error) {
            reject({
                success: false,
                message: "Hubo un error"
            })
        }

        setTimeout(() => {
            resolve({
                success: true,
                data: posts.find(elem => elem.id === parseInt(id))
            })
        }, 1000)

    })

}

export { getPost, updatePost, getPosts, removePost }

// http://localhost:3000/api/posts?offset=0&limit=10 acá traigo los primeros 10
// http://localhost:3000/api/posts?offset=10&limit=10 acá traigo del 11 al 20