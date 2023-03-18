import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { environment } from '../../environment';
import headerImage from '../../media/logoImg.png'
import '../allCharacters/AllCharacters.scss';

function AllCharacters() {

    const [characters, setCharacters] = useState([]);
    const [input, setInput] = useState({
        findInputCharacter: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const getAllCharacters = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${environment.baseUrl}/character`);
            const data = await response.json();
            setCharacters(data.results.sort((a, b) => a.name.localeCompare(b.name)));
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const filterAllCharacters = async (event) => {
        const { value, name } = event.target;
        setInput({ ...input, [name]: value });
        const params = new URLSearchParams();
        if (name === 'findInputCharacter' && value.length) {
            params.set('name', value);
            setIsLoading(true);
            try {
                const response = await fetch(`${environment.baseUrl}/character?${params}`);
                if (response.status === 404) {
                    setCharacters([]);
                    setIsLoading(false);
                    return;
                }
                const data = await response.json();
                const filteredResults = data?.results?.filter((character) => {
                    const nameChars = character.name.toLowerCase().split('');
                    const searchChars = value.toLowerCase().split('');
                    return searchChars.every((char, index) => nameChars[index] === char);
                }) || [];
                setCharacters(filteredResults.sort((a, b) => a.name.localeCompare(b.name)));
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        } else {
            params.delete('name');
            getAllCharacters();
        }
    };

    useEffect(() => {
        getAllCharacters();
    }, []);


    return (<main className="allCharacterBlock">
        <div className="charactersContainer">

            <header className="headerImg">
                <img src={headerImage} alt="headerSiteImage"/>
            </header>

            <div className="inputBlock">
                <label className="inputLabel">
                    <input
                        type="text"
                        placeholder="Filter by name..."
                        name="findInputCharacter"
                        onChange={filterAllCharacters}
                        value={input.findInputCharacter}
                    />
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                            fill="black" fillOpacity="0.54"/>
                    </svg>
                </label>
            </div>

            <div className="fullCharactersList">
                {isLoading && <div className="noItemsFoundAndIsLoading"> Loading...</div>}
                {!isLoading && characters.length === 0 && <div className="noItemsFoundAndIsLoading"> No items found </div>}
                {!isLoading && characters.length > 0 && (characters.map(character =>
                        <div key={character.id} className="differentCharacterItem">
                            <Link to={`/characters/${character.id}`}>
                                <div>
                                    <img src={character.image} alt="characterImage"/>
                                </div>
                                <main>
                                    <h4 className="characterName"> {character.name} </h4>
                                    <h4 className="characterSpecies"> {character.species} </h4>
                                </main>
                            </Link>
                        </div>)
                )}
            </div>

        </div>
    </main>);
}

export default AllCharacters;
