<template>
  <HeaderComponent />
  <AboutComponent />
  <GuestComponent />
  <MapComponent />
</template>

<script>
import HeaderComponent from "../components/Home/HeaderComponent";
import AboutComponent from "../components/Home/AboutComponent";
import GuestComponent from "../components/Home/GuestComponent";
import MapComponent from "../components/Home/MapComponent";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    AboutComponent,
    GuestComponent,
    MapComponent
  }
};
</script>

<style src="../assets/reset.css"></style>
