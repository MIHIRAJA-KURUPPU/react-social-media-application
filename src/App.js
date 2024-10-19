// src/App.js
import React from 'react';
import Home from './pages/home/Home'; // Importing Home component if needed later
//import PersonIcon from '@mui/icons-material/Person'; // Importing the Person icon
import Profile from './pages/profile/Profile'; // Importing the Profile component

function App() {
  //return <PersonIcon style={{ fontSize: 40, color: 'blue' }} />; // Rendering the Person icon
  return <Profile />; // Rendering the Home component
}

export default App;
