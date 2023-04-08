//where player state is created/lives

//Displays box to enter players name
//add button saves name to local storage
//done button sends you to the check in page  

import { Link } from "react-router-dom"
import { useState } from "react"

//styling
import Button from "react-bootstrap/Button"
import { UserPlusIcon } from '@heroicons/react/24/solid'


export default function AddPlayerForm({ addName }) {
    const [name, setName] = useState("")
    // const [player, setPlayer] = useState([])

    // function addName(player) {
    //     setPlayer(prevState => [...prevState, player])
    // }
  
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
                <button className="btn" type="submit" aria-label="Add Name"> 
                    Add<UserPlusIcon />
                </button>
                <Link to={`/checkin`}>
                    <Button variant="outline-secondary">Done</Button>
                </Link>
            </form>
        </>
    )
}

