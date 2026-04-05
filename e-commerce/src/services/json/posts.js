import posts from '../../data/posts.json'

const error = false

const getPosts = () => {

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