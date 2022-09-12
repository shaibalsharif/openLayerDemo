import './App.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';
import { useEffect } from 'react';
import MapComponent from './components/MapComponent';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Nav from './components/Nav';
import Transport from './components/Transport';
import Dncc_buildings from './components/Dncc_buildings'
import Popup from './components/Popup';
function App() {
  //  const lat1={
  //   lat:90.74,
  //   long :23.56,
  //   zoom: 6,
  //  }
  //  const lat2={
  //   lat:0,
  //   long :0,
  //   zoom: 0,
  //  }



  return (
    <Router>
      <div className="App flex flex-col">
        <Nav className="h-[100vh]" />
        <Popup
        />
        <div className='fixed z-[2] bg-slate-500 
        opacity-90 right-[2px] 2xl:right-[50px] top-[100px]  
        rounded-md px-2' >
          <p id='bottomInfo'>Lat: 25.2125 Lon: 11.2452</p>
          <div id="info">&nbsp;</div> 
        </div>
      </div>

      <Routes>
        <Route exact path='/' element={<MapComponent />}></Route>
        <Route exact path='/transport' element={<Transport />}></Route>
        <Route exact path='/dncc' element={<Dncc_buildings />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
