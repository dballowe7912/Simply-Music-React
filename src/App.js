import React, { useState } from 'react';
import TableTop from './components/TableTop';
import Header from './components/Header';
import data from "./data.json";
import './App.css';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [ songData, setSongData ] = useState(data);
  return (
    <div className="App">
      <Header/>
      <TableTop songData={songData}/>
    </div>
  );
}

export default App;
