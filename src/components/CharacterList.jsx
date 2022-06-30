import CharacterItem from "./CharacterItem";


export function CharacterList({characters=[]}) {


    return(
        <div>
            {characters.map((character)=>(
                <CharacterItem key={character.key} character={character}/>
                )

            )}
        </div>
    )
}
