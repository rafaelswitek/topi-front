import { useEffect, useState } from "react";
import { Backdrop, Button, Container, Grid, makeStyles, TextField } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import MealCard from "../components/MealCard";
import { get } from '../api';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

function MealList() {
    const classes = useStyles();
    const [meals, setMeal] = useState([]);
    const [open, setOpen] = useState(true);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);
    const handleToggle = (status) => {
        setOpen(status);
    };

    const searchByName = (event) => {
        setSearch(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleToggle(true);
        get(search, setMeal, setError, handleToggle);
        document.getElementById("mainInput").reset();
        setSearch('')
    };

    const handleError = () => {
        setError(false);
    };

    useEffect(() => {
        get('', setMeal, setError, handleToggle)
    }, []);

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Backdrop className={classes.backdrop} open={open} >
                <CircularProgress color="inherit" />
            </Backdrop>
            <form id="mainInput" onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField
                    style={{ margin: 8 }}
                    placeholder="Search meal by name"
                    fullWidth
                    margin="normal"
                    onChange={searchByName}
                />
            </form>
            {error ?
                <Grid>
                    <Alert severity="error">Meal not found</Alert>

                    <Button
                        style={{ marginTop: 5 }}
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<ArrowBackIcon />}
                        onClick={handleError}
                    >Voltar</Button>
                </Grid>
                :
                <Grid container spacing={4}>
                    {meals.map((meal) => (
                        <MealCard key={meal.id} meal={meal} />
                    ))}

                    <Grid>
                        {meals.length == 1 ?
                            <Button
                                style={{ marginTop: 15 }}
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<ArrowBackIcon />}
                                onClick={handleSubmit}
                            >Voltar</Button> : null
                        }
                    </Grid>

                </Grid>
            }
        </Container >
    );
}

export default MealList;