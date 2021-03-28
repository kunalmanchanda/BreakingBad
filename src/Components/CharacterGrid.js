import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

function CharacterGrid({ items, isLoading }) {

    return isLoading ? (
    <Spinner/>
    ) : (
    <section className="cards">
        {items.map(item => ( 
            // <h1 key={item.char_id}> {item.name} </h1>
            <CharacterItem key={item.char_id} item = {item} />
        ))}
        {/* <spinner/> */}
    </section>
    )
}

export default CharacterGrid
