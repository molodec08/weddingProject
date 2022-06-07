<template>
  <div class="container max-w-7xl px-6 py-8">
    <div class="flex justify-between">
      <h4 class="text-gray-600">Таблица гостей</h4>
      <button
        @click="openModal = true"
        class="px-3 py-2 bg-gray-800 rounded-md text-white font-medium tracking-wide hover:bg-gray-600"
      >
        Добавить
      </button>
    </div>

    <GuestsList />

    <teleport to="body">
      <modal-template
        v-if="openModal"
        title="Добавить гостя"
        @close="openModal = false"
      >
        <add-guest @close="openModal = false" />
      </modal-template>
    </teleport>
  </div>
</template>

<script>
import ModalTemplate from "../components/Guests/ModalTemplate";
import AddGuest from "../components/Guests/AddGuest";
import GuestsList from "../components/Guests/GuestsList";

export default {
  data() {
    return {
      openModal: false
    };
  },
  components: {
    AddGuest,
    ModalTemplate,
    GuestsList
  }
};
</script>
