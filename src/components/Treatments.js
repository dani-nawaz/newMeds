import React from 'react'
import Button from '@material-ui/core/Button'
import { Divider, makeStyles } from '@material-ui/core'
import OnlineDoctor from './../img/online-doctor-concept-online.png'
import Onlinedwai from './../img/hand-touching.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles({
  main: {
    padding: '0px 30px',
    backgroundColor: '#EDF5F6',
    maxWidth: '100%',
    display: 'grid',
    gridTemplateColumns: '49% 1% 49%',
    '@media (max-width: 1000px)': {
      gridTemplateColumns: '1fr',
    },
  },
  treatment: {
    display: 'grid',
    gridTemplateColumns: '60% 40%',
  },
  imgs1: {
    height: '300px',
    padding: '0px',
    margin: '0px',
    backgroundColor: '#EDF5F6',

    marginLeft: '-80px',
    '@media (max-width: 1190px)': {
      height: '250px',
      marginLeft: '-60px',
    },
    '@media (max-width: 1000px)': {
      marginLeft: '0px',
    },
    '@media (max-width: 490px)': {
      height: '180px',
    },
  },
  imgs2: {
    height: '280px',
    backgroundColor: '#EDF5F6',

    padding: '0px',
    margin: '0px',
    '@media (max-width: 1190px)': {
      height: '230px',
    },
    '@media (max-width: 490px)': {
      height: '160px',
    },
  },
  article: {
    margin: 'auto ',
    '@media (max-width: 786px)': {
      '& h2': {
        fontSize: '30px',
      },
      '& p': {
        fontSize: '15px',
      },
      '& Button': {
        fontSize: '11px',
        marginBottom: '20px',
      },
    },
  },
  btn: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'red',
      border: '1px solid red',
    },
  },
})
const Treatments = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width: 1000px)')
  return (
    <>
      <section className={classes.main}>
        <div className={classes.treatment}>
          <article className={classes.article}>
            <h2>Treatments A-Z</h2>
            <p>
              Do you know exactly what medication you’re looking for? Find it
              quickly and easily on our list of A-Z treatments.
            </p>
            <Button color='secondary' variant='contained'>
              View all treatments
            </Button>
          </article>
          <img src={OnlineDoctor} alt='doctor' className={classes.imgs1} />
        </div>
        {!matches && <Divider orientation='vertical' />}
        <div className={classes.treatment}>
          <article className={classes.article}>
            <h2>Condition A-Z</h2>
            <p>
              Do you know the condition you have but aren’t sure on the
              medication name? Find it easily on our conditions A-Z list.
            </p>
            <Button color='secondary' variant='contained'>
              View all conditions
            </Button>
          </article>
          <img src={Onlinedwai} alt='medicine' className={classes.imgs2} />
        </div>
      </section>
    </>
  )
}

export default Treatments
