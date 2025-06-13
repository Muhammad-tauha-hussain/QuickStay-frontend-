
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import AllRooms from './pages/AllRooms';
import RoomDetailedPage from './pages/RoomDetailedPage';
import About from './pages/About';
// import Home from './pages/Home'
function App() {

  const isOwnerPath = useLocation().pathname.includes("owner")

  // console.log(isOwnerPath);


  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomDetailedPage/>} />

        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
