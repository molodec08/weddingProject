<template>
  <section>
    <div class="colors">
      <div class="container">
        <h2>{{ header }}</h2>
        <div class="colors-block">
          <div class="color1" :style="{ background: color1 }" />
          <div class="color2" :style="{ background: color2 }" />
          <div class="color3" :style="{ background: color3 }" />
          <div class="color4" :style="{ background: color4 }" />
          <img
            class="single_image"
            src="../../assets/img/colors-block.jpg"
            alt="mr & mrs"
          />
          <div class="color5" :style="{ background: color5 }" />
          <div class="color6" :style="{ background: color6 }" />
          <div class="color7" :style="{ background: color7 }" />
          <div class="color8" :style="{ background: color8 }" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FETCH_COLORS } from "../../store/actions.type";
import { mapState } from "vuex";

export default {
  data() {
    return {
      header: "colors",
      color1: "",
      color2: "",
      color3: "",
      color4: "",
      color5: "",
      color6: "",
      color7: "",
      color8: ""
    };
  },
  mounted() {
    this.fetchGuests();
  },
  methods: {
    fetchGuests() {
      this.$store.dispatch(FETCH_COLORS, this.form).then(data => {
        console.log("dataFetch", data);
        if (data.length) {
          this.id = data[0]._id;
          this.header = data[0].header;
          this.color1 = data[0].color1;
          this.color2 = data[0].color2;
          this.color3 = data[0].color3;
          this.color4 = data[0].color4;
          this.color5 = data[0].color5;
          this.color6 = data[0].color6;
          this.color7 = data[0].color7;
          this.color8 = data[0].color8;
        }
        this.loader = false;
      });
    }
  },
  computed: {
    ...mapState({
      guests: state => state.guests.guestsActive
    })
  }
};
</script>

<style src="../../assets/component/Home/colors.css"></style>
