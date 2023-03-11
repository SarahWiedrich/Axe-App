//boxs to enter players first and last name
//add button saves info to checkin table
// everytime a player is added it will need to update add another line to the table on check in player.
//button click adds a :   
        // <tr>
        //   <td>firstname</td>
        //   <td>lastname</td>
        // </tr>    

import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"

export default function AddPlayers() {
    return (
        <>
            <h1>Add New Players</h1>
            <form>
                <input></input>
                <input></input>
            </form>

            <Link to={`/checkin`}>
                <Button variant="outline-secondary">Add</Button>
            </Link>

        </>
    )
}