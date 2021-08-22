import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import pizza from '../../assets/pizza.jpg'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    float: 'left'
  
  },
  
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={pizza} alt='pizza' width='300' height='300'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Folk and Knives
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Chicken Fajita with extra sauce
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Order Now
        </Button>
        
      </CardActions>
    </Card>
  );
}