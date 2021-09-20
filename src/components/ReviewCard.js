import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 270,
    color: '#fffffe',
    backgroundColor: '#094067',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function ReviewCard({ card }) {
  const { name, star, reviews, time } = card
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  console.log(card)
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {name}
        </Typography>
        <Typography className={classes.pos} style={{ color: '#ef4565' }}>
          {time}
        </Typography>
        <Typography variant='body2' style={{ color: '#d8eefe' }} component='p'>
          {reviews}
        </Typography>
      </CardContent>
    </Card>
  )
}
