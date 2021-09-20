import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { accordianDataDelivery, pictures } from './accordianData'
import { Link } from 'react-scroll'
import Accordian from './Accordian'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '60%',
    margin: '15px auto',
    padding: '16px 17px',
    '@media (max-width: 1000px)': {
      maxWidth: '67%',
    },
    '@media (max-width: 800px)': {
      maxWidth: '82%',
    },
    '@media (max-width: 500px)': {
      maxWidth: '100%',
    },
  },
  items: {
    display: 'grid',
    placeItems: 'center',
    padding: '0px 0px',
    gridTemplateColumns: '16.5% 16.5% 16.5% 16.5% 16.5% 16.5%',
    '@media (max-width: 1000px)': {
      gridTemplateColumns: '33% 33% 33%',
    },
    '@media (max-width: 500px)': {
      gridTemplateColumns: '50% 50%',
    },
  },

  itemCard: {
    border: '2px solid #e2e8f0',
    height: '200px',
    width: '200px',
    margin: '10px 15px',
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    '@media (max-width: 800px)': {
      width: '130px',
      height: '130px',
    },
    '@media (max-width: 500px)': {
      width: '120px',
      height: '110px',
    },
    placeItems: 'center',
    '&:hover': {
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '2px solid blue',
    },
  },
  itemCardImg: {
    height: '132px',
    margin: '0px',
    '@media (max-width: 800px)': {
      height: '80px',
    },
    '@media (max-width: 500px)': {
      height: '60px',
    },
  },
  title: {
    height: '350px',
    display: 'grid',
    margin: '10px 10px',
    placeItems: 'center',

    '& h2': {
      marginBottom: '-50px',
      '@media (max-width: 800px)': {
        fontSize: '40px',
      },
      '@media (max-width: 500px)': {
        fontSize: '26px',
      },
    },
    '& p': {
      marginTop: '-60px',
      '@media (max-width: 800px)': {
        fontSize: '18px',
      },
      '@media (max-width: 500px)': {
        fontSize: '11px',
      },
    },
  },
}))

const Accor = () => {
  const classes = useStyles()

  return (
    <>
      <section
        style={{
          margin: '100px 0px',
          backgroundColor: '#f1f5f9',
          paddingBottom: '30px',
        }}
      >
        <div className={classes.title}>
          <h2>Frequently Asked Questions</h2>
          <p style={{}}>
            Take a look at the most frequently asked questions regarding 247
            Meds below:
          </p>
        </div>
        <div className={classes.items}>
          {pictures.map((data) => {
            const { id, img, title } = data
            return (
              <Link
                to={`${title}`}
                smooth={true}
                duration={1000}
                key={id}
                className={classes.itemCard}
              >
                <img src={img} className={classes.itemCardImg} alt='image' />
                <h5>{title}</h5>
              </Link>
            )
          })}
        </div>
      </section>
      {accordianDataDelivery.map((data, index) => {
        return (
          <Paper elevation={1} key={index} className={classes.main}>
            <Accordian data={data} />
          </Paper>
        )
      })}
    </>
  )
}

export default Accor
