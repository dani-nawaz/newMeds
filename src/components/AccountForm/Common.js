import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useFormik } from 'formik'

import axios from 'axios'

import * as yup from 'yup'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(0.2),
  },
  submit: {
    margin: theme.spacing(1.5, 0, 1),
  },
  changerr: {
    '@media (max-width: 500px)': {
      marginTop: '17px',
    },
  },
}))
const validationSchema = yup.object({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup.string().required('Password is required'),
})

export default function SignIn({ changeExpand }) {
  const classes = useStyles()
  const [emailerror, setEmailerror] = useState(false)
  const [passworderror, setpassworderror] = useState(false)
  const onSubmit = async (value) => {
    const { ...data } = value
    const response = await axios
      .post('http://localhost:5000/api/v1/login', data)
      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 404) {
            setEmailerror(true)
          }
          if (e.response.status === 403) {
            setEmailerror(false)
            setpassworderror(true)
          }
        }
      })
    if (response && response.data) {
      formik.resetForm()
      setEmailerror(false)
      setpassworderror(false)
    }
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant='standard'
            margin='normal'
            required
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null || (emailerror && 'This email address not registered')
            }
            error={
              formik.touched.email && formik.errors.email
                ? true
                : false || emailerror
                ? true
                : false
            }
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            style={{ paddign: 5 }}
            autoFocus
          />
          <TextField
            variant='standard'
            margin='normal'
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null || (passworderror && 'Invalid password')
            }
            error={
              formik.touched.password && formik.errors.password
                ? true
                : false || passworderror
                ? true
                : false
            }
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
            style={{ marginTop: 1 }}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            loading={true}
            disabled={!formik.isValid}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container style={{ marginTop: '20px' }}>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid className={classes.changerr} item>
              <Link onClick={() => changeExpand()} variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
