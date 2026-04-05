import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router'
import './App.css'
import { Posts } from './pages/Posts';
import Users from './pages/Users';
import PostDetail from './pages/PostDetail';

function App() {

  const num = 111

  const [initValue, setInitValue] = useState(0)

  const [otroEstado, setOtroEstado] = useState({ name: "Adrian"})

  const handleChangeInitValue = (event) => {
    setInitValue(parseInt(event.target.value))
  }

 
 
  return(
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </>
  )

}

export default App