import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Link to={`/add`}>
                <Button variant="outline-secondary">Add Players</Button>
            </Link>
            <Link to={`/checkin`}>
                <Button variant="outline-secondary">Check In Players</Button>
            </Link>
        </>
    )
}