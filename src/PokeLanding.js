import { AppBar, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import mockData from './mockData'

const useStyles = makeStyles({
    header: {
        backgroundColor: '#e63946'
    },
    mainContainer: {
        alignContent: 'center',
        marginTop: 64,
        padding: 21,
    },
    card: {
        width: 307,
        backgroundColor: 'white',
        '@media (max-width: 1024px)': {
            width: '100%'
        }
    },
    cardImage: {
        margin: 'auto',
        height: '192px',
        width: '192px',
    },
    NombreTypo: {
        color: '#1d3557',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 500,
        textAlign: 'center',
    }
})


export default function PokeLanding() {
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState(mockData)

    const pokemonCard = (pokemonId) => {
        const { id, name, sprites } = mockData[pokemonId];
        const { front_default } = sprites
        console.log(sprites);
        return (
            <Grid item xs={12} sm={6} md={4} key={pokemonId}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            image={front_default}
                            title={'...'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.NombreTypo}>
                                {id} - {name.charAt(0).toUpperCase() + name.slice(1)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }


    return (
        <>
            <AppBar position='fixed' className={classes.header}>
                <Toolbar>
                </Toolbar>
            </AppBar>
            <Grid container fullwidth>
                <Grid container spacing={2} className={classes.mainContainer}>
                    {pokemonData ?
                        (Object.keys(pokemonData).map(pokemonId =>
                            pokemonCard(pokemonId)))
                        :
                        (<CircularProgress />)}
                </Grid>
            </Grid>

        </>
    )
}
