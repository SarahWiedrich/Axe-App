//boxs to enter players first and last name
//form adds names to check in players list
// everytime a player is added it will need to update add another line to the table on check in player.

export default function AddPlayers() {
    return (
        <>
            <h1>Add New Players</h1>
            <form>
                <input></input>
            </form>

            <Link to={`/checkin`}>
                <Button variant="outline-secondary">Check In Players</Button>
            </Link>

        </>
    )
}