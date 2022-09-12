export const hostUrl = 'http://118.179.197.118:8080/geoserver/wms';

const def_center = [90.41607886403209, 23.79399061856948]
const def_zoom = 12
const def_projection = 'EPSG:4326'
export const def_view = {
    center: def_view,
    zoom: def_zoom,
    projection: def_projection,
}

export const storedLayers = {
    serverType: 'geoserver',
    crossOrigin: 'anonymous',
    layers: [
        {
            title: "Transportation",
            tiled: true,
            name: 'transportation_bus_route',
            customView: false,
        },
        {
            title: "Dncc Building",
            tiled: true,
            name: 'dncc_buildings',
            customView: true,
            center: def_center,

            zoom: 12.70,
            projection: 'EPSG:4326',
            maxZoom: 19.99,
            onclick: true,

        },
        {
            title: "2D Boundary",
            tiled: true,
            name: 'boundary_2d',
            customView: false,
        },
        {
            title: "Dncc Zone",
            tiled: true,
            name: 'dncc_zone_bd_fine',
            customView: false,
        },
        {
            title: "Dengue Test",
            tiled: true,
            name: 'dengue_test_center',
            customView: false,
        },
        {
            title: "Dengue Hotspot",
            tiled: true,
            name: 'dengue_hotspot',
            customView: false,
        }
    ]
}
