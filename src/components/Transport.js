import MapComponent from "./MapComponent"
import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'
import Map from 'ol/Map'
const Transport = () => {
 const el=document.getElementById('popup')
 if(el)
 el.style.display='none'

  const view = {
    lon: 90.41607886403209,
    lat: 23.79399061856948,
    zoom: 12,
    projection: 'EPSG:4326'
  }

  const layer= new TileLayer({
    title: 'Bus Transport',
    visible: true,
    source: new TileWMS({
      url: 'http://118.179.197.118:8080/geoserver/wms',
      params: { LAYERS: 'transportation_bus_route', TILED: true },
      serverType: 'geoserver',
      crossOrigin: 'anonymous',
    })
  })

  return (
    <MapComponent
      view={view}
      layer={layer} />
  )
}

export default Transport