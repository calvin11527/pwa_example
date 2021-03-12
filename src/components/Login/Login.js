import '../App/App.css';

import React, { useState, useEffect } from 'react';
import { Link, Route, BrowserRouter, Switch, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import history from '../../history/history';
import config from "../../config";
import swDev from "../../swDev";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

let deferredPrompt;

swDev();

const Login = () => {
    const [installable, setInstallable] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const [message, setMessage] = useState();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI notify the user they can install the PWA
            setInstallable(true);
        });

        window.addEventListener('appinstalled', () => {
            // Log install to analytics
            console.log('INSTALL: Success');
        });
    }, []);

    const handleInstallClick = (e) => {
        // Hide the app provided install promotion
        setInstallable(false);
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    };
    const onSubmit = (data, e) => {
        setMessage({
            data: "Login is in progress...",
            type: "alert-warning",
        });
        fetch(`${config.baseUrl}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(({ error, data }) => {
                setMessage({
                    data: error || "Logged in successfully, redirecting...",
                    type: error ? "alert-danger" : "alert-success",
                });

                !error &&
                    setTimeout(() => {
                        localStorage.setItem("token", data.token);
                        history.push("/dashboard");
                    }, 3000);

                !error && e.target.reset();
            });
    };

    return (
        <div className={`container-fluid d-flex align-items-center justify-content-center`}>
            {message && (
                <div className={`alert fade show d-flex`} role="alert">
                    {message.data}
                    <span aria-hidden="true" className="ml-auto cursor-pointer" onClick={() => setMessage(null)}>
                        &times;
                    </span>
                </div>
            )}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
        </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
              </Button>
                    </form>
                    {installable &&
                    <Button fullWidth variant="contained" color="default" className="install-button" onClick={handleInstallClick}>Install App</Button>
        //                 <button className="install-button" onClick={handleInstallClick}>
        //                     INSTALL ME
        //   </button>
                    }
                </div>
            </Container>
            {/* <button id="install_button">Install</button> */}
            {/* <main className="main"><Routes /></main> */}
        </div>
    );
}

export default Login;
