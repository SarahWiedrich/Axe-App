//displays check box and handels checkbox functionality - updates checked state
//default state of player is present(checked)
//if checkbox is check it marks the player as absent - CSS draws a line through the name
    //if check box checked do not export this name to match up
//displays delete button - used when soneone is no longer playing
//displays edit button - edit can be used when someone is subbing in for an absent player

import { useState } from 'react'

//Library imports
import { CheckIcon, PencilSquareIcon, TrashIcon  } from '@heroicons/react/24/outline';

//takes in player object from...? where will function to create player state be located
export default function PlayersPresent({ player, deletePlayer, markAbsent, enterEditMode }) {
    const [isPresent, setIsPresent] = useState(player.checked)//initial value of player state is checked - meaning they are present

    function handleCheckboxChange() {
        setIsPresent(!isPresent);//when checkbox is checked set state to is not present
        markAbsent(player.id)//then mark this player as absent
    }

    return (
        <>
            <li>
                <div>
                    <input 
                        type="checkbox"
                        checked={isPresent}
                        onChange={handleCheckboxChange}
                        name={player.name}
                        id={player.id}
                    />
                    <label> 
                        {player.name}
                        <p> <CheckIcon /> </p>
                    </label>
                </div>
                <div>
                    <button className='btn' onClick={() => enterEditMode(player)}>
                        <PencilSquareIcon /> 
                    </button>
                    <button onClick={() => deletePlayer(player.id)}> 
                        <TrashIcon /> 
                    </button>
                </div>
            </li>
        </>
    )
}