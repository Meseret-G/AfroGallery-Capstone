import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import firebaseConfig from '../api/apiKeys';
import 'firebase/auth';
import Routes from '../routes';
import NavBar from '../components/NavBar';

function Initialize() {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObject = {
          uid: authed.uid,
          fullName: authed.displayName,
          profilePic: authed.photoURL,
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userObject);
        console.warn(userObject);
        if (userObject.uid === firebaseConfig.isAdmin) {
          setAdmin(userObject);
        }
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="app">
      <NavBar user={user} />
      <Routes admin={admin} />
    </div>
  );
}

export default Initialize;
