import React from 'react'
import {Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

function Cards( {data:{confirmed,recovered,deaths,lastUpdate}} ) {

    if(!confirmed){           //if data is not yet fetched...
       return 'Loading....';  //if it returns here, next code won't execute.
    }

    return (
        <div className={styles.container}>

            <Grid container spacing={3} justify="center">

                <Grid item component={Card} xs={12} md={3} className={ cx(styles.card , styles.infected) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        { /*<Typography variant="h5">{confirmed.value}</Typography>*/ }
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of active cases of covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={ cx(styles.card , styles.recovered) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of recovered cases of covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={ cx(styles.card , styles.deaths) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of deaths of covid-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards;

