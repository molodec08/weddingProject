<template>
  <div
    class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center"
    @click="$emit('close')"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>
    <div
      @click.stop=""
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="modal-content pt-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p v-if="title" class="text-2xl font-bold">{{ title }}</p>
          <div class="modal-close cursor-pointer z-50" @click="$emit('close')">
            <svg
              class="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    title: {
      type: String
    }
  }
};
</script>
