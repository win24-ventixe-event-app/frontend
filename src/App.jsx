
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Bookings from './assets/pages/Bookings'
import EventDetails from './assets/pages/EventDetails'
import PortalLayout from './assets/layouts/PortalLayout'
import EventPage from './assets/pages/EventPage'

function App() {
  return (
    <Routes>
       <Route element={<PortalLayout />}>
          <Route path='/' element={<EventPage />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events/booking/:id" element={<Bookings />} />
        </Route>
    </Routes>
  )
}

export default App
