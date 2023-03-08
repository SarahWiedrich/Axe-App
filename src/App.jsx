import CheckIn from "./pages/CheckIn"
import Home from "./pages/Home"
import Match from "./pages/Match"
import { Routes, Route } from 'react-router-dom'

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
            </Routes>
        </div>

    </div>
  )
}