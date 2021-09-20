import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Divider } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import AddIcon from '@material-ui/icons/Add'
import ListItemText from '@material-ui/core/ListItemText'
import RemoveIcon from '@material-ui/icons/Remove'
const useStyles = makeStyles((theme) => ({
  main: {
    padding: '6rem',
  },
  title: {
    textAlign: 'center',
  },
  basketItems: {
    display: 'grid',
  },
  itemsitem: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    height: '150px',
    '& p': {
      textAlign: 'center',
      margin: 'auto 0',
    },
  },
  itemamount: {
    display: 'grid',
    gridTemplateColumns: '1fr 13px 1fr',
  },
  imgSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '& img': {
      hieght: '50px',
    },
  },
}))

const BasketPage = () => {
  const classes = useStyles()

  return (
    <section className={classes.main}>
      <div className={classes.title}>
        <h2>Your Basket</h2>
      </div>
      <div className={classes.basketItems}>
        <div className={classes.itemstitle}>
          <List
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              width: '100%',
            }}
          >
            {['Item', 'Price', 'Quantity', 'Subtotal'].map((text, index) => {
              return (
                <ListItem key={index} style={{ textAlign: 'center' }}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            })}
          </List>
        </div>
        <Divider />
        <div className={classes.items}>
          <div className={classes.itemsitem}>
            <div className={classes.imgSection}>
              <img
                src='https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg'
                alt='img'
                style={{
                  width: '100%',
                  height: '50%',
                  objectFit: 'cover',
                  margin: 'auto',
                }}
              />
              <div className={classes.imgtitle}>
                <p className={classes.imgtitleP}>Diclofenac</p>
                <p className={classes.imgtitleml}>25mg</p>
              </div>
            </div>
            <p className={classes.price}>$3.99</p>
            <div className={classes.itemamount}>
              <Button
                variant='contained'
                color='secondary'
                style={{ height: 40, width: 20, margin: 'auto' }}
              >
                <RemoveIcon />
              </Button>
              <h4 style={{ width: 8, margin: 'auto', fontWeight: '1000' }}>
                2
              </h4>
              <Button
                style={{
                  height: 40,
                  width: 20,
                  margin: 'auto',
                }}
                variant='contained'
                color='primary'
              >
                <AddIcon />
              </Button>
            </div>
            <p className={classes.subtotal}>$3.99</p>
          </div>
        </div>
        <Divider />
        <div className={classes.itemsButtons}>
          <Button>Continue Shopping</Button>
          <Button>Clear Shopping Cart</Button>
        </div>
      </div>
      <section className={classes.ckeckout}>
        <article className={classes.checkoutBox}>
          <h5>
            Subtotal : <span>$247.32</span>
          </h5>
          <p>
            shipping_fee : <span>$5.32</span>
          </p>
          <Divider />
          <h4>
            Order Total : <span>$544.3</span>
          </h4>
        </article>
        <Button>PROCEED CHECKOUT</Button>
      </section>
    </section>
  )
}

export default BasketPage
