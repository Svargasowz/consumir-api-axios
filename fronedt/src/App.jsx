import { BrowserRouter} from 'react-router-dom'
import Registrar from '../components/Registrar.jsx'
import Listar from '../components/Listar.jsx'
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    {<Registrar/>}
    </BrowserRouter>
  )
}
export default App