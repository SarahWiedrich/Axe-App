//maps over all players and 
//list of ALL players
// all players automatically checked in 
// button to generate matchups - sends to match page 

import PlayersPresent from "./PlayersPresent"

export default function PlayersList({ player, deletePlayer, markAbsent, enterEditMode }) {
    return (
        <>
        <ul>
            {player.map(player => (
                <PlayersPresent
                    key={player.id}
                    player={player}
                    deletePlayer={deletePlayer}
                    markAbsent={markAbsent}
                    enterEditMode={enterEditMode}
                />
            ))}
        </ul>
        <button>Generate Matchup??</button>
        </>
    )
}
    