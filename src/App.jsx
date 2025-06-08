
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events'
import Dashboard from './assets/pages/Dashboard'
import Bookings from './assets/pages/Bookings'
import EventDetails from './assets/pages/EventDetails'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/events/:id' element={<EventDetails/>}/>
      
    </Routes>
  )
}

export default App
