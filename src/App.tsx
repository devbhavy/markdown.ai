import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { AiGenerator } from './pages/Ai-Generator'
import { CreateReadme } from './pages/CreateReadme'
import { Landing } from './pages/Landing'

function App(){
  return(
    <BrowserRouter>
      <Main/>

    </BrowserRouter>
  )
}

function Main(){
  return(
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/ai' element={<AiGenerator/>}></Route>
      <Route path="/create" element={<CreateReadme/>}></Route>
    </Routes>
  )
}


export default App