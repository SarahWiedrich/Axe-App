//displays the add players component??

import { useState } from "react"

import AddPlayerForm from "../components/AddPlayerForm"
import PlayersList from "../components/PlayersList"

export default function Add() {  
    const [player, setPlayer] = useState([])

    function addName(player) {
        setPlayer(prevState => [...prevState, player])
    }
    return (
        <>
            <AddPlayerForm addName={addName} />
            {player && <PlayersList player={player} />}
        </>
    )
}