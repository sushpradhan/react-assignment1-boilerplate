import React from 'react'

import { Card as MaterialUiCard } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea'
import Typograpghy from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'


const useStyles=makeStyles({

    root:{
        maxWidth:345,
    },
    media:{
        height:140,
    },
    pos:{
        marginBottom:12,
    },
});
export default function NewsCard(this:any,props:any)
{
    const classes=useStyles()
    const onReadLaterClickHandler=(id:any)=>{
        props.onReadLaterClick(id)
    }

    return(
        <MaterialUiCard className={classes.root}>
          <CardActionArea>
<CardMedia 
className={classes.media}
image={props.image}
title={props.title}

>

</CardMedia>
           <CardContent>
               <Typograpghy gutterBottom variant="h5" component="h2" >
               {props.title}
               </Typograpghy>
               <Typograpghy className={classes.pos} color="textSecondary"  >
                {props.author}
               </Typograpghy>
               <Typograpghy variant="body2" color="textSecondary" component="h2" >
                {props.description}
               </Typograpghy>
           </CardContent>

          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary" onClick={onReadLaterClickHandler}>Read Later</Button>
          </CardActions>

        </MaterialUiCard>
    )
}
