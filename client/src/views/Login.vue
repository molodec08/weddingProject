<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <span class="text-gray-700 font-semibold text-2xl">
          Wedding Admin Panel
        </span>
      </div>

      <form class="mt-4" @submit.prevent="login(form)">
        <label class="block">
          <span class="text-gray-700 text-sm">Логин</span>
          <input
            type="email"
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="form.email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Пароль</span>
          <input
            type="password"
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="form.password"
          />
        </label>

        <div
          v-if="errors"
          class="mt-3 bg-red-200 relative text-red-500 py-3 px-3 rounded-lg"
        >
          {{ errors }}
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LOGIN } from "../store/actions.type";
import { mapState } from "vuex";

export default {
  data() {
    return {
      form: { email: "dashka@durashka.ru", password: "Dashka@durashka" }
    };
  },
  methods: {
    login(form) {
      this.$store
        .dispatch(LOGIN, { form })
        .then(() => this.$router.push({ name: "AdminPanel" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
