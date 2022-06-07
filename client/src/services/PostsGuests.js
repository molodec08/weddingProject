import api from "@/services/api";

export default {
  fetchGuests() {
    return api().get("guests");
  }
};
