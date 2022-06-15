<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="container">
        <div class="header__content">
          <h1>{{ title }}</h1>
          <p>
            {{ displayDays }} {{ displayNameDay }} {{ displayHours }}
            {{ displayNameHours }} {{ displayMinutes }}
            {{ displayNameMinutes }} {{ displaySeconds }}
            {{ displayNameSeconds }}
          </p>
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
      title: "Cвадьба Юрия и Дарьи через",
      date: "23 июля 2022",
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      displayNameDay: "",
      displayNameHours: "",
      displayNameMinutes: "",
      displayNameSeconds: "",
      loaded: false,
      Days: new Array(
        "дней",
        "день",
        "дня",
        "дня",
        "дня",
        "дней",
        "дней",
        "дней",
        "дней",
        "дней"
      ),
      Hours: new Array(
        "часов",
        "час",
        "часа",
        "часа",
        "часа",
        "часов",
        "часов",
        "часов",
        "часов",
        "часов"
      ),
      Minutes: new Array(
        "минут",
        "минуту",
        "минуты",
        "минуты",
        "минуты",
        "минут",
        "минут",
        "минут",
        "минут",
        "минут"
      ),
      Seconds: new Array(
        "секунд",
        "секунду",
        "секунды",
        "секунды",
        "секунды",
        "секунд",
        "секунд",
        "секунд",
        "секунд",
        "секунд"
      )
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNumb(num) {
      return num < 10 ? `0${num}` : num;
    },
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2022, 6, 23, 16, 30, 0, 0);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = this.formatNumb(minutes);
        this.displaySeconds = this.formatNumb(seconds);
        this.displayHours = this.formatNumb(hours);
        this.displayDays = this.formatNumb(days);
        this.loaded = true;
        this.displayNameDay = this.Days[
          this.displayDays % 100 >= 10 && this.displayDays % 100 <= 19
            ? 0
            : this.displayDays % 10
        ];
        this.displayNameHours = this.Hours[
          this.displayHours % 100 >= 11 && this.displayHours % 100 <= 19
            ? 0
            : this.displayHours % 10
        ];
        this.displayNameMinutes = this.Minutes[
          this.displayMinutes % 100 >= 11 && this.displayMinutes % 100 <= 19
            ? 0
            : this.displayMinutes % 10
        ];
        this.displayNameSeconds = this.Seconds[
          this.displaySeconds % 100 >= 11 && this.displaySeconds % 100 <= 19
            ? 0
            : this.displaySeconds % 10
        ];
      }, 1000);
    }
  }
};
</script>

<style src="../../assets/component/Home/header.css" scoped></style>
