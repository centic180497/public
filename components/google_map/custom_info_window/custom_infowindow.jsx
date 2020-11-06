import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, CardContent } from '@material-ui/core'

const CustomInfoWindow = (props) => {
    const { info } = props
    const classes = useStyles()

    return (
        <div className={classes.card}>
            <CardContent className={classes.contentCard}>
                <Typography component="h6" className={classes.title}>
                    {info.name}{' '}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
                    {info.typeName || info.address}
                </Typography>
            </CardContent>
        </div>
    )
}

export default CustomInfoWindow

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: 10,
    },
    img: {
        objectFit: 'cover',
        width: '100%',
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontWeight: 500,
    },
    typo: {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            marginRight: 5,
            padding: 2,
        },
    },
}))
