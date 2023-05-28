<script>
    // @ts-nocheck

    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";

    const mapConfig = {
        location: { lat: 52.160858, lng: -7.15242 },
        zoom: 7,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("location-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
        const locations = await placemarkService.getLocations();
        console.log("MAP LOCATIONS FROM API", locations);
        if (locations) {
            locations.forEach((location) => {
                addLocationMarker(map,location);

            });
        } else {
            console.log("error, location poi's not loaded", locations);
        }
    });

    function addLocationMarker(map, location) {
        const locationStr = `${location.name}`;
        map.addMarker({lat: location.latitude, lng: location.longitude}, locationStr);
    }
</script>

<div class="box" id="location-map" style="height:50vh" />