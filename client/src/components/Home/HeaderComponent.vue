<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="container">
        <div class="header__content">
          <h1>{{ title }}</h1>
          <p>{{ date }}</p>
        </div>
      </div>
    </div>
    <div class="img-block">
      <img src="../../assets/img/img-1.png" alt="bg-img-flowers" />
    </div>
    <div class="img-block">
      <img
        class="round-img"
        src="../../assets/img/min-header-img.jpg"
        alt="bg-img-flowers"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Свадебная вечеринОчка",
      date: "23 июля 2021"
    };
  }
};
</script>

<style src="../../assets/component/Home/header.css" scoped></style>
