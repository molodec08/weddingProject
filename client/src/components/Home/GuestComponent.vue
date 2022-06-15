<template>
  <section>
    <div class="guests">
      <div class="container">
        <h2>{{ title }}</h2>
        <div class="guests-list">
          <div v-for="guest in guests" :key="guest.id" class="item">
            <img :src="guest.img" alt="item1" />
            <h3>{{ guest.name }}</h3>
            <p>{{ guest.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FETCH_GUESTS } from "../../store/actions.type";
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "Кого мы ждём:",
      guestsList: []
    };
  },
  mounted() {
    this.fetchGuests();
  },
  methods: {
    fetchGuests() {
      this.$store.dispatch(FETCH_GUESTS, this.guests);
    }
  },
  computed: {
    ...mapState({
      guests: state => state.guests.guestsActive
    })
  }
};
</script>

<style src="../../assets/component/Home/guests.css"></style>
