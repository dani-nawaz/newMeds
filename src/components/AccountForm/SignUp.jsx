import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import {useFormik} from 'formik'
import * as yup from "yup";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(-2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    transition:'all 0.2s ease'
  },
  genderAndcalender:{
   display:'grid',
   gridTemplateColumns:'1fr 1fr ',
   paddingLeft:'5px',
   '@media (max-width: 500px)': {
   gridTemplateColumns:'1fr  ',
   marginBottom:'-15px',
   padding:'-15px',
    },
   
  },

  gender:{
   marginBottom:'-10px',
   padding:'-10px',
    '@media (max-width: 500px)': {
        marginTop:'8px',
      paddingLeft:'8px'
    },
  },
  calender:{
      '@media (max-width: 500px)': {
            marginTop:'5px',
            paddingLeft:'8px'
      },
    },
 emailField:{
   marginBottom:'-8px', padding:'-8px',marginTop:'-8px',
   '@media (max-width: 500px)': {
            marginTop:'5px',
      },
 },
 firstNamee:{
   marginBottom:'-5px',
   padding:'-8px',
   marginTop:'-13px',
  '@media (max-width: 500px)': {
        marginTop:'-23px',
        marginBottom:'0px',
      },
},
 lastNamee:{marginBottom:'-10px', padding:'-10px',marginTop:'-13px',

 '@media (max-width: 500px)': {
            marginBottom:'0px'
      },

},
}));
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
  firstName:yup.string().min(3,'Please enter your real Name').required('First Name is required'),
  lastName:yup.string().min(3,'Please enter your real Name').required('Last Name is required'),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  email:yup.string().email('Please enter a valid email address').required("Email is required"),
  password:yup.string().min(8,'Please enter strong password').required("Password is required")
})

export default function SignUp({changeExpands}) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2007-08-18T21:11:54'));
  const [emailerror, setEmailerror] = React.useState(false)
  
  const onSubmit = async(value)=>{
    const {...data} = value
  const response = await axios.post('http://localhost:5000/api/v1/register',data).catch((e)=>{ if(e&&e.response){
    if(e.response.status=== 409){
       setEmailerror(true)
    }
  }})
   if(response && response.data){
    formik.resetForm()
    setEmailerror(false)
    setTimeout(() => {
      changeExpands()
    }, 800);
   }
  }


  const formik = useFormik({initialValues:{firstName:'',lastName:'',number:'',gender1:'male',email:'',password:''},validateOnBlur:true,onSubmit , validationSchema})
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
    
        <form className={classes.form} onSubmit={formik.handleSubmit}  >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="standard"
                required
                error={formik.touched.firstName && formik.errors.firstName? true:false  }
                helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName :null}
                style={{padding:-2}}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                className={classes.firstNamee}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                error={formik.touched.lastName && formik.errors.lastName ? true:false  }
                helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName :null}
                fullWidth
                onBlur={formik.handleBlur}

                value={formik.values.lastName}
                onChange={formik.handleChange}
                className={classes.lastNamee}
                id="lastName"
                
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="standard"
                required
                fullWidth
                value={formik.values.number}
                onChange={formik.handleChange}
                id="number"
                label="MobileNumber"
                onBlur={formik.handleBlur}
                style={{marginTop:'-9px',marginBottom:'11px'}}
                error={formik.touched.number && formik.errors.number ? true:false  }
                helperText={formik.touched.number && formik.errors.number ? formik.errors.number :null}
                name="number"
                autoComplete="number"
              />
            </Grid>
                
            <Grid style={{marginTop:'-10px'}}   className={classes.genderAndcalender}  >
             <Grid className={classes.gender}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" style={{marginTop:'5.2px' ,display:'grid' ,gridTemplateColumns:'1fr 1fr '}} name="gender1"
                  value={formik.values.gender1}
                  onChange={formik.handleChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
             </Grid>
             <Grid  className={classes.calender}>
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <InputLabel htmlFor="Birthday">Birthday</InputLabel>
               <KeyboardDatePicker
                format="MM/dd/yyyy"
                margin="normal"
                id="Birthday"
                style={{marginTop:'6.5px'}}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                 'aria-label': 'change date',
                }}
                />
                </MuiPickersUtilsProvider>
             </Grid>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                className={classes.emailField}
                id="email"
                label="Email Address"
                error={formik.touched.email && formik.errors.email ? true:false || emailerror ?true:false }
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email :null || emailerror ?"Email is already registered":null}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                value={formik.values.password}
                error={formik.touched.password && formik.errors.password ? true:false  }
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password :null}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                style={{marginTop:'-6px'}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
           
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!formik.isValid}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={() =>changeExpands() } variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}