import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';
import LayerSwitcher from 'ol-layerswitcher';


// const layers = [
//     new TileLayer({
//         source: new OSM(),
//     }),
//     new TileLayer({
//         extent: [-13884991, 2870341, -7455066, 6338219],
//         source: new TileWMS({
//             url: 'https://ahocevar.com/geoserver/wms',
//             params: { 'LAYERS': 'topp:states', 'TILED': true },
//             serverType: 'geoserver',
//             // Countries have transparency, so do not fade tiles:
//             transition: 0,
//         }),
//     }),
// ];

export const setInitMap = (view, layer, clickStatus) => {
    let x = document.getElementById('map');
    // console.log(x);
    const map = new Map({

        // layers: layers,
        // layers:[
        //     new TileLayer({z
        //         source: new OSM(),
        //       })
        // ],
        target: '',
        view: view ? new View({
            center: [view['lon'], view['lat']],
            zoom: view['zoom'],
            projection: view.projection,
        }) : new View({
            center: [90.41607886403209, 23.82399061856948],
            zoom: 12.70,
            projection: 'EPSG:4326',
        })

    });
    map.on('pointermove', (e) => {

        let el = document.getElementById('bottomInfo');

        el.innerHTML = `Lat: ${e.coordinate[0].toFixed(4)} | Lon: ${e.coordinate[1].toFixed(4)}`
    })

    if (clickStatus) {
        map.on('click', (e) => {
            let f = document.getElementById('popup')



            // f.offsetLeft= e.coordinate[1]
            // f.offsetTop= e.coordinate[0]
            // console.log(e);
            f.style.display = "block"
            if (e.pixel[1] < 50) {

                f.style.top = `${e.pixel[1]}px`
                f.style.left = `${e.pixel[0]}px`
            }
            else {
                f.style.top = `${e.pixel[1] - 50}px`
                f.style.left = `${e.pixel[0]}px`
            }
            console.log(e.pixel[1]);
            f.style.opacity = .8
            f.style.zIndex = 2
            if (e.coordinate) {
                f.childNodes[1].childNodes[0].innerHTML = `Lat: ${e.coordinate[0].toFixed(4)}`
                f.childNodes[1].childNodes[1].innerHTML = `Lon: ${e.coordinate[1].toFixed(4)}`
            }
            //  console.log(f.childNodes[1].childNodes[0]);

            //console.log("Latitude ",e.coordinate[0],"  Longititude: ",e.coordinate[1]);
        })
    }

    map.addLayer(new TileLayer({
        source: new OSM(),
    }))
    if (layer) {
        map.addLayer(layer)
        // map.on('singleclick', (e) => {
        //     let url = layer.getSource().getFeatureInfoUrl(
        //         e.coordinate, 
        //         map.getView().getResolution(),
        //         map.getView().getProjection,
        //         'EPSG:3857',
                
        //         {
        //             'INFO_FORMAT': 'text/html',
        //             'propertyName': 'formal_en'
        //         }
        //     )
        //     if (url) {
        //         fetch(url)
        //             .then((res) => res.text())
        //             .then((html)=>{
        //                 console.log(html);
        //               })
                    
                        
                   
        //     }
        // })
    }

    const layerSwitcher = new LayerSwitcher()
    map.addControl(layerSwitcher);
    return map
}
//export default map;