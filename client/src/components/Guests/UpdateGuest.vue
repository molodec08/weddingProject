<template>
  <div class="container max-w-7xl px-6 py-8">
    <form @submit.prevent="onSubmit(form)" class="flex flex-col pb-3">
      <div class="flex flex-col px-6 mt-3">
        <label class="text-gray-700" for="fio">ФИО</label>
        <input type="text" id="fio" v-model="form.name" :class="classInput" />
      </div>

      <div class="flex flex-col px-6 mt-3">
        <label class="text-gray-700" for="phone">Профессия</label>
        <input type="text" id="phone" v-model="form.desc" :class="classInput" />
      </div>

      <div class="flex flex-col px-6 mt-3">
        <label class="text-gray-700">Фото</label>
        <img :src="form.img" alt="item1" class="w-1/4" />
        <label class="text-gray-700" for="photo">Изменить</label>
        <input
          @change="fileUpload"
          ref="file"
          type="file"
          id="photo"
          :class="classInput"
        />
      </div>

      <div class="flex flex-col px-6 mt-3">
        <label class="text-gray-700" for="status">Статус</label>
        <select id="status" v-model="form.active" :class="classInput">
          <option value="false">Выключен</option>
          <option value="true">Включён</option>
        </select>
      </div>
      <div class="flex flex-end mt-3 px-6">
        <button
          @click="$emit('close')"
          class="px-3 py-2 bg-gray-800 rounded-md text-white font-medium tracking-wide hover:bg-gray-600"
        >
          Изменить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  FETCH_GUEST,
  FILE_UPLOAD,
  UPDATE_GUEST
} from "../../store/actions.type";
import { useRoute } from "vue-router";

export default {
  mounted() {
    this.fetchGuest();
  },
  data() {
    return {
      formData: new FormData(),
      classInput: "w-full mt-2 rounded-md focus:border-indigo-600",
      form: { userId: "", name: "", desc: "", img: "", active: "" }
    };
  },
  methods: {
    fetchGuest() {
      const route = useRoute();
      this.form.userId = route.params.id;
      this.$store.dispatch(FETCH_GUEST, this.form.userId).then(data => {
        this.form.name = data.data.name;
        this.form.desc = data.data.desc;
        this.form.img = data.data.img;
        this.form.active = data.data.active;
      });
    },
    fileUpload() {
      let file = this.$refs.file.files[0];
      this.formData.append("file", file);
      this.$store
        .dispatch(FILE_UPLOAD, this.formData)
        .then(data => (this.form.img = data));
    },
    onSubmit(form) {
      this.$store.dispatch(UPDATE_GUEST, form);
      this.$router.push({ name: "Guests" });
    }
  }
};
</script>
