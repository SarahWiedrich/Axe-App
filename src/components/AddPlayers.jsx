//boxs to enter players first and last name
//add button saves info to checkin table
// everytime a player is added it will need to update add another line to the table on check in player.
//button add another stays on this page and runs a function that adds first & last name to the players array
//button done adds (below) and sends you to the check in page  

import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"

export default function AddPlayers() {
 
    const [player, setPlayer] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <>
            <h1>Add New Players</h1>
            
            <Form.Control 
                type="text" 
                placeholder="First Name" 
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}/>
            <br />
            <Form.Control 
                type="text" 
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}/>
            <br />

            <Link to={`/checkin`}>
                <Button variant="outline-secondary">Done</Button>
            </Link>
                <Button variant="outline-secondary">Add another</Button>
        </>
    )
}

