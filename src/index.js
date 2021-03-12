import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import swDev from './swDev';
import Routes from './routes/router';
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
// let deferredPrompt; // Allows to show the install prompt
// const installButton = document.getElementById("install_button");
// console.log("button", installButton);
// window.addEventListener("beforeinstallprompt", e => {
//     console.log("beforeinstallprompt fired");
//     // Prevent Chrome 76 and earlier from automatically showing a prompt
//     e.preventDefault();
//     // Stash the event so it can be triggered later.
//     deferredPrompt = e;
//     // Show the install button
//     // installButton.hidden = false;
//     installApp();
// });

// function installApp() {
//     // Show the prompt
//     deferredPrompt.prompt();
//     installButton.disabled = true;

//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice.then(choiceResult => {
//         if (choiceResult.outcome === "accepted") {
//             console.log("PWA setup accepted");
//             // installButton.hidden = true;
//         } else {
//             console.log("PWA setup rejected");
//         }
//         installButton.disabled = false;
//         deferredPrompt = null;
//     });
// }

// window.addEventListener("appinstalled", evt => {
//     console.log("appinstalled fired", evt);
// });
