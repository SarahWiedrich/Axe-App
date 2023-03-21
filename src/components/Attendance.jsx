// list of ALL players
// a check box next to each name
    //write a function that displays the check in button as many times as there are names in the table
// all players automatically checked in 
// button to generate matchups - sends to match page 

import Form  from "react-bootstrap/Form"
import ListGroup from 'react-bootstrap/ListGroup'

export default function Attendance() {

    const displayPlayer = playersList.map((eachPlayer) => {
        return <ListGroup.Item>{eachPlayer}</ListGroup.Item>
    })
    const markAbsent = playersList.forEach((player) => {
        return <Form.Check type="switch" id="custom-switch" label="absent"/>
    })

    return (
        <>
        <div className="container">
            <h2>Players</h2>
            <ListGroup>
                {displayPlayer}
            </ListGroup>
            <div className="checkin-switch">
                <span>Click to mark absent</span>
                <Form>
                   {markAbsent}
                </Form>
            </div>
        </div>
        </>
    )
}