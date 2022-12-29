// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');

 importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: 'AIzaSyBrgO238XpEggURsuIeCfeVx8gzaa57mb8',
    authDomain: 'push-notification-9857c.firebaseapp.com',
    databaseURL: 'https://push-notification-9857c.firebaseio.com',
    projectId: 'push-notification-9857c',
    storageBucket: 'push-notification-9857c.appspot.com',
    messagingSenderId: '998862859097',
    appId: '1:998862859097:web:02258c47955c8ac5477a48',
    measurementId: 'G-RXVJHRLQR3',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});