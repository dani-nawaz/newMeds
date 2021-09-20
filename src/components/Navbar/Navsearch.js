import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { Divider } from '@material-ui/core'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickOutside } from 'react-click-outside-hook'
import CircularProgress from '@material-ui/core/CircularProgress'
import './componenet.css'

import axios from 'axios'
import useDebounce from '../../customHooks/debounceHook'
import Navdata from './Navdataa'
const useStyles = makeStyles({
  root: {
    padding: '10px 10px',
    backgroundColor: 'skyblue',
    marginTop: '8rem',
    maxWidth: '74%',
    margin: '0px auto',
  },
  searchContainer: {
    display: 'flex',
    margin: '0px auto',
    flexDirection: 'column',
    width: '34em',
    backgroundColor: 'sky blue',
    position: 'absolute',
    opacity: '100',
    zIndex: '11',
    borderRadius: '6px',
    top: '70px',
    left: '50%',
    transform: 'translate(-50%, 0)',
    marginleft: 'auto',
    overflow: 'hidden',
    '@media (max-width: 800px)': {
      width: '28em',
      top: '70px',
      left: '50%',
    },
    '@media (max-width: 500px)': {
      width: '20em',
      top: '70px',
      left: '50%',
    },
    boxShadow: '0px 2px 12px 3px rgba(0,0,0,0.14)',
  },
  search: {
    width: '100%',
    minHeight: '4em',
    display: 'flex',
    aliginItems: 'center',
    position: 'relative',
    padding: '2px 15px',
  },
  inputInput: {
    color: '#12112e',
    width: '100%',
    hieght: '100%',
    outline: 'none',
    border: 'none',
    fontWeight: '500',
    fontSize: '21px',
    '@media (max-width: 800px)': {
      fontSize: '16px',
    },
    borderRadius: '6px',
    backgroundColor: 'transparent',
    '&:focus': {
      outline: 'none',
      '&::placeholder': {
        opacity: '0',
      },
    },
    '&::placeholder': {
      color: '#bebebe',
      transition: 'all 250ms ease-in-out',
    },
  },

  inputfocused: {
    backgroundColor: 'green',
    '&::placeholder': {
      opacity: '0',
    },
  },
  searchIcon: {
    margin: 'auto 0px',
    paddingTop: '10px',
    marginTop: '6px',
    verticalAlign: 'middle',
    marginRight: '10px',
    color: '#bebebe',
  },
  closeIcon: {
    margin: 'auto 0px',
    paddingTop: '9px',
    verticalAlign: 'middle',
    marginRight: '10px',
    color: '#bebebe',
    cursor: 'pointer',
    '&:hover': {
      color: '#dfdfdf',
    },
  },
  searchedContainer: {
    width: '100%',
    height: '100%',
    padding: '1rem',
    backgroundColor: '#fff',
    display: 'block',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  loadingSpinner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      color: '#bebebe',
    },
  },
})
const containerVariants = {
  closee: {
    height: '3.8em',
  },
  expanded: {
    height: '26em',
  },
}

const containerTransition = {
  type: 'spring',
  damping: 22,
  stiffness: 150,
}

export default function SearchAppBar() {
  const [isExpand, setIsExpand] = useState(false)
  const [ref, isClickedOutside] = useClickOutside()
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [showData, setShowData] = useState([])
  const [dataEmpty, setDataEmpty] = useState(false)
  const inputRef = useRef()

  const handleInput = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
    if (e.target.value.trim() === '') {
      setDataEmpty(false)
    }
  }

  const checkData = !showData || showData.length === 0

  const expandContainer = () => {
    setIsExpand(true)
  }
  const closeContainer = () => {
    setIsExpand(false)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    setLoading(false)
    setSearchQuery('')
    setDataEmpty(false)
    setShowData([])
  }
  const readySearchQuery = (query) => {
    const url = `http://api.tvmaze.com/search/shows?q=${query}`
    return encodeURI(url)
  }
  const searchTVShow = async () => {
    if (!searchQuery || searchQuery.trim() === '') return
    setDataEmpty(false)
    setLoading(true)
    const URL = readySearchQuery(searchQuery)
    const response = await axios.get(URL).catch((err) => {
      console.log('Error', err)
    })
    if (response) {
      if (response.data && response.data.length === 0) {
        setDataEmpty(true)
      }
      setShowData(response.data)
    }
    setLoading(false)
  }
  useDebounce(searchQuery, 500, searchTVShow)
  useEffect(() => {
    if (isClickedOutside) {
      closeContainer()
    }
  }, [isClickedOutside])
  const classes = useStyles()

  return (
    <motion.div
      variants={containerVariants}
      animate={isExpand ? 'expanded' : 'closee'}
      ref={ref}
      transition={containerTransition}
      className={classes.searchContainer}
    >
      <div className={classes.search}>
        <span className={classes.searchIcon}>
          <SearchIcon style={{ fontSize: '28px' }} />
        </span>
        <input
          placeholder='Search…'
          onFocus={expandContainer}
          className={classes.inputInput}
          ref={inputRef}
          value={searchQuery}
          onChange={(e) => handleInput(e)}
        />
        <AnimatePresence>
          {isExpand && (
            <motion.span
              className={classes.closeIcon}
              onClick={() => closeContainer()}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CloseOutlinedIcon style={{ fontSize: '22px' }} />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isExpand && <Divider />}
      {isExpand && (
        <div className={classes.searchedContainer}>
          {loading && (
            <div className={classes.loadingSpinner}>
              <CircularProgress />
            </div>
          )}
          {!loading && checkData && !dataEmpty && (
            <div className={classes.loadingSpinner}>
              <p>Start typing for Search</p>
            </div>
          )}
          {!loading && dataEmpty && (
            <div className={classes.loadingSpinner}>
              <p>No Medicine or result found</p>
            </div>
          )}
          {!loading && !checkData && isExpand && (
            <>
              {showData.map(({ show }) => {
                return (
                  <Navdata
                    key={show.id}
                    thumbanilSrc={show.image && show.image.medium}
                    name={show.name}
                    rating={show.rating && show.rating.average}
                  />
                )
              })}
            </>
          )}
        </div>
      )}
    </motion.div>
  )
}
