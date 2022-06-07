import { createStore } from "vuex";

import auth from "./modules/auth.module";
import guests from "./modules/guests.module";
import desc from "./modules/decs.module";

export default createStore({
  modules: { auth, guests, desc }
});
