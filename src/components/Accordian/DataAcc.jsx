import React, { useState, useEffect }  from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { motion } from 'framer-motion'
import { Paper } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useClickOutside } from 'react-click-outside-hook'

import { IconButton } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({

  accordianItem: {
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '10px',
  },
  acccordianLinks: {
    width: '100%',
    textDecoration: 'none',
    display: 'flex',
    fontSize: '15px',

    '@media (max-width: 800px)': {
      fontSize: '14px',
    },
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 0',
    paddingLeft: '7px',
  },
  answer: {
    backgroundColor: '#f4f3ff',
    position: 'relative',
    borderRadius: '10px',
    boxShadow:
      'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '6px',
      backgroundColor: '#645cff',
      height: '85%',
      top: '50%',
      borderRadius: '10px',
      left: '0',
      transform: 'translateY(-50%)',
    },
    '& p': {
      fontSize: '15px',
      '@media (max-width: 800px)': {
        fontSize: '12px',
      },
    },
  },
  btnn: {
    backgroundColor: '#f4f3ff',
  },
  header: {
    textAlign: 'center',
  },
}))
const containerVariants = {
  closee: {
    maxHeight: '0px',
    overflow: 'hidden',
  },
  expanded: {
    overflow: 'visible',
    maxHeight: '500px',
  },
}

const containerTransition = {
  type: 'spring',
  damping: 22,
  stiffness: 150,
}
const DataAcc = ({ques,ans}) => {
  const classes = useStyles()
    const [ref, isClickedOutside] = useClickOutside()
  const [toggle, setToggle] = useState(false)

  const changeToggle = () => {
    setToggle((pvalue) => !pvalue)
  }

  useEffect(() => {
    if (isClickedOutside) {
      setToggle(false)
    }
  }, [isClickedOutside])

 return (
  <>
    <div className={classes.accordian}>
                <Paper
                  elevation={3}
                  className={classes.accordianItem}
                  ref={ref}
                >
                  <a className={classes.acccordianLinks}>
                   {ques}
                    <IconButton
                      className={classes.btnn}
                      onClick={() => changeToggle()}
                    >
                      {toggle ? <RemoveIcon /> : <AddIcon />}
                    </IconButton>
                  </a>
                  <motion.div
                    variants={containerVariants}
                    animate={toggle ? 'expanded' : 'closee'}
                    transition={containerTransition}
                    className={classes.answer}
                  >
                    <p style={{ margin: '0px', padding: '10px' }}>
                      {ans}
                    </p>
                  </motion.div>
                </Paper>
              </div>
  </>
 )
}

export default DataAcc
