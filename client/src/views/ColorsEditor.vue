<template>
  <div class="container max-w-7xl px-6 py-8">
    <h4 class="text-gray-600">Редактор цветов</h4>
    <ColorEditor :form="form" />
  </div>
</template>

<script>
import ColorEditor from "../components/ColorEditor/ColorEditor";

export default {
  mounted() {},
  components: {
    ColorEditor
  },
  data() {
    return {
      loader: true,
      form: {
        header: "",
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        color5: "",
        color6: "",
        color7: "",
        color8: ""
      }
    };
  }
};
</script>
