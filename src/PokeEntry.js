import { Box, Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios';

const useStyles = makeStyles({
    imageContainer: {
        width: '100vw',
        justifyContent: 'center',
    },
    image: {
        width: '40vw',
        '@media (max-width: 1024px)': {
            width: '100%',
            margin: 30
        }
    },
    Title: {
        marginTop: '50px',
        color: '#1d3557',
        fontFamily: 'Roboto',
        fontSize: '30px',
        fontWeight: 500,
        textAlign: 'center',
    },
    Subtitle: {
        color: '#1d3557',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 500,
    },
    Boton: {
        justifySelf: 'center',
        margin: 20,
        padding: 5,
        backgroundColor: '#e63946',
        color: 'white',
        '&:hover': {
            backgroundColor: '#457b9d',
        }
    }
})


export default function PokeEntry(props) {
    const { history, match } = props;
    const classes = useStyles();
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined)

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(function (response) {
                const { data } = response;
                setPokemon(data);
            })
            .catch(function (error) {
                setPokemon(false);
            });
    }, [pokemonId]);

    const generatePokemonJSX = () => {
        const { height, name, id, weight, types } = pokemon;
        const fullArt = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

        return (
            <>
                <Typography variant={'h3'} className={classes.Title}>
                    {id} - {name.charAt(0).toUpperCase() + name.slice(1)}
                </Typography>
                <Grid container className={classes.imageContainer}>
                    <img src={fullArt} className={classes.image}></img>
                </Grid>
                <Box display='flex' flexDirection='column' alignItems='center' margin='0px 0px 30px 0px'>
                    <Typography variant={'h5'} className={classes.Subtitle}>
                        Info
                        </Typography>
                    <Typography variant={'subtitle1'}>
                        Height: {height}
                    </Typography>
                    <Typography variant={'subtitle1'}>
                        Weight: {weight}
                    </Typography>
                    <Typography variant={'subtitle1'}>
                        Types:                         {
                            types.map((typeInfo) => {
                                const { type } = typeInfo;
                                const { name } = type;
                                return (
                                    <Typography variant={'body'} key={name}>
                                        -{name.charAt(0).toUpperCase() + name.slice(1)}
                                    </Typography>
                                )
                            })
                        }
                    </Typography>
                </Box>

            </>
        )
    }

    return (
        <>
            {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && generatePokemonJSX()}
            {pokemon === false &&
                <Typography variant={'h3'} className={classes.Title}>
                    No existe el pokemon
                </Typography>}
            <Box className={classes.imageContainer} display='flex'>
                <Button onClick={() => history.push(`/`)} className={classes.Boton}>Volver</Button>
            </Box>
        </>
    )
}
