//boxs to enter players first and last name
//add button saves info to checkin table
// everytime a player is added it will need to update add another line to the table on check in player.
//button add another stays on this page and runs a function that adds first & last name to the players array
//button done adds (below) and sends you to the check in page  

import { Link } from "react-router-dom"
import { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
//styling
import Button from "react-bootstrap/Button"
import { UserPlusIcon } from '@heroicons/react/24/solid'


export default function AddPlayers() {
    const [name, setName] = useState("")
    const [players, setPlayers] = useLocalStorage('players-list', [])
    
    //add player to local storage array
    function addName(player) {
        setPlayers(prevState => [...prevState, player])
    }

    function handelFormSubmit(e) {
        e.preventDefault()
        addName({
            name: name,
            checked: false,
            id: Date.now()//using date/time as a unique id assigned to each player
        })
        setName("")
    }

     return (
        <>
            <h1>Add New Players</h1>
            <form className="playersForm" onSubmit={handelFormSubmit}>
                <div>
                    <input 
                    type="text"
                    id="name"
                    className="input"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    required
                    autoFocus
                    placeholder="Enter Name"
                    />
                </div>
                <button className="btn" type="submit"> 
                    Add<UserPlusIcon />
                </button>
                <Link to={`/checkin`}>
                    <Button variant="outline-secondary">Done</Button>
                </Link>
            </form>
        

        </>
    )
}

