
import './App.css'
import EmployeeComponents from './components/EmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponents />}></Route>
          <Route path='/employees' element={<ListEmployeeComponents />}></Route>
          <Route path='/add-employee' element={<EmployeeComponents />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
