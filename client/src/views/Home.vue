<template>
  <HeaderComponent />
  <AboutComponent />
  <ColorsComponent />
  <GuestComponent />
  <MapComponent />
</template>

<script>
import HeaderComponent from "../components/Home/HeaderComponent";
import AboutComponent from "../components/Home/AboutComponent";
import GuestComponent from "../components/Home/GuestComponent";
import ColorsComponent from "../components/Home/ColorsComponent";
import MapComponent from "../components/Home/MapComponent";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    AboutComponent,
    GuestComponent,
    ColorsComponent,
    MapComponent
  }
};
</script>

<style src="../assets/reset.css"></style>
