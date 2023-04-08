import useLocalStorage from "../hooks/useLocalStorage";
import EditForm from "./EditForm"
import PlayersList from "./PlayersList";
import AddPlayerForm from "./AddPlayerForm"


import { useState } from "react"

export default function EditPlayer() {
    const [players, setPlayers] = useLocalStorage('name.players', [])
    const [editedPlayer, setEditedPlayer] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [prevFocusElement, setPrevFocusElement] = useState(null)

    // function addName(player) {
    //     setPlayers(prevState => [...prevState, player])
    // }

    function deletePlayer(id) {
        setPlayers(prevState => prevState.filter(player => player.id !== id))
    }

    function markAbsent(id) {
        setPlayers(prevState => prevState.map(player => (
            player.id === id ? {...player, checked: !player.checked} : player)))
    }

    function closeEditMode() {
        setIsEditing(false)
        prevFocusElement.focus()  
    }
    
    function updatePlayer(player) {
        setPlayers(prevState => prevState.map(name => (
            name.id === player.id ? {...name, name: player.name} : name
        )))
        closeEditMode()
    }

    function enterEditMode(player) {
        setEditedPlayer(player)
        setEditedPlayer(true)
        setPrevFocusElement(document.activeElement)
    }


    return (
        <div>
            <header>
                <h1>Edit Players List</h1>
            </header>
            {isEditing && (
                <EditForm
                    editedPlayer={editedPlayer}
                    updatePlayer={updatePlayer}
                    closeEditMode={closeEditMode}
                />
            )}

            <AddPlayerForm addname={addName}/>

            {players && (
                <PlayersList 
                    players={players}
                    deletePlayer={deletePlayer}
                    markAbsent={markAbsent}
                    enterEditMode={enterEditMode}
                />
            )}
        </div>
    )
}