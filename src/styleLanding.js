import { fade, makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    header: {
        backgroundColor: '#e63946'
    },
    mainContainer: {
        justifyContent: 'center'
    },
    cardsWrapper: {
        alignContent: 'center',
        width: 1400,
        marginTop: 64,
        padding: 21,
    },
    card: {
        width: 307,
        backgroundColor: 'transparent',
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
        marginTop: -20,
        marginBottom: 20,
        color: '#1d3557',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 500,
        textAlign: 'center',
    },
    grow: {
        flexGrow: 1,
    },
    backgroundBar: {
        backgroundColor: '#e63946'
    },
    separar: {
        justifyContent: 'space-between'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        justifySelf: 'right',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '300px',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}));