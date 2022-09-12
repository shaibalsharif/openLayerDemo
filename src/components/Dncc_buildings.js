import MapComponent from "./MapComponent"
import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'
const Dncc_buildings = () => {
   
  const view = {
    lon: 90.41607886403209,
    lat: 23.82399061856948,
    zoom: 12.70,
    projection: 'EPSG:4326'
  }

  const layer= new TileLayer({
    title: 'DNCC Building',
    visible: true,
    source: new TileWMS({
      url: 'http://118.179.197.118:8080/geoserver/wms',
      params: { LAYERS: 'dengue_test_center', TILED: true },
            serverType: 'geoserver',
            crossOrigin: 'anonymous',
    })
  })

  return (
    <MapComponent
      view={view}
      layer={layer} 
      clickStatus={true}/>
  )
}

export default Dncc_buildings