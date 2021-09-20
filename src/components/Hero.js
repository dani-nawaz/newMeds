import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const tutorialSteps = [
  {
    imgPath:
      'https://s3.eu-west-2.amazonaws.com/p.ublished/media2/2021/mar/57515/getstream.jpg',
  },
  {
    imgPath:
      'https://hiring-assets.careerbuilder.com/media/attachments/careerbuilder-original-2683.jpg?1475512036',
  },
  {
    imgPath:
      'https://t4.ftcdn.net/jpg/03/36/59/07/360_F_336590777_ndbGZFO887CzLwlikwnPFybD3acfz17d.jpg',
  },
  {
    imgPath:
      'https://jobs.newscientist.com/getasset/0f3de168-cdc2-410a-be98-ff892b0f6dab/',
  },
  {
    imgPath:
      'https://www.sciencebuddies.org/t/AQIqGlZZqGOmkD-jE_mSwskdJPIA21Z83Lhz8tRSGzOGp3pGp9UQaBP3qQWXl3eeyb5jg397hOWr4QuHX89PRn7l.jpg',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    margin: '0 auto',
  },

  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '20px',
    '@media (max-width: 780px)': {
      gridTemplateColumns: '1fr',
    },
  },
  heroLabel: {
    width: '80%',
    '& h2': {
      fontWeight: '200px',
    },
  },
  btn1: {
    backgroundColor: '#3035ba',
    color: 'white',
    '& :hover': {
      color: 'black',
      backgroundColor: '#494ed6',
    },
  },
  btn2: {
    backgroundColor: '#3c41c2',
    color: 'white',
  },
  titleHero: {
    fontSize: '10px',
    fontWeight: '300',
    fontSize: '40px',

    '@media (max-width: 780px)': {
      fontSize: '30px',
    },
  },
  paraHero: {
    '@media (max-width: 780px)': {
      fontSize: '15px',
    },
  },
}))

function SwipeableTextMobileStepper() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroLabel}>
        <Typography className={classes.titleHero}>
          Medicine delivered discreetly to your door
        </Typography>
        <p className={classes.paraHero}>
          Get the same genuine medicines delivered to your door in as little as
          24 hours as you would from your GP - without the wait.
        </p>
        <Button
          variant='contained'
          color='primary'
          style={{ margin: '10px', height: '43px' }}
        >
          View all treatments A-Z{' '}
        </Button>

        <Button
          variant='outlined'
          style={{ margin: '10px', marginLeft: '13px', height: '43px' }}
          color='primary'
        >
          View all conditions A-Z{' '}
        </Button>
      </div>
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </div>
  )
}

export default SwipeableTextMobileStepper
