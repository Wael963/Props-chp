import React from 'react'
import Player from './Player'
import players from './players'

const PlayerList = () => {
    return (
        <div style={{display: "flex",justifyContent:'space-around' }}>
            {players.map(player => <Player name={player.name} team={player.team} nationality={player.nationality} jerseyNumber={player.jerseyNumber} age={player.age} image={player.image} />)}
        </div>
    )
}

export default PlayerList
