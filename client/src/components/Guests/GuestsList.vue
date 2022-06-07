<template>
  <div class="flex flex-col mt-6">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-8 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Имя
              </th>
              <th
                class="px-8 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Профессия
              </th>
              <th
                class="px-8 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Статус
              </th>
              <th class="px-8 py-3 border-b border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr v-for="g in guests" :key="g._id">
              <td class="px-8 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="g.img" alt />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ g.name }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ g.desc }}
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-8 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">
                  {{ g.desc }}
                </div>
              </td>

              <td class="px-8 py-4 whitespace-nowrap border-b border-gray-200">
                <span
                  :class="{
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800':
                      g.active,
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white': !g.active
                  }"
                  >{{ g.active }}</span
                >
              </td>

              <td
                class="px-8 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
              >
                <router-link
                  v-slot="{ navigate }"
                  custom
                  :to="{ name: 'Guest', params: { id: g._id } }"
                >
                  <button
                    @click="navigate"
                    class="px-2 fill-current text-green-500 material-icons"
                  >
                    Edit
                  </button>
                </router-link>
                <button
                  class="px-2 fill-current text-red-500 material-icons"
                  @click="deleteGuest(g._id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { DELETE_GUEST, FETCH_GUESTS } from "../../store/actions.type";
import { mapState, mapGetters } from "vuex";

export default {
  mounted() {
    this.fetchGuests();
  },
  computed: {
    ...mapState({
      guests: state => state.guests.guests
    }),
    ...mapGetters(["guests"])
  },
  methods: {
    fetchGuests() {
      this.$store.dispatch(FETCH_GUESTS, this.guests);
    },
    deleteGuest(id) {
      this.$store.dispatch(DELETE_GUEST, id);
    }
  }
};
</script>
