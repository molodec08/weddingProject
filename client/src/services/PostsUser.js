import api from "@/services/api";

export default {
  postUser(form) {
    return api().post("/auth/login", {
      email: form.email,
      password: form.password
    });
  }
};
