import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Counter from './components/Counter';
import { Posts } from './components/Posts';
import Users from './pages/Users';

function App() {

  const num = 111

  const [initValue, setInitValue] = useState(0)

  const [otroEstado, setOtroEstado] = useState({ name: "Adrian"})

  const handleChangeInitValue = (event) => {
    setInitValue(parseInt(event.target.value))
  }

  return(
    <>

      {/* <Card title="Lorem Ipsum" author="Pedro" date="11/03/2026">
        <img src="image.jpg" alt="Esto es una imagen" />
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsum. Quos voluptatibus, dolores illo accusantium laudantium deserunt est corrupti quis quia dicta harum nobis consectetur, eos hic porro adipisci incidunt.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur voluptatum nulla eveniet, impedit expedita qui? Quibusdam, aut consequuntur, eveniet possimus, praesentium debitis incidunt soluta accusamus illo corrupti officiis vero deserunt.</p>
        </div>
        <table border={1}>
          <tbody>
            <tr>
              <td>Valor 1</td>
              <td>Valor 2</td>
            </tr>
          </tbody>
        </table>
      </Card>

      <div>
        El valor de num es {num}
      </div>

      {num === 5 ? "El valor es igual" : "No es iguales"}

      <hr />

      {initValue !== 0 && <Counter initValue={initValue} num={num} />}

      <form action="">
        <input type="text" onChange={handleChangeInitValue} name="init-value" id="init-value" />
      </form> */}

      <Posts />

      {/* <Users /> */}

    </>
  )

}

export default App