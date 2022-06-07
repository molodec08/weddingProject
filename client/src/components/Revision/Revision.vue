<template>revision</template>
<script>
import { FETCH_DESCRIPTIONS } from "@/store/actions.type";

export default {
  mounted() {
    this.fetchAllDesc();
  },
  methods: {
    fetchAllDesc() {
      this.$store.dispatch(FETCH_DESCRIPTIONS, this.form).then(data => {
        console.log(data);
        this.loader = false;
      });
    }
  }
};
</script>
