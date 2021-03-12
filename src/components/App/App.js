// import './App.css';

// import React, {useState} from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
// import Routes from '../../routes/router';
// import Home from '../Home';
// import About from '../About'
// import Users from '../Users'
// import Login from '../Login/Login'


// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// const useStyles = (theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// });

// function App() {
//   const [token, setToken] = useState();
//   if(!token) {
//     return <Login setToken={setToken} />
//   }

//   const {classes} = this.props;
//   return (
//     <div className="wrapper">
//       <h1>Application</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/home">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//     // <BrowserRouter>
//     //   <div className="App">
//     //     <Container component="main" maxWidth="xs">
//     //       <CssBaseline />
//     //       <div className={classes.paper}>
//     //         <Avatar className={classes.avatar}>
//     //           <LockOutlinedIcon />
//     //         </Avatar>
//     //         <Typography component="h1" variant="h5">
//     //           Sign in
//     //     </Typography>
//     //         <form className={classes.form} noValidate>
//     //           <TextField
//     //             variant="outlined"
//     //             margin="normal"
//     //             required
//     //             fullWidth
//     //             id="email"
//     //             label="Email Address"
//     //             name="email"
//     //             autoComplete="email"
//     //             autoFocus
//     //           />
//     //           <TextField
//     //             variant="outlined"
//     //             margin="normal"
//     //             required
//     //             fullWidth
//     //             name="password"
//     //             label="Password"
//     //             type="password"
//     //             id="password"
//     //             autoComplete="current-password"
//     //           />
//     //           <FormControlLabel
//     //             control={<Checkbox value="remember" color="primary" />}
//     //             label="Remember me"
//     //           />

//     //           <Link to="/home" className="btn btn-pink"
//     //             role="button" fullWidth variant="contained" color="primary">
//     //             {/* <Button
//     //               type="submit"
//     //               fullWidth
//     //               variant="contained"
//     //               color="primary"
//     //               className={classes.submit}
//     //             > */}
//     //               Sign In
//     //           {/* </Button> */}
//     //           </Link>

//     //           <Grid container>
//     //             {/* <Grid item xs>
//     //           <Link href="#" variant="body2">
//     //             Forgot password?
//     //           </Link>
//     //         </Grid>
//     //         <Grid item>
//     //           <Link href="#" variant="body2">
//     //             {"Don't have an account? Sign Up"}
//     //           </Link>
//     //         </Grid> */}
//     //           </Grid>
//     //         </form>
//     //       </div>
//     //     </Container>
        
//     //     <button id="install_button" hidden>Install</button>
//     //     {/* <main className="main"><Routes /></main> */}
//     //   </div>
//     // </BrowserRouter>
//   );
// }

// export default withStyles(useStyles)(App);
const App = (props) => props.children;

export default App;