<template>
  <Loader v-if="loader" />
  <form @submit.prevent="updateColors(form)" class="mt-5">
    <label class="text-gray-700" for="header">Заголовок</label>
    <input
      v-model="form.header"
      id="header"
      type="text"
      class="w-full mt-3 mb-3 rounded-md focus:border-indigo-600"
    />
    <div class="grid grid-cols-3 grid-rows-4 grid-flow-col gap-3">
      <div
        class="h-30 border-2 rounded-lg"
        :class="[
          this.changesBlock === 'color1' ? 'border-red-500' : 'border-black'
        ]"
        @click="changesBlock = 'color1'"
        :style="{ background: form.color1 }"
      >
        Block1
      </div>
      <div
        class="h-30 border-2 rounded-lg"
        :class="[
          this.changesBlock === 'color2' ? 'border-red-500' : 'border-black'
        ]"
        @click="changesBlock = 'color2'"
        :style="{ background: form.color2 }"
      >
        Block2
      </div>
      <div
        class="h-30 border-2 rounded-lg"
        :class="[
          this.changesBlock === 'color3' ? 'border-red-500' : 'border-black'
        ]"
        @click="changesBlock = 'color3'"
        :style="{ background: form.color3 }"
      >
        Block3
      </div>
      <div
        class="h-30 border-2 rounded-lg"
        :class="[
          this.changesBlock === 'color4' ? 'border-red-500' : 'border-black'
        ]"
        @click="changesBlock = 'color4'"
        :style="{ background: form.color4 }"
      >
        Block4
      </div>
      <div class="row-span-4">
        <ColorPanel
          :id="changesBlock"
          :header="form.header"
          :color1="form.color1"
          :color2="form.color2"
          :color3="form.color3"
          :color4="form.color4"
          :color5="form.color5"
          :color6="form.color6"
          :color7="form.color7"
          :color8="form.color8"
          :handleChangeData="handleChangeData"
        />
      </div>
      <div
        class="h-30 border-2 rounded-lg"
        :class="[
          this.changesBlock === 'color5' ? 'border-red-500' : 'border-black'
        ]"
        @click="changesBlock = 'color5'"
        :style="{ background: form.color5 }"
      >
        Block5
      </div>
      <div
        class="h-30 border-2 rounded-lg"
        :class="[
          this.changesBlock === 'color6' ? 'border-red-500' : 'border-black'
        ]"
        @click="changesBlock = 'color6'"
        :style="{ background: form.color6 }"
      >
        Block6
      </div>
      <div
        class="h-30 border-2 rounded-lg"
        :class="[
          this.changesBlock === 'color7' ? 'border-red-500' : 'border-black'
        ]"
        @click="changesBlock = 'color7'"
        :style="{ background: form.color7 }"
      >
        Block7
      </div>
      <div
        class="h-30 border-2 rounded-lg"
        :class="[
          this.changesBlock === 'color8' ? 'border-red-500' : 'border-black'
        ]"
        @click="changesBlock = 'color8'"
        :style="{ background: form.color8 }"
      >
        Block8
      </div>
    </div>

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
import ColorPanel from "./ColorPanel";
import Loader from "@/assets/component/Loader";
import { FETCH_COLORS } from "@/store/actions.type";
import { UPDATE_COLORS } from "../../store/actions.type";

export default {
  mounted() {
    this.fetchColors();
  },
  data() {
    return {
      loader: true,
      form: {
        id: 0,
        header: "Какие-нибудь цвета",
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        color5: "",
        color6: "",
        color7: "",
        color8: ""
      },
      changesBlock: 0
    };
  },
  components: {
    ColorPanel,
    Loader
  },
  methods: {
    handleChangeData(data) {
      this.form.color1 = data[`color1`] ? data[`color1`] : this.form.color1;
      this.form.color2 = data[`color2`] ? data[`color2`] : this.form.color2;
      this.form.color3 = data[`color3`] ? data[`color3`] : this.form.color3;
      this.form.color4 = data[`color4`] ? data[`color4`] : this.form.color4;
      this.form.color5 = data[`color5`] ? data[`color5`] : this.form.color5;
      this.form.color6 = data[`color6`] ? data[`color6`] : this.form.color6;
      this.form.color7 = data[`color7`] ? data[`color7`] : this.form.color7;
      this.form.color8 = data[`color8`] ? data[`color8`] : this.form.color8;
    },
    fetchColors() {
      this.$store.dispatch(FETCH_COLORS, this.form).then(data => {
        console.log("dataFetch", data);
        if (data.length) {
          this.form.id = data[0]._id;
          this.form.header = data[0].header;
          this.form.color1 = data[0].color1;
          this.form.color2 = data[0].color2;
          this.form.color3 = data[0].color3;
          this.form.color4 = data[0].color4;
          this.form.color5 = data[0].color5;
          this.form.color6 = data[0].color6;
          this.form.color7 = data[0].color7;
          this.form.color8 = data[0].color8;
        }
        this.loader = false;
      });
    },
    updateColors(data) {
      this.$store.dispatch(UPDATE_COLORS, data).then(data => {
        this.message = data;
      });
    }
  }
};
</script>
