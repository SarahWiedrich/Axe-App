import CheckIn from "./pages/CheckIn"
import Home from "./pages/Home"
import Match from "./pages/Match"
import Add from "./pages/Add"
import { Routes, Route } from 'react-router-dom'

//styling
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
 
  return (
    <div className="App">
        <header className='app-header'>
        <h1 className='title'>Axe App</h1>
        </header>
        <div>
            <Routes>
                <Route path = "/" element={ <Home /> } />
                <Route path = "checkin" element={ <CheckIn /> } />
                <Route path = "match" element={ <Match /> } />
                <Route path = "add" element={ <Add /> } />
            </Routes>
        </div>

    </div>
  )
}