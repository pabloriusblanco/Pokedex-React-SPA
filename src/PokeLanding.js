import { AppBar, Card, CardActionArea, CardContent, Box, CardMedia, CircularProgress, Grid, Toolbar, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styleLanding';


export default function PokeLanding(props) {
    const { history } = props;
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState();
    const [filter, setFilter] = useState('');

    const handleSearch = (e) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(function (response) {
                const { data } = response;
                const { results } = data;
                const ApiPokemonData = {};
                results.forEach((pokemon, index) => {
                    ApiPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`)
                    }
                });
                setPokemonData(ApiPokemonData);
            })
    }, [])

    const pokemonCard = (pokemonId) => {
        const { id, name, sprite } = pokemonData[pokemonId];

        return (
            <Grid item xs={12} sm={6} md={4} key={id}>
                <Box className={classes.card} onClick={() => history.push(`/${id}`)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            image={sprite}
                            title={'...'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.NombreTypo}>
                                {id} - {name.charAt(0).toUpperCase() + name.slice(1)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Box>
            </Grid>
        )
    }


    return (
        <>
            {/* Header Busqueda */}
            <div className={classes.grow}>
                <AppBar position="static" className={classes.backgroundBar}>
                    <Toolbar className={classes.separar}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            React Pokedex
                    </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase onChange={handleSearch}
                                placeholder="Pokemon..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>

                    </Toolbar>
                </AppBar>
            </div>

            {/* Grilla Pokedex */}
            <Grid container fullwidth className={classes.mainContainer}>
                <Grid container spacing={2} className={classes.cardsWrapper}>
                    {pokemonData ?
                        (Object.keys(pokemonData).map(pokemonId =>
                            pokemonData[pokemonId].name.includes(filter) &&
                            pokemonCard(pokemonId)))
                        :
                        (<CircularProgress />)}
                </Grid>
            </Grid>

        </>
    )
}
