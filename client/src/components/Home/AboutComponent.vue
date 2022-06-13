<template>
  <section>
    <div class="container">
      <div class="about">
        <h2>{{ header }}</h2>
        <div class="invitation">
          <p class="desc" v-html="desc" />
          <img
            class="single_image"
            src="../../assets/img/micheile-henderson-g.jpg"
            alt="mr & mrs"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_DESCRIPTION } from "../../store/actions.type";

export default {
  mounted() {
    this.fetchDesc();
  },

  data() {
    return {
      title: "About"
    };
  },

  methods: {
    fetchDesc() {
      this.$store.dispatch(FETCH_DESCRIPTION, this.form);
    }
  },

  computed: {
    ...mapState({
      desc: state => state.desc.desc,
      header: state => state.desc.header
    })
  }
};
</script>

<style src="../../assets/component/Home/about.css" scoped></style>
