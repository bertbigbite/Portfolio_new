import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'

import Error from './components/Error/Error'
import SingleBookDetail from './components/Productlisting/SingleProjectDetail/SingleProductDetail'
import Home from './components/Home/Home'
import HomeBanner from './components/HomeBanner/HomeBanner'
import SingleProductDetail from './components/Productlisting/SingleProjectDetail/SingleProductDetail'
function App() {
  

  return (
   <BrowserRouter>

   <Nav />
   
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<Error />} />
    <Route path='/projects.json' element={<SingleProductDetail/>} />
   </Routes>
   
   
   
   
   </BrowserRouter>
  )
}

export default App
