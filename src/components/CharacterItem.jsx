import React from 'react';

function CharacterItem({character: {id, name}}) {
    return (
        <article>
            <a href={`/characters/${id}`}>{name}</a>
        </article>
    );
}

export default CharacterItem;
