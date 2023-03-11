// list of ALL players
// a check box next to each name
    //write a function that displays the check in button as many times as there are names in the table
// all players automatically checked in 
// button to generate matchups - sends to match page 

import Form  from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"

export default function Attendance() {
    return (
        <>
        <div className="container">
            <div className="names-table">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>   
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>name</td>
                        <td>name</td>
                        </tr>
                        <tr>
                        <td>name</td>
                        <td>name</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="checkin-switch">
                <span>Click to mark absent</span>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="absent"
                    />
                </Form>
            </div>
        </div>
        </>
    )
}