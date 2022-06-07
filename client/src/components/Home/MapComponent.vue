<template>
  <div class="map-box">
    <yandex-map
      zoom="16"
      style="width: 100%; max-width: 100%; height: 56vh;"
      :coords="coords"
    >
      <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
    </yandex-map>
  </div>
</template>

<script>
/* eslint-disable */
  import { yandexMap, ymapMarker } from "vue-yandex-maps";
  export default {
    components: { yandexMap, ymapMarker },
    data() {
      return {
        coords: [54.567513, 36.087499],
      };
    },
    watch: {
      selectedSurfaces() {
        this.makeSurfaceSelected(
                this.selectedSurfaces[this.selectedSurfaces.length - 1].SURFACEID
        );
      }
    },
    methods: {
      selectedBillboard(billboard) {
        let data = {
          SURFACEID: billboard.surface_id,
          NETWORKID: billboard.networkid
        };
        return data;
      },
      makeSurfaceSelected: function(surface_id) {
        this.surfaces.forEach(surface => {
          if (surface.surface_id === surface_id) {
            surface.selected = true;
          }
        });
      },
      mapBalloon: function(billboard, index) {
        return `
      <div><h1>${billboard.id}</h1>
      <p><strong>City</strong>: ${billboard.city}</p>
      <p><strong>Type</strong>: ${billboard.type}</p>
      <p><strong>Side</strong>: ${billboard.side}</p>
      <p><strong>Address</strong>: ${billboard.address}</p>
      </div>
      `;
      }
    }
  };
</script>

<style src="../../assets/component/Home/map.css" scoped></style>
