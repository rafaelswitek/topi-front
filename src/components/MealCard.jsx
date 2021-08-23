import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function MealCard({ meal }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item key={meal.idMeal} xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {meal.strCategory.charAt(0)}
            </Avatar>
          }
          title={'Category: ' + meal.strCategory}
          subheader={'Area: ' + meal.strArea}
        />
        <CardMedia
          className={classes.media}
          image={meal.strMealThumb}
          title={meal.strMeal}
        />
        <CardContent>
          <Typography variant="h5" component="p" align="center">
            Name: {meal.strMeal}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="YouTube" onClick={() => window.open(meal.strYoutube, "_blank")}>
            <YouTubeIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Instructions:</Typography>
            <Typography paragraph>
              {meal.strInstructions}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default MealCard