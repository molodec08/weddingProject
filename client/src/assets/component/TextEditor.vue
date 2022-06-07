<template>
  <transition name="fade">
    <Validation
      v-if="successReq"
      @close="successReq = false"
      :message="message"
    />
  </transition>
  <form @submit.prevent="addDesc(form)" class="mt-5">
    <label class="text-gray-700" for="header">Заголовок</label>
    <input
      v-model="form.header"
      id="header"
      type="text"
      class="w-full mt-3 mb-3 rounded-md focus:border-indigo-600"
    />
    <label class="text-gray-700">Описание</label>
    <QuillEditor
      v-model:content="form.desc"
      contentType="html"
      theme="snow"
      toolbar="minimal"
    />
    <div class="flex flex-start mt-5">
      <button
        type="submit"
        class="px-3 py-2 bg-gray-800 rounded-md text-white font-medium tracking-wide hover:bg-gray-600"
      >
        Сохранить
      </button>
    </div>
  </form>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Validation from "@/components/Validations/Validation";
import { UPDATE_DESCRIPTION } from "@/store/actions.type";

export default {
  components: {
    QuillEditor,
    Validation
  },
  props: ["header", "desc"],
  data() {
    return {
      form: { header: this.header, desc: this.desc },
      successReq: false,
      message: ""
    };
  },
  methods: {
    addDesc(form) {
      this.$store.dispatch(UPDATE_DESCRIPTION, form).then(data => {
        this.message = data;
        this.successReq = true;
      });
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
