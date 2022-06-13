<template>
  <div>
    <ColorPicker
      theme="dark"
      :color="color"
      :sucker-hide="false"
      :sucker-canvas="suckerCanvas"
      @changeColor="changeColor"
      @openSucker="openSucker"
      :style="{ width: '400px' }"
    />
  </div>
</template>

<script>
import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

export default {
  components: {
    ColorPicker
  },
  props: [
    "id",
    "header",
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "handleChangeData"
  ],
  data() {
    return {
      color: "#59c7f9",
      suckerCanvas: null,
      suckerArea: [],
      isSucking: false,
      form: {
        header: this.header,
        color1: this.color1,
        color2: this.color2,
        color3: this.color3,
        color4: this.color4,
        color5: this.color5,
        color6: this.color6,
        color7: this.color7,
        color8: this.color8
      }
    };
  },
  methods: {
    changeColor(color) {
      const { r, g, b, a } = color.rgba;
      this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
      this.form[this.id] = color.hex;
      this.handleChangeData(this.form);
    },
    openSucker(isOpen) {
      if (isOpen) {
        // ... canvas be created
        // this.suckerCanvas = canvas
        // this.suckerArea = [x1, y1, x2, y2]
      } else {
        // this.suckerCanvas && this.suckerCanvas.remove
      }
    }
  }
};
</script>
