<template>
  <div class="container max-w-7xl px-6 py-8">
    <Loader v-if="loader" />
    <div class="flex items-center justify-between">
      <h4 class="text-gray-600">Редактирование блока описания свадьбы</h4>
      <router-link
        to="/revision"
        class="px-3 py-2 bg-gray-800 rounded-md text-white font-medium tracking-wide hover:bg-gray-600"
        aria-current="page"
      >
        Редактирование изменений
      </router-link>
    </div>

    <TextEditor :header="header" :desc="desc" v-if="!loader" />
  </div>
</template>

<script>
import { FETCH_DESCRIPTION } from "@/store/actions.type";
import { mapState } from "vuex";
import TextEditor from "@/assets/component/TextEditor";
import Loader from "@/assets/component/Loader";

export default {
  mounted() {
    this.fetchDesc();
  },
  data() {
    return {
      loader: true,
      form: { header: "", desc: "" }
    };
  },
  methods: {
    fetchDesc() {
      this.$store.dispatch(FETCH_DESCRIPTION, this.form).then(() => {
        this.loader = false;
      });
    }
  },
  computed: {
    ...mapState({
      desc: state => state.desc.desc,
      header: state => state.desc.header
    })
  },
  components: {
    TextEditor,
    Loader
  }
};
</script>
