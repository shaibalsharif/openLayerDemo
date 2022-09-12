import {setInitMap} from '../utils/initMap';
import { useEffect } from 'react';
const MapComponent = ({view=false, layer=false, clickStatus=false}) => {

  useEffect(() => {
  
    show()
  //  map.setTarget(mapTarget.id)
  },[])
  const show=()=>{
       let x;
        x= setInitMap(view,layer,clickStatus);
     
    let y= document.getElementById('map');
  //  console.log(y);
    if(y.childElementCount>0)
    y.removeChild(y.firstElementChild)
    x.setTarget("map")
  }
  return (
    <div className="map-container">

      <div id='map' className='h-[100vh]'>

      </div>


    </div>
  );
}

export default MapComponent