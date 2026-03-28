import { useEffect } from "react";

const Users = () => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then((data) => {
            console.log(data);
        })
    }, [])

    return (

        <div>
            <h1>Usuarios</h1>


            <table>
                <thead>
                    <th>
                        Nombre
                    </th>
                    <th>
                        email
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Adrian
                        </td>
                        <td>
                            asd@asd.com
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )

}

export default Users