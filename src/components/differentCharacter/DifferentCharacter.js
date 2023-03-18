import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { environment } from '../../environment';
import '../differentCharacter/DifferentCharacter.scss';

function DifferentCharacter() {

    let [characterDetails, setCharacterDetails] = useState({});
    let { id } = useParams();

    let fetchCharacterDetails = async () => {
        let response = await fetch(`${environment.baseUrl}/character/${id}`)
        let data = await response.json();
        setCharacterDetails(data)
        console.log(characterDetails)
    }

    const goBack = () => {
        window.history.back();
    }

    useEffect(() => {
        fetchCharacterDetails()
    },[])

    return (<main className="differentCharacterBlock">

        <h3 className="goBackBlock" onClick={goBack}>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"/>
            </svg>
            <div> Go Back </div>
        </h3>

        {characterDetails &&
            (<div>
                <main className="charactersDetailsInfo">
                    <div className="image">
                        <img src={characterDetails?.image} alt="image"/>
                    </div>
                    <div className="characterName">
                        {characterDetails?.name}
                    </div>
                    <h3 className="informations"> Informations </h3>
                    <footer className="infoTable">
                        <div className="row">
                            <h5> Gender </h5>
                            <h5> {characterDetails?.gender} </h5>
                        </div>
                        <div className="row">
                            <h5> Status </h5>
                            <h5> {characterDetails?.status} </h5>
                        </div>
                        <div className="row">
                            <h5> Specie </h5>
                            <h5> {characterDetails?.species} </h5>
                        </div>
                        <div className="row">
                            <h5> Origin </h5>
                            <h5> {characterDetails.origin?.name} </h5>
                        </div>
                        <div className="row">
                            <h5> Type </h5>
                            <h5> {characterDetails?.type || 'Unknown'} </h5>
                        </div>
                    </footer>

                </main>

            </div>)
        }

            </main>);
}

export default DifferentCharacter;
