import store from "../store";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import AdminPanel from "../views/AdminPanel";
import DescriptionEvent from "../views/DescriptionEvent";
import Guests from "../views/Guests";
import UpdateGuest from "../components/Guests/UpdateGuest";
import Revision from "../components/Revision/Revision";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { auth: false }
    },
    {
      path: "/admin",
      name: "Login",
      component: Login,
      meta: { auth: false }
    },
    {
      path: "/admin-panel",
      name: "AdminPanel",
      component: AdminPanel,
      meta: { auth: true },
      children: [
        {
          path: "/description-event",
          name: "DescriptionEvent",
          component: DescriptionEvent,
          meta: { auth: true }
        },
        {
          path: "/revision",
          name: "Revision",
          component: Revision,
          meta: { auth: true }
        },
        {
          path: "/guests",
          name: "Guests",
          component: Guests,
          meta: { auth: true }
        },
        {
          path: "/guests/:id",
          name: "Guest",
          component: UpdateGuest,
          meta: { auth: true }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;

  if (requireAuth && store.getters.isAuthenticated) {
    next();
  } else if (requireAuth && !store.getters.isAuthenticated) {
    next("/admin");
  } else if (
    !requireAuth &&
    store.getters.isAuthenticated &&
    to.name !== "Home"
  ) {
    next("/admin-panel");
  } else {
    next();
  }
});

export default router;
