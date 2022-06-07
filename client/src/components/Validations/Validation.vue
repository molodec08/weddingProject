<template>
  <div
    :class="{
      'bg-red-500 border-red-100': message.status !== 201,
      'border-gray-100 bg-green-500': message.status === 201
    }"
    class="transition duration-150 ease-in-out fixed top-0 right-0 bg-white my-2 mx-4 rounded-md px-6"
  >
    <div class="flex items-center py-4">
      <div class="ml-5 mr-5">
        <h1 class="text-lg font-bold text-gray-200">
          {{ message.status === 201 ? "Успех!" : "Ошибка!" }}
        </h1>
        <p class="text-gray-200 my-0">
          {{ message.data.message }}
        </p>
      </div>
      <div>
        <button
          type="button"
          @click="closeValidateWindow"
          class=" text-yellow-100"
        >
          <span class="text-3xl">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => this.closeValidateWindow(), 5000);
  },
  props: ["message"],
  methods: {
    closeValidateWindow() {
      this.$emit("close");
    }
  }
};
</script>
