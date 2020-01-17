import React from 'react';
import { Card, CardMedia, makeStyles, Typography } from '@material-ui/core'

const Styles = makeStyles(() => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
        border: '2px solid black',
    },
    card: {
        width: '400px',
        height: '600px',
        borderRadius: '12px'
    }
}))

 export default function handCard() {
     const classes = Styles();
    return(
        <div >
            <Card className={classes.card}>
            <h2>Free Real Estate</h2>
            <CardMedia className={classes.media} image='https://fsmedia.imgix.net/be/0f/67/67/7275/4ac0/8568/b018c5560091/league-of-nation-3-copyjpg.jpeg?rect=0%2C131%2C723%2C362&auto=format%2Ccompress&dpr=2&w=650' title='cardimg'/>
            <p>Player Can use this card to choose any unowned property on the map.</p>
            <button>1 Time use at any time</button>
            </Card>
        </div>
    )
}
