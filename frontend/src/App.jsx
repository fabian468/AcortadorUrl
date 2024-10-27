
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MidNavegacion from './components/midNavegacion'
import HomeUser from './components/HomeUser'
import StateUserCoponent from './context/StateUserCoponent.jsx'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<MidNavegacion />} />

        <Route path='/user/*' element={
          <StateUserCoponent>
            <HomeUser />
          </StateUserCoponent>
        } />

      </Routes>
    </BrowserRouter>
  )
}


export default App
