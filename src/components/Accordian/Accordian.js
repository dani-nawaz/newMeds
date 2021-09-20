import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DataAcc from './DataAcc'
const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
  },
}))

const Accordian = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      {data.title.map((dataa) => {
        const { img, head, id } = dataa
        return (
          <>
            <div key={id} className={classes.header} id={head}>
              <img
                src={img}
                style={{ height: '140px', marginRight: '0px' }}
                alt={head}
              />
              <h4>{head}</h4>
            </div>
          </>
        )
      })}
      {data.data.map((dataa) => {
        return <DataAcc {...dataa} key={dataa.id} />
      })}
    </>
  )
}

export default Accordian
