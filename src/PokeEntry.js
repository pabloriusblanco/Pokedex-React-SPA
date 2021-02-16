import React from 'react'

export default function PokeEntry(props) {
    const {match} = props;
    const {params} = match;
    const {pokemonId} = params;

    console.log(match)
    return (
        <div>
            <h1>
            Pokemon number {pokemonId}
            </h1>
        </div>
    )
}
