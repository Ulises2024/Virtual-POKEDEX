import { useState } from 'react'
import './index.css'; // Importación de Tailwind CSS


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-2xl font-bold'>Virtual pokedex</h1>
    </>
  );
}

export default App
